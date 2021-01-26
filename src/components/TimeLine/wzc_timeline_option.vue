<template>
    <li class="wzc_timeline_option" :style="styleVar">
        <div class="wzc_timeline_tail"></div>
        <i class="wzc_timeline_icon fa " :class="icon == '' ? '': icon + ' exist-icon' " ></i>
        <div class="optionContent">
            <h3 class="wzc-timeline-title">{{ timestamp }}</h3>
            <slot></slot>
        </div>
    </li>
</template>

<script>
export default {
    name: "wzc_timeline_option",
    components: {},
    props: {
        timestamp: {
            type: String,
            default: ""
        },
        size: {
            type: String,
            default: "16px"
        },
        icon: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
        };
    },
    created() {},
    mounted() {},
    watch: {},
    computed: {
        styleVar() {
            return {
                '--timeline-size': this.size,
            }
        }
    },
    methods: {},
};
</script>
<style scoped>
    .wzc_timeline_option{
        list-style: none;
        position: relative;
    }
    .wzc_timeline_option .optionContent ul {
        padding: 5px 0 5px 15px;
    }
    .wzc_timeline_option .optionContent {
        padding-left: 30px;
    }
    .wzc_timeline_option .optionContent:not(.wzc-timeline-title) {
        font-size: var(--timeline-size);
    }
    .wzc-timeline-title {
        margin: 10px 0px;
    }
    .wzc_timeline_icon {
        width: 16px;
        height: 16px;
        box-sizing: border-box;
        border: 1px solid #5FB878;
        border-radius: 50%;
        position: absolute;
        left: 0px;
        top: 6px;
    }
    .wzc_timeline_icon.exist-icon {
        border: none;
    }
    .wzc_timeline_tail {
        contain: "";
        position: absolute;
        left: 7.5px;
        top: 40px;
        z-index: 10;
        width: 1px;
        height: calc(100% - 40px);
        background-color: #5FB878;
    }
</style>