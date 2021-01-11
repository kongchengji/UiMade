<template>
  <div class="hello">
    <wzcSelect></wzcSelect>
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
        msg: 'Welcome to Your Vue.js App'
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
