<script setup lang="ts">
const handleSubmit = () => {
  const test = console.log('test')
}
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="text" name="query" />
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
