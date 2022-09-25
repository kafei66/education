<template>
	<view class="search-box">
		<inputBox></inputBox>
		<view class="hot-title">
			热门搜索
		</view>
	<div class="hot-search">
		<view class="hot-item" v-for="item in data.hotNav" :key="item.id">
			{{item.name}}
		</view>
	</div>
	<view class="hot-title">
		历史搜索 <text>清空</text>
	</view>
	
	
	</view>
</template>

<script setup>
	import inputBox from '../../components/inputBox/inputBox.vue'
	import {getHotType} from '../../utils/api.js'
	import {reactive} from 'vue'
	getHotType().then(res=>{
		// console.log(res);
	})
	const data = reactive({
		hotNav:[{
			id:1,
			name:'Java'
		},{
			id:2,
			name:'Python'
		},{
			id:3,
			name:'Vue.js'
		},{
			id:4,
			name:'React'
		},{
			id:5,
			name:'SpringBoot'
		},{
			id:6,
			name:'SpringClound'
		}]
	})
	

</script>

<style lang="scss" scoped>
	.search-box{
		width: 100%;
		height: 100%;
		padding: 20rpx;
	}
   
	.hot-title{
		font-size: 40rpx;
		margin-top: 20rpx;
		padding: 0 30rpx;
		text{
			float: right;
			font-size: 30rpx;
			color: #aaa;
			margin-right: 20rpx;
		}
	}
	.hot-search{
		width: 100%;
		padding: 30rpx;
		display: flex;
		justify-content: start;
		flex-wrap: wrap;
		color: #aaa;
		.hot-item{
			margin: 10rpx 20rpx 10rpx 0;
			padding: 10rpx;
			border: 1px solid #ccc;
			border-radius: 10rpx;
			font-size: 30rpx;
		}
	}
	
</style>
