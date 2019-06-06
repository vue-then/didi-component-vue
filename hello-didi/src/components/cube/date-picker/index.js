import Picker from './picker.vue'
import DatePicker from "./date-picker.vue";
import addDatePicker from './api'
import Locale from "../common/locale";

import addPicker from "../components/picker/api";
import CascadePicker from "../components/cascade-picker";
import addCascadePicker from "../components/cascade-picker/api";


DatePicker.install = function (Vue) {
  Vue.component(Picker.name, Picker)
  Vue.component(CascadePicker.name, CascadePicker)
  Vue.component(DatePicker.name, DatePicker)
  Locale.install(Vue)

  addPicker(Vue, Picker)
  addCascadePicker(Vue, CascadePicker)
  addDatePicker(Vue, DatePicker)
}

DatePicker.Picker = Picker
CascadePicker.Picker = Picker
DatePicker.CascadePicker = CascadePicker





export default DatePicker;
