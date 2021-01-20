<template>
    <div class="wzc_color_picker" :style="styleVar">
        <div class="wzc_color_wrap">
            <div class="wzc_color_left" @mousedown="mouseClick($event)">
                <div class="white_panel"></div>
                <div class="black_panel"></div>
                <div class="wzc_color_pointer" ref="wzcColorPointer"  >
                    <div ></div>
                </div>
            </div>
            <div class="wzc_color_right">

            </div>
        </div>
        <!-- {{ this.$refs.wzcColorPointer.style.top }} -->
    </div>
</template>

<script>
export default {
    name:"wzc_color_picker",
    components: {},
    props: {
        color: {
            type: String,
            default: "#FF0000"
        }
    },
    data() {
        return {
            currentColor: "",
        };
    },
    created() {},
    mounted() {
        this.dragColorPointer(this.$refs.wzcColorPointer);
    },
    watch: {
        'currentPointerLeft':(e)=>{
            console.log(e)
        }
    },
    computed: {
        styleVar() {
            return {
                '--wzc-picker-color': this.color ,
            }
        }
    },
    methods: {
        dragColorPointer (el) {
            let dragBox = el; 
            dragBox.onmousedown = (e) => {
                e = e || window.event;
                let disX = e.clientX - dragBox.offsetLeft;
                let disY = e.clientY - dragBox.offsetTop;
                document.onmousemove = e => {
                    //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                    let left = e.clientX - disX;
                    let top = e.clientY - disY;
                    //移动当前元素
                    if(left > 280){ left = 280; }
                    if(left < 0)  { left = 0; }
                    if(top > 180) { top = 180; }
                    if(top < 0)   { top = 0; }
                    dragBox.style.left = left + "px";
                    dragBox.style.top = top + "px";
                };
                document.onmouseup = e => {
                    //鼠标弹起来的时候不再移动
                    document.onmousemove = null;
                    //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
                    document.onmouseup = null;
                };
            }
        },
        mouseClick (e) {
            if(e.target.className.indexOf("black_panel") != -1) {
                this.$refs.wzcColorPointer.style.left = e.offsetX + 'px';
                this.$refs.wzcColorPointer.style.top = e.offsetY + 'px';
            } else {
                if(e.target.className.indexOf("wzc_color_pointer") != -1) {
                    if(this.$refs.wzcColorPointer.offsetLeft + e.offsetX <= 280){
                        this.$refs.wzcColorPointer.style.left = this.$refs.wzcColorPointer.offsetLeft + e.offsetX + 'px';
                    } else {
                        this.$refs.wzcColorPointer.style.left = '280px';
                    }
                    if(this.$refs.wzcColorPointer.offsetTop + e.offsetY <= 180) {
                        this.$refs.wzcColorPointer.style.top = this.$refs.wzcColorPointer.offsetTop + e.offsetY + 'px';
                    } else {
                        this.$refs.wzcColorPointer.style.top = '180px';
                    }
                } else{
                    this.$refs.wzcColorPointer.style.left = this.$refs.wzcColorPointer.offsetLeft + e.offsetX - 6 + 'px';
                    this.$refs.wzcColorPointer.style.top = this.$refs.wzcColorPointer.offsetTop + e.offsetY - 6 + 'px';
                    if((this.$refs.wzcColorPointer.offsetLeft + e.offsetX - 6) < 0){
                        this.$refs.wzcColorPointer.style.left = "0px"
                    }
                    if((this.$refs.wzcColorPointer.offsetLeft + e.offsetX - 6) >= 280){
                        this.$refs.wzcColorPointer.style.left = '280px';
                    }
                    if((this.$refs.wzcColorPointer.offsetTop + e.offsetY - 6) < 0){
                        this.$refs.wzcColorPointer.style.top = "0px";
                    }
                    if((this.$refs.wzcColorPointer.offsetTop + e.offsetY - 6) >= 180){
                        this.$refs.wzcColorPointer.style.top = "180px";
                    }
                }
            }
        }
    },
};
</script>
<style scoped>
    .wzc_color_picker {
        width: 314px;
        height: 228px;
        padding: 6px;
        box-sizing: content-box;
        background-color: #fff;
        border: 1px solid #ebeef5;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
    .wzc_color_wrap {
        width: 100%;
        height: 180px;
        display: flex;
        justify-content: space-between;
    }
    .wzc_color_left {
        width: 280px;
        height: 100%;
        position: relative;
        background-color: var(--wzc-picker-color);
        overflow: hidden;
    }
    .wzc_color_right {
        width: 12px;
        height: 100%;
    }
    .wzc_color_left .white_panel,
    .wzc_color_left .black_panel{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .wzc_color_left .white_panel {
        background: linear-gradient(90deg,#fff,hsla(0,0%,100%,0));
    }
    .wzc_color_left .black_panel {
        background: linear-gradient(0deg,#000,transparent);
    }
    .wzc_color_pointer {
        position: absolute;
        top: 0px;
        left: 280px;
    }
    .wzc_color_pointer > div {
        width: 12px;
        height: 12px;
        border-radius: 6px;
        box-shadow: rgb(255, 255, 255) 0px 0px 0px 1px inset;
        transform: translate(-6px, -6px);
    }
</style>