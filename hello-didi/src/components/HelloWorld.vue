<template>
  <div class="hello">
      <!-- <vm-page @forPages="hasPages" :is-show="list.length>0"></vm-page> -->
      <cube-button @click="showDateTimePicker">Date Time Picker</cube-button>
      <cube-button @click="showPicker">Picker</cube-button>
      <cube-button @click="showCascadePicker">Cascade Picker</cube-button>
  </div>
</template>

<script>
const column1 = [{ text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' },
  { text: '幽鬼', value: '幽鬼' }]
const cascadeData = [
  {
    value: 'Fruit',
    text: 'Fruit',
    children: [
      {
        value: 'Apple',
        text: 'Apple',
        children: [{ value: 1, text: 'One' }, { value: 2, text: 'Two' }]
      },
      {
        value: 'Orange',
        text: 'Orange',
        children: [{ value: 3, text: 'Three'}, { value: 4, text: 'Four' }]
      }
    ]
  },
  {
    value: 'Drink',
    text: 'Drink',
    children: [
      {
        value: 'Coffee',
        text: 'Coffee',
        children: [{ value: 1, text: 'One' }, { value: 2, text: 'Two' }]
      },
      {
        value: 'Tea',
        text: 'Tea',
        children: [{ value: 1, text: 'One' }, { value: 3, text: 'Three'}]
      }
    ]
  }
]
  
export default {
    created() {
        console.log(this.$route,'$route');
    },
    mounted () {
        this.cascadePicker = this.$createCascadePicker({
        title: 'Cascade Picker',
        data: cascadeData,
        selectedIndex: [0, 1, 0],
        onSelect: this.selectHandle3,
        onCancel: this.cancelHandle3
        })
    },
  methods: {
    //   --- date Time picker
    showDateTimePicker() {
        if (!this.dateTimePicker) {
            this.dateTimePicker = this.$createDatePicker({
            title: 'Date Time Picker',
            min: new Date(2008, 7, 8, 8, 0, 0),
            max: new Date(2020, 9, 20, 20, 59, 59),
            value: new Date(),
            columnCount: 6,
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
            })
        }
        this.dateTimePicker.show()
    },
    selectHandle(date, selectedVal, selectedText) {
        console.log("date",date)
        console.log("selectedVal",selectedVal)
        console.log("selectedText",selectedText)
    },
    cancelHandle() {
      console.log(123456)
    },
    // --- date Time picker end ---
    // --- picker start
    showPicker() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: 'Picker',
          data: [column1],
          onSelect: this.selectHandle2,
          onCancel: this.cancelHandle2
        })
      }
      this.picker.show()
    },
    selectHandle2(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: 'warn',
        content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
        icon: 'cubeic-alert'
      }).show()
    },
    cancelHandle2() {
      this.$createToast({
        type: 'correct',
        txt: 'Picker canceled',
        time: 1000
      }).show()
    },
    // --- picker end ---

    // --- Cascade Picker start
    showCascadePicker() {
      this.cascadePicker.show()
    },
    selectHandle3(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: 'warn',
        content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
        icon: 'cubeic-alert'
      }).show()
    },
    cancelHandle3() {
      this.$createToast({
        type: 'correct',
        txt: 'Picker canceled',
        time: 1000
      }).show()
    }
    // --- Cascade Picker end



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
