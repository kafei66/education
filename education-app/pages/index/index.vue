<template>
	<view class="index-box">
		<!-- 头部搜索 -->
		<div class="top-box">
			<topSearch></topSearch>
			<!-- 轮播图 -->
			<banner @changeBgc = "changeBgc"></banner>
		</div>
		
		<!-- 首页导航 -->
		<view class="nav-box">
			<text v-for="item in data.navList" :key="item.id"> {{item.name}} </text>
			<text>全部分类</text>
		</view>
		<!-- 热门推荐 -->
		<hotList list='data.hotLists' titles="热门精选" icons="HOT"></hotList>
		<!-- 近期上新 -->
		<!-- <hotList list="data.newUp" titles="近期上新" icons="NEW"></hotList> -->
		<!-- 免费精选 -->
		<!-- <hotList list="data.freeList" titles="免费精选" icons="FREE"></hotList> -->
		<!-- 付费精品 -->
		<!-- <hotList list="data.goodsList" titles="付费精品" icons="NICE"></hotList> -->
	</view>
</template>

<script setup>
	import topSearch from '../../components/topSearch/topSearch.vue'
	import banner from '../../components/banner/banner.vue'
	import hotList from '../../components/hotList/hotList.vue'
	import {getNav,getHotList,getNewUp,getChoose,getGoods} from '../../utils/api.js'
	import {reactive,toRefs,ref} from 'vue'
	const data = reactive({
		navList:[],
		hotLists:[],
		newUp:[],
		freeList:[],
		goodsList:[],
		bgc:'',
		bgcList:["#1d5f08","#2b204a","#0f67b4"]
	})
	// 首页导航
	getNav().then(res=>{
		// console.log(res);
		data.navList = res.data.data.slice(0,res.data.data.length-2)
	})
	// 热门推荐
	getHotList().then(res=>{
		// console.log(res);
		data.hotLists = res.data.data.records
	})
	// 近期上新
	getNewUp().then(res=>{
		// console.log(res);
		data.newUp = res.data.data.records
	})
	// 免费精选
	getChoose().then(res=>{
		data.freeList = res.data.data.records
	})
	// 付费精品
	getGoods().then(res=>{
		data.goodsList = res.data.data.records
	})
	const changeBgc = (i) =>{
		data.bgc = data.bgcList[i]
		// console.log(data.bgc);
	}
</script>

<style lang="scss" scoped>
	
	.nav-box{
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		box-sizing: border-box;
		padding: 20rpx ;
		background-image: linear-gradient();
		text{
			width: 22%;
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			background-color: #eee;
			border-radius: 10rpx;
			margin-top: 20rpx;
		}
	}
	
	</style>
	
	
