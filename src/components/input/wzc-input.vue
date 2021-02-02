<template>
    <div class="wzc_input">
        <input type="text" class="wzc_input_el" :placeholder="placeholder" />
    </div>
</template>

<script>
export default {
    name: 'wzc_input',
    components: {},
    props: {
        placeholder: {
            type: String,
            default: "请输入内容"
        }
    },
    data() {
        return {
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
    .wzc_input_el {
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 100%;
    }
    .wzc_input_el:focus {
        border: 1px solid #0000ff;
    }
</style>