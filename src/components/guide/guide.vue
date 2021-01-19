<template>
  <div id="guideVue">
        <catalog :chapter-list='chapterList' @gethref="gethref" ></catalog>
        <div id="markdownShow">
            <div class="showCon markdown-body" >
                <router-view/>
            </div>
        </div>
  </div>
</template>

<script>
    import catalog from '../catalog/wzc-catalog' 
    import $ from 'jquery'

    export default {
        name: 'guide',
        components: { catalog },
        props: {},
        data() {
            return {
                markStr: '',
                chapterList: [
                    {
                        title: '使用说明',
                        type: '1',
                        id: 'useIntroduct',
                        href: '#/guide/useIntroduct',
                    },
                    {
                        title: '设计原则',
                        type: '1',
                        id: 'shejiyuanze',
                        href: '#/guide/design',
                    }
                ]
            };
        },
        mounted() {
            this.getMarkStr(this.chapterList[0].href);
        },
        watch: {},
        computed: {},
        methods: {
            gethref() {
                let url = arguments[0];
                this.getMarkStr(url);
            },
            // 获取markdown文件内容
            getMarkStr(url) {
                var self = this;
            }
        },
        created() {},
        
    };
</script>
<style scoped>
    #guideVue {
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