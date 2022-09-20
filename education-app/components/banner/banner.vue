<template>
	<view>
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="swiper-box">
				<view class="swiper-item">
					<image src="../../static/images/banner1.jpg" mode="widthFix"></image>
				</view>
			</swiper-item>
			<swiper-item class="swiper-box">
				<view class="swiper-item">
					<image src="../../static/images/banner2.jpg" mode="widthFix"></image>
				</view>
			</swiper-item>
			<swiper-item class="swiper-box">
				<view class="swiper-item">
					<image src="../../static/images/banner3.jpg" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {reactive} from 'vue'
	export default {
		name:"banner",
		setup() {
			
		}
	}
</script>

<style lang="scss" scoped>
.swiper{
	width: 100%;
	height: 420rpx;
	text-align: center;
		image{
				width: 98%;
				// height: 500px;
				border-radius: 10rpx;
				margin: 0 auto;
		}
       
	
	
}
</style>