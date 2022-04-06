<template>
	<u-popup 
		bgColor="transparent"
		:show="popWindowStatus"
		v-bind="overlayStyle"
		mode="center"
		:transitionStylePatch="{alignItems: 'flex-start', justifyContent: 'flex-start', transformOrigin: indicatorPos.split('-').join(' ')}"
		zoom
		:duration="340"
		@outTap="outTap"
		@beforeAnimationEnter="$nextTick(() => measure())"
		@close="onPopWindowClose" 
		@open="onPopWindowOpen">
		<view
			id="menu-container"
			class="p-popup-menu__wrapper"
			:style="[wrapperStyle]">
			<!-- 安卓机上overflow不显示,看不到小三角指示器 -->
			<view 
				class="p-popup-menu__wrapper__indicator"
				:style="{backgroundColor: bgColor}"
				:class="['p-popup-menu__wrapper__indicator--' + indicatorPos]"></view>
			<slot>
					
			</slot>
		
		</view>
	</u-popup>
</template>

<script>
	
	function clamp(x, left, right) {
		return Math.min(Math.max(x, left), right)
	}
	
	export default { 
		name: 'p-popup-menu',
		props: {
			mask: [Boolean, Object],
			indicatorPos: {
				type: String,
				// BUG: weex animation在安卓机上执行动画的transformOrigin必须right/left在前,top/bottom在后
				default: 'right-top'
			},
			bgColor: {
				type: String,
				default: '#ffffff'
			},
			safeAreaPadding: {
				type: Array,
				default: () => [0, 0]
			},
		},
		data() {
			const { safeArea } = uni.getSystemInfoSync() 
			// console.log(this.$options.name, uni.getSystemInfoSync())
			
			return {
				measured: false,
				popWindowStatus: false,
				anchorCoord: {left: 0, top: 0},
				safeArea,
				menuDimension: {
					width: 0,
					height: 0,
				}
			}
		},
		computed: {
			overlayStyle() {
				return this.mask ? {
					'overlay-style': this.mask.style ? this.mask.style : 
					{'background-color': `rgba(255, 0, 0, ${ this.mask.opacity ? this.mask.opacity : .5})`},
				} : {
					overlay: false
				}				
			},
			wrapperStyle() {
				const { safeArea, safeAreaPadding, menuDimension} = this
				
				const style = {
					backgroundColor: this.bgColor,
					left: `${clamp(this.anchorCoord.left, safeArea.left + safeAreaPadding[0], safeArea.right - menuDimension.width - safeAreaPadding[0])}px`,
					top: `${clamp(this.anchorCoord.top, safeArea.top + safeAreaPadding[1], safeArea.bottom - menuDimension.height- safeAreaPadding[1])}px`,
				}
				return style
			}
		},
		methods: {
			show(e) {
				if(e?.detail) {
					const {x, y} = e.detail
					Object.assign(this.anchorCoord, {left: x, top: y})
					this.popWindowStatus = true
				}				
			},
			outTap(overlayClose) {
				console.log(overlayClose)
			},
			hide() {
				this.popWindowStatus = false
			},
			onPopWindowOpen() {
			  // console.log('popWindowOpen')
			},
			onPopWindowClose() {
				this.hide()
			},
			measure() {				
				if(!this.measured) {
					const query = uni.createSelectorQuery().in(this)
					// class选择器不能正常工作
					query.select('#menu-container').boundingClientRect(({width, height}) => {
						Object.assign(this.menuDimension, {width, height}) 
						this.measured = true
					}).exec();
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.p-popup-menu__wrapper {
		position: absolute;
		border-radius: 4px;
		
		&__indicator {
			position: absolute;
			width: 8px;
			height: 8px;
			transform: rotate(45deg);
			border-radius: 1px;
			
			&--left-top{
				top: -4px;
				left: 8px;
			}
			
			&--right-top{
				top: -4px;
				right: 8px;
			}
			
			&--left-bottom{
				bottom: -4px;
				left: 8px;
			}
			
			&--right-bottom{
				bottom: -4px;
				right: 8px;
			}
		}
	}
</style>
