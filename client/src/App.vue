<template>
  <div id="main">
    <Suspense>
      <router-view/>
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>
<script setup>
import { useStore } from './store'

const store = useStore()
store.changeUserRoutes()
</script>
<style scoped></style>
