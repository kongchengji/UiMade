<template>
  <div class="hello">
    <h2> 选择器组件 </h2>
    <wzcSelect :width="240" :height="50">
      <template v-slot:wzc_option>
				<wzc_option v-for="(item) in showlist"
        :key="item.item_id"
        :label="item.item_name"
        :optionid="item.item_id"></wzc_option>
			</template>
    </wzcSelect>

    <h2> switch开关 </h2>
    <div class="buttonlist">
      <wzc_switch
        ctive-color="#13ce66"
        inactive-color="#ff4949">
      </wzc_switch>
    </div>

    <h2> 按钮组件 </h2>
    <h3> 基础用法 </h3>
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
    <h3> 加载按钮 </h3>
    <div class="buttonlist">
      <wzc_button type="primary" :loading="isload" @click.native="reload" > 主要按钮 </wzc_button>
      <wzc_button :type="buttype" :loading="isload2" @click.native="reload2" > 随机切换 </wzc_button>
      <wzc_button type="warning" :loading="true" > 加载按钮 </wzc_button>
    </div>
    <h3> 禁用按钮 </h3>
    <div class="buttonlist">
      <wzc_button disabled > 默认按钮 </wzc_button>
      <wzc_button disabled type="primary"> 主要按钮 </wzc_button>
      <wzc_button disabled type="success"> 成功按钮 </wzc_button>
      <wzc_button disabled type="info"> 信息按钮 </wzc_button>
      <wzc_button disabled type="warning"> 警告按钮 </wzc_button>
      <wzc_button disabled type="danger"> 危险按钮 </wzc_button>
    </div>
    <div class="buttonlist">
      <wzc_button disabled plain> 朴素按钮 </wzc_button>
      <wzc_button disabled plain type="primary"> 主要按钮 </wzc_button>
      <wzc_button disabled plain type="success"> 成功按钮 </wzc_button>
      <wzc_button disabled plain type="info"> 信息按钮 </wzc_button>
      <wzc_button disabled plain type="warning"> 警告按钮 </wzc_button>
      <wzc_button disabled plain type="danger"> 危险按钮 </wzc_button>
    </div>
    <h3> 图标按钮 </h3>
    <div class="buttonlist">
      <wzc_button ><i class="fa fa-cubes"></i>文件</wzc_button>
      <wzc_button type="primary"> 眼睛<i class="fa fa-eye"></i> </wzc_button>
      <wzc_button type="success"> <i class="fa fa-commenting-o"></i> 聊天 </wzc_button>
      <wzc_button type="info"   > <i class="fa fa-drivers-license"></i> 身份证 </wzc_button>
    </div>
  </div>
</template>

<script>
  import wzcSelect from './select/wzc-select' 
  import wzc_option from './select/wzc-option'
  import wzc_button from './button/wzc-button'
  import wzc_switch from './Switch/wzc-switch'
  export default {
    name: 'HelloWorld',
    components: { 
      wzcSelect, wzc_option, wzc_button,wzc_switch
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
          {
            item_name: '选项3',
            item_id: '3',
          },
        ],
        isload: true,
        isload2: false,
        isloadindex: 0,
        isloadindex2: 0,
        buttype: 'primary',
        but_array: ['success', 'primary', 'danger', 'info', 'warning'],
      }
    },
    mounted () {
      let _this = this;
      this.isloadindex = setTimeout(function(){
        _this.isload = false;
      }, 3000)
    },
    methods: {
      reload () {
        let _this = this;
        _this.isload = true;
        clearTimeout(_this.isloadindex)
        this.isloadindex = setTimeout(function(){
          _this.isload = false;
        }, 3000)
      },
      reload2 () {
        let _this = this;
        _this.isload2 = true;
        clearTimeout(_this.isloadindex2)
        this.isloadindex2 = setTimeout(function(){
          _this.isload2 = false;
          _this.buttype = _this.but_array[Math.floor(Math.random() * (6))];
        }, 3000)
      }
    }
  }
</script>


<style scoped>
  .wzc_select {
    margin: 30px auto;
  }
  h3, h2 {
    margin-left: calc(50% - 550px);
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
