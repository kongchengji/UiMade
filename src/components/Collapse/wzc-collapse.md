# 折叠面板

通过折叠面板收纳内容区域

### 使用代码

``` html
<h4>基础用法</h4>
<wzc_collapse initCurrent="2">
  <wzc_collapse_item title="杜甫" name="1">
    <div style="font-size:14px;">
      杜甫的思想核心是儒家的仁政思想，他有“致君尧舜上，再使风俗淳”的宏伟抱负。杜甫虽然在世时名声并不显赫，但后来声名远播，对中国文学和日本文学都产生了深远的影响。杜甫共有约1500首诗歌被保留了下来，大多集于《杜工部集》。
    </div>
  </wzc_collapse_item>
  <wzc_collapse_item title="鲁迅" name="2">
    <div style="font-size:14px;">
      鲁迅一生在文学创作、文学批评、思想研究、文学史研究、翻译、美术理论引进、基础科学介绍和古籍校勘与研究等多个领域具有重大贡献。他对于五四运动以后的中国社会思想文化发展具有重大影响，蜚声世界文坛，尤其在韩国、日本思想文化领域有极其重要的地位和影响，被誉为“二十世纪东亚文化地图上占最大领土的作家”。
    </div>
  </wzc_collapse_item>
</wzc_collapse>
<h4>手风琴效果</h4>
<wzc_collapse initCurrent="2" @change="handleChange" accordion>
  <wzc_collapse_item title="杜甫" name="1">
    <div style="font-size:14px;">
      杜甫的思想核心是儒家的仁政思想，他有“致君尧舜上，再使风俗淳”的宏伟抱负。杜甫虽然在世时名声并不显赫，但后来声名远播，对中国文学和日本文学都产生了深远的影响。杜甫共有约1500首诗歌被保留了下来，大多集于《杜工部集》。
    </div>
  </wzc_collapse_item>
  <wzc_collapse_item title="鲁迅" name="2">
    <div style="font-size:14px;">
      鲁迅一生在文学创作、文学批评、思想研究、文学史研究、翻译、美术理论引进、基础科学介绍和古籍校勘与研究等多个领域具有重大贡献。他对于五四运动以后的中国社会思想文化发展具有重大影响，蜚声世界文坛，尤其在韩国、日本思想文化领域有极其重要的地位和影响，被誉为“二十世纪东亚文化地图上占最大领土的作家”。
    </div>
  </wzc_collapse_item>
  <wzc_collapse_item title="冰心" name="3">
    <div style="font-size:14px;">
      原名谢婉莹，福建省福州市长乐区人 ，中国民主促进会（民进）成员。 [1]
      中国诗人，现代作家、翻译家、儿童文学作家、社会活动家、散文家。笔名冰心取自“一片冰心在玉壶”
    </div>
  </wzc_collapse_item>
</wzc_collapse>

<style>
  handleChange (val) {
      console.log(val);
  }
</style>
```

### 可传递参数

| 参数        | 说明                   | 类型    | 默认值 | 可选值                           |
| ----------- | ---------------------- | ------- | ------ | -------------------------------- |
| initCurrent | 当前选择显示的折叠条   | String  | 空     | 数值应在下列折叠条的 name 中选取 |
| title       | 折叠条的名称           | String  | 空     |                                  |
| name        | 折叠条的 id 值         | String  | 空     | 此 id 值不能重复                 |
| accordion   | 折叠面板变为手风琴模式 | Boolean | false  | 每次只能显示一条折叠条           |

<br/>
