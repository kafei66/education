import http from '@/utils/http.js'
// 轮播图
const getBanner = async()=>{
	let data = await http.get("article/api/advert/show/1")
	return data
}
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
// 阅读导航
const getArticleNav = async()=>{
	let data = await http.get("article/api/category/label/list")
	return data
}
// 阅读列表
const getNavList = async(id)=>{
	let data = await http.post("article/api/article/search",{categoryId:id,current: 1, size: 10})
	return data
}
// 热门推荐
const getAskHot = async()=>{
	let data = await http.post("question/api/question/hot",{current: 1, size: 10})
	return data
}
// 最新问题
const getAskNew = async()=>{
	let data = await http.post("question/api/question/new",{current: 1, size: 10})
	return data
}
// 等待回答
const getAskWait = async()=>{
	let data = await http.post("question/api/question/wait",{current: 1, size: 10})
	return data
}
// 热门搜索
const getHotType = async()=>{
	let data = await http.get("article/api/category/label/list")
	return data
}
export {
	getBanner,
	getNav,
	getHotList,
	getNewUp,
	getChoose,
	getGoods,
	getCateNav,
	getArticleNav,
	getNavList,
	getAskHot,
	getAskNew,
	getAskWait,
	getHotType
}