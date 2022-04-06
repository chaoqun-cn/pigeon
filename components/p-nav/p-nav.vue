<template>
	<view>
		<u-navbar fixed placeholder border bgColor="#ffffff">
			<template v-slot:left>
				<view style="position: relative;">
					<u-avatar
					    src="/static/avatar.jpg"
						size="36px"
					    fontSize="18"
					    randomBgColor></u-avatar>
					<u-badge isDot absolute :offset="[0, 0]"></u-badge>
				</view>
			</template>
			<template v-slot:center>
				<view style="display: flex; flex-direction: column; flex: 1;">
					<text style="font-size: 16px; font-weight: bold;">最美不过@回忆</text>
					<view 
						@longpress="isOpenStatusChooser = true"
						style="display: flex; flex-direction: row; align-items: center;">
						<u-badge isDot type="success"></u-badge>
						<text style="font-size: 12px; font-weight: normal; margin-left: 4px;">手机在线 - WiFi ></text>
					</view>
				</view>
			</template>
			<template slot="right">
				<view 
					id="p-nav__menu"
					@click="openPopupMenu">
					<u-icon
						bold
						name="plus-circle" 
						size="20px"></u-icon>
				</view>				
			</template>
		</u-navbar>
		
		<!-- 弹出菜单 -->
		<p-popup-menu ref="menu" :mask="{opacity: 0.1}" :safeAreaPadding="[13, 44]">
			<view 
				class="p-menu">
				<template v-for="(item, index) in menu">
					<view 
						:key="index"
						:data-action="item.action" 
						:class="['p-menu__item', menuItemHover === item.action ? 'p-menu__item--hover' : '']" 
						@touchstart="sleep(50).then(() => menuItemHover = item.action)"
						@touchend="sleep(400).then(() => menuItemHover = 'none')"
						@tap.stop="onPopupMenuItemClick(item.action)">
						<u-icon
							bold
							:name="item.uicon" 
							size="24px"></u-icon>
						<text class="p-menu__item__title">{{item.title}}</text>
					</view>
				</template>
			</view> 			
		</p-popup-menu>
	
		<!-- 状态选择器 -->
		<u-popup 
			:show="isOpenStatusChooser"
			zoom
			mode="center"
			:overlayStyle="{background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 30%, rgba(225, 224, 225, .5))'}"
			@close="isOpenStatusChooser = false">
			<view>
				<text>手机在线</text>
			</view>
		</u-popup>
	</view>
</template>

<script>
	
	function isEmpty(obj) {
		if (Object.keys(obj).length === 0) {
		    return true
		}
		return false
	}
	
	function sleep(timeout = 30) {
		return new Promise((resolve) => setTimeout(resolve, timeout))
	}
	
	export default {
		name: 'p-nav',
		mixins: [{methods: {sleep}}],
		data() {
			return {
				menuItemHover: 'none',
				isOpenStatusChooser: false,
				menu: [
					{
						uicon: 'chat',
						title: '发起群聊',
						action: 'initGC',
					
					}, 
					{
						uicon: 'man-add',
						title: '添加好友/群',
						action: 'addFG',
					
					},
					{
						uicon: 'scan',
						title: '扫一扫',
						action: 'scan',
					
					},
					{
						uicon: 'red-packet',
						title: '收付款',
						action: 'trade',
					
					},
					{
						uicon: 'email',
						title: '帮助与反馈',
						action: 'hefe',
					
					}
				],
			}
		},
		methods: {
			openPopupMenu(e) {
				if(isEmpty(e.detail)) {
					// APP NVUE 下获取屏幕点击位置替代方法
					const query = uni.createSelectorQuery().in(this)
					// class选择器不能正常工作
					query.select('#p-nav__menu').boundingClientRect(({left, right, top, bottom}) => {
						e.detail = {
							x: (left + right) / 2, 
							y: (top + bottom) / 2,
						}
						this.$refs.menu.show(e)
					}).exec()
				} else {
					this.$refs.menu.show(e)
				}
				
			},
			onPopupMenuItemClick(action) {
				console.log(action)
			}
		}
	}
</script>

<style lang="scss">
	.p-menu {
		width: 320rpx;
	
		.p-menu__item {
			height: 105rpx; 
			padding-left: 30rpx; 
			display: flex; 
			flex-direction: row; 
			justify-content: flex-start; 
			align-items: center;
			
			&--hover {
				background-color: #E5E5E5;
			}
			
			&__title {
				font-size: 18px; 
				padding-left: 20rpx;
			}
		}
		
	}
</style>
