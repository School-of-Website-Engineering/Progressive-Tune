//封装axios
import axios from "axios";
//创建axios实例
const request = axios.create({
  // baseURL: "http://api-toutiao-web.itheima.net",
  // headers: { "Content-Type": "application/json;charset=UTF-8" },
  timeout: 7000, // 请求超时时间
});
//请求拦截器
request.interceptors.request.use((config) => {
  //在发送请求之前做某事
  return config;
});
//响应拦截器
request.interceptors.response.use((response) => {
  //对响应数据做某事
  return response;
});
export default request;
