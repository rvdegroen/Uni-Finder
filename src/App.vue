<script setup lang="ts">
import { ref } from 'vue'
import SearchContainer from './components/SearchContainer.vue'
import UniResults from './components/UniResults.vue'
import UniStats from './components/UniStats.vue'
import type { University } from './types'

const title = 'University Finder'

// wanna use variable in template, so you don't wanna put it in a function
// since ref<any> do instead of ref() : ref<University[]>() to assing the type
// ref<University[]>([]) instead of ref<University[]>(), to give it a default value, to loop over
// because it cannot be undefined
const universities = ref<University[]>([])

// emitted data from searchContainer.vue: universities as University[]
// for the emitted data: use param
// (param name : param type)
const onUpdateUniversities = (newlyFetchedUniversities: University[]) => {
  // emit it (child > parent)
  // give data as props to UniResults (parent > child)
  universities.value = newlyFetchedUniversities
}
</script>

<template>
  <main>
    <h1 class="green">{{ title }}</h1>
    <!-- components -->
    <SearchContainer @update-universities="onUpdateUniversities" />
    <!-- any name for the :prop = "variable of line 14" -->
    <!-- define prop in UniResults component, to use it in UniResults -->
    <UniStats :uniResults="universities" v-if="universities.length > 0" />
    <UniResults :uniResults="universities" v-if="universities.length > 0" />
    <p v-if="universities.length === 0">No results</p>
  </main>
</template>

<style scoped>
main {
  display: flex;
  max-width: 35em;
  margin: 0 auto;
  /* background-color: rgb(37, 37, 37); */

  flex-direction: column;
}

h1 {
  padding-bottom: 10px;
}

p {
  padding-top: 20px;
  margin: 0 auto;
}
</style>
