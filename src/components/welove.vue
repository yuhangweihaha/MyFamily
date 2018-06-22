<template>
  <div id="welove">
    <el-carousel style="margin-top: 30px;" :interval="4000" type="card" height="293px">
      <el-carousel-item v-for="(item,index) in images" :key="index">
        <h3 class="h3s"><img :src="item.src" alt=""></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  import axios from 'axios'
  import Vue from 'vue'
  export default {
    data() {
      return {
        goods_list:[],
        images:[
          {src:require("../assets/images/2.jpg")},
          {src:require("../assets/images/3.jpg")},
          {src:require("../assets/images/4.jpg")},
          {src:require("../assets/images/5.jpg")},
        ]
      }
    },
    methods: {},
    mounted() {

    },

    /*created() {
      axios.post('/mall/index/getGoodsChannel', { channel_id: this.channel_id }).then((res) => {
        this.channel_id++;
        this.goods_list = [...res.data.listItem];
        console.log(this.goods_list,787877)
      })
    }*/
  }
</script>
<style scoped>
  #welove{
    width: 100%;
    height: 100%;
    background: gray;
  }
</style>
