<template>
  <div id="markdownShow">
    <div class="showCon" :style="{ 'width': width + 'px'}" >
      <div class="right-box my-textarea" v-html="markedDownContent" ></div>
    </div>
    
  </div>
</template>

<script>
//导入marked模块，用来处理makedown语法
import marked from "marked";
import $ from 'jquery';
export default {
  name: 'markdownShow',
  components: {},
  props: {
    markContent:{
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: '1100'
    },
  },
  data() {
    return {
      markedDownContent: ''
    };
  },
  mounted() {
    this.init();
    var self = this;
  },
  watch: {
    'markContent':(str)=>{
      this.markedDownContent = marked(str)
      $('.my-textarea').html(this.markedDownContent)
    }
  },
  computed: {},
  methods: {
    init() {
      this.markedDownContent = marked(this.markContent)
    }
  },
  created() {},
  
};
</script>

<style scoped>
  #markdownShow {  
    overflow-y: scroll;
  }
  .showCon {
    height: 100%;
  }
</style>
