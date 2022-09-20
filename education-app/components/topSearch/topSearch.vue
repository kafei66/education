<template>
	<view class="top-box">
		<view class="search-box">
			<input type="text" placeholder="搜索">
		</view>
	</view>
</template>

<script>
	export default {
		name:"topSearch",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.top-box{
		width: 100%;
		height: 100rpx;
		background-color: aquamarine;
	}
.search-box{
	width: 90%;
	margin: 0 auto;
	text-align: center;
	overflow: hidden;
	input{
		width: 100%;
		height: 70rpx;
		border: none;
		border-radius: 40rpx;
		background-color: #fff;
		margin: 20rpx auto;
	}
}
</style>