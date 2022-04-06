<template>
	<u-index-list
		ref="uil-ref"
		:index-list="indexList">
		<template v-slot:header>
			<view></view>
		</template>
		
		<template v-for="(item, index) in itemArr">
			<!-- #ifdef APP-NVUE -->
			<u-index-anchor :text="indexList[index]" bgColor="#fff" color="#000" :size="25"></u-index-anchor>
			<!-- #endif -->
			<u-index-item>
				<!-- #ifndef APP-NVUE -->
				<u-index-anchor :text="indexList[index]" bgColor="#fff" color="#000" :size="25"></u-index-anchor>
				<!-- #endif -->
				<template v-for="(cell, index) in item">
					<p-cell :dataSource="cell"></p-cell>
				</template>
			</u-index-item>
		</template>
		
		<template v-slot:footer>
			<view>
				<text>共3个好友</text>
			</view>
		</template>
	</u-index-list>
</template>

<script>
	const builtIndexList = () => {
		const indexList = [];
		const charCodeOfA = 'A'.charCodeAt(0);
		for (let i = 0; i < 26; i++) {
			indexList.push(String.fromCharCode(charCodeOfA + i));
		}
		return indexList;
	}
	
	export default {
		data() {
			return {
				indexList: builtIndexList(),
				itemArr: [],
				urls: [
					'https://cdn.uviewui.com/uview/album/1.jpg',
					'https://cdn.uviewui.com/uview/album/2.jpg',
					'https://cdn.uviewui.com/uview/album/3.jpg',
					'https://cdn.uviewui.com/uview/album/4.jpg',
					'https://cdn.uviewui.com/uview/album/5.jpg',
					'https://cdn.uviewui.com/uview/album/6.jpg',
					'https://cdn.uviewui.com/uview/album/7.jpg',
					'https://cdn.uviewui.com/uview/album/8.jpg',
					'https://cdn.uviewui.com/uview/album/9.jpg',
					'https://cdn.uviewui.com/uview/album/10.jpg',
				]
			}
		},
		created() {
			
		},
		mounted() {
			this.uilRef = this.$refs['uil-ref']
		},
		watch: {
			itemArr(n) {
				console.log(n.length)
			}
		},
		methods: {
			setSpecialEffects(args) {
				console.log(args)
			    if (this.uilRef) {
			        this.uilRef.setSpecialEffects(args);
			    }
			},
			fetchData() {
			    // 首次激活时被调用
				console.log('fetchData')
				for(let j = 0; j < 26; j++) {
					const tmp = []
					const count = uni.$u.random(0, 10)
					for (let i = 0; i < count; i++) {
						const index = uni.$u.random(0, this.urls.length - 1)
						const data = {
							avatar: this.urls[index],
							nick: `好友-${this.indexList[j]}-${i}`,
							emphasize: index % 3 === 0 ? 'WiFi在线' : index % 2 === 0 ? '5G在线' : '离线',
							text: `${uni.$u.guid(5, false).toUpperCase()}: ${uni.$u.guid(uni.$u.random(0, 100), false)}`,
						}
						tmp.push(data)
					}
					this.itemArr.push(tmp)
				}
				this.$nextTick(() => {
					this.refresh()
				})
				return true
			},
			refresh() {
				// console.log('refresh')
				this.uilRef.requestLayout()
			},
			goTop() {
				// console.log('goTop')
			},
			release() {
			    // 释放数据时被调用，参考 swiper-list 缓存配置
				// console.log('release')
			    this.dataList.length = 0
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list-cell {
		display: flex;
		width: 100%;
		padding: 10px 24rpx;
		overflow: hidden;
		color: #323233;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
	}
</style>