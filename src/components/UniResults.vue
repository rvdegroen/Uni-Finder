<script setup lang="ts">
import type { University } from '@/types'

defineProps<{
  // prop from app.vue with type University[]
  uniResults: University[]
}>()
</script>

<template>
  <div>
    <h2 class="green">Results</h2>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Country&nbsp;Code</th>
          <th>Domains</th>
        </tr>
      </thead>
      <tbody>
        <!-- every university, is gonna have 1 row -->
        <tr v-for="(uniResult, index) of uniResults" :key="index">
          <td>{{ uniResult.name }}</td>
          <td>{{ uniResult.country }}</td>
          <td>{{ uniResult.alpha_two_code }}</td>
          <td>{{ uniResult.domains.join(', ') }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
tr {
  text-align: left;
}

th,
td {
  padding: 5px 10px;
}
</style>
