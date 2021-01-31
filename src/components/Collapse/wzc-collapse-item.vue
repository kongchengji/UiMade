<template>
    <div class="wzc_collapse_item">
        <div class="wzc_collapse_title" @click="titleClick"> <i  :class="{ 'is-collapse-show' : currentIsShow }" class="wzc_collapse_icon fa fa-chevron-right"></i> {{ title }} </div>
        <div class="wzc_collapse_content" v-show="currentIsShow"> <slot></slot> </div>
        
    </div>
</template>

<script>
export default {
    name:'wzc_collapse_item',
    components: {},
    props: {
        title : {
            type: String,
            default: ''
        },
        isShow : {
            type: Boolean,
            default: false,
        },
        name : {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            currentIsShow: false,
        };
    },
    created() {},
    mounted() {
        this.currentIsShow = this.isShow ;
    },
    watch: {
        'currentIsShow': function(flag) {
            
        }
    },
    computed: {},
    methods: {
        titleClick () {
            this.currentIsShow = !this.currentIsShow;
            this.$parent.sonVueClick({ name: this.name, flag: this.currentIsShow})
        }
    },
};
</script>
<style scoped>
    .wzc_collapse_title {
        height: 42px;
        line-height: 42px;
        background-color: #f2f2f2;
        padding-left: 35px;
        border: 1px solid #e6e6e6;
        box-sizing: border-box;
        position: relative;
        cursor: pointer;
    }
    .wzc_collapse_icon {
        position: absolute;
        left: 15px;
        line-height: 42px;
        transform: scale(0.8);
        transition: .3s all;
    }
    .wzc_collapse_content {
        padding: 10px 15px;
        border: 1px solid #e6e6e6;
        box-sizing: border-box;
    }
    .is-collapse-show {
        transform: rotate(90deg) scale(0.8);
    }
</style>