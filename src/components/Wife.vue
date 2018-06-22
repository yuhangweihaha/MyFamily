<template>
<div id="Wife">
  <div class="shape-outer pentagon">
    <div class="shape-inner pentagon"></div>
  </div>

  <div class="shape-outer hexagon">
    <div class="shape-inner hexagon"></div>
  </div>

  <div class="shape-outer heptagon">
    <div class="shape-inner heptagon"></div>
  </div>

  <div class="shape-outer octagon">
    <div class="shape-inner octagon"></div>
  </div>

  <div class="shape-outer nonagon">
    <div class="shape-inner nonagon"></div>
  </div>

  <div class="shape-outer decagon">
    <div class="shape-inner decagon"></div>
  </div>

  <div class="shape-outer circle">
    <div class="shape-inner circle"></div>
  </div>

  <div class="shape-outer ellipse">
    <div class="shape-inner ellipse"></div>
  </div>

  <div class="shape-outer triangle">
    <div class="shape-inner triangle"></div>
  </div>

  <div class="shape-outer rhombus">
    <div class="shape-inner rhombus"></div>
  </div>

  <div class="shape-outer trapezoid">
    <div class="shape-inner trapezoid"></div>
  </div>

  <div class="shape-outer parallelogram">
    <div class="shape-inner parallelogram"></div>
  </div>

  <div class="shape-outer bevel">
    <div class="shape-inner bevel"></div>
  </div>

  <div class="shape-outer rabbet">
    <div class="shape-inner rabbet"></div>
  </div>

  <div class="shape-outer sign-left">
    <div class="shape-inner sign-left"></div>
  </div>

  <div class="shape-outer sign-right">
    <div class="shape-inner sign-right"></div>
  </div>

  <div class="shape-outer chevron-left">
    <div class="shape-inner chevron-left"></div>
  </div>

  <div class="shape-outer chevron-right">
    <div class="shape-inner chevron-right"></div>
  </div>
</div>
</template>
<script>
  import Vue from 'vue'
  export default {
    data() {
      return {}
    },
    methods: {},
    mounted() {

    },

    created() {

    }
  }
</script>
<style  scoped>
#Wife {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  background-color: lightgoldenrodyellow;
  margin-top: 40px;
}

.shape-outer {
  display: flex;
  flex-shrink: 0;
  height: calc(150px + 4vw);
  width: calc(150px + 4vw);
  margin: 25px;
  background-image: linear-gradient(to bottom right, #ff3cac, #562b7c, #2b86c5);
}

.shape-inner {
  height: calc(130px + 4vw);
  width: calc(130px + 4vw);
  background: url("../assets/images/image_w2.jpg") ;
  background-size: 160% 160%;
  margin: auto;
}

.pentagon {
  -webkit-clip-path: polygon(50% 0%, 100% 40%, 82% 100%, 18% 100%, 0% 40%);
  clip-path: polygon(50% 0%, 100% 40%, 82% 100%, 18% 100%, 0% 40%);
}

.hexagon {
  -webkit-clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

.heptagon {
  -webkit-clip-path: polygon(50% 0%, 90% 20%, 100% 62%, 75% 100%, 25% 100%, 0% 62%, 10% 20%);
  clip-path: polygon(50% 0%, 90% 20%, 100% 62%, 75% 100%, 25% 100%, 0% 62%, 10% 20%);
}

.octagon {
  -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
}

.nonagon {
  -webkit-clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);
  clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);
}

.decagon {
  -webkit-clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 65%, 80% 90%, 50% 100%, 20% 90%, 0 65%, 0 35%, 20% 10%);
  clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 65%, 80% 90%, 50% 100%, 20% 90%, 0 65%, 0 35%, 20% 10%);
}

.circle {
  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
}

.ellipse{
  -webkit-clip-path: ellipse(35% 50% at 50% 50%);
  clip-path: ellipse(35% 50% at 50% 50%);
}

.triangle{
  -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.rhombus {
  -webkit-clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.trapezoid {
  -webkit-clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
}

.parallelogram {
  -webkit-clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
}

.bevel {
  -webkit-clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
  clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
}

.rabbet {
  -webkit-clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);
  clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);
}

.sign-left {
  -webkit-clip-path: polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%);
  clip-path: polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%);
}

.sign-right {
  -webkit-clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
}

.chevron-left {
  -webkit-clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
  clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
}

.chevron-right {
  -webkit-clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
}
</style>
