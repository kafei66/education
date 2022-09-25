<template>
	<view class="top-box">
		
		<navigator url="/pages/searchBox/searchBox">
			<view class="search-box" >
				<input type="text" placeholder="搜索你想要的内容">
			</view>
		</navigator>
		
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
		background-color: #345dc2;
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