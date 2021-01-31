<template>
  <div id="componentList">
        <wzc-catalog :chapter-list='chapterList'  ></wzc-catalog>
        <div id="markdownShow">
            <div class="showCon markdown-body" >
                <router-view/>
            </div>
        </div>
  </div>
</template>

<script>
    import wzcCatalog from '../catalog/wzc-catalog'
    import markdownShow from '../markdownShow/markdownShow'
    import $ from 'jquery'
    export default {
        name: 'componentList',
        components: { wzcCatalog },
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
                        title: 'B',
                        type: '4',
                        id: 'headline_B',
                        href: '#/compentList',
                    },
                    {
                        title: 'Button 按钮组件',
                        type: '2',
                        id: 'Button',
                        href: '#/compentList/button',
                    },
                    {
                        title: 'C',
                        type: '4',
                        id: 'headline_C',
                        href: '#/compentList',
                    },
                    {
                        title: 'ColorPicker 颜色选择器',
                        type: '2',
                        id: 'ColorPicker',
                        href: '#/compentList/colorpicker',
                    },
                    {
                        title: 'Collapse 折叠面板',
                        type: '2',
                        id: 'Collapse',
                        href: '#/compentList/collapse',
                    },
                    {
                        title: 'D',
                        type: '4',
                        id: 'headline_D',
                        href: '#/compentList',
                    },
                    {
                        title: 'DividingLine 分割线',
                        type: '2',
                        id: 'DividingLine',
                        href: '#/compentList/dividingline',
                    },
                    {
                        title: 'P',
                        type: '4',
                        id: 'headline_P',
                        href: '#/compentList',
                    },
                    {
                        title: 'PicView 图片显示器',
                        type: '2',
                        id: 'PicView',
                        href: '#/compentList/picview',
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
                        href: '#/compentList/select',
                    },
                    {
                        title: 'Slider 滑块',
                        type: '2',
                        id: 'sliderBox',
                        href: '#/compentList/slider',
                    },
                    {
                        title: 'Switch 开关',
                        type: '2',
                        id: 'switch',
                        href: '#/compentList/switch',
                    },
                    {
                        title: 'T',
                        type: '4',
                        id: 'headline_T',
                        href: '#/compentList',
                    },
                    {
                        title: 'TimeLine 时间轴',
                        type: '2',
                        id: 'timeline',
                        href: '#/compentList/timeline',
                    },
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
    .wzc_catalog {
        width: 260px;
        border-right: 1px dotted #333;
        box-sizing: border-box;
    }
    #markdownShow {
        width: calc(100% - 260px);
        overflow-y: scroll;
    }
    .showCon {
        height: 100%;
        width: 780px;
        padding: 0px 30px;
    }
</style>