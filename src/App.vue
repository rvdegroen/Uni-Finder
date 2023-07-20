<script setup lang="ts">
import SearchContainer from './components/SearchContainer.vue'
import UniResults from './components/UniResults.vue'
import UniStats from './components/UniStats.vue'

const title = 'Uni Finder'
</script>

<template>
  <main>
    <h1 class="green">{{ title }}</h1>
    <!-- components -->
    <SearchContainer />
    <UniResults />
    <UniStats />
  </main>
</template>

<style scoped>
main {
  display: flex;
  align-items: center;
  max-width: 30em;
  margin: 0 auto;
  /* background-color: rgb(37, 37, 37); */

  flex-direction: column;
}

h1 {
  padding-bottom: 10px;
}
</style>
