<template>
    <div class="wzc_collapse" :style="styleVar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"wzc_collapse",
    components: {},
    props: {
        width: {
            type: String,
            default: '100%'
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
                    '--wzc-collapse-width': this.width ,
                }
            }
    },
    methods: {},
};
</script>
<style scoped>
   .wzc_collapse {
       width: var(--wzc-collapse-width);
   }
</style>