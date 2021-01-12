<template>
    <div id="wzc_select" :style="styleVar">
        <div class="divSelect">
            <div class="divSelectinput">
                <!-- 选中后的内容 -->
                <div class="selectinfos" :title="selectedTitle" :class="{ 'no_select': selectedTitle == placeholder }"> {{ selectedTitle }} </div>
                <!-- 三角形图标 -->
                <div class="imgthree fa fa-caret-up"></div>
            </div>
        </div>
        <!-- 下拉框列表 -->
        <div class="Selectlist" v-show="true">
            <ul class="wzc_option_list">
                <slot name="wzc_option"></slot>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'wzc_select',
    components: {},
    props: {
        placeholder: {
            type: String,
            default: '请选择'
        },
        width: {
            type: Number,
            default: 180
        },
        height: {
            type: Number,
            default: 40
        },
    },
    data() {
        return {
            selectedTitle: '',
            
        };
    },
    created() {
        this.selectedTitle = this.placeholder;
    },
    mounted() {},
    computed: {
        styleVar() {
            return {
                '--select-height': this.height + 'px',
                '--select-width': this.width + 'px'
            }
        }
    },
    methods: {},
};
</script>
<style scoped>
    #wzc_select {
        border: 1px solid #E6E6E6;
        border-radius: 5px;
        height: var(--select-height);
        width: var(--select-width);
        line-height: var(--select-height);
    }
    .divSelect {
        width: 100%;
        height: 100%;
    }
    .divSelectinput {
        width: calc(100% - 20px);
        height: 100%;
        margin: 0 5px 0 15px;
        display: flex;
    }
    .selectinfos {
        width: 87.5%;
        cursor: pointer;
    }
    .no_select {
        color: #D3DCE6;
    }
    .imgthree {
        width: 12.5%;
        line-height: var(--select-height);
        text-align: center;
    }
    .imgthree:before {
        cursor: pointer;
        color: #D3DCE6;
    }
    
</style>