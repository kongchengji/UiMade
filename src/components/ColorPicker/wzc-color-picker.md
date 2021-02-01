# colorPicker 颜色选择器

可以进行颜色选择

## 使用方式

<div class="demo-box">
  <div class="demo-block" style="display:flex;margin: 30px;">
    <wzc_color_picker > </wzc_color_picker>
  </div>
</div>



```html
// color : ffff00 
<wzc_color_picker :color.sync="color1"> </wzc_color_picker>
```

## 可传递参数

| 参数  | 说明                                 | 类型   | 默认值  | 可选值                          |
| ----- | ------------------------------------ | ------ | ------- | ------------------------------- |
| color | 传入的颜色，并且进行颜色属性双向绑定 | string | #FF0000 | 可使用十六进制颜色或者 rgb 颜色 |

<br/>
