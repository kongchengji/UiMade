# 分割线

可以调用分割线组件，来对界面内容进行分割

### 使用代码

```html
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
  <wzc_dividingline vertical :height="100"> </wzc_dividingline>
</div>
```

### 可传递参数

| 参数          | 说明                 | 类型    | 默认值  | 可选值                                                                                                                               |
| ------------- | -------------------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| width         | 分割线宽度           | Number  | -1      |                                                                                                                                      |
| height        | 分割线高度           | Number  | 24      |                                                                                                                                      |
| titlePosition | 分割线上文本内容位置 | String  | left    | left(水平状态下，靠近左边) right(水平状态下，靠近右边) center(居于分割线中间) top(竖直状态下，靠近顶部) bottom(竖直状态下，靠近底部) |
| vertical      | 让分割线竖直         | Boolean | false   |                                                                                                                                      |
| color         | 分割线颜色           | String  | #dcdfe6 |                                                                                                                                      |

<br/>
