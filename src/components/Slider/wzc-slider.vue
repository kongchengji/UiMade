<template>
  <div class="wzc_slider" :style="styleVar">
        <div class="wzc_slider_runway" @click="sliderClick($event)" :class="{'is-disabled': disabled }">
            <div class="wzc_slider_bar" ref="sliderBar"></div>
            <div class="wzc_wrapper" ref="wzcWrapper">
                <div class="wzc_button" @mouseover="isTitleShow = true"
                @mouseleave="isTitleShow = false"></div>
                <div class="wzc_wrapper_title" v-show="isTitleShow">{{ value }}</div>
            </div>
            <div class="wzc_stops" v-for="(item, index) in sliderStops" :key="index" :style="{ 'left': item + '%' }"></div>
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
            },
            step: {
                type: Number,
                default: 0,
            },
            showStop:{
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false
            },
        },
        data() {
            return {
                isTitleShow: false,
                subsect: 0,
                subsectWidth: 0,
                sliderStops: [],
            };
        },
        mounted() {
            if( !this.disabled ){
                this.dragWrapper(this.$refs.wzcWrapper);
            }
                
            if( this.step != 0 ) this.subsect = this.step;
            else this.subsect = 1;
            this.subsectWidth = this.width / this.subsect;
            if(this.showStop && this.subsect > 1) {
                for(let i = 1; i <= this.subsect - 1; i++){
                    this.sliderStops.push(Math.round(Math.round(this.subsectWidth * i)/ this.width * 100));
                }
            }
        },
        watch: {
            'step':function(num) {
                if( this.step != 0 ) this.subsect = this.step;
                else this.subsect = 1;
                this.subsectWidth = this.width / this.subsect;
                if(this.showStop && this.subsect > 1) {
                    for(let i = 1; i <= this.subsect - 1; i++){
                        this.sliderStops.push(Math.round(Math.round(this.subsectWidth * i)/ this.width * 100));
                    }
                }
            },
            'disabled': function(flag) {
                if( flag ) {}
            }
        },
        methods: {
            sliderClick (e) {
                if(this.disabled) return;
                if(e.target.className.indexOf("wzc_button") == -1) {
                    let offsetX = e.clientX - e.currentTarget.offsetLeft;
                    let left = this.isOverSubsect(offsetX, this.subsectWidth, this.subsect);
                    if(left < 0) left = 0;
                    if (left > 100) left = 100;
                    this.$emit('update:value', left);
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
                        left = _this.isOverSubsect(left, _this.subsectWidth, _this.subsect);
                        if(left < 0) left = 0;
                        if (left > 100) left = 100;
                        this.$emit('update:value', left);
                    };
                    document.onmouseup = e => {
                        document.onmousemove = null;
                        document.onmouseup = null;
                    };
                }
            },
            isOverSubsect (offsetX, subsectwidth, subsect) {
                if (subsect >= 2) {
                    let nums = Math.round(offsetX / subsectwidth);
                    return Math.round((nums * subsectwidth) / this.width * 100);
                } else {
                    return Math.round((offsetX / this.width) * 100);
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
        z-index: 10;
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
        z-index: 20;
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
    .wzc_stops {
        position: absolute;
        height: 6px;
        width: 6px;
        border-radius: 100%;
        background-color: #fff;
        transform: translateX(-50%);
    }
    /* 禁用 */
    .is-disabled .wzc_slider_bar {
        background-color: #c0c4cc;
    }
    .is-disabled .wzc_button {
        border-color: #c0c4cc;
    }
    .is-disabled .wzc_wrapper {
        cursor: not-allowed;
    }
    .is-disabled .wzc_button:hover {
        transform: scale(1);
    }
</style>