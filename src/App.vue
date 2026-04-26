<template>
  <div id="app">
    <div class="header">
      <h1>💖💜 Task Manager with Pinia 💜💖</h1>
      <p>Demonstrating State, Getters, and Actions</p>
    </div>
    
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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #f5f0ff 0%, #ffe6f0 100%);
  padding: 20px;
  min-height: 100vh;
}

#app {
  max-width: 900px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
}

h1 {
  background: linear-gradient(135deg, #9b59b6 0%, #e84393 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 2.5em;
  margin-bottom: 10px;
}

.header p {
  color: #9b59b6;
  font-size: 1.1em;
}
</style>
