import App from './App'
// #ifndef VUE3
import Vue from 'vue'
// style
import './style/flex.css'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
// app.config.globalProperties.$axios=axios
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'

//  --- uview ---
// import uView from 'uview-ui'
// Vue.use(uView)
// 
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif