<template>
  <div class="wzc_picview" v-show="picshow">
      <div class="wzc_pic_mask"></div>
      <div class="wzc_pic_close" title="关闭" @click="closeBtn"></div>
      <div class="wzc_content_pic">
          <div class="pic_left" @click="leftTurn" v-show="ImgLeftShow"></div>
          <div class="pic_center">
                <img id="imgView" ref="imgView" />
                <div class="nowAndAll"> {{ nowImgIndex + 1 }} / {{ allnums }} </div>
          </div>
          <div class="pic_right" @click="rightTurn" v-show="ImgRightShow"></div>
      </div>
  </div>
</template>

<script>
    var elementResizeDetectorMaker = require("element-resize-detector")
    var zoomVal3 = 1;
    function handerMiddle(e) {
        var event = e || window.event;
        //取消外部默认联动
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
        //判断浏览器类型
        var direction = 0;
        if (event.wheelDelta) {
            //IE
            direction = event.wheelDelta > 0 ? 1 : -1;
        } else {
            //火狐
            direction = event.detail < 0 ? 1 : -1;
        }
        //向下滚动时
        if (direction < 0) {
            zoomVal3 -= 0.03;
            if (zoomVal3 < 0.3) {
                zoomVal3 = 0.3;
            }
        } else {
            zoomVal3 += 0.03;
            if (zoomVal3 > 3) {
                zoomVal3 = 3;
            }
        }
        document.getElementById("imgView").style.transform = "scale(" + zoomVal3 + ")";
    }
    export default {
        name: "wzc_picview",
        props: {
            picshow: {
                type: Boolean,
                default: false,
            },
            imgarray: {
                type: Array,
            }
        },
        data() {
            return {
                nowImgIndex: 0,   //当前图片的索引
                ImgRightShow: true,   // 右切换是否显示
                ImgLeftShow: true,    // 左切换是否显示
                allnums: 0,   //所有图片数量
            };
        },
        mounted() {
            var oImg= new Image();
            oImg.src = this.imgarray[0];
            document.getElementById("imgView").src = this.imgarray[0];
            this.allnums = this.imgarray.length;  
            let _this = this;
            let indexInterval = setInterval(function(){
                if(document.getElementById("imgView").offsetWidth > 0){
                    _this.initImg();
                    clearInterval(indexInterval);
                }
            }, 50);
            //IE
            document.getElementsByClassName("pic_center")[0].onmousewheel = handerMiddle;
            //火狐
            try {
                document.getElementsByClassName("pic_center")[0].addEventListener('DOMMouseScroll', handerMiddle);
            } catch (error) {
                console.log(error);
            }
            var erd = elementResizeDetectorMaker();
            erd.listenTo(document.getElementsByClassName("pic_center")[0], function(element) {
                _this.initImg();
            });
        },
        watch: {
            'imgarray': function (item) {
                document.getElementById("imgView").src = this.imgarray[0];
                this.allnums = this.imgarray.length;
                if (this.imgarray.length == 1) {
                    this.ImgLeftShow = false;
                    this.ImgRightShow = false;
                } 
                this.changeImgSrc(this.nowImgIndex);
            }
        },
        methods: {
            closeBtn (){
                this.$emit('update:picshow', false);
            },
            initImg () {
                let width = document.getElementById("imgView").offsetWidth;
                let height = document.getElementById("imgView").offsetHeight;
                let picwidth = document.getElementsByClassName("pic_center")[0].offsetWidth;
                let picheight = document.getElementsByClassName("pic_center")[0].offsetHeight;
                if (width > picwidth || height > picheight) { 
                    var zoomVal1 = picwidth * 0.8 / width;
                    var zoomVal2 = picheight * 0.8 / height;
                    var zoomVal = zoomVal1 > zoomVal2 ? zoomVal2 : zoomVal1;
                    zoomVal3 = zoomVal;
                    document.getElementById("imgView").style.transform = "scale(" + zoomVal3 + ")";
                } else {
                    zoomVal3 = 1;
                    document.getElementById("imgView").style.transform = "scale(1)";
                } 

                document.getElementById("imgView").style.left =  'calc( 50% - ' + width / 2 + 'px)';
                document.getElementById("imgView").style.top =  'calc( 50% - ' + height / 2 + 'px)';
            },
            rightTurn: function () {
                if (this.nowImgIndex < this.imgarray.length - 1) {
                    this.changeImgSrc(this.nowImgIndex + 1);
                }
            },
            leftTurn: function () {
                if (this.nowImgIndex > 0) {
                    this.changeImgSrc(this.nowImgIndex - 1);
                }
            },
            // 改变图片路径
            changeImgSrc: function (nowImgIndex) {
                let _this = this;
                let src = this.imgarray[nowImgIndex]
                let width = document.getElementById("imgView").offsetWidth;
                document.getElementById("imgView").src = src;
                this.nowImgIndex = nowImgIndex;
                let indexInterval = setInterval(function(){
                    if(document.getElementById("imgView").offsetWidth != width){
                        _this.initImg();
                        clearInterval(indexInterval);
                    }
                }, 50);
                if (this.imgarray.length > 1) {
                    if (this.nowImgIndex == 0) {
                        this.ImgLeftShow = false;
                        this.ImgRightShow = true;
                    } else if (this.nowImgIndex == this.imgarray.length - 1) {
                        this.ImgLeftShow = true;
                        this.ImgRightShow = false;
                    } else {
                        this.ImgLeftShow = true;
                        this.ImgRightShow = true;
                    }
                }
            },
        },
        components: {},
        computed: {},
    };
</script>
<style scoped>
    .wzc_picview {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1001;
    }
    .wzc_pic_mask {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        position: absolute;
        top: 0;
    }
    .wzc_pic_close {
        position: absolute;
        top: 30px;
        right: 30px;
        width: 20px;
        height: 20px;
        background: url(./img/close_init.png) no-repeat center center;
        background-size: 100% 100%;
        cursor: pointer;
        z-index: 1005;
    }
    .wzc_pic_close:hover {
        background: url(./img/close_hover.png) no-repeat center center;
        background-size: 100% 100%;
    }
    .wzc_content_pic {
        width: 100%;
        height: calc(100% - 50px);
        margin-top: 50px;
    }
    .wzc_content_pic .pic_left,
    .wzc_content_pic .pic_right{
        width: 60px;
        height: 45px;
        position: absolute;
        top: calc(50% - 23px);
        cursor: pointer;
    }
    .wzc_content_pic .pic_left {
        background:url('./img/left_init.png') center center;
        background-repeat:no-repeat;
        background-size: 80% 80%;
        left: 0px;   
    }
    .wzc_content_pic .pic_left:hover {
        background:url('./img/left_hover.png') center center no-repeat;
        background-size: 80% 80%;
    }
    .wzc_content_pic .pic_right {
        background:url('./img/right_init.png') center center;
        background-repeat:no-repeat;
        background-size: 80% 80%;
        right: 0px;
    }
    .wzc_content_pic .pic_right:hover {
        background:url('./img/right_hover.png') center center no-repeat;
        background-size: 80% 80%;
    }
    .wzc_content_pic .pic_center {
        width: calc(100% - 130px);
        margin: 0 auto;
        height: 100%;
        position: relative;
        overflow: hidden;
    }
    .nowAndAll {
        width: 40px;
        height: 14px;
        position: absolute;
        bottom: 14px;
        left: calc(50% - 20px);
        font-family: MicrosoftYaHei;
        text-align:center;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #ffffff;
        font-family: "Microsoft YaHei";
    }
    #imgView {
        position: absolute;
    }
</style>