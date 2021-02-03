<template>
    <div class="wzc_input" :style="styleVar" >
        <input :type="isPassword ? 'password' : 'text'" class="wzc_input_el" :placeholder="placeholder" :class="{'is-disabled': disabled}"
        :value="disabled ? placeholder : inputValue" @input="$emit('inputValue', $event.target.value)" ref="input" />
        <div v-if="clear" v-show="isClear" class="wzc_input_clear" @click="clearInput"><i class="fa fa-times-circle" aria-hidden="true"></i></div>
        <div v-if="password" v-show="isPasswordShow" class="wzc_input_password" @click="showInput"><i class="fa" :class="isPassword? 'fa-eye-slash' : 'fa-eye' " aria-hidden="true"></i></div>
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
        },
        width: {
            type: Number,
            default: 240
        }
    },
    model: {
        prop: 'inputValue',
        //这个事件名可以随意写，它实际上是规定了子组件要更新父组件值需要注册的方法
        event: 'inputValue'
    },
    data() {
        return {
            isClear: false,
            isPassword: false,
            isPasswordShow: false,
        };
    },
    created() {},
    mounted() {
        if (this.disabled)
            this.$refs.input.disabled = true;
        this.isPassword = this.password;
    },
    watch: {
        disabled: function(val) {
            if(val)
                this.$refs.input.disabled = true;
            else
                this.$refs.input.disabled = false;
        },
        inputValue: function (val) {
            if (val && this.clear)
                this.isClear = true;
            else if (!val && this.clear)
                this.isClear = false;
            else if (val && this.password)
                this.isPasswordShow = true;
            else if (!val && this.password)
                this.isPasswordShow = false;
        },
    },
    computed: {
        styleVar() {
            return {
                '--input-focusColor': this.focusColor,
                '--input-width': this.width + 'px',
            }
        }
    },
    methods: {
        clearInput () {
            this.$emit('inputValue', '')
        },
        showInput () {
            this.isPassword = !this.isPassword;
        }
    },
};
</script>
<style scoped>
    .wzc_input {
        width: var(--input-width);
        height: 40px;
        position: relative;
    }
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
        padding: 0 25px 0 15px;
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
    .wzc_input_clear,
    .wzc_input_password {
        width: 14px;
        height: 100%;
        position: absolute;
        top: 0px;
        right: 10px;
    }
    .fa-times-circle,
    .fa-eye-slash, 
    .fa-eye {
        color: #dcdfe6;
        cursor: pointer;
        vertical-align: middle;
        line-height: 40px;
    }
    .fa-times-circle:hover,
    .fa-eye-slash:hover, 
    .fa-eye:hover {
        color: #333;
        
    }
</style>