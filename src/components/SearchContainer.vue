<script setup lang="ts"></script>

<template>
  <div>
    <input type="text" />
    <button>Search</button>
  </div>
</template>

<style scoped>
div {
  width: 100%;
  display: flex;
}

input {
  width: 100%;
  padding: 5px 10px;
  border: solid 1px white;
  border-radius: 5px 0 0 5px;
  font-size: 15px;
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
</style>
