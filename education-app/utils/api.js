import http from '@/utils/http.js'
// 首页导航
 const getNav = async() => {
	let data = await http.get("article/api/category/label/list")
	return data
}
// 热门推荐
const getHotList = async() => {
	let data = await http.post("course/api/course/search",{sort: "hot", current: 1, size: 8})
	return data
}
// 近期上新
const getNewUp = async()=>{
	let data = await http.post("course/api/course/search",{sort: "new", current: 1, size: 10})
	return data
}
// 免费精选
const getChoose = async()=>{
	let data = await http.post("course/api/course/search",{isFree: 1, current: 1, size: 8})
	return data
}
// 付费精品
const getGoods = async()=>{
	let data = await http.post("course/api/course/search",{isFree: 0, current: 1, size: 10})
	return data
}
// 分类导航
const getCateNav = async()=>{
	let data = await http.get('article/api/category/label/list')
	return data
}
export {
	getNav,
	getHotList,
	getNewUp,
	getChoose,
	getGoods,
	getCateNav
}