<template>
    <div class="wzc_dividingline line-horizontal" :style="styleVar" :class="{ 'is-vertical': vertical }">
        <div class="wzc-line-title" :class=" 'wzc-line-' + titlePosition" > <slot name="wzc_divide_title"></slot> </div>
    </div>
</template>

<script>
    export default {
        name: "wzc_dividingline",
        props: {
            width: {
                type: Number,
                default: -1
            },
            height: {
                type: Number,
                default: 24,
            },
            titlePosition: {
                type: String,
                default: "left",
            },
            vertical: {
                type: Boolean,
                default: false,
            },
            color: {
                type: String,
                default: "#dcdfe6",
            }
        },
        data() {
            return {
            };
        },
        mounted() {
        },
        watch: {},
        methods: {},
        components: {},
        computed: {
            styleVar() {
                return {
                    '--wzc-divide-width': this.width == -1 ? "100%" : this.width + "px" ,
                    '--wzc-divide-margin': this.vertical ? '20px' : this.height + 'px' ,
                    '--wzc-divide-height': this.vertical ? this.height + 'px' : 'auto' ,
                    '--wzc-divide-color': this.color ,
                }
            }
        },
    };
</script>
<style scoped>
    .wzc_dividingline {
        background-color: var(--wzc-divide-color);
        position: relative;
        width: var(--wzc-divide-width);
    }
    .line-horizontal {
        display: block;
        height: 1px;
        margin: var(--wzc-divide-margin) 0px;
    }
    .wzc_dividingline.is-vertical {
        width: 1px;
        height: var(--wzc-divide-height);
        margin: 0 var(--wzc-divide-margin);
    }
    .wzc-line-title {
        position: absolute;
        background-color: #fff;
        padding: 0 15px;
        font-weight: 500;
        color: #333;
        font-size: 14px;
    }
    .wzc-line-left {
        transform: translateY(-50%);
        left: 25px;
    }
    .wzc-line-center {
        transform: translateY(-50%) translateX(-50%);
        left: 50%;
    }
    .wzc-line-right {
        transform: translateY(-50%);
        right: 25px;
    }
    .wzc_dividingline.is-vertical .wzc-line-top {
        transform: translateY(-50%) translateX(-50%);
        top: 20%;
    }
    .wzc_dividingline.is-vertical .wzc-line-center {
        transform: translateY(-50%) translateX(-50%);
        top: 50%;
    }
    .wzc_dividingline.is-vertical .wzc-line-bottom {
        transform: translateY(50%) translateX(-50%);
        bottom: 20%;
    }
</style>