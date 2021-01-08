<template>
  <div id="app">
    <wzcNavBar :nav-name='navName' :width="1100" :height="60" ></wzcNavBar>
    <router-view/>
  </div>
</template>

<script>
  import wzcNavBar from './components/nav/wzcNavBar'
  export default {
    name: "App",
    components: { wzcNavBar },
    data() {
      return {
          navName:{
              name: "Wzc-Ui", 
              titleType: "中文", 
              nameHref: "#/" ,
              itemList: [
                  { itemName: '指南', itemHref: '#/guide/useIntroduct' },
                  { itemName: '组件', itemHref: '#/compentList' },
                  { itemName: '资源', itemHref: '#/HelloWorld' },
              ]
          }
      };
    },
  };
</script>

<style>

  /*修改滚动条样式*/
div::-webkit-scrollbar{
  width: 8px;
  height:10px;
}
div::-webkit-scrollbar-track{
  background: #fff;
  border-radius:2px;
}
div::-webkit-scrollbar-thumb{
  background: #bfbfbf;
  border-radius:10px;
}
div::-webkit-scrollbar-thumb:hover{
  background: #333;
}
div::-webkit-scrollbar-corner{
  background: #179a16;
}


#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x: hidden;
  background-color: #fff;
  width: 100%;
  height: 100vh;
}

</style>
