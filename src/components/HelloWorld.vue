<template>
  <div class="hello">
    <h2>DividingLine 分割线</h2>
    <div class="buttonlist" style="display: block">
      <div class="fenge">基础分割线</div>
      <wzc_dividingline></wzc_dividingline>
      <div class="fenge">分割线宽高调整 宽度800，高15, 颜色设置为#FF0000</div>
      <wzc_dividingline :width="800" :height="15" color="#FF0000">
        <template v-slot:wzc_divide_title>
          <i class="fa fa-bed"></i>
        </template>
      </wzc_dividingline>
      <div class="fenge">分割线上设置内容和位置</div>
      <wzc_dividingline>
        <template v-slot:wzc_divide_title>
          <div>空城机的组件</div>
        </template>
      </wzc_dividingline>
      <wzc_dividingline title-position="center" color="#0000FF">
        <template v-slot:wzc_divide_title>
          <i class="fa fa-check-square"></i>
        </template>
      </wzc_dividingline>
      <wzc_dividingline title-position="right">
        <template v-slot:wzc_divide_title>
          <div>空城机<i class="fa fa-eye-slash"></i></div>
        </template>
      </wzc_dividingline>
      <div class="fenge">分割线垂直</div>
      <div class="buttonlist">
        <wzc_dividingline title-position="center" vertical :height="100">
          <template v-slot:wzc_divide_title>
            <i class="fa fa-check-square"></i>
          </template>
        </wzc_dividingline>
        <wzc_dividingline title-position="top" vertical :height="100">
          <template v-slot:wzc_divide_title>
            <i class="fa fa-check-square"></i>
          </template>
        </wzc_dividingline>
        <wzc_dividingline title-position="bottom" vertical :height="100">
          <template v-slot:wzc_divide_title>
            <i class="fa fa-check-square"></i>
          </template>
        </wzc_dividingline>
        <wzc_dividingline title-position="center" vertical :height="100">
          <template v-slot:wzc_divide_title>
            空城机
          </template>
        </wzc_dividingline>
      </div>
    </div>

    <h2>TimeLine 时间线</h2>
    <div class="buttonlist">
      <wzc_timeline>
        <wzc_timeline_option
          v-for="(item, index) in activities"
          :key="index"
          :timestamp="item.timestamp"
          :size="item.size"
          :icon="item.icon"
        >
          <div v-html="item.content"></div>
        </wzc_timeline_option>
      </wzc_timeline>
    </div>

    <h2>Select 选择器</h2>
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
    <div class="sliders">
      <div class="buttonlist">
        <div class="sliders_text">基础使用value = {{ sliderValue }}</div>
        <wzc_slider :value.sync="sliderValue"></wzc_slider>
      </div>
      <div class="buttonlist">
        <div class="sliders_text">设置颜色</div>
        <wzc_slider
          :value.sync="sliderValue"
          :backgroundcolor="'#13ce66'"
        ></wzc_slider>
      </div>
      <div class="buttonlist">
        <div class="sliders_text">设置显示步长为10</div>
        <wzc_slider
          :value.sync="sliderValue2"
          :backgroundcolor="'#1f5ae0'"
          :step="10"
        ></wzc_slider>
      </div>
      <div class="buttonlist">
        <div class="sliders_text">设置显示间隔点</div>
        <wzc_slider
          :value.sync="sliderValue2"
          :backgroundcolor="'#cc00ff'"
          :step="10"
          show-stop
        ></wzc_slider>
      </div>
      <div class="buttonlist">
        <div class="sliders_text">设置为禁用</div>
        <wzc_slider :value.sync="sliderValue3" disabled></wzc_slider>
      </div>
      <div class="buttonlist">
        <div class="sliders_text">设置宽度为800px</div>
        <wzc_slider
          :value.sync="sliderValue"
          :backgroundcolor="'#eded11'"
          :width="800"
        ></wzc_slider>
      </div>
    </div>

    <h2>颜色选择器</h2>
    <div>
      <div class="buttonlist">
        <div class="color_picker_dom">
          父组件接收到选择的颜色：
          <div :style="{ 'background-color': color1 }">{{ color1 }}</div>
        </div>
        <wzc_color_picker :color.sync="color1"> </wzc_color_picker>
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
        <wzc_switch :value.sync="isMove1"> </wzc_switch>
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
import wzc_color_picker from "./ColorPicker/wzc-color-picker";
import wzc_timeline from "./TimeLine/wzc-timeline";
import wzc_timeline_option from "./TimeLine/wzc-timeline-option";
import wzc_dividingline from "./DividingLine/wzc-dividingline";

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
    wzc_timeline,
    wzc_timeline_option,
    wzc_dividingline,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      color1: "#ffff00",
      sliderValue: 30,
      sliderValue2: 20,
      sliderValue3: 42,
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
      activities: [
        {
          content: `
          <p>
            开始编写组件的工作，时间轴路线发动
            <br>不学了，真香
          </p>`,
          timestamp: "2018-04-12 20:46",
          size: "18px",
          icon: "",
        },
        {
          content: `
          <p>道德经·第一章 <br><em>作者：老子</em></p>
          <ul>
            <li>道可道，非常道；名可名，非常名</li>
            <li>无名，天地之始，有名，万物之母</li>
            <li>故常无欲，以观其妙，常有欲，以观其徼</li>
            <li>此两者，同出而异名，同谓之玄，玄之又玄，众妙之门</li>
          </ul>`,
          timestamp: "8月16日",
          size: "14px",
          icon: "fa-grav",
        },
        {
          content: `
          <p>山海经·南山经 <br><em>作者：不详</em></p>
          <p>南山经之首曰䧿山。其首曰招摇之山，临于西海之上，多桂，多金玉。有草焉，其状如韭而青华，其名曰祝馀，食之不饥。有木焉，其状如榖而黑理，其华四照。其名曰迷榖，佩之不迷。有兽焉，其状如禺而白耳，伏行人走，其名曰狌狌，食之善走。丽麂之水出焉，而西流注于海，其中多育沛，佩之无瘕疾。</p>
          <p>又东三百里，曰堂庭之山。多棪木，多白猿，多水玉，多黄金。 </p>
          <p>又东三百八十里，曰猨翼之山，其中多怪兽，水多怪鱼。多白玉，多蝮虫，多怪蛇，多怪木，不可以上。 </p>
          <p>又东三百七十里，曰杻阳之山，其阳多赤金，其阴多白金。有兽焉，其状如马而白首，其文如虎而赤尾，其音如谣，其名曰鹿蜀，佩之宜子孙。怪水出焉，而东流注于宪翼之水。其中多玄龟，其状如龟而鸟首虺尾，其名曰旋龟，其音如判木，佩之不聋，可以为底。</p>`,
          timestamp: "2020年9月21日",
          size: "14px",
          icon: "fa-free-code-camp",
        },
      ],
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
  margin:0 auto;
  width: 1100px;
}
.buttonlist {
  margin: 30px auto;
  width: 1100px;
  display: flex;
  flex-wrap: wrap;
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
.color_picker_dom > div {
  height: 24px;
  line-height: 24px;
}
.wzc_color_picker {
  margin: 0 30px;
}
.sliders .buttonlist {
  line-height: 40px;
}
.wzc_slider {
  margin: 0 30px;
}
.sliders_text {
  width: 200px;
}
.fenge {
  margin: 15px 0px;
  width: 100%;
  background-color: blanchedalmond;
}
</style>
