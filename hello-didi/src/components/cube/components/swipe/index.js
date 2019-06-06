import Swipe from './swipe.vue'
import SwipeItem from './swipe-item.vue'

Swipe.install = function (Vue) {
  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
}

Swipe.Item = SwipeItem

export default Swipe
