import App from './App'
import iconfontLibExt from '@/libs/icon/uview-icons-ext.js'

// #ifndef VUE3
import Vue from 'vue'

// 引入uview-ui
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
uni.$u.setConfig({
	config: {
		unit: 'rpx'
	},
	props: {
		// 设置uview-ui组件的默认属性值
		icon: {
			size: 70
		}
	}
})

Vue.config.productionTip = false
// 区分小程序页面组件
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif