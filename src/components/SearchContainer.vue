<script setup lang="ts">
import type { University } from '@/types'
import { ref } from 'vue'
// define emits so I can use it in app.vue with @updateUniversities
const emit = defineEmits<{
  updateUniversities: [universities: University[]]
}>()

const query = ref('')

const handleSubmit = async () => {
  // fetch input.value
  const response = await fetch(`http://universities.hipolabs.com/search?name=${query.value}`)
  // assign type to universities
  const universities: University[] = await response.json()
  console.log(universities)

  // logging the number of universities
  console.log(universities.length)

  // empty input.value
  query.value = ''

  // give universities a different type (not any: typescript thing) in type.ts
  // types are always uppercase

  // emit it, to use in the parent component
  // emit (name of the event, what data I want to send, which is the universities)
  emit('updateUniversities', universities)
}
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="query" placeholder="search for a university" />
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<style scoped>
form {
  width: 100%;
  display: flex;
}

input {
  width: 100%;
  padding: 5px 10px;
  border: solid 2px white;
  border-radius: 5px 0 0 5px;
  font-size: 15px;
}

input:hover {
  border: 2px #00bd7e solid;
}

input:focus {
  border: 2px #00bd7e solid;
  outline: none;
}

button {
  background-color: #00bd7e;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 15px;
  padding: 5px 10px;
  transition: 0.2s ease-in-out;
}

button:hover {
  color: white;
  transition: 0.2s ease-in-out;
  background-color: #03b97d;
}

button:active {
  color: white;
  transition: 0.1s ease-in-out;
  background-color: #028f60;
}
</style>
