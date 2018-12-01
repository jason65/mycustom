import Axios from 'axios'
import cache from '../helper/cache'
import LoadingBar from 'iview/src/components/loading-bar'
import config from '../config'
import util from '../helper/util'
import loadingBar from 'iview/src/components/loading-bar'
Axios.interceptors.request.use(
  function(request) {
    LoadingBar.start()
    // 基于 mock , 直接发送请求
    if (request.url.indexOf('http://mock.eolinker.com/') !== -1) {
      return request
    } else {
      // 验证 token
      // 配置 timeout 超时时间
      request.timeout = 30000
      // 配置 content-type 为 application/json;charset=UTF-8
      request.headers['Content-Type'] = request.headers['Content-Type'] || 'application/json;charset=UTF-8'

      // 添加 token
      const userInfo = cache.get(config.cache.USER_INFO, 'session')
      if (userInfo && userInfo.token) {
        if (userInfo.token) {
          request.headers.Token = userInfo.token
        }

        // - fix 1
        // 屏蔽非 upms 的 token
        if (userInfo.LONG_TOKEN && request.url.indexOf(config.axois.upmsPrefix) !== -1) {
          request.headers['Long-Token'] = cache.get(config.axois.LONG_TOKEN)
        }
      }

      return request
    }
  },
  function(err) {
    return Promise.reject(err)
  }
)
Axios.interceptors.response.use(
  function(response) {
    LoadingBar.finish()

    // 基于 mock , 直接发送请求
    if (response.config.url.indexOf('http://mock.eolinker.com/') !== -1) {
      return response.data
    } else if (response.data.code === 200) {
      // 成功数据
      return response.data
    } else if (response.data.code === 762) {
      // 超时
      if (response.headers['new-token']) {
        // 存在新 token , 自动刷新该页面
        setTimeout(() => {
          window.location.reload()
        }, 2000)

        util.alert('登陆超时，即将重新验证, 请稍后。')
        const userInfo = cache.get(config.cache.USER_INFO, 'session')
        userInfo.token = response.headers['new-token']
        cache.set(config.cache.USER_INFO, userInfo, 'session')
        return Promise.reject(response.data)
      } else {
        util.alert('登陆超时，即将退出登录, 请稍后。')
        cache.remove(config.cache.USER_INFO)
        // kindo.$bus.$router.push('/login')
        setTimeout(() => {
          window.location.reload()
        }, 500)
        return Promise.reject(response.data)
      }
    } else {
      util.alert(response.data.message, undefined, 'warning')
      return Promise.reject(response.data)
    }
  },
  function(error) {
    loadingBar.error()
    // kindo.$bus.$emit('loading', false)
    if (error.code == 'ECONNABORTED') {
      util.alert('请求超时了，请检查你的网络环境，并稍后再试。', '500 服务器超时', 'warning')
    } else if (error && error.response && error.response.status) {
      switch (error.response.status) {
        case 401:
          util.alert('登陆超时，请重新登陆。')
          cache.remove(config.cache.USER_INFO)
          // kindo.$bus.$router.push('/login')
          setTimeout(() => {
            window.location.reload()
          }, 500)
          break
        case 404:
          util.alert('Web 服务器找不到您所请求的文件或脚本。请检查URL 以确保路径正确', '404 未找到', 'warning')
          break
        case 405:
          util.alert('对于请求所标识的资源，不允许使用请求行中所指定的方法。请确保为所请求的资源设置了正确的 MIME 类型', '405 不允许此方法', 'warning')
          break
        case 406:
          util.alert('根据此请求中所发送的“接受”标题，此请求所标识的资源只能生成内容特征为“不可接受”的响应实体', '406 不可接受', 'warning')
          break
        case 500:
          util.alert('Web 服务器不能执行此请求，请稍后重试此请求', '500 服务器的内部错误', 'warning')
          break
        case 501:
          util.alert('Web 服务器不支持实现此请求所需的功能。请检查URL 中的错误，如果问题依然存在，请与 Web服务器的管理员联系', '501 未实现', 'warning')
          break
      }
    }

    return Promise.reject(error)
  }
)
export default Axios
