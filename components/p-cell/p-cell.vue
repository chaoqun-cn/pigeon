<template>
	<view
		v-if="dataSource"
		@longpress="onLongPress">

			<view class="p-swipe-cell__content">
				<u-avatar
					:src="dataSource.avatar"
					size="82"
					mode="aspectFill"></u-avatar>
				<view class="p-swipe-cell__content__right">
					<view class="p-swipe-cell__content__right__row">
						<text class="font line-limit-1">{{dataSource.nick}}</text>
						<text v-if="dataSource.timestamp" class="font-small" style="color: #cccccc;">{{dataSource.timestamp | dateformat}}</text>
					</view>
					<view class="p-swipe-cell__content__right__row">
						<text v-if="dataSource.emphasize" class="font-sm" style="color: #ffbd83;">[{{dataSource.emphasize}}]</text>
						<!-- ATTENTION: text标签和其内容必须在同一行，否则lines无效 -->
						<text v-if="dataSource.text" class="font-sm line-limit-1" style="color: #d6d6d6;">{{dataSource.text}}</text>
						<u-badge v-if="dataSource.badge" type="error" max="99" numberType="overflow" :value="dataSource.badge"></u-badge>
					</view>
				</view>
			</view>

	</view>
</template>

<script>
	export default {
		name: 'p-swipe-cell',
		props: {
			dataSource: Object
		},
		data() {
			return {
				// data: {
				// 	avatar: '/static/avatar.jpg',
				// 	nick: '湖中大(HNUCM) ACM GROUP',
				// 	timestamp: Date.now(),
				// 	emphasize: '@全体成员',
				// 	text: 'Daryl:[分享]关于完善校友数据库信息的通知',
				// 	badge: 129
				// }
			}
		},
		filters: {
			dateformat(date) {
				// TODO: https://momentjs.com/
				return `${new Date(date).getSeconds()}秒前`
			}
		},
		methods: {
			
			onLongPress(e) {
				console.log(e)
			}
		}
	}
</script>

<style lang="scss">
	@import "../../libs/css/preset.scss";
	
	.p-swipe-cell__content {
		@include flex
	    padding: 20rpx 25rpx;
	
		&__right {
			@include flex(column)
			margin-left: 25rpx; 
			flex: 1;
			justify-content: space-between;
			
			&__row {
				@include flex;
				align-items: center; 
				justify-content: space-between;
			}
		}

	}
</style>
