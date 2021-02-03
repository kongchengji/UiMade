<template>
    <div class="wzc_input" :style="styleVar" >
        <input type="text" class="wzc_input_el" :placeholder="placeholder" :class="{'is-disabled': disabled}"
        :value="inputValue" @input="$emit('inputValue', $event.target.value)" ref="input" />
        <div v-if="clear" class="wzc_input_clear"></div>
        <div v-if="password" class="wzc_input_password"></div>
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
        },
        focusColor: {
            type: String,
            default: "#0000ff"
        },
        inputValue: {
            type: String,
            default: ""
        },
        disabled: {
            type: Boolean,
            default: false
        },
        password: {
            type: Boolean,
            default: false
        },
        clear: {
            type: Boolean,
            default: false
        }
    },
    model: {
        prop: 'inputValue',
        //这个事件名可以随意写，它实际上是规定了子组件要更新父组件值需要注册的方法
        event: 'inputValue'
    },
    data() {
        return {
        };
    },
    created() {},
    mounted() {
        if (this.disabled)
            this.$refs.input.disabled = true;
    },
    watch: {
        disabled: function(val) {
            if(val)
                this.$refs.input.disabled = true;
            else
                this.$refs.input.disabled = false;
        }
    },
    computed: {
        styleVar() {
            return {
                '--input-focusColor': this.focusColor,
            }
        }
    },
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
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 100%;
    }
    .wzc_input_el:focus {
        border: 1px solid var(--input-focusColor);
    }
    .wzc_input_el.is-disabled {
        cursor: not-allowed;
        background-color: #f2f2f2;
        color: #dcdfe6;
    }
    .wzc_input_password {
        width: 14px;
        height: 14px;
        background: url(./img/close_init.png) no-repeat center center;
        background-size: 100% 100%;
    }
</style>