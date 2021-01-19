<template>
  <div class="wzc_catalog">
      <div class="catalog_item" v-for="(item,index) in chapterList" :key="index"
      :class="['cataType' + item.type , {'selected': currentId == item.id }] " >
          <a class="catalog_item_a" :href="hrefSelect(item)" @click="cataSelect(item)"> {{ item.title }} </a> 
      </div>
  </div>
</template>

<script>
export default {
    name: 'wzc-catalog',
    components: {},
    props: {
        chapterList: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            currentId: 0
        };
    },
    mounted() {
        this.urlCheck();
    },
    methods: {
        cataSelect (item){
            if(item.type != '0' && item.type != '4') {
                this.currentId = item.id;
            }
        },
        urlCheck() {
            let self = this;
            let filename = this.getFileName(window.location.href)
            for(let i = 0; i < this.chapterList.length; i++) {
                if( filename == this.getFileName(this.chapterList[i].href) ) {
                    this.currentId = this.chapterList[i].id;
                    break;
                } 
            }
        },
        getFileName( url ) {
            url = url.substring(url.lastIndexOf('/'));
            return url;
        },
        hrefSelect( item ) {
            if(this.currentId == item.id) {
                return item.href;
            }
        }
    },
    created() {},
    
};
</script>
<style scoped>
    .wzc_catalog{
        padding-top: 50px;
        padding-left: 15px;
        overflow-y: scroll;
    }
    .catalog_item {
        height: 50px;
        width: 100%;
        line-height: 50px;
        font-family: simkai;
    }
    .catalog_item_a {
        display: block;
        text-decoration: none;
        cursor: default;
    }
    .catalog_item.selected .catalog_item_a{
        color: #1989FA;
        
    }
    .cataType1 .catalog_item_a{
        font-size: 20px;
        color: #333;
        font-weight: 700;
        text-align: left;
        cursor: pointer;
        
    }
    .cataType2 .catalog_item_a{
        text-align: left;
        color: #444;
        font-size: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 500;
        cursor: pointer;
    }
    .cataType0 .catalog_item_a{
        font-size: 20px;
        color: #333;
        font-weight: 700;
        text-align: left;
    }
    .cataType4 {
        height: 30px;
        line-height: 30px;
    }
    .cataType4 .catalog_item_a{
        font-size: 16px;
        color: #c4bfbf;
        font-weight: 500;
        text-align: left;
    }
    .cataType1 .catalog_item_a:hover,
    .cataType2 .catalog_item_a:hover {
        color: #1989FA;
    }
    
</style>