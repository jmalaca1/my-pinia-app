<template>
  <div class="task-input">
    <h3>✨ Add New Task ✨</h3>
    <div class="input-group">
      <input 
        v-model="newTaskTitle" 
        @keyup.enter="handleAddTask"
        type="text" 
        placeholder="What needs to be done?"
      />
      <select v-model="priority">
        <option value="low">Low Priority 💕</option>
        <option value="medium">Medium Priority 💜</option>
        <option value="high">High Priority 💖</option>
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
    newTaskTitle.value = ''
    priority.value = 'medium'
  }
}
</script>

<style scoped>
.task-input {
  background: linear-gradient(135deg, #ffe6f0 0%, #f0e6ff 100%);
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(155, 89, 182, 0.2);
}
.task-input h3 {
  color: #8e44ad;
  margin-bottom: 15px;
}
.input-group {
  display: flex;
  gap: 10px;
}
input, select, button {
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #d4a5e0;
}
input {
  flex: 2;
  border: 1px solid #d4a5e0;
  outline: none;
}
input:focus {
  border-color: #9b59b6;
  box-shadow: 0 0 5px rgba(155, 89, 182, 0.3);
}
button {
  background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%);
  color: white;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
}
button:hover {
  transform: scale(1.02);
  background: linear-gradient(135deg, #8e44ad 0%, #7d3c98 100%);
}
select {
  background: white;
  cursor: pointer;
}
</style>