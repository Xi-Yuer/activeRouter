<template>
  <div id="main">
    <Suspense>
      <router-view />
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>
<script setup>
</script>
<style scoped></style>
