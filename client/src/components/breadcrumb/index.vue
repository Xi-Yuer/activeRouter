<!--  -->
<template>
  <div class="breadCrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadCrumb" :key="item">
        <el-breadcrumb-item class="breadItem" :to="item">{{ item }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup>
defineProps({
  breadCrumb: {
    type: Array,
    default: () => [],
  },
})
</script>
<style scoped>
.breadCrumb {
  margin-left: 10px;
}
.breadItem{
  cursor: pointer;
}
</style>
