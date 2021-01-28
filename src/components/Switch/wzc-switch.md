# switch 组件

可以点击选择状态,进行切换

### 使用代码

```html
// 使用方式 isMove1：Boolean
<wzc_switch :value.sync="isMove1"> </wzc_switch>
<wzc_switch
  active-color="#13ce66"
  inactive-color="#ff4949"
  :value.sync="isMove"
>
</wzc_switch>
```

### 可传递参数

| 参数           | 说明            | 类型    | 默认值  | 可选值                                                  |
| -------------- | --------------- | ------- | ------- | ------------------------------------------------------- |
| value          | 状态            | Boolean | false   | 使用时需要在:value 后添加.sync， 目的是同步父子组件数值 |
| inactive-color | switch 开始颜色 | String  | #dcdfe6 |                                                         |
| active-color   | switch 结束颜色 | String  | #dcdfe6 |                                                         |
| width          | switch 宽度     | Number  | 45      |                                                         |
| disabled       | 禁止使用        | Boolean | false   |                                                         |

<br/>
