import Picker from '../picker/picker.vue'
import Select from '../select/select.vue'
import addPicker from '../picker/api'
import Locale from '../../common/locale'

Select.install = function (Vue) {
  Vue.component(Picker.name, Picker)
  Vue.component(Select.name, Select)
  Locale.install(Vue)
  addPicker(Vue, Picker)
}

Select.Picker = Picker

export default Select
