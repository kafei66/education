<template>
	<view class="article-box">
		<topSearch></topSearch>
		<div class="article-nav">
			<view :class="{'nav-item':true,'active':data.curId == ''}">
				推荐
			</view>
			<view 
			:class="{'nav-item':true,'active':item.id == data.curId}" 
			v-for="item in data.articleNav" 
			:key="item.id"
			@tap="changeNav(item.id)"
			> 
			
			{{item.name}} 
			</view>
		</div>
		<view class="list-box">
			<view class="list-item" v-for="item in data.navList" :key="item.id">
				<view class="item-left">
					<view class="title">
						{{item.title}}
					</view>
					<view class="summary">
						{{item.summary}}
					</view>
					<view class="name">
						<text> {{item.nickName}} </text> ·
						<text> {{item.updateDate}} </text>·
						<text> {{item.viewCount}} 赞</text>
					</view>
				</view>
				<view class="item-right">
					<image :src="item.imageUrl" mode="widthFix"></image>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script setup>
	import topSearch from '../../components/topSearch/topSearch.vue'
	import {getArticleNav,getNavList} from '../../utils/api.js'
	import {reactive} from 'vue'
	const data = reactive({
		articleNav:[],
		curId:'',
		navList:[]
	})
	getArticleNav().then(res=>{
		// console.log(res);
		data.articleNav = res.data.data
	})
	getNavList().then(res=>{
		// console.log(res);
		data.navList = res.data.data.records
	})
	// 切换导航
	const changeNav = (id) =>{
		data.curId = id
		getNavList(id).then(res=>{
			// console.log(res);
			data.navList = res.data.data.records
		})
	}
	
</script>

<style lang="scss" scoped>
	.article-nav{
		width: 100%;
		height: 120rpx;
		margin: 0 auto;
		display: flex;
		white-space: nowrap;
		
		overflow-x: auto;
		padding: 0 20rpx;
		box-sizing: border-box;
		border-bottom: 1px solid #eee;
		.nav-item{
			display: inline-block;
			width: 100rpx;
			height: 120rpx;
			font-size: 20px;
			line-height: 120rpx;
			margin: 0 40rpx;
			text-align: center;
		}
	}
	.active{
		color: #007aff;
		border-bottom: 2px solid #007aff;
	}
	.list-box{
		width: 90%;
		padding: 20rpx;
		.list-item{
			width: 100%;
			padding: 20rpx;
			display: flex;
			border-bottom: 1px solid #eee;
			.item-left{
				flex: 1;
				overflow: hidden;
				color: #bbb;
				.summary{
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					
				}
				.title{
					color: black;
					font-size: 40rpx;
					font-weight: 700;
					white-space: wrap;
				}
				.name text:nth-child(1){
					color: #333;
				}
			}
			.item-right{
				width: 300rpx;
				margin-left: 10rpx;
				image{
					width: 300rpx;
					border-radius: 20rpx;
				}
			}
		}
	}
</style>