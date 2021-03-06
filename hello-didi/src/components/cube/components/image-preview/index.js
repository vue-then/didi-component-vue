import ImagePreview from './image-preview.vue'
import addImagePreview from './api'

ImagePreview.install = function (Vue) {
  Vue.component(ImagePreview.name, ImagePreview)
  addImagePreview(Vue, ImagePreview)
}

export default ImagePreview
