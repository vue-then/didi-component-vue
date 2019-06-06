import RadioGroup from './radio-group.vue'
import Radio from './radio.vue'

RadioGroup.install = function (Vue) {
  Vue.component(RadioGroup.name, RadioGroup)
  Vue.component(Radio.name, Radio)
}

RadioGroup.Radio = Radio

export default RadioGroup
