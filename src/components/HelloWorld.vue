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
    <div class="buttonlist">
      <wzc_button> 默认按钮 </wzc_button>
      <wzc_button type="primary"> 主要按钮 </wzc_button>
      <wzc_button type="success"> 成功按钮 </wzc_button>
      <wzc_button type="info"> 信息按钮 </wzc_button>
      <wzc_button type="warning"> 警告按钮 </wzc_button>
      <wzc_button type="danger"> 危险按钮 </wzc_button>
    </div>
    <div class="buttonlist">
      <wzc_button plain> 朴素按钮 </wzc_button>
      <wzc_button plain type="primary"> 主要按钮 </wzc_button>
      <wzc_button plain type="success"> 成功按钮 </wzc_button>
      <wzc_button plain type="info"> 信息按钮 </wzc_button>
      <wzc_button plain type="warning"> 警告按钮 </wzc_button>
      <wzc_button plain type="danger"> 危险按钮 </wzc_button>
    </div>
    <div class="buttonlist">
      <wzc_button round > 圆角按钮 </wzc_button>
      <wzc_button round type="primary"> 主要按钮 </wzc_button>
      <wzc_button round type="success"> 成功按钮 </wzc_button>
      <wzc_button round type="info"> 信息按钮 </wzc_button>
      <wzc_button round type="warning"> 警告按钮 </wzc_button>
      <wzc_button round type="danger"> 危险按钮 </wzc_button>
    </div>
    <div class="buttonlist">
      <wzc_button circle ><i class="fa fa-cubes"></i></wzc_button>
      <wzc_button circle type="primary"> <i class="fa fa-eye"></i> </wzc_button>
      <wzc_button circle type="success"> <i class="fa fa-commenting-o"></i> </wzc_button>
      <wzc_button circle type="info"   > <i class="fa fa-drivers-license"></i> </wzc_button>
      <wzc_button circle type="warning"> <i class="fa fa-envelope-open-o"></i> </wzc_button>
      <wzc_button circle type="danger" > <i class="fa fa-file-archive-o"></i> </wzc_button>
    </div>
  </div>
</template>

<script>
  import wzcSelect from './select/wzc-select' 
  import wzc_option from './select/wzc-option'
  import wzc_button from './button/wzc-button'
  export default {
    name: 'HelloWorld',
    components: { 
      wzcSelect, wzc_option, wzc_button
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
  .wzc_select {
    margin: 30px auto;
  }
  h1 {
    margin-left: 20%;
  }
  .buttonlist {
    margin: 30px auto;
    width: 1100px;
    display: flex;
  }
  .buttonlist .wzc_button {
    margin: 0 20px;
  }
</style>
