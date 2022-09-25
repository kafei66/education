<template>
	<view>
		<header>
				<text @tap="back">x</text>
		</header>
		<view class="title">
			欢迎回来!
		</view>
		<div class="tel-box">
			<view class="tel">
				手机号码
			</view>
			<view>
				<input type="number" v-model="telNum" placeholder="请输入手机号码">
			</view>
		</div>
		<div class="tel-box">
			<view class="tel">
				手机号码
			</view>
			<view class="inp">
				<input type="number" v-model="codes" placeholder="请输入手机验证码">
				<view class="getNum">获取验证码</view>
			</view>
		</div>
		<navigator url="/pages/mine/mine">
			<view class="login-btn" @tap="loginBtn">
				登录
			</view>
		</navigator>
		
	</view>
</template>

<script setup>
	import {getUserMag} from '@/utils/api.js'
	import {ref} from 'vue'
	const telNum = ''
	const codes = ''
	const loginBtn = ()=>{}
	const back = ()=>{
		uni.navigateBack({
		    delta: 1
		});
	}
</script>

<style lang="scss">
header{
	width: 100%;
	height: 60rpx;
	padding: 30rpx 40rpx;
	color: #aaa;
}
.title{
	padding: 40rpx;
	font-size: 40rpx;
	font-weight: 400;
	margin: 30rpx 0 20rpx 0;
}
.tel-box{
	width: 86%;
	// height: 140rpx;
	margin: 30rpx 40rpx;
	background-color: #f8f6fc;
	padding: 20rpx;
	.tel{
		font-size: 1rpx;
		color: #aaa;
		margin-bottom: 10rpx;
	}
	.inp{
		display: flex;
		justify-content: space-between;
		.getNum{
			background-color: #345dc2;
			color: #f8f6fc;
			padding: 10rpx;
			font-size: 10rpx;
			border-radius: 10rpx;
		}
	}
}
.login-btn{
	width: 86%;
	margin: 40rpx 40rpx;
	background-color: #345dc2;
	color: #f8f6fc;
	text-align: center;
	padding: 20rpx;
	border-radius: 10rpx;
	font-size: 30rpx;
}
</style>
