# 下拉选择器

### 调用方式
``` html
    <wzcSelect :width="240" :height="50">
      <template v-slot:wzc_option>
		<wzc_option v-for="(item) in showlist"
        :key="item.item_id"
        :label="item.item_name"
        :optionid="item.item_id"></wzc_option>
		</template>
    </wzcSelect>
```



``` html
showlist: [
    {
    item_name: '选项0',
    item_id: '0',
    },
    {
    item_name: '选项1',
    item_id: '1',
    },
    {
    item_name: '选项2',
    item_id: '2',
    },
]
```

### 传入数据
| 参数 | 说明 | 类型 | 默认值 |
|--|--|--|--|
| width | 选择器宽度 | number | 180 |
| height | 选择器高度 | number | 40 |
| showlist | 下拉框需要显示的内容 | array | |

<br/>