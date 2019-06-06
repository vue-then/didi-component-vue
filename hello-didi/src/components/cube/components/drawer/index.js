import Drawer from './drawer.vue'
import DrawerPanel from './drawer-panel.vue'
import DrawerItem from './drawer-item.vue'

Drawer.install = function (Vue) {
  Vue.component(Drawer.name, Drawer)
  Vue.component(DrawerPanel.name, DrawerPanel)
  Vue.component(DrawerItem.name, DrawerItem)
}

Drawer.Panel = DrawerPanel
Drawer.Item = DrawerItem

export default Drawer
