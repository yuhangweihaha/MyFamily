<template>
<div id="Family">
 <div class="fa" v-for="(item,index) in data">
 <div class="fas"@click="fals(index)">{{item.one}}</div>
 </div>
</div>
</template>
<script>
    import Vue from 'vue'
    export default {
        data() {
            return {
                data:[
                  {one:'111111',id:0 },
                  {one:'222222', id:1 },
                  {one:'3333',id:2 },
                  {one:'跳转另一个',id:3 }
                ]
            }
        },
        methods: {
          fals(index){
              console.log(this.data[index].id);
              if(this.data[index].id == 3){
                this.$router.push({name:'FaTowPage',query:{id:this.data[index].id}});
              }else{
                this.$router.push({name:'FaDetailsPage',query:{id:this.data[index].id}});
              }

          }
        },
        mounted() {

        },

        created() {

        }
    }
</script >
<style lang="less"  scoped>
#Family{
  width: 100%;
  height: 1000px;
  /*background: darkcyan;*/
  .fa {
    width: 200px;
    height: 230px;
    border: 1px solid #ccc;
    cursor: pointer;
    float: left;
    margin-left: 140px;
    margin-top: 40px;
    text-align: center;
    line-height: 230px;
  }
}
</style>
