<template>
  <div id="app">
    <router-view/>
 <!--  <div class="yuyu">
     {{yuyuy}}
   </div>
    <input type="text" v-model="yuyuy">
    <button @click="bian">点我翻转</button>
    <div class="sot" v-for="(i,index) in sot">
      <div> {{ i.opt | toLowCase }}</div>
    </div>-->

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return{
          yuyuy:'你猜我是誰',
        sot:[
          {opt:'1'},
          {opt:'2'},
          {opt:'3'},
          {opt:'4'},
          {opt:'5'},

        ]
      }
  },
  methods:{
    bian(){
      this.yuyuy = this.yuyuy.split('').reverse().join('')
    }

  },
  filters:{
    toLowCase:function( str ){
        if(str == 1){
            str = '是'
        }else if(str == 2){
            str = '否'
        }
      return str
    }
  }
}


</script>

<style>
#app {
  width: 100%;
  height: 100%;
  background: lightgoldenrodyellow;
  box-shadow: 0px 1px 15px rgba(238, 133, 0, 0.98) inset;
}
.clr { background-color:pink; }
.oneStyle { color:blue; font-size: 33px;}
.twoStyle { font-size: 33px;}
</style>
