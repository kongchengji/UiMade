<template>
  <div class="hello">
    <wzcSelect :width="200" :height="50">
      <template v-slot:wzc_option>
				<div>尾部界面</div>
			</template>
    </wzcSelect>
  </div>
</template>

<script>
  import wzcSelect from './select/wzc-select' 
  export default {
    name: 'HelloWorld',
    components: { 
      wzcSelect
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        showlist: [
          {
            item_name: '选项1',
            item_id: 0,
          }
        ]
      }
    }
  }
</script>


<style scoped>
  #wzc_select {
    margin: 30px auto;
    background-color: 'red';
  }
</style>
