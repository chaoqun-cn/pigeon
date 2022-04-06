<template>
	<view class="u-index-list">
		<!-- #ifdef APP-NVUE -->
		<list
			:scrollTop="scrollTop"
			enable-back-to-top
			:offset-accuracy="1"
			:style="{
				height: $u.addUnit(scrollViewHeight, 'px')
			}"
			@scroll="scrollHandler"
			ref="uList">
			<cell ref="header">
				<slot name="header">
					<text>Header</text>
				</slot>
			</cell>
			<slot />
			<cell v-if="$slots.footer">
				<view :style="{
					height: $u.addUnit(footerH, 'px')
				}">
					<slot name="footer" />
				</view>
			</cell>
		</list>
		<!-- #endif -->
		<!-- #ifndef APP-NVUE -->
		<scroll-view
			:scrollTop="scrollTop"
			:scrollIntoView="scrollIntoView"
			:offset-accuracy="1"
			:style="{
				height: $u.addUnit(scrollViewHeight, 'px')
			}"
			scroll-y
			@scroll="scrollHandler"
			ref="uList">
			<view v-if="$slots.header">
				<slot name="header" />
			</view>
			<slot />
			<view v-if="$slots.footer">
				<slot name="footer" />
			</view>
		</scroll-view>
		<!-- #endif -->
		<view
			class="u-index-list__letter"
			@touchstart="onIndexBarTouchStart"
			@touchmove.stop.prevent="onIndexBarTouchMove"
			@touchend.stop.prevent="onIndexBarTouchEnd"
			@touchcancel.stop.prevent="onIndexBarTouchEnd">
			
			<view 
				ref="index-bar"
				id="index-bar">

				<view
					class="u-index-list__letter__item"
					v-for="(item, index) in uIndexList"
					:key="index"
					:data-index="index"
					:style="{
						backgroundColor: activeIndex === index ? activeColor : 'transparent'
					}">
					<text
						class="u-index-list__letter__item__index"
						:style="{color: activeIndex === index ? '#fff' : inactiveColor}">{{ item }}</text>
				</view>

				<u-transition
					ref="u-index-list__indicator" 
					mode="fade"
					:show="touching"
					:customStyle="{
						position: 'absolute',
						right: '50px',
						top: $u.addUnit(indicatorTop, 'px'),
						zIndex: 3
					}">
					<view			
						class="u-index-list__indicator"
						:class="['u-index-list__indicator--show']"
						:style="{
							height: $u.addUnit(indicatorHeight, 'px'),
							width: $u.addUnit(indicatorHeight, 'px'),
							padding: $u.addUnit(indicatorPadding, 'px')
						}">
						<text class="u-index-list__indicator__text">{{ uIndexList[activeIndex] }}</text>
					</view>
				</u-transition>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	const indexList = () => {
		const indexList = [];
		const charCodeOfA = 'A'.charCodeAt(0);
		for (let i = 0; i < 26; i++) {
			indexList.push(String.fromCharCode(charCodeOfA + i));
		}
		return indexList;
	}
	import props from './props.js';
	// #ifdef APP-NVUE
	// 由于weex为阿里的KPI业绩考核的产物，所以不支持百分比单位，这里需要通过dom查询组件的宽度
	const dom = uni.requireNativePlugin('dom')
	// #endif
	/**
	 * IndexList 索引列表
	 * @description  通过折叠面板收纳内容区域
	 * @tutorial https://uviewui.com/components/indexList.html
	 * @property {String}			inactiveColor	右边锚点非激活的颜色 ( 默认 '#606266' )
	 * @property {String}			activeColor		右边锚点激活的颜色 ( 默认 '#5677fc' )
	 * @property {Array}			indexList		索引字符列表，数组形式
	 * @property {Boolean}			sticky			是否开启锚点自动吸顶 ( 默认 true )
	 * @property {String | Number}	customNavHeight	自定义导航栏的高度 ( 默认 0 )
	 * */ 
	export default {
		name: 'u-index-list',
		mixins: [uni.$u.mpMixin, uni.$u.mixin, props],
		// #ifdef MP-WEIXIN
		// 将自定义节点设置成虚拟的，更加接近Vue组件的表现，能更好的使用flex属性
		options: {
			virtualHost: true
		},
		// #endif
		data() {
			return {
				indexBar: {},
				touchPointY: -1,
				activeIndex: -1,
				touching: false,
				
				indicatorHeight: 50,
				indicatorPadding: 16,
				footerH: 20,
				
				// 滚动条顶部top值
				scrollTop: 0,
				// scroll-view的高度
				scrollViewHeight: 0,
				// 系统信息
				sys: uni.$u.sys(),
				scrolling: false,
				scrollIntoView: '',
			}
		},
		computed: {
			uIndexList() {
				return this.indexList.length ? this.indexList : indexList()
			},	
			indicatorTop() {
				const { indexBar: { top, letterH }, activeIndex, indicatorHeight } = this
				return (letterH * activeIndex + (letterH - indicatorHeight) / 2)			
			}
		},
		watch: {
			touchPointY(pointY) {
				this.queryRect('index-bar').then(size => {
					const { top, bottom, height } = size
					this.indexBar = {
						top,
						height,
						letterH: height / this.uIndexList.length
					}
					
					let touchIndex
					if (pointY < top) {
						touchIndex = 0
					} else if (pointY >= bottom) {
						touchIndex = this.uIndexList.length - 1
					} else {
						touchIndex = Math.round((pointY - top) / this.indexBar.letterH);
					}

					this.activeAndAnchorForTouch(touchIndex)
				})
			}
		},
		created() {
			this.children = []
			this.anchors = []
			this.init()
		},
		mounted() {
			this.requestLayout()
		},
		methods: {
			init() {
				this.scrollViewHeight = this.sys.safeArea.height - (this.customNavHeight || 44)
			},
			setSpecialEffects(args) {
			    if (this.$refs['ulist']) {
			        this.$refs['ulist'].setSpecialEffects(args);
			    }
			},
			requestLayout() {
				// #ifdef APP-NVUE
				this.queryRect('header').then(header => {
					this.children.reduce((ac, cv, index) => {
							cv.top = ac
							return ac + cv.height + this.anchors[index].height
						}, header.height)
					this.footerH = this.scrollViewHeight - this.children[this.children.length - 1].height
				})
				// #endif
			},
			onIndexBarTouchStart(e) {
				// console.log('onIndexBarTouchStart', e)
				this.touching = true
				this.touchPointY = e.changedTouches[0].pageY
			},
			onIndexBarTouchMove(e) {
				// console.log('onIndexBarTouchMove', e)
				if (!this.touching) {
					this.touching = true
				}
				this.touchPointY = e.changedTouches[0].pageY
			},
			onIndexBarTouchEnd(e) {
				uni.$u.sleep(300).then(() => {
					this.touching = false
				})
			},
			// 设置各项由触摸而导致变化的值
			activeAndAnchorForTouch(currentIndex) {
				// 如果偏移量太小，前后得出的会是同一个索引字母，为了防抖，进行返回
				if (currentIndex === this.activeIndex) return
				this.activeIndex = currentIndex
				// #ifndef APP-NVUE || MP-WEIXIN
				// 在非nvue中，由于anchor和item都在u-index-item中，所以需要scroll-view对index-item进行偏移
				this.scrollIntoView = `u-index-item-${this.uIndexList[currentIndex].charCodeAt(0)}`
				// #endif
				// #ifdef MP-WEIXIN
				// 微信小程序下，scroll-view的scroll-into-view属性无法对slot中的内容的id生效，只能通过设置scrollTop的形式去移动滚动条
				this.scrollTop = this.children[currentIndex].top
				// #endif
				// #ifdef APP-NVUE
				// 在nvue中，由于cell和header为同级元素，所以实际是需要对header(anchor)进行偏移
				const anchor = `u-index-anchor-${this.uIndexList[currentIndex]}`
				dom.scrollToElement(this.anchors[currentIndex].$refs[anchor], {
					offset: 0,
					animated: false
				})
				// #endif
			},
			queryRect(el) {
				return new Promise(resolve => {
					// #ifndef APP-NVUE
					this.$uGetRect(`#${el}`).then(size => {
						resolve(size)
					})
					// #endif
			
					// #ifdef APP-NVUE
					const ref = this.$refs[el]
					dom.getComponentRect(ref, res => {
						resolve(res.size)
					})
					// #endif
				})
			},
			// scroll-view的滚动事件
			async scrollHandler(e) {
				if (this.touching || this.scrolling) return
				// 每过一定时间取样一次，减少资源损耗以及可能带来的卡顿
				this.scrolling = true
				uni.$u.sleep(100).then(() => {
					this.scrolling = false
				})
				
				let scrollTop = 0				
				// #ifdef APP-NVUE
				scrollTop = Math.abs(e.contentOffset.y)
				// #endif
				// #ifndef APP-NVUE
				scrollTop = e.detail.scrollTop
				// #endif
				
				const children = this.children
				const len = children.length

				for (let i = 0; i < len; i++) {
					const item = children[i],
						nextItem = children[i + 1]
					// 如果滚动条高度小于第一个item的top值，此时无需设置任意字母为高亮
					if (scrollTop < children[0].top || scrollTop >= children[len - 1].top + children[len - 1].height) {
						this.activeIndex = -1
						break
					} else if (!nextItem || (scrollTop >= item.top && scrollTop < nextItem.top)) {
						this.activeIndex = i
						break
					}
				}
			},
		},
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/components.scss";

	.u-index-list {
		position: relative;

		&__letter {
			@include flex(column);
			justify-content: center;
			align-items: center;
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			z-index: 3;
			padding: 6px;

			&__item {
				width: 16px;
				height: 16px;
				border-radius: 100px;
				margin: 1px 0;
				@include flex;
				align-items: center;
				justify-content: center;

				&--active {
					background-color: $u-primary;
				}

				&__index {
					font-size: 12px;
					text-align: center;
					line-height: 12px;
				}
			}
		}

		&__indicator {
			border-radius: 100px 100px 0 100px;
			text-align: center;
			color: #ffffff;
			background-color: #13d6fb;
			transform: rotate(-45deg);
			@include flex;
			justify-content: center;
			align-items: center;

			&__text {
				font-size: 35rpx;
				line-height: 35rpx;
				font-weight: bold;
				color: #fff;
				transform: rotate(45deg);
				text-align: center;
			}
		}
	}
</style>
