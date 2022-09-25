<template>
	<view>
		<inputBox></inputBox>
		<div class="info-nav">
			<view 
			class="nav-item" 
			v-for="item,index in infoNav" 
			:key="index"
			@tap="changeItem(item)"
			>
			<text :class="{active:item == curItem}">{{item}}</text>
			</view>
			
		</div>
	</view>
</template>

<script setup>
	import inputBox from '../../components/inputBox/inputBox.vue'
	import {ref} from 'vue'
	const curItem = ref('课程')
	const infoNav = ref(["课程","文章","问答"])
	const changeItem = (item) =>{
		curItem.value = item
	}
</script>

<style lang="scss" scoped>
.info-nav{
	width: 100%;
	height: 100rpx;
	line-height: 100rpx;
	display: flex;
	justify-content: space-around;
	.nav-item{
		flex: 1;
		text-align: center;
		font-size: 36rpx;
	}
}
.active{
	color: #007eff;
	border-bottom: 2px solid #007eff;
	padding: 20rpx 0;
}
</style>
