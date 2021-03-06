import Dialog from './dialog.vue'
import Locale from '../../common/locale'
import Input from '../input/input.vue'
import addDialog from './api'

Dialog.install = function (Vue) {
  Vue.component(Input.name, Input)
  Vue.component(Dialog.name, Dialog)
  Locale.install(Vue)
  addDialog(Vue, Dialog)
}

Dialog.Input = Input

export default Dialog
