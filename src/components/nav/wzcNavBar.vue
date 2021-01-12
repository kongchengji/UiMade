<template>
  <div id="wzcNavBar">
      <div class="mainNav" :style="{ 'width': width + 'px', 'height': height + 'px' }">
        <div class="leftHead" @click="checkItem = -1">
          <a :href="navName.nameHref">{{ navName.name }}</a> 
        </div>
        <div class="ItemList">
          <div class="navItem" v-for="(item, index) in navName.itemList" :key="index" 
          :class="{'active': checkItem == index}" > 
            <a :href="item.itemHref" @click="checkItem = index">
              <span class="itemSpan">{{ item.itemName }}</span>
            </a>  
          </div>
        </div>
        <div class="rightHead">
          {{ navName.titleType }}
        </div>
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'wzcNavBar',
  components: {},
  props: {
      navName: {},
      width: {
        type: Number,
        default: '1100'
      },
      height: {
        type: Number,
        default: '70'
      },
  },
  data() {
    return {
      checkItem: -1,
    };
  },
  mounted() {
    this.init();
    
  },
  watch: {
    navName: (str) => {
      console.log(str)
    }
  },
  computed: {},
  methods: {
    init() {
      var self = this;
      // 设置字体上下间距
      $('.mainNav').css('line-height', this.height + 'px');
      // url判断
      this.urlCheck();
    },
    urlCheck() {
      let self = this;
      let filename = this.getFileName(window.location.href)
      if( filename != '' ) {
        for(let i = 0; i < this.navName.itemList.length; i++) {
          if( filename == this.getFileName(this.navName.itemList[i].itemHref) ) {
            this.checkItem = i;
            break;
          } 
        }
      }
    },
    getFileName( url ) {
      url = url.substring(url.lastIndexOf('#/') + 2);
      if(url.indexOf('/') == -1) 
        return url
      else 
        return url.substring(0, url.indexOf('/'))
    }
  },
  created() {},
  
};
</script>
<style scoped>
  #wzcNavBar { }
  .mainNav {    
    margin: 0 auto;
    height: 80px;    
    box-sizing: border-box;
    border-bottom: 1px solid #412D50;
    display: flex;
  }
  .mainNav a {
    text-decoration: none;
  }
  /* 导航栏左侧 */
  .leftHead {
    width: 150px;
    height: 100%;
    font-size: 30px;
    font-family: 'segoesc';
  }
  /* 导航栏主体 */
  .ItemList {
    width: calc(100% - 270px);
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .ItemList .navItem {
    font-size: 18px;
    height: 100%;
    width: 80px;
    color: #A0CEFD;
  }
  .ItemList .navItem a {
    color: #A0CEFD;
  } 
  .itemSpan {
    display: inline-block;
    padding: 0px 5px;
    height: 80%;
  }
  .ItemList .active a{
    color: #1989FA;
  }
  .ItemList .active a .itemSpan{
    border-bottom:3px solid #1989FA ;
    border-radius: 3px;
  }
  .ItemList a:hover,.ItemList a:active{
    color: #1989FA; 
  }
  .ItemList a:hover .itemSpan,.ItemList a:active .itemSpan{
    border-bottom:3px solid #1989FA ;
    border-radius: 3px;
  }
  
  /* 导航栏右侧 */
  .rightHead {
    width: 100px;
    height: 100%;
    font-size: 18px;
    color: gray;
    user-select: none;
    margin-left: 20px;
  }
  
</style>