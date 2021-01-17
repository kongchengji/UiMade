<template>
  <div class="wzc_switch" :style="styleVar" 
  @click="switchClick" :class="{ 'is-click': value, 'is-disabled': disabled }">
      <span class="wzc_switch_core"></span>
  </div>
</template>

<script>
export default {
    name:'wzc_switch',
    components: {},
    props: {
        width: {
            type: Number,
            default: 45
        },
        activeColor: {
            type: String,
            default: '#dcdfe6'
        },
        inactiveColor: {
            type: String,
            default: '#dcdfe6'
        },
        value : {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
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
        switchClick () {
            if(!this.disabled) {
                let nowvalue = !this.value;
                this.$emit('update:value', nowvalue);
            }
        },
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
        transition: border-color .3s,background-color .3s;
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
        transition: all .3s;
    }
    .is-click .wzc_switch_core::after {
        left: 100%;
        margin-left: -17px;
    }
    .is-click .wzc_switch_core {
        border: 1px solid var(--switch-active-color);
        background-color: var(--switch-active-color);
    }
    .is-disabled .wzc_switch_core {
        cursor: not-allowed;
        opacity: .6;
        filter: alpha(opacity=60);
    }
</style>