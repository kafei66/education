<template>
	<view class="child-box">
		<!-- 热门推荐标题 -->
		<div v-if="icons == 'HOT'">
			<view class="hot-box">
				<view class="hot-left">
					<text class="hot-title"> {{titles}} </text>
					<text class="hot-icon"> {{icons}}</text>
				</view>
				<view class="hot-right">
					<text class="hot-all">全部 > </text>
				</view>
			</view>
			<!-- 热门推荐列表 -->
			<view class="hot-list">
				<view class="hot-item" v-for="item in list" :key="item.id">
					<view class="item-img">
						<image :src="item.mainImage" mode="widthFix"></image>
					</view>
					<view class="item-title">
						<view class="title"> {{item.title}} </view>
						<view class="item-name">{{item.nickName}}</view>
						<view class="item-total">
							<text style="color:red;margin-right:100rpx">免费</text>
							<text> {{item.studyTotal}} 人在学</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 热门推荐标题 -->
		</div>
		<div v-if="icons == 'NEW'">
			<view class="hot-box">
				<view class="hot-left">
					<text class="hot-title"> {{titles}} </text>
					<text class="hot-icon"> {{icons}}</text>
				</view>
				<view class="hot-right">
					<text class="hot-all">全部 > </text>
				</view>
			</view>
			<!-- 热门推荐列表 -->
			<view class="hot-list">
				<view class="hot-item" v-for="item in list" :key="item.id">
					<view class="item-img">
						<image :src="item.mainImage" mode="widthFix"></image>
					</view>
					<view class="item-title">
						<view class="title"> {{item.title}} </view>
						<view class="item-name">{{item.nickName}}</view>
						<view class="item-total">
							<text style="color:red;margin-right:100rpx">免费</text>
							<text> {{item.studyTotal}} 人在学</text>
						</view>
					</view>
				</view>
			</view>
			
		</div>
		<div v-if="icons == 'FREE'">
			<view class="hot-box">
			<view class="hot-left">
				<text class="hot-title"> {{titles}} </text>
				<text class="hot-icon"> {{icons}}</text>
			</view>
			<view class="hot-right">
				<text class="hot-all">全部 > </text>
			</view>
		</view>
		<!-- 热门推荐列表 -->
		<view class="hot-list">
			<view class="hot-item" v-for="item in list" :key="item.id">
				<view class="item-img">
					<image :src="item.mainImage" mode="widthFix"></image>
				</view>
				<view class="item-title">
					<view class="title"> {{item.title}} </view>
					<view class="item-name">{{item.nickName}}</view>
					<view class="item-total">
						<text style="color:red;margin-right:100rpx">免费</text>
						<text> {{item.studyTotal}} 人在学</text>
					</view>
				</view>
			</view>
		</view>
		</div>
		<div v-if="icons == 'NICE'">
			<view class="hot-box">
			<view class="hot-left">
				<text class="hot-title"> {{titles}} </text>
				<text class="hot-icon"> {{icons}}</text>
			</view>
			<view class="hot-right">
				<text class="hot-all">全部 > </text>
			</view>
		</view>
		<!-- 热门推荐列表 -->
		<view class="hot-list">
			<view class="hot-item" v-for="item in list" :key="item.id">
				<view class="item-img">
					<image :src="item.mainImage" mode="widthFix"></image>
				</view>
				<view class="item-title">
					<view class="title"> {{item.title}} </view>
					<view class="item-name">{{item.nickName}}</view>
					<view class="item-total">
						<text style="color:red;margin-right:100rpx">免费</text>
						<text> {{item.studyTotal}} 人在学</text>
					</view>
				</view>
			</view>
		</view>
		</div>
	</view>
</template>

<script>
	
	export default {
		props:['list','titles','icons'],
		setup() {
			name:"hotList"
		}
	}
	 
		
	
</script>

<style lang="scss" scoped>
	.child-box{
		margin-top: 30rpx;
	}
.hot-box{
		width: 92%;
		height: 50rpx;
		margin: 20rpx 0;
		display: flex;
		justify-content: space-between;
		padding: 10rpx 30rpx;
		line-height: 50rpx;
		.hot-title{
			font-size: 60rpx;
			color: gray;
		}
		.hot-icon{
			margin-left: 20rpx;
			display: inline-block;
			width: 100rpx;
			color: white;
			text-align: center;
			background-color: #fb372b;
			border-radius: 20rpx 20rpx 20rpx 0;
		}
		.hot-all{
			color: #aaa;
		}
	}
	.hot-list{
		width: 100%;
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.hot-item{
			width: 100vw;
			display: flex;
			justify-content: flex-start;
			margin-top: 20rpx;
			.item-img{
				width: 40%;
				margin-right: 15rpx;
				image{
					width: 300rpx;
					height: 180rpx;
					border-radius: 10rpx;
				}
			}
			.item.title{
				flex: 1;
				
			}
		}
	}
	.title{
		white-space: nowrap;
		font-weight: 900;
		margin-bottom: 35rpx;
	}
	.item-name{
		color: #aaa;
	}
	.item-total{
		color: #aaa;
		display: flex;
		justify-content: flex-start;
	}

</style>