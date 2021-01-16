<template>
  <div class="wzc_switch" :style="styleVar">
      <span class="wzc_switch_core"></span>
  </div>
</template>

<script>
export default {
    name:'wzc_switch',
    components: {},
    props: {
        content: {
            type: String,
            default: ''
        },
        width: {
            type: Number,
            default: 40
        },
        activeColor: {
            type: String,
            default: '#13ce66'
        },
        inactiveColor: {
            type: String,
            default: '#dcdfe6'
        },
    },
    data() {
        return {
        };
    },
    created() {},
    mounted() {
    },
    watch: {
    },
    computed: {
        styleVar() {
            return {
                '--switch-width': this.width + 'px',
                '--switch-color': this.inactiveColor ,
                '--switch-active-color': this.activeColor ,
            }
        }
    },
    methods: {
    },
}
</script>

<style scoped>
    .wzc_switch_core {
        width: var(--switch-width);
        height: 20px;
        margin: 0;
        display: inline-block;
        position: relative;
        border: 1px solid var(--switch-color);
        background-color: var(--switch-color);
        border-radius: 10px;
        box-sizing: border-box;
        cursor: pointer;
    }
    .wzc_switch_core::after {
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        background-color: #fff;
    }
</style>