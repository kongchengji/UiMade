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

### 基础用法
<div class="demo-box">
  <div class="demo-block" style="display:flex;margin: 30px;">
    <wzc_button style="margin:0 20px" > 默认按钮 </wzc_button>
    <wzc_button style="margin:0 20px" type="primary" > 主要按钮 </wzc_button>
    <wzc_button style="margin:0 20px" type="success" >  成功按钮 </wzc_button>
    <wzc_button style="margin:0 20px" type="info" >  信息按钮 </wzc_button>
    <wzc_button style="margin:0 20px" type="warning" >  警告按钮 </wzc_button>
    <wzc_button style="margin:0 20px" type="danger"> 危险按钮 </wzc_button>
  </div>
</div>

``` html
<wzc_button > 默认按钮 </wzc_button>
<wzc_button type="primary"> 主要按钮 </wzc_button>
<wzc_button type="success" >  成功按钮 </wzc_button>
<wzc_button type="info" >  信息按钮 </wzc_button>
<wzc_button type="warning" >  警告按钮 </wzc_button>
<wzc_button type="danger" > 危险按钮 </wzc_button>
```

### 朴素按钮
<div class="demo-box">
  <div class="demo-block" style="display:flex;margin: 30px;">
    <wzc_button plain style="margin:0 20px"> 朴素按钮 </wzc_button>
    <wzc_button plain style="margin:0 20px" type="primary"> 主要按钮 </wzc_button>
    <wzc_button plain style="margin:0 20px" type="success"> 成功按钮 </wzc_button>
    <wzc_button plain style="margin:0 20px" type="info"> 信息按钮 </wzc_button>
    <wzc_button plain style="margin:0 20px" type="warning"> 警告按钮 </wzc_button>
    <wzc_button plain style="margin:0 20px" type="danger"> 危险按钮 </wzc_button>
  </div>
</div>

``` html
<wzc_button plain> 朴素按钮 </wzc_button>
<wzc_button plain type="primary"> 主要按钮 </wzc_button>
<wzc_button plain type="success"> 成功按钮 </wzc_button>
<wzc_button plain type="info"> 信息按钮 </wzc_button>
<wzc_button plain type="warning"> 警告按钮 </wzc_button>
<wzc_button plain type="danger"> 危险按钮 </wzc_button>
```

### 圆角按钮
<div class="demo-box">
  <div class="demo-block" style="display:flex;margin: 30px;">
      <wzc_button round style="margin:0 20px" > 圆角按钮 </wzc_button>
      <wzc_button round style="margin:0 20px" type="primary"> 主要按钮 </wzc_button>
      <wzc_button round style="margin:0 20px" type="success"> 成功按钮 </wzc_button>
      <wzc_button round style="margin:0 20px" type="info"> 信息按钮 </wzc_button>
      <wzc_button round style="margin:0 20px" type="warning"> 警告按钮 </wzc_button>
      <wzc_button round style="margin:0 20px" type="danger"> 危险按钮 </wzc_button>
  </div>
</div>

``` html
<wzc_button round> 圆角按钮 </wzc_button>
<wzc_button round type="primary"> 主要按钮 </wzc_button>
<wzc_button round type="success"> 成功按钮 </wzc_button>
<wzc_button round type="info"> 信息按钮 </wzc_button>
<wzc_button round type="warning"> 警告按钮 </wzc_button>
<wzc_button round type="danger"> 危险按钮 </wzc_button>
```

### 圆形按钮
<div class="demo-box">
  <div class="demo-block" style="display:flex;margin: 30px;">
    <wzc_button circle style="margin:0 20px"><i class="fa fa-cubes"></i></wzc_button>
    <wzc_button circle style="margin:0 20px" type="primary"> <i class="fa fa-eye"></i> </wzc_button>
    <wzc_button circle style="margin:0 20px" type="success">  <i class="fa fa-commenting-o"></i></wzc_button>
    <wzc_button circle style="margin:0 20px" type="info">  <i class="fa fa-drivers-license"></i></wzc_button>
    <wzc_button circle style="margin:0 20px" type="warning">  <i class="fa fa-envelope-open-o"></i></wzc_button>
    <wzc_button circle style="margin:0 20px" type="danger">  <i class="fa fa-file-archive-o"></i></wzc_button>
  </div>
</div>

``` html
<wzc_button circle><i class="fa fa-cubes"></i></wzc_button>
<wzc_button circle type="primary"> <i class="fa fa-eye"></i> </wzc_button>
<wzc_button circle type="success">  <i class="fa fa-commenting-o"></i></wzc_button>
<wzc_button circle type="info">  <i class="fa fa-drivers-license"></i></wzc_button>
<wzc_button circle type="warning">  <i class="fa fa-envelope-open-o"></i></wzc_button>
<wzc_button circle type="danger">  <i class="fa fa-file-archive-o"></i></wzc_button>
```


### 禁用按钮
<div class="demo-box">
  <div class="demo-block" style="display:flex;margin: 30px;">
    <wzc_button disabled style="margin:0 20px"> 默认按钮 </wzc_button>
    <wzc_button disabled style="margin:0 20px" type="primary"> 主要按钮 </wzc_button>
    <wzc_button disabled style="margin:0 20px" type="success"> 成功按钮 </wzc_button>
    <wzc_button disabled style="margin:0 20px" type="info"> 信息按钮 </wzc_button>
    <wzc_button disabled style="margin:0 20px" type="warning"> 警告按钮 </wzc_button>
    <wzc_button disabled style="margin:0 20px" type="danger"> 危险按钮 </wzc_button>
  </div>
</div>

``` html
<wzc_button disabled> 默认按钮 </wzc_button>
<wzc_button disabled type="primary"> 主要按钮 </wzc_button>
<wzc_button disabled type="success"> 成功按钮 </wzc_button>
<wzc_button disabled type="info"> 信息按钮 </wzc_button>
<wzc_button disabled type="warning"> 警告按钮 </wzc_button>
<wzc_button disabled type="danger"> 危险按钮 </wzc_button>
```

### 其他更多组件示例可见```概览```

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
