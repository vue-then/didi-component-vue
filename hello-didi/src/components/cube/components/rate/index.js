import Rate from './rate.vue'
import RateItem from './rate-item.vue'

Rate.install = function(Vue) {
  Vue.component(Rate.name, Rate)
  Vue.component(RateItem.name, RateItem)
}
Rate.Item = RateItem
export default Rate
