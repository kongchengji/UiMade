# 图片显示器

可以在网页显示输入的图片，使用该组件时需要导入 element-resize-detector 插件，用处是监听 dom 元素的宽高变化

下载方式：

```javascript
npm install element-resize-detector
```

### 调用方式

``` html
<button @click="picshow = true">展示图片</button>
<wzc_picview :picshow.sync="picshow" :imgarray="imgarray"></wzc_picview>

<script>
  picshow: false,
  imgarray: [
        'https://www.cnblogs.com/skins/buildtowin/images/o_background1440-2.jpg',
        'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
      ]
</script>
```

### 传入数据

| 参数     | 说明               | 类型    | 默认值 |
| -------- | ------------------ | ------- | ------ |
| picshow  | 图片显示器是否展示 | Boolean | false  |
| imgarray | 图片数组           | array   |        |

<br/>
