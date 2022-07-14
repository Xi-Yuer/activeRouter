<!--  -->
<template>
  <Header />
  <div class="main">
    <Slider class="slider" />
    <PageBord class="pagebord" />
  </div>
</template>

<script setup>
import Header from './header/index.vue'
import Slider from './slider/index.vue'
import PageBord from './page-bord/index.vue'
</script>
<style scoped>
.main{
  display: flex;
}
.slider{
  height: calc(100vh - 60px);
}
.pagebord{
  flex: 1;
  transition: all 0.3s;
}
</style>
