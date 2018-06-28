<template>
  <div id="hello">
    <header class="header">
      <div class="imgs"></div>
      <ul>
         <li  v-for=" (opt,index) in indexs" @click="toggle(index)" :class="{'light':index ==checkindex }"><router-link  :to="{name:opt.data}"  tag="span" >{{opt.data}}</router-link></li>
      </ul>
      <!--关注我们-->
      <div class="jishe">
        <div class="ie1">
          <el-dropdown @command="handleCommand" trigger="click">
          <span class="el-dropdown-link">关注我们</span>
          <el-dropdown-menu class="uuu" slot="dropdown" style="padding: 0 30px;position: absolute; top: 51px; left: 903px;">
            <el-dropdown-item command=" q ">关注于航伟</el-dropdown-item>
            <el-dropdown-item command="b">关注边亚楠</el-dropdown-item>
          </el-dropdown-menu>
          </el-dropdown>
        </div>

        <!--<div><img src="../assets/images/phone.png" alt=""> 联系我们</div>-->
        <div class="ie1">
          <el-dropdown @command="handleCommand" trigger="click">
            <span class="el-dropdown-link">联系我们</span>
            <el-dropdown-menu class="uuu" slot="dropdown" style="padding: 0 30px;position: absolute; top: 51px; left: 903px;">
              <el-dropdown-item command=" q ">联系老于</el-dropdown-item>
              <el-dropdown-item command="b">联系老边</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div>退出</div>
      </div>
    </header>
    <main class="main">
      <div class="box">
          <div class="inner" id="on1">
            <span>欢迎来到我家</span>
          </div>
          <div class="inner" id="on2">
            <span>欢迎来到我家</span>
          </div>
      </div>
      <router-view class="wrap"></router-view>
    </main>
    <footer class="footer">

    </footer>
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        checkindex:[],
          indexs:[
            {data:'daughter'},
            {data:'Wife'},
            {data:'mylove'},
            {data:'Family'},
            {data:'welove'},
            {data:'Future'},
          ],
      }
    },

    methods: {
      handleCommand(command) {
        this.$message('hover on item ' + command);
      },
      toggle(index){
        this.checkindex = index;
      },
    },
//      created(){
//        this.checkindex = index;
//    }

  }
</script>

<style lang="less" scoped>
  * {
    margin: 0;
    padding: 0;
  }
.active{
  position: absolute;
  left:40px;
  bottom: 0px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid red;
}
  #hello {
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
  .header {
    width: 98.7%;
    margin-left: 0.65%;
    height: 70px;
    background: lightgoldenrodyellow;
    position: relative;
    font-family: PingFangSC-Medium;
    box-shadow: 0px 1px 15px rgba(238, 133, 0, 0.98) inset;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 3000;

  }
/*.footer{
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0;
  box-shadow: 0px 1px 15px rgba(238, 133, 0, 0.98) inset;
}*/
  .header ul {
    width: 40%;
    height: 100%;
    float: right;
    position: absolute;
    left: 23%;
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
.header ul .light{
  color: rgba(238, 161, 88, 0.98);
  position: relative;
 font-weight: 800;
}
  .header ul .light:before{
    content: "";
    width: 0px;
    height: 0px;
    left: 42%;
    bottom: 0;
    position: absolute;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 15px solid rgba(238, 161, 88, 0.98);
    /*background: #EE8500;*/
    /*width: 0px;
    height: 0px;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid black;*/
  }
  .header ul li {
    height: 100%;
    line-height: 70px;
    list-style-type: none;
    /*float: left;*/
    /*margin-left: 31px;*/
    cursor: pointer;
    flex: 1;
  }
  .header ul li span{
    height: 100%;
    width: 100%;
    display: block;
  }
  .jishe {
    width: 29%;
    height: 100%;
    position: absolute;
    right: 20px;
    display: flex;

  }

  .jishe div {
    flex: 1;
    line-height: 70px;
    text-align: center;
    cursor: pointer;
  }

  .jishe div img {
    margin-top: 3px;
  }

  .imgs {
    width: 23%;
    height: 100%;
    background: url(../assets/images/1.png) no-repeat 43px -11px;
    position: absolute;
    left: 0;
    background-size: 210px 91px;
  }

  .aa {
    cursor: pointer;
  }

  .red {
    color: #EE8500;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #000;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
.ie1:nth-child(1){
   :nth-child(1){
     font-size: 16px;
     color: rgba(238, 161, 88, 0.98);
   }
}
  .ie1:nth-child(2){
  :nth-child(1){
    font-size: 16px;
    color: rgba(238, 161, 88, 0.98);
  }
  }
  #dropdown-menu-8931{
    background: aqua;
  }
  .main{
    width: 94%;
    margin-left: 3%;
    /*overflow:auto;*/
    flex: 1;
    margin-top: 60px;
    /*background: lawngreen;*/
  }

  }

</style>
<style>
  .uuu{
    /*left: 60.5px;*/
    margin-top:-30px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .h3s img{
    height: 100%;
    width: 100%;
    background-size:40px 40px;
  }
  .box {
    display: flex;
    margin: -1px 16%;
  }

  .box .inner {
    width: 140px;
    height: 20px;
    line-height: 20px;
    font-size: 1.1em;
    font-family: sans-serif;
    font-weight: bold;
    white-space: nowrap;
    margin-bottom: 0px;
    overflow: hidden;
    margin-top: 30px;
  }

  .box .inner:first-child {
    background-color: rgba(238, 155, 81, 0.98);
    color: #8b2e06;
    transform-origin: left;
    transform: perspective(210px) rotateY(-67.3deg);

  }

  .box .inner:last-child {
    background-color: rgba(238, 161, 88, 0.98);
    color: #faf2f8;
    transform-origin: right;
    transform: perspective(210px) rotateY(67.3deg);
  }

  .box .inner span {
    position: absolute;
    animation: marquee 5s linear infinite;
  }

  .box .inner:first-child span {
    animation-delay: 2.5s;
    left: -100%;
  }
#on1{
  margin-left: 33%;
}


  @keyframes marquee {
    from {
      left: 100%;
    }

    to {
      left: -100%;
    }
  }
</style>
