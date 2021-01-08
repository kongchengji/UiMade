<template>
    <div id="wzc_select" :style="{ 'width': width + 'px', 'height': height + 'px', 'line-height': height + 'px'}">
        <div class="divSelect">
            <div class="divSelectinput">
                <!-- 选中后的内容 -->
                <div class="selectinfos" :title="selectedTitle"> {{ selectedTitle }} </div>
                <!-- 三角形图标 -->
                <div class="imgthree"></div>
            </div>
            <!-- 下拉框列表 -->
            <div class="Selectlist" v-show="false">
                <ul>
                    <!-- <li v-for="(item, index) in Files" :key="item.value" @click="changeSelect(item.FileName)">
                        {{ item.FileName }}
                    </li> -->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'wzc_select',
    components: {},
    props: {
        showlist:{
            type: Array,
            default: []
        },
        placeholder: {
            type: String,
            default: '请选择'
        },
        width: {
            type: Number,
            default: '180'
        },
        height: {
            type: Number,
            default: '40'
        },
    },
    data() {
        return {
            selectedTitle: ''
        };
    },
    created() {
        this.selectedTitle = this.placeholder;
    },
    mounted() {},
    computed: {},
    methods: {},
};
</script>
<style scoped>
    #wzc_select {
        border: 1px solid #E6E6E6;
        border-radius: 5px;
    }
    .divSelect {
        width: 100%;
        height: 100%;
    }
    .divSelectinput {
        width: calc(100% - 20px);
        height: 100%;
        margin: 0 5px 0 15px;
        display: flex;
    }
    .selectinfos {
        width: 87.5%;
    }
    .imgthree {
        width: 12.5%;
    }
</style>