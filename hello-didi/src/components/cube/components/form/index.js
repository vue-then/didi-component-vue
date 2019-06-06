import Form from './form.vue'
import FormGroup from './form-group.vue'
import FormItem from './form-item.vue'
import Locale from '../../common/locale'

import Validator from '../validator/validator.vue'
import { addRule, addMessage, addType } from '../../common/helpers/validator'

Form.install = function (Vue) {
  Vue.component(Form.name, Form)
  Vue.component(FormGroup.name, FormGroup)
  Vue.component(FormItem.name, FormItem)
  Vue.component(Validator.name, Validator)
  Locale.install(Vue)
  Validator._base = Vue // get Vue.prototye when Validator.addMessage()
}

Form.Group = FormGroup
Form.Item = FormItem
Form.Validator = Validator

Validator.addRule = addRule
Validator.addMessage = addMessage
Validator.addType = addType
Validator.addHelper = Locale.addHelper

export default Form
