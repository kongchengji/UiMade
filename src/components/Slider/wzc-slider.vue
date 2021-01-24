<template>
  <div class="wzc_slider" :style="styleVar">
        <div class="wzc_slider_runway" @click="sliderClick($event)">
            <div class="wzc_slider_bar" ref="sliderBar"></div>
            <div class="wzc_wrapper" ref="wzcWrapper"  @mouseover="isTitleShow = true"
                @mouseleave="isTitleShow = false">
                <div class="wzc_button"></div>
                <div class="wzc_wrapper_title" v-show="isTitleShow">{{ value }}</div>
            </div>
        </div>
  </div>
</template>

<script>
    export default {
        name: 'wzc_slider',
        props: {
            width: {
                type: Number,
                default: 550
            },
            value:{
                type: Number,
                default: 0
            },
            backgroundcolor:{
                type: String,
                default: '#409eff'
            }
        },
        data() {
            return {
                isTitleShow: false,
            };
        },
        mounted() {
            this.dragWrapper(this.$refs.wzcWrapper);
        },
        watch: {},
        methods: {
            sliderClick (e) {
                if(e.target.className.indexOf("wzc_button") == -1) {
                    let offsetX = e.clientX - e.currentTarget.offsetLeft;
                    this.$emit('update:value', Math.round((offsetX / this.width) * 100));
                    // this.$refs.wzcWrapper.style.left = Math.round((offsetX / this.width) * 100) + '%';
                    // this.$refs.sliderBar.style.width = Math.round((offsetX / this.width) * 100) + '%';
                } else {
                    return ;
                }
            },
            dragWrapper (el) {
                let dragBox = el, _this = this; 
                dragBox.onmousedown = (e) => { 
                    e = e || window.event;
                    let disX = e.clientX - dragBox.offsetLeft;
                    document.onmousemove = e => { 
                        let left = e.clientX - disX;
                        if(left > _this.width){ left = _this.width; }
                        if(left < 0)  { left = 0; }
                        this.$emit('update:value', Math.round((left / this.width) * 100));
                    };
                    document.onmouseup = e => {
                        document.onmousemove = null;
                        document.onmouseup = null;
                    };
                }
            },
        },
        components: {},
        computed: {
            styleVar() {
                return {
                    '--wzc-slider-value': this.value + '%' ,
                    '--wzc-slider-width': this.width + 'px' ,
                    '--wzc-slider-backgroundcolor': this.backgroundcolor,
                }
            }
        },
    };
</script>
<style scoped>
    .wzc_slider {
        height: 40px;
        width: var(--wzc-slider-width);
    }
    .wzc_slider_body {
        width: 100%;
        height: auto;
    }
    .wzc_slider_runway {
        width: 100%;
        height: 6px;
        margin: 16px 0;
        background-color: #e4e7ed;
        border-radius: 3px;
        position: relative;
        cursor: pointer;
        vertical-align: middle;
    }
    .wzc_slider_bar {
        height: 6px;
        background-color: var(--wzc-slider-backgroundcolor);
        border-radius: 3px;
        position: absolute;
        width: var(--wzc-slider-value);
    }
    /* 滑块 */
    .wzc_wrapper {
        height: 36px;
        width: 36px;
        position: absolute;
        transform: translateX(-50%);
        top: -16px;
        left: var(--wzc-slider-value);
        cursor: grab;
    }
    .wzc_button {
        margin: 8px auto;
        width: 16px;
        height: 16px;
        border: 2px solid var(--wzc-slider-backgroundcolor);
        background-color: #fff;
        border-radius: 50%;
        transition: .2s;
        user-select: none;
    }
    .wzc_button:hover {
        transform: scale(1.2);
    }
    .wzc_wrapper_title {
        height: 33px;
        line-height: 33px;
        text-align: center;
        border-radius: 5px;
        background-color: rgb(48, 49, 51);
        color: #fff;
        user-select: none;
        position: relative;
        top: calc(-100% - 30px);
    }
</style>