<template>
	<view class="mine-box">
		<div class="top-box"></div>
		<div class="icon-box">
			<div class="img">
				<image src="../../efficient/efficient/m.png" mode="widthFix"></image>
				<text> 请登录</text>
			</div>
			<view > > </view>
		</div>
		<div class="list">
			<div class="list-box">
				<view class="list-item">
					<div class="img">
						<image src="../../efficient/efficient/public/1.gif" mode="widthFix"></image> 我的订单
					</div>
					
				</view>
				<view > > </view>
			</div>
			<div class="list-box">
				<view class="list-item">
					<div class="img">
						<image src="../../efficient/efficient/public/2.gif" mode="widthFix"></image> 我的余额
					</div>
					
				</view>
				<view > > </view>
			</div>
			<div class="list-box">
				<view class="list-item">
					<div class="img">
						<image src="../../efficient/efficient/public/3.gif" mode="widthFix"></image> 我的学习
					</div>
					
				</view>
				<view > > </view>
			</div>
			<div class="list-box">
				<view class="list-item">
					<div class="img">
						<image src="../../efficient/efficient/public/4.gif" mode="widthFix"></image> 设置
					</div>
					
				</view>
				<view > > </view>
			</div>
			<div class="list-box">
				<view class="list-item">
					<div class="img">
						<image src="../../efficient/efficient/public/5.gif" mode="widthFix"></image> 意见反馈
					</div>
					
				</view>
				<view > > </view>
			</div>
			<div class="list-box">
				<view class="list-item">
					<div class="img">
						<image src="../../efficient/efficient/public/8.gif" mode="widthFix"></image> 关于我们
					</div>
					
				</view>
				<view > > </view>
			</div>
		</div>
		
		
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.mine-box{
		background-color: #eee;
	}
	.list{
		margin-top: 60rpx;
	}
	.top-box{
		width: 100%;
		height: 140rpx;
	    background-color:#345dc2 ;
	}
	.icon-box{
		width: 95%;
		margin: -25rpx auto;
		background-color: #fff;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 30rpx 20rpx;
		border-radius: 40rpx;
		border: 1px solid #eee;
		.img{
			display: flex;
			align-items: center;
			font-size: 46rpx;
			font-weight: 700;
			image{
				width: 250rpx;
				margin: 40rpx 20rpx 0 0;
			}
			
		}
	}
	.list-box{
		width: 99%;
		background-color: #fff;
		
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 30rpx 0;
		border-bottom: 1px solid #eee;
		.list-item{
			display: flex;
			align-items: center;
			.img{
				width: 400rpx;
				display: flex;
				align-items: center;
				image{
					width: 50rpx;
					margin: 20rpx 20rpx 0 0;
				}
			}
			
		}
	}
	
</style>