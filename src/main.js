import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data() {
    return {
      currentRoute: location.pathname,
    }
  },
  mounted() {
    // 监听浏览器动作，如 前进、后退
    window.addEventListener('popstate', () => {
      this.currentRoute = location.pathname
    })
  },
  render: (h) => h(App),
})
