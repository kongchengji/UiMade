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
            backgroundColor: "",
        };
    },
    created() {},
    mounted() {
        this.dragColorPointer(this.$refs.wzcColorPointer);
        this.backgroundColor = this.color;
    },
    watch: {
    },
    computed: {
        styleVar() {
            return {
                '--wzc-picker-color': this.backgroundColor ,
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
                    let left = e.clientX - disX;
                    let top = e.clientY - disY;
                    if(left > 280){ left = 280; }
                    if(left < 0)  { left = 0; }
                    if(top > 180) { top = 180; }
                    if(top < 0)   { top = 0; }
                    dragBox.style.left = left + "px";
                    dragBox.style.top = top + "px";
                    this.changeColor(left, top )
                };
                document.onmouseup = e => {
                    document.onmousemove = null;
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
            this.changeColor(parseInt(this.$refs.wzcColorPointer.style.left), parseInt(this.$refs.wzcColorPointer.style.top) )
        },
        // 计算颜色  HSV方式计算rgb
        changeColor (left, top) {
            let saturation = Math.round(left / 280 * 100) / 100;
            let value = Math.round((1 - top / 180) * 100) / 100;
            let hue = this.getHue(this.getRGB(""+this.color));
            this.currentColor = this.HSVtoRGB(hue, saturation, value);
            this.$emit('update:color', this.currentColor);
        },
        getRGB (str){
            if(str.indexOf('rgb') == -1){
                str = "rgba(" + str.match(/[A-Za-z0-9]{2}/g).map(function(v) { return parseInt(v, 16) }).join(",") + ")";
            } 
            var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
            return match ? {
                red: match[1],
                green: match[2],
                blue: match[3]
            } : {};
        },
        getHue (rgbArray) {
            let r, g, b, max, min;
            for(let i = 0; i < 3; i++){
                r = parseInt(rgbArray.red);
                g = parseInt(rgbArray.green);
                b = parseInt(rgbArray.blue);
            }
            max = Math.max(r, g, b)
            min = Math.min(r, g, b)
            if(max == min) {
                return 0;
            } else {
                if( max == r && g >= b) {
                    return 60 * (g - b)/(max - min);
                } else if ( max == r && g < b) {
                    return 60 * (g - b)/(max - min) + 360;
                } else if (max == g) {
                    return 60 * (b - r)/(max - min) + 120;
                } else if (max == b) {
                    return 60 * (r - g)/(max - min) + 240;
                }  
            }
        },
        HSVtoRGB(h, s, v) {
            let i, f, p1, p2, p3;
            let r = 0, g = 0, b = 0;
            if (s < 0) s = 0;
            if (s > 1) s = 1;
            if (v < 0) v = 0;
            if (v > 1) v = 1;
            h %= 360;
            if (h < 0) h += 360;
            h /= 60;
            i = Math.floor(h);
            f = h - i;
            p1 = v * (1 - s);
            p2 = v * (1 - s * f);
            p3 = v * (1 - s * (1 - f));
            switch(i) {
                case 0: r = v;  g = p3; b = p1; break;
                case 1: r = p2; g = v;  b = p1; break;
                case 2: r = p1; g = v;  b = p3; break;
                case 3: r = p1; g = p2; b = v;  break;
                case 4: r = p3; g = p1; b = v;  break;
                case 5: r = v;  g = p1; b = p2; break;
            }
            return 'rgb(' + Math.round(r * 255) + ',' + Math.round(g * 255) + ',' + Math.round(b * 255) + ')';
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