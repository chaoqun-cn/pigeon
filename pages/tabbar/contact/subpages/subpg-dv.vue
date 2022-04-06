<template>
	
</template>

<script>
	export default {
		methods: {
		    setSpecialEffects(headerHeight) {
				// console.log('setSpecialEffects')
		        if (this.$refs['list'].setSpecialEffects) {
		            this.$refs['list'].setSpecialEffects({
		                id: this.parentId,
		                headerHeight
		            });
		        }
		    },
		    fetchData() {
		        // 首次激活时被调用
				// console.log('fetchData')
				return true
		    },
			refresh() {
				// console.log('refresh')
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

<style>
</style>
