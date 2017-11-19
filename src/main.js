import Vue from 'vue'
import Radar from './radar.vue'
// import CounterPlus from './counter-plus.vue'
import CounterMinus from './counter-minus.vue'

new Vue({
  el: '#radar',
  render: h => h(Radar)
})

new Vue({
  el: '#counter-plus',
  render: h => h(CounterPlus)
})

new Vue({
  el: '#counter-minus',
  render: h => h(CounterMinus)
})