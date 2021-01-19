<template>
    <div class="wzc_button" :class="[
        typeclass ,
        { 'is-plain': plain },
        { 'is-round': round },
        { 'is-circle': circle },
        { 'is-disabled': disabled }
    ]">
        <span class="wzc_button_loading" v-if="loading">
            <i class="fa fa-spinner fa-pulse" aria-hidden="true" ></i> 加载中
        </span>
        <span class="wzc_button_contain" v-else>
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    name:'wzc_button',
    components: {},
    props: {
        type: {
            type:String,
            default: 'default'
        },
        plain: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        },
        circle: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            typeclass: 'default',
        };
    },
    created() {},
    mounted() {
        this.typeclass = 'wzc_button_' + this.type;
    },
    watch: {
        type (type){
            this.typeclass = 'wzc_button_' + type;
        }
    },
    computed: {},
    methods: {
    },
};
</script>
<style scoped>
    .wzc_button {
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        box-sizing: border-box;
        cursor: pointer;
        border-radius: 4px;
        font-weight: 500;
        font-size: 14px;
        border: 1px solid #dcdfe6;
        color: #333333;
        user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -moz-user-select: none;
    }
    .wzc_button:not(.is-disabled):hover {
        background-color: #ECF5FF;
        border-color: #B3D8FF;
        color: #409eff;
    }
    .wzc_button_primary {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
    }
    .wzc_button_primary:not(.is-disabled):hover {
        color: #fff;
        background-color: #66b1ff;
        border-color: #66b1ff;
    }
    .wzc_button_success{
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
    }
    .wzc_button_success:not(.is-disabled):hover {
        color: #fff;
        background-color: #85ce61;
        border-color: #85ce61;
    }
    .wzc_button_info{
        color: #fff;
        background-color: #909399;
        border-color: #909399;
    }
    .wzc_button_info:not(.is-disabled):hover {
        color: #fff;
        background-color: #a6a9ad;
        border-color: #a6a9ad;
    }
    .wzc_button_warning{
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
    }
    .wzc_button_warning:not(.is-disabled):hover {
        color: #fff;
        background-color: #ebb563;
        border-color: #ebb563;
    }
    .wzc_button_danger{
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
    }
    .wzc_button_danger:not(.is-disabled):hover {
        color: #fff;
        background-color: #f78989;
        border-color: #f78989;
    }
    /* ****************  plain  **************** */
    .wzc_button.is-plain:not(.is-disabled):hover {
        background-color: #fff;
        border-color: #409eff;
        color: #409eff;
    }
    .wzc_button_primary.is-plain {
        color: #409eff;
        background-color: #ecf5ff;
        border-color: #b3d8ff;
    }
    .wzc_button_primary.is-plain:not(.is-disabled):hover {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
    }
    .wzc_button_success.is-plain{
        color: #67c23a;
        background: #f0f9eb;
        border-color: #c2e7b0;
    }
    .wzc_button_success.is-plain:not(.is-disabled):hover {
        color: #fff;
        background-color: #85ce61;
        border-color: #85ce61;
    }
    .wzc_button_info.is-plain{
        color: #909399;
        background: #f4f4f5;
        border-color: #d3d4d6;
    }
    .wzc_button_info.is-plain:not(.is-disabled):hover {
        color: #fff;
        background-color: #909399;
        border-color: #909399;
    }
    .wzc_button_warning.is-plain{
        color: #e6a23c;
        background: #fdf6ec;
        border-color: #f5dab1;
    }
    .wzc_button_warning.is-plain:not(.is-disabled):hover {
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
    }
    .wzc_button_danger.is-plain{
        color: #f56c6c;
        background: #fef0f0;
        border-color: #fbc4c4;
    }
    .wzc_button_danger.is-plain:not(.is-disabled):hover {
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
    }
    /* *****************  active  ********************** */
    .wzc_button_default:not(.is-disabled):active, .wzc_button_default.is-plain:not(.is-disabled):active {
        border: 1px solid #3e9fd4;
    }
    .wzc_button_primary:not(.is-disabled):active, .wzc_button_primary:not(.is-disabled).is-plain:active {
        background-color: #0b8cd2;
    }
    .wzc_button_success:not(.is-disabled):active, .wzc_button_success.is-plain:not(.is-disabled):active{
        background-color: #22b422;
    }
    .wzc_button_info:not(.is-disabled):active, .wzc_button_info.is-plain:not(.is-disabled):active{
        background-color: rgb(130, 132, 138);
    }
    .wzc_button_warning:not(.is-disabled):active, .wzc_button_warning.is-plain:not(.is-disabled):active{
        background-color: rgb(207, 146, 54);
    }
    .wzc_button_danger:not(.is-disabled):active, .wzc_button_danger.is-plain:not(.is-disabled):active{
        background-color: rgb(221, 97, 97);
    }
    /* *****************  round  ********************** */
    .wzc_button.is-round {
        border-radius: 20px;
    }
    /* *****************  circle  ********************** */
    .wzc_button.is-circle {
        border-radius: 50%;
        width: 40px;
    }
    /* *****************  disabled  ********************** */
    .wzc_button.is-disabled, .wzc_button.is-disabled:active, .wzc_button.is-disabled:hover {
        cursor: not-allowed;
        opacity: .6;
        filter: alpha(opacity=60);
    }
    .wzc_button_contain .fa {
        margin: 0px 5px;
    }
</style>