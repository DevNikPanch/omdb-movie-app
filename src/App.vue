<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <RouterView />
</template>

<style lang="css">
:root {
  --color-bg-main: #09090b;
  --color-text-main: #f4f4f5;
}

body {
  background-color: var(--color-bg-main);
  color: var(--color-text-main);
  font-family: system-ui, -apple-system, sans-serif;
  min-height: 100vh;
}
</style>
