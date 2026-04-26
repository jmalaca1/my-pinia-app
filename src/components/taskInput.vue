<template>
  <div class="task-input">
    <h3>Add New Task</h3>
    <div class="input-group">
      <input 
        v-model="newTaskTitle" 
        @keyup.enter="handleAddTask"
        type="text" 
        placeholder="What needs to be done?"
      />
      <select v-model="priority">
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
      <button @click="handleAddTask">+ Add Task</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/taskStore'

const taskStore = useTaskStore()
const newTaskTitle = ref('')
const priority = ref('medium')

const handleAddTask = () => {
  if (newTaskTitle.value.trim()) {
    taskStore.addTask(newTaskTitle.value, priority.value)
    newTaskTitle.value = '' // Clear input
    priority.value = 'medium'
  }
}
</script>

<style scoped>
.task-input {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}
.input-group {
  display: flex;
  gap: 10px;
}
input, select, button {
  padding: 10px;
  font-size: 16px;
}
input {
  flex: 2;
}
button {
  background: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #33a06f;
}
</style>