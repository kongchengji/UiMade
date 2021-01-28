# 按钮组件

可以显示不同状态的按钮

```html
// 使用方式 中间部分为按钮显示内容
<wzc_button> 默认按钮 </wzc_button>
// 绑定点击事件，使用@click时需要加.native
<wzc_button plain type="danger" @click.native="buttonAlert">
  危险按钮
</wzc_button>
<script>
  //buttonAlert(e) {
  //   alert(`点击---${e.target.innerText}`)
  //}
</script>
```

<wzc_button @click.native="buttonAlert"> 默认按钮 </wzc_button>
<wzc_button type="primary" @click.native="buttonAlert">
主要按钮
</wzc_button>

### 可传递参数

| 参数     | 说明     | 类型    | 默认值  | 可选值                                  |
| -------- | -------- | ------- | ------- | --------------------------------------- |
| type     | 按钮类别 | string  | default | primary、success、info、warning、danger |
| plain    | 朴素按钮 | Boolean | false   |                                         |
| round    | 圆角按钮 | Boolean | false   |                                         |
| circle   | 圆形按钮 | Boolean | false   |                                         |
| loading  | 按钮加载 | Boolean | false   |                                         |
| disabled | 禁用按钮 | Boolean | false   |                                         |

<br/>
