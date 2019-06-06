import Picker from '../../components/picker'
import CascadePicker from './cascade-picker'
import addCascadePicker from './api'
import addPicker from '../picker/api'
import Locale from '../../common/locale'

CascadePicker.install = function (Vue) {
  Vue.component(Picker.name, Picker)
  Vue.component(CascadePicker.name, CascadePicker)
  Locale.install(Vue)
  addPicker(Vue, Picker)
  addCascadePicker(Vue, CascadePicker)
}

CascadePicker.Picker = Picker

export default CascadePicker
