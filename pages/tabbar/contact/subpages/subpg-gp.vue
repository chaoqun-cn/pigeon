<template>
    <view class="uni-swiper-page">
	<u-collapse
		@change="change"
		@close="close"
		@open="open">
        <list ref="list" class="list" :offset-accuracy="5" :bounce="true" fixFreezing="true">
            <cell v-for="(group, index) in groups" :key="index">
				<u-collapse-item
					:ref="`group-${index}`"
					:title="group.name"
					:value="group | onlineRate">
					<text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
				</u-collapse-item>
            </cell>
            <cell class="loading"></cell>
        </list>
	</u-collapse>
    </view>
</template>

<script>
    export default {
        props: {
            pid: {
                type: [Number, String],
                default: ''
            },
            parentId: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                scrollable: true,
                groups: [
					{
						name: '特别关心',
						online: 10,
						offline: 15
					},
					{
						name: '专属@家人&亲戚',
						online: 10,
						offline: 8
					},
					{
						name: '专属@同学',
						online: 100,
						offline: 75
					}
				]
            }
        },
		computed: {
			
		},
		beforeCreate() {
			console.log('beforeCreate')
		},
        created() {
            console.log('created')
        },
		beforeMount() {
			console.log('beforeMount')
		},
		mounted() {
			console.log('mounted')
		},
		filters: {
			onlineRate(group) {
				const { online, offline } = group
				return `${online} / ${online + offline}`
			}
		},
        methods: {
            setSpecialEffects(args) {				
                if (this.$refs['list']) {
                    this.$refs['list'].setSpecialEffects(args);
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

<style scoped>
    .uni-swiper-page {
        flex: 1;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }

    .list {
        flex: 1;
        background-color: #ebebeb;
    }

    .list-item {
        margin-left: 12px;
        margin-right: 12px;
        margin-top: 12px;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
    }

    .loading {
        height: 20px;
    }
</style>
