import TabPanels from './tab-panels.vue'
import TabPanel from './tab-panel.vue'

TabPanels.install = function (Vue) {
  Vue.component(TabPanels.name, TabPanels)
  Vue.component(TabPanel.name, TabPanel)
}

TabPanels.Panel = TabPanel

export default TabPanels
