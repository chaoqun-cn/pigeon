<template>
	<view class="vbox">
		<video
			id="player"
			class="vbox-player"
			:src="video.src"
			controls
			@click="onClick"
			@ended="onEnded"
		/>
		<view>
			<text style="color: #fff;">{{video.id}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['video'],
		data() {
			return {
				playing: false
			}
		},
		computed: {
			
		},
		created() {
			console.log('vbox created')
		},
		mounted() {
			this.ctx = uni.createVideoContext('player', this)
		},
		beforeDestroy() {
			this.pause()
			console.log('beforeDestroy')
		},
		methods: {
			onClick() {
				if(this.playing){
					this.pause()
				}else{
					this.play()
				}
			},
			play() {
				if(!this.playing){
					this.ctx.play()
					this.playing = true
				}
			},
			pause() {
				if(this.playing){
					this.ctx.pause()
					this.playing = false
				}
			},
			playback() {
				if(!this.playing){
					this.ctx.seek(0)
					this.play()
				}
			},
			onEnded() {
				this.$emit('finish')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.vbox {
		flex: 1;
		position: relative;
		
		&-player {
			flex: 1;
		}
		
		
		.pendant {
			position: absolute;
			
			&-bottom {
				left: 0;
				bottom: 0;
			}
		}
	}
</style>
