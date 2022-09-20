import axios from 'axios'
// console.log(axios);
const http = axios.create({
	baseURL: "http://m.mengxuegu.com/api/",
	timeout: '3000',
	headers: {
		"Content-Type": "application/json;charset=utf-8"
	},
	withCredentials: true
})
http.interceptors.request.use(

	(config) => {
		return config
	},

	(err) => {
		return Promise.reject(err)
	}
)
http.interceptors.response.use(
	(res) => {
		return res
	},

	(err) => {
		return err

	}
)


export default http
