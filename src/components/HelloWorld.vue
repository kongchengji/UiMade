<template>
  <div class="hello">
    <h1> 选择器组件 </h1>
    <wzcSelect :width="240" :height="50">
      <template v-slot:wzc_option>
				<wzc_option v-for="(item) in showlist"
        :key="item.item_id"
        :label="item.item_name"
        :optionid="item.item_id"></wzc_option>
			</template>
    </wzcSelect>

    <h1> 按钮组件 </h1>
  </div>
</template>

<script>
  import wzcSelect from './select/wzc-select' 
  import wzc_option from './select/wzc-option'
  export default {
    name: 'HelloWorld',
    components: { 
      wzcSelect, wzc_option
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        showlist: [
          {
            item_name: '选项0',
            item_id: '0',
          },
          {
            item_name: '选项1',
            item_id: '1',
          },
          {
            item_name: '选项2',
            item_id: '2',
          },
        ]
      }
    }
  }
</script>


<style scoped>
  #wzc_select {
    margin: 30px auto;
  }
</style>
