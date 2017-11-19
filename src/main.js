import Vue from 'vue'
import Radar from './radar.vue'
import Counter from './counter.vue'

new Vue({
  el: '#radar',
  render: h => h(Radar)
})

new Vue({
  el: '#counter',
  render: h => h(Counter)
})