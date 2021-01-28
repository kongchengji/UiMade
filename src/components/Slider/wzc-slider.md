# Slider 滑块组件

通过拖动滑块在一个固定区间内进行选择

### 使用代码

```html
// 使用方式 sliderValue是0-100的数值
<wzc_slider :value.sync="sliderValue" :width="800"></wzc_slider>
<wzc_slider :value.sync="sliderValue3" disabled></wzc_slider>
<wzc_slider :value.sync="sliderValue" :backgroundcolor="'#13ce66'"></wzc_slider>
<wzc_slider
  :value.sync="sliderValue"
  :backgroundcolor="'#1f5ae0'"
  :step="10"
></wzc_slider>
<wzc_slider
  :value.sync="sliderValue"
  :backgroundcolor="'#cc00ff'"
  :step="10"
  show-stop
></wzc_slider>
```

### 可传递参数

| 参数            | 说明           | 类型    | 默认值  | 可选值                      |
| --------------- | -------------- | ------- | ------- | --------------------------- |
| value           | 滑块当前进度   | Number  | 0       | 数值的取舍应当在 0-100 之间 |
| width           | 滑块条的长度   | Number  | 550     |                             |
| backgroundcolor | 滑块条颜色     | String  | #409eff |                             |
| step            | 步长           | Number  | 0       | 将滑块条进行分段            |
| showStop        | 是否显示间隔点 | Boolean | false   |                             |
| disabled        | 禁止使用       | Boolean | false   |                             |

<br/>
