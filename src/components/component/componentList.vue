<template>
  <div id="componentList">
      <catalog :chapter-list='chapterList'  ></catalog>
  </div>
</template>

<script>
    import catalog from '../catalog/wzc-catalog'
    import markdownShow from '../markdownShow/markdownShow'
    import $ from 'jquery'
    export default {
        name: 'componentList',
        components: { catalog },
        props: {},
        data() {
            return {
                chapterList: [
                    {
                        title: '更新日志',
                        type: '1',
                        id: 'gengxinrizhi',
                        href: '#/compentList',
                    },
                    {
                        title: '组件列表',
                        type: '0',
                        id: 'zujianliebiao',
                        href: '#/compentList',
                    },
                    {
                        title: 'S',
                        type: '4',
                        id: 'headline_S',
                        href: '#/compentList',
                    },
                    {
                        title: 'Select 选择器',
                        type: '2',
                        id: 'selectBox',
                        href: '#/compentList',
                    }
                ]
            };
        },
        created() {},
        mounted() {},
        watch: {},
        computed: {},
        methods: {},
    };
</script>
<style scoped>
    #componentList {
        width: calc(50% + 550px);
        height: calc(100% - 60px);
        margin-left: calc(50% - 550px);
        display: flex;
        
    }
    #catalog {
        width: 260px;
        border-right: 1px dotted #333;
        box-sizing: border-box;
    }
</style>