<template>
    <div class="wzc_timeline">
        <ul class="wzc_timeline_list"> 
            <slot></slot>
        </ul>
    </div>
</template>

<script>
export default {
    name: "wzc_timeline",
    components: {},
    props: {},
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
    .wzc_timeline {
        width: 100%;
    }
    .wzc_timeline {
        font-size: 16px;
        line-height: 28px;
    }
    .wzc_timeline .wzc_timeline_option .optionContent ul {
        padding: 5px 0 5px 15px;
    }
</style>