<template>
  <div id="ApiMain" class="ApiMain">
      <div class="introduct">
          <div class="apiName">
              <h1>wzcのhomemadeのui</h1>
          </div>

          <div class="startApi">
              
          </div>
      </div>

  </div>
</template>

<script>
    
    import $ from 'jquery'
    export default {
        name: 'ApiMain',
        components: {  },
        props: {},
        data() {
            return {
                
            };
        },
          watch: {},
          computed: {},
          methods: {},
          created() {},
          mounted() {}
    };
</script>
<style scoped>
    .introduct {
        width: 1100px;
        height: 800px;
        margin: 0px auto;
        background: url('../../assets/bg/vue_bg.jpg') no-repeat center 50%;
        position: relative;
    }
    .apiName{
        font-size: 24px;    
        font-family: KaiTi;
        width: 440px;
        /* 文字阴影渐变 */
        animation: san 4s linear infinite;
        user-select: none;
        position: absolute;
        top: 120px;
        left: calc(50% - 220px);
        text-align: center;
    }
     @keyframes san{
        0%,100%{
            color: rgb(255, 255, 255);         
            text-shadow: 0 0 5px  #000000,
                        0 0 15px  #000000,
                        0 0 25px  #000000,
                        0 0 50px  #000000;
        }
        40%, 60%{
            color: rgba(0,0,0,0.5);
            text-shadow: none;
        }        
    }

    
</style>