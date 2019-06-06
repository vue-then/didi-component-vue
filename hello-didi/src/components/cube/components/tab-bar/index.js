import TabBar from './tab-bar.vue'
import Tab from './tab.vue'
TabBar.install = function (Vue) {
  Vue.component(TabBar.name, TabBar)
  Vue.component(Tab.name, Tab)
}

TabBar.Tab = Tab

export default TabBar
