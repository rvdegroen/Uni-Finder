<script setup lang="ts">
import type { University } from '@/types'

defineProps<{
  // prop from app.vue with type University[]
  uniResults: University[]
}>()
</script>

<template>
  <div>
    <h2 class="green">University Statistics</h2>

    <p>Total Universities found: {{ uniResults.length }}</p>
  </div>
</template>

<style scoped>
div {
  text-align: left;
  margin: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
}
</style>
