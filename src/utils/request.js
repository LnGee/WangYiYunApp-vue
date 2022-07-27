import axios from 'axios'
import { createApp } from 'vue';
import { Toast } from 'vant';

const app = createApp();
app.use(Toast);
// 区分开发环境的服务器与生产环境的服务器
// development - 开发环境
// production -- 生产环境
const baseURL = process.env.NODE_ENV === 'development' ? ' http://localhost:3000' : ' http://localhost:3000'

// 创建 axios 实例
const service = axios.create({
  baseURL, // 基准 URL 路径
  timeout: 5000,
  // withCredentials: true, // 表示跨域请求时是否需要使用凭证
})

// 请求拦截
service.interceptors.request.use(config => {
  // 每次请求后端接口时，在请求头中携带 token 数据，发送到服务端
  // config.headers.token = 'adflajdfkljasdfkljadsklfjasdklfjasdlkfj'

  // 显示提示效果
  Toast.loading({
    message: '加载中...',
    duration: 0, // 显示提示框，不自动关闭
  })
  return config
})

// 响应拦截
service.interceptors.response.use(response => {
  // 关闭提示效果
  Toast.clear()
  // 判断响应返回数据的格式
  if (response.status >= 200 && response.status < 300) {
    // 获取服务端响应返回的数据
    return response.data
  }
  throw new Error('请求异常')
})
// 导出 axios 实例
export default service