<template>
	
	<view class="cate-box">
		<div class="top-box">
			<text>分类</text>
			<text style="float:right">!!</text>
			
		</div>
	
		<div class="cate-bom" >
			<div class="bom-left">
				<view :class="{'left-item':true,'active':data.curId == item.id}"
				 v-for="item in data.navList" 
				 :key="item.id" 
				 @tap="changeId(item.id)">
					{{item.name}}
				</view>
			</div>
		    <div class="bom-right" >
			    <view class="right-item" v-for="child in data.curList" :key="child.id">
			         {{child.name}}
			    </view>
		</div>
		
		</div>
		
		
		</view>
	
</template>

<script setup>
	import {getCateNav} from '../../utils/api.js'
	import {reactive} from 'vue'
	const data = reactive({
		navList:[],
		curId:'',
		curList:[]
	})
	getCateNav().then(res=>{
		// console.log(res);
		data.navList = res.data.data
		data.curId = '1'
		data.curList = data.navList.find(item=>item.id == data.curId).labelList
		// console.log(data.curList);
	})
	const changeId = (id) =>{
		data.curId = id
		data.curList = data.navList.find(item=>item.id == data.curId).labelList
	}
</script>

<style lang="scss" scoped>
	
	.cate-box{
		width: 100%;
		height: 100vh;
		.top-box{
			color: white;
			width: 100vw;
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			background-color:#345dc2;
			font-weight: 600;
			padding: 0 30rpx;
			box-sizing: border-box;
		}
		
	}
	.cate-bom{
		width: 100%;
		display: flex;
		justify-content: space-between;
		.bom-left{
			width: 220rpx;
			margin-right: 50rpx;
			background-color: #eee;
			height: 100%;
			padding: 40rpx 0 0 0;
		}
		.bom-right{
			width: 500rpx;
			height: 100%;
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			.right-item{
				box-sizing: border-box;
				width: 200rpx;
				padding: 10rpx;
				margin: 20rpx;
				text-align: center;
				line-height: 60rpx;
				height: 80rpx;
				border: 1px solid #ccc;
				border-radius: 30rpx;
			}
		}
	}
	
	.left-item{
		text-align: center;
		color: #aaa;
		height: 125rpx;
		line-height: 40rpx;
		
	}
	.active{
		color: #345dc2;
		// border-left: 2px solid #345dc2;
		position: relative;
	}
	::before{
		content: '';
		position: absolute;
		left: 10rpx;
		top: 0;
		width: 5rpx;
		height: 50rpx;
		background-color: #345dc2;
	}
</style> 