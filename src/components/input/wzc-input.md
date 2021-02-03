# 输入框

封装 input 输入框，模仿 element UI 输入框样式搭建

### 调用方式

```html
<div class="buttonlist">
  <div class="sliders_text">基础输入框</div>
  <wzc_input v-model="input1"></wzc_input>
</div>
<div class="buttonlist">
  <div class="sliders_text">清空输入框</div>
  <wzc_input v-model="input1" clear></wzc_input>
</div>
<div class="buttonlist">
  <div class="sliders_text">密码输入框</div>
  <wzc_input v-model="input1" password></wzc_input>
</div>
<div class="buttonlist">
  <div class="sliders_text">禁用input输入框</div>
  <wzc_input v-model="input1" disabled></wzc_input>
</div>
```

### 基础用法

<div class="UiShow">
    <div class="buttonlist" > 
    <div class="sliders_text"  > 基础输入框 </div>
    <wzc_input ></wzc_input>     
    </div> 
    <div class="buttonlist">  
    </div>
    <div class="buttonlist"> 
    <div class="sliders_text"  > 禁用input输入框 </div>
    <wzc_input disabled></wzc_input>     
    </div> 
</div>

### 其他更多组件示例可见```概览```

### 可传递参数

| 参数        | 说明                         | 类型    | 默认值     | 可选值 |
| ----------- | ---------------------------- | ------- | ---------- | ------ |
| placeholder | 输入框输入说明               | string  | 请输入内容 |        |
| focusColor  | 焦点选中输入框输入框边框颜色 | String  | #0000ff    |        |
| v-model     | 输入框内容                   | string  |            |        |
| password    | 输入框变为密码格式           | Boolean | false      |        |
| clear       | 清除选项                     | Boolean | false      |        |
| disabled    | 是否禁用输入框               | Boolean | false      |        |

<br/>
