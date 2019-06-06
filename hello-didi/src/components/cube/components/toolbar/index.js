import Button from '../button/button.vue'
import Checkbox from '../checkbox/checkbox.vue'
import Toolbar from './toolbar.vue'

Toolbar.install = function (Vue) {
  Vue.component(Button.name, Button)
  Vue.component(Checkbox.name, Checkbox)
  Vue.component(Toolbar.name, Toolbar)
}

Toolbar.Button = Button
Toolbar.Checkbox = Checkbox

export default Toolbar
