<template>
  <div class="about">
    <cube-loading></cube-loading>
    <cube-button @click="showActionSheet">操作列表</cube-button>
    <cube-checkbox v-model="checked" position="right" shape="square" :hollow-style="true">
        Styled Checkbox
    </cube-checkbox>
    <cube-checker
        v-model="checkerValue"
        :options="options" />
    <cube-button @click="showAlert">Dialog - alert</cube-button>
  </div>
</template>
<script>
export default {
    data() {
        return {
            checked: false,
            option: {
                label: 'Option Checkbox',
                value: 'optionValue',
                disabled: false
            },
            checkList: ['1', '4'],
            checkerValue: [],
            options: [
                {
                value: 1,
                text: 'red'
                },
                {
                value: 2,
                text: 'yellow'
                },
                {
                value: 3,
                text: 'blue'
                },
                {
                value: 4,
                text: 'green'
                }
            ]
        }
    },
  methods: {
      showAlert() {
        this.$createDialog({
            type: 'alert',
            title: '我是标题',
            content: '我是内容',
            icon: 'cubeic-alert'
        }).show()
        },
    showActionSheet() {
      this.$createActionSheet({
        title: '我是标题~~~',
        data: [
          {
            content: '<em>align - center</em>',
            class: 'cube-foo'
          },
          {
            content: 'align - left',
            align: 'left'
          },
          {
            content: 'align - right',
            align: 'right'
          },
        ],
        onSelect: (item) => {
          this.$createToast({
            txt: `Clicked ${item.content}`,
            time: 1000
          }).show()
        }
      }).show()
    }
  }
}
</script>
