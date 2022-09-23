<template>
	<view>
		<swiper 
		class="swiper" 
		:indicator-dots="true" 
		:autoplay="true" 
		:interval="3000" 
		:duration="1000"
		  @change="changeBgc"
		>
			<swiper-item 
			class="swiper-box" 
			
			v-for="item in imgs" 
			:key="item.id">
				<view class="swiper-item">
					<image :src="item.imageUrl" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import {ref,defineEmits} from 'vue'
	import {getBanner} from '../../utils/api.js'
	const imgs = ref([])
	const bgc = ref('')
	const emit = defineEmits(['changeBgc'])
	getBanner().then(res=>{
		console.log(res);
		imgs.value = res.data.data
		
	})
	const changeBgc = (e) => {
		// console.log(e);
		emit('changeBgc',e.detail.current)
	}
</script>

<style lang="scss" scoped>
.swiper{
	width: 100%;
	height: 420rpx;
	text-align: center;
		image{
				width: 98%;
				// height: 500px;
				border-radius: 10rpx;
				margin: 0 auto;
		}
       
	
	
}
</style>