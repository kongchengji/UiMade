# TimeLine 时间线

展示某个时间历程，以竖直方式展现

### 调用方式

```html
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

<script>
  activities: [
    {
      content: `
          <p>
            开始编写组件的工作，时间轴路线发动
            <br>不学了，真香
          </p>`,
      timestamp: "2018-04-12 20:46",
      size: "18px",
      icon: ""
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
      icon: "fa-grav"
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
      icon: "fa-free-code-camp"
    }
  ];
</script>
```

### 传入数据
| 参数 | 说明 | 类型 | 默认值 |
|--|--|--|--|
| timestamp | 时间 | string |  |
| size | 字体大小 | string | 16px |
| icon | 时间轴上的图标 | String | |
| content | 具体内容 | String | 可以使用html文本 |

<br/>
