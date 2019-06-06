import ScrollNav from './scroll-nav.vue'
import ScrollNavPanel from './scroll-nav-panel.vue'
import ScrollNavBar from "../scroll-nav-bar/scroll-nav-bar.vue";

ScrollNav.install = function (Vue) {
  Vue.component(ScrollNav.name, ScrollNav)
  Vue.component(ScrollNavPanel.name, ScrollNavPanel)
  Vue.component(ScrollNavBar.name, ScrollNavBar)
}

ScrollNav.Panel = ScrollNavPanel
ScrollNav.Bar = ScrollNavBar

export default ScrollNav
