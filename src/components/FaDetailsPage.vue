<template>
  <div id="FaDetailsPage">
    <div class="div1">
      <div class="div_left">
        <ul>
          <li v-if="auto" v-for="(items,index) in datas1">{{items.list1}}</li>
          <li v-if="auto2" v-for="(items,index) in datas2">{{items.list1}}</li>
          <li v-if="auto3" v-for="(items,index) in datas3">{{items.list1}}</li>
        </ul>
      </div>
      <div class="div_right">

      </div>
    </div>

    <div></div>
  </div>

</template>
<script>
  import Vue from 'vue'
  export default {
    data() {
      return {
        opp: '',
        auto: false,
        auto2: false,
        auto3: false,
        datas1: [
          {
            'list1': '我是第一个'
          },
          {
            'list1': '我是第二个'
          },
          {
            'list1': '我是第三个'
          },
          {
            'list1': '我是第四个'
          },
          {
            'list1': '我是第五个'
          },
          {
            'list1': '我是第六个'
          },
        ],
        datas2: [
          {
            'list1': '你是第一个'
          },
          {
            'list1': '你是第二个'
          },
          {
            'list1': '你是第三个'
          },
          {
            'list1': '你是第四个'
          },
          {
            'list1': '你是第五个'
          },
          {
            'list1': '你是第六个'
          },
        ],
        datas3: [
          {
            'list1': '他是第一个'
          },
          {
            'list1': '他是第二个'
          },
          {
            'list1': '他是第三个'
          },
          {
            'list1': '他是第四个'
          },
          {
            'list1': '他是第五个'
          },
          {
            'list1': '他是第六个'
          },
        ]
      }
    },
    props: {
      childParm: Object
    },
    methods: {
      opts(){

        let _this = this;
//        console.log(index);
        if (_this.opt == 0) {
          this.auto = true;
        } else if (_this.opt == 1) {
          this.auto2 = true;
        } else if (_this.opt == 2) {
          this.auto3 = true;
        }
      },
    },
    mounted() {

    },
    created() {
      this.opt = this.$route.query.id;
      this.opts();
    }
  }
</script>
<style lang="less" scoped>
  #FaDetailsPage {
    width: 100%;
    height: 1000px;

  .div1 {
    width: 99%;
    height: 1000px;
    margin-left: 0.5%;
    background: salmon;

  .div_left {
    width: 18.1%;
    height: 100%;
    background: sienna;
    float: left;

  ul {
    width: 100%;
    height: 40%;
    background: slateblue;
    padding: 0;

  li {
    width: 100%;
    height: 16.6%;
    background: seagreen;
    list-style: none;
    margin: 0;
    line-height: 64px;
    text-align: center;
  }

  }
  }
  .div_right {
    width: 81.9%;
    height: 100%;
    float: right;
    background: darkkhaki;
  }

  }
  }

</style>
