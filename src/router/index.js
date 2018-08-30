import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Wallet from '../components/Wallet.vue'
import Choice from '../components/Choice.vue'
import Addwallet from '../components/Addwallet.vue'
import Color from '../components/Color.vue'
import Receiving from '../components/Receiving .vue'
import Send from '../components/Send.vue'
import ReceiveBi from '../components/ReceiveBi.vue'
import ImportBi from '../components/Import.vue'
import Backups from '../components/Backups.vue'
import Locker from '../components/loker.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/index' },
    {
      path: '/index',
      component: Index
    }, {
      path: '/wallet',
      component: Wallet
    }, {
      path: '/choice',
      component: Choice
    }, {
      path: '/addwallet',
      component: Addwallet
    }, {
      path: '/color',
      component: Color
    }, {
      path: '/receiving',
      component: Receiving
    }, {
      path: '/send',
      component: Send
    }, {
      path: '/receivebi',
      component: ReceiveBi

    }, {
      path: '/importbi',
      component: ImportBi
    },
    {
      path: '/backups',
      component: Backups
    },
    {
      path: '/locker',
      component: Locker
    }
  ]
})
