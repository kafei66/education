<template>
	<view class="inp-box">
		
		<view @tap="back"> ♥ </view>
		<view class="inp">
			<input type="text" placeholder="搜索你想要的内容">
		</view>
		<view>取消</view>
	</view>
</template>

<script setup>
	const back = ()=>{
		uni.navigateBack({
		    delta: 1
		});
	}
</script>

<style lang="scss">
 .inp-box{
	width: 92%;
	height: 100rpx;
	display: flex;
	padding: 30rpx;
	align-items: center;
	.inp{
		width: 80%;
		margin : 0 20rpx;
		input{
			background-color: #eee;
			width: 100%;
			height: 70rpx;
			border-radius: 30rpx;
			text-align: center;
		}
	}
}
</style>