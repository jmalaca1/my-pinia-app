<template>
  <div id="app">
    <h1>✅ Task Manager with Pinia</h1>
    <p>Demonstrating State, Getters, and Actions</p>
    
    <TaskInput />
    <TaskList />
    <TaskStats />
  </div>
</template>

<script setup>
import TaskInput from './components/taskInput.vue'
import TaskList from './components/taskList.vue'
import TaskStats from './components/taskStats.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  padding: 20px;
}
#app {
  max-width: 800px;
  margin: 0 auto;
}
h1 {
  color: #42b883;
  margin-bottom: 10px;
}
</style>
