<template>
  <div class="hello">
    <h2>选择器组件</h2>
    <wzcSelect :width="240" :height="50">
      <template v-slot:wzc_option>
        <wzc_option
          v-for="item in showlist"
          :key="item.item_id"
          :label="item.item_name"
          :optionid="item.item_id"
        ></wzc_option>
      </template>
    </wzcSelect>

    <h2>slider 滑块</h2>
    <div>
      <div class="buttonlist">
        <wzc_slider :value.sync="sliderValue"></wzc_slider>
      </div>
      <div class="buttonlist">
        <wzc_slider :value.sync="sliderValue" :backgroundcolor="'#13ce66'"></wzc_slider>
      </div>
    </div>

    <h2>颜色选择器</h2>
    <div>
      <div class="buttonlist">
        <div class="color_picker_dom">父组件接收到选择的颜色：<div :style="{ 'background-color': color1 }"> {{ color1 }} </div> </div>
        <wzc_color_picker :color.sync="color1">
        </wzc_color_picker>
        
      </div>
    </div>

    <h2>折叠面板</h2>
    <div>
      <div class="buttonlist">
        <wzc_collapse>
          <wzc_collapse_item></wzc_collapse_item>
        </wzc_collapse>
      </div>
    </div>

    <h2>switch开关</h2>
    <div>
      <div class="buttonlist">
        <h3>正常调用</h3>
        <wzc_switch :value.sync="isMove1" >
        </wzc_switch>
        <wzc_switch
          active-color="#13ce66"
          inactive-color="#ff4949"
          :value.sync="isMove"
        >
        </wzc_switch>
      </div>
      <div class="buttonlist">
        <h3>禁止调用</h3>
        <wzc_switch
          ctive-color="#13ce66"
          inactive-color="#ff4949"
          :value="true"
          disabled
        ></wzc_switch>
        <wzc_switch
          ctive-color="#13ce66"
          inactive-color="#ff4949"
          :value="false"
          disabled
        ></wzc_switch>
      </div>
    </div>

    <h2>按钮组件</h2>
    <div>
      <h3>基础用法</h3>
      <div class="buttonlist">
        <wzc_button @click.native="buttonAlert"> 默认按钮 </wzc_button>
        <wzc_button type="primary" @click.native="buttonAlert">
          主要按钮
        </wzc_button>
        <wzc_button type="success" @click.native="buttonAlert">
          成功按钮
        </wzc_button>
        <wzc_button type="info" @click.native="buttonAlert">
          信息按钮
        </wzc_button>
        <wzc_button type="warning" @click.native="buttonAlert">
          警告按钮
        </wzc_button>
        <wzc_button type="danger" @click.native="buttonAlert">
          危险按钮
        </wzc_button>
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
        <wzc_button round> 圆角按钮 </wzc_button>
        <wzc_button round type="primary"> 主要按钮 </wzc_button>
        <wzc_button round type="success"> 成功按钮 </wzc_button>
        <wzc_button round type="info"> 信息按钮 </wzc_button>
        <wzc_button round type="warning"> 警告按钮 </wzc_button>
        <wzc_button round type="danger"> 危险按钮 </wzc_button>
      </div>
      <div class="buttonlist">
        <wzc_button circle><i class="fa fa-cubes"></i></wzc_button>
        <wzc_button circle type="primary">
          <i class="fa fa-eye"></i>
        </wzc_button>
        <wzc_button circle type="success">
          <i class="fa fa-commenting-o"></i>
        </wzc_button>
        <wzc_button circle type="info">
          <i class="fa fa-drivers-license"></i>
        </wzc_button>
        <wzc_button circle type="warning">
          <i class="fa fa-envelope-open-o"></i>
        </wzc_button>
        <wzc_button circle type="danger">
          <i class="fa fa-file-archive-o"></i>
        </wzc_button>
      </div>
      <h3>加载按钮</h3>
      <div class="buttonlist">
        <wzc_button type="primary" :loading="isload" @click.native="reload">
          主要按钮
        </wzc_button>
        <wzc_button :type="buttype" :loading="isload2" @click.native="reload2">
          随机切换
        </wzc_button>
        <wzc_button type="warning" :loading="true"> 加载按钮 </wzc_button>
      </div>
      <h3>禁用按钮</h3>
      <div class="buttonlist">
        <wzc_button disabled> 默认按钮 </wzc_button>
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
      <h3>图标按钮</h3>
      <div class="buttonlist">
        <wzc_button><i class="fa fa-cubes"></i>文件</wzc_button>
        <wzc_button type="primary"> 眼睛<i class="fa fa-eye"></i> </wzc_button>
        <wzc_button type="success">
          <i class="fa fa-commenting-o"></i> 聊天
        </wzc_button>
        <wzc_button type="info">
          <i class="fa fa-drivers-license"></i> 身份证
        </wzc_button>
      </div>
    </div>
  </div>
</template>

<script>
import wzcSelect from "./select/wzc-select";
import wzc_option from "./select/wzc-option";
import wzc_button from "./button/wzc-button";
import wzc_switch from "./Switch/wzc-switch";
import wzc_slider from "./Slider/wzc-slider";
import wzc_collapse from "./Collapse/wzc-collapse";
import wzc_collapse_item from "./Collapse/wzc-collapse-item";
import wzc_color_picker from "./ColorPicker/wzc-color-picker"
export default {
  name: "HelloWorld",
  components: {
    wzcSelect,
    wzc_option,
    wzc_button,
    wzc_switch,
    wzc_collapse,
    wzc_collapse_item,
    wzc_color_picker,
    wzc_slider,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      color1:"#ffff00",
      sliderValue: 30,
      showlist: [
        {
          item_name: "选项0",
          item_id: "0",
        },
        {
          item_name: "选项1",
          item_id: "1",
        },
        {
          item_name: "选项2",
          item_id: "2",
        },
        {
          item_name: "选项3",
          item_id: "3",
        },
      ],
      isMove: true,
      isMove1: false,
      isload: true,
      isload2: false,
      isloadindex: 0,
      isloadindex2: 0,
      buttype: "primary",
      but_array: ["success", "primary", "danger", "info", "warning"],
    };
  },
  mounted() {
    let _this = this;
    this.isloadindex = setTimeout(function () {
      _this.isload = false;
    }, 3000);
  },
  methods: {
    clickn() {
      console.log(this.isMove);
    },
    reload() {
      let _this = this;
      _this.isload = true;
      clearTimeout(_this.isloadindex);
      this.isloadindex = setTimeout(function () {
        _this.isload = false;
      }, 3000);
    },
    reload2() {
      let _this = this;
      _this.isload2 = true;
      clearTimeout(_this.isloadindex2);
      this.isloadindex2 = setTimeout(function () {
        _this.isload2 = false;
        _this.buttype = _this.but_array[Math.floor(Math.random() * 6)];
      }, 3000);
    },
    buttonAlert(e) {
      alert(`点击---${e.target.innerText}`);
    },
  },
};
</script>


<style scoped>
.wzc_select {
  margin: 30px auto;
}
h3,
h2 {
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
.wzc_switch {
  margin: 5px 30px;
}
.color_picker_dom {
  width: 280px;
  display: flex;
}
.color_picker_dom>div {
  height: 24px;
  line-height: 24px;
}
.wzc_color_picker {
  margin: 0 30px;
}
</style>
