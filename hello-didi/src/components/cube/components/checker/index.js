import Checker from './checker.vue'
import CheckerItem from './checker-item.vue'

Checker.install = function (Vue) {
  Vue.component(Checker.name, Checker)
  Vue.component(CheckerItem.name, CheckerItem)
}

Checker.Item = CheckerItem

export default Checker
