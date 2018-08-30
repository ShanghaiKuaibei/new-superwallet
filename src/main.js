// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import VueDND from 'awe-dnd'
import 'mint-ui/lib/style.css'
import '../static/lib/font-awesome-4.7.0/css/font-awesome.min.css'
// 二维码
import VueQriously from 'vue-qriously'
// 多语言
import VueI18n from 'vue-i18n'

import LangZh from '../static/lang/zhCn'
import LangEn from '../static/lang/en'
import LangAr from '../static/lang/ar'
import LangEs from '../static/lang/es'
Vue.use(VueQriously)
Vue.use(VueDND)
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: localStorage.getItem('slang') ? localStorage.getItem('slang') : 'en',
  messages: {
    'zhCn': LangZh,
    'en': LangEn,
    'es': LangEs,
    'ar': LangAr
  }
})
// import QRCode from 'qrcode' Vue.use(QRCode)
Vue.config.productionTip = false
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({el: '#app',
  router,
  i18n,
  components: {
    App
  },
  template: '<App/>'})
