<template>
	<view class="ask-box">
		<topSearch></topSearch>
		<div class="nav-box">
			<view 
			:class="{'nav-item':true,'active':data.curType == item.type}" 
			v-for="item in data.titleNav" 
			:key="item.id"
			@tap="changeType(item.type)"
			>
				{{item.title}}
			</view>
		</div>
		<div class="list-box">
			<view class="list-item" v-for="item in data.navList" :key="item.id">
				<view class="title">
					{{item.title}}
				</view>
				<view class="name">
					<text> {{item.reply}} </text>
					<text> {{item.status}} </text>
					<text> {{item.nickName}} </text>
					<text> {{item.updateDate}} </text>
				</view>
			</view>
		</div>
	</view>
</template>

<script setup>
	import {reactive} from 'vue'
	import topSearch from '../../components/topSearch/topSearch.vue'
	import {getAskHot,getAskNew,getAskWait} from '../../utils/api.js'
	const data = reactive({
		titleNav:[
		{
			id:1,
			title:"热门回答",
			type:"hot"
		},
		{
			id:2,
			title:"最新问题",
			type:"new"
		},
		{
			id:3,
			title:"等待回答",
			type:"wait"
		}
	],
	curType:'hot',
	navList:[]
	})
	getAskHot().then(res=>{
		// console.log(res);
		data.navList = res.data.data.records
	})
	const changeType = (type)=>{
		data.curType = type
		if(type == 'new'){
			getAskNew().then(res=>{
				// console.log(res);
				data.navList = res.data.data.records
			})
		}else if(type == 'hot'){
			getAskHot().then(res=>{
				// console.log(res);
				data.navList = res.data.data.records
			})
		}else{
			getAskWait().then(res=>{
				// console.log(res);
				data.navList = res.data.data.records
			})
		}
		
	}
</script>

<style lang="scss" scoped>
	.nav-box{
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: space-around;
		margin: 20rpx auto;
		border-bottom:1px solid #eee ;
		.nav-item{
			flex:1;
			height: 60rpx;
			line-height: 60rpx;
			text-align:center;
			font-size: 46rpx;
			padding: 20rpx 0;
		}
	}
	.list-box{
		width: 100%;
		padding: 20rpx;
		color: #aaa;
		.list-item{
			width: 90%;
			padding: 20rpx 20rpx 30rpx 20rpx;
			border-bottom: 1px solid #eee;
			.title{
				font-size: 46rpx;
				font-weight: 700;
				color: black;
			}
		}
	}
	
	.active{
		color: #007aff;
		border-bottom: 2px solid #007aff;
	}
</style>