<template>
  <div class="task-list">
    <h3>📋 Your Tasks</h3>
    
    <div class="filters">
      <button 
        v-for="filter in ['all', 'pending', 'completed']" 
        :key="filter"
        @click="taskStore.setFilter(filter)"
        :class="{ active: taskStore.filter === filter }"
      >
        {{ filter.toUpperCase() }}
      </button>
    </div>

    <div v-if="taskStore.filteredTasks.length === 0" class="empty">
      🎉 No tasks to show! Add some above 🎉
    </div>
    
    <div v-else class="tasks">
      <div 
        v-for="task in taskStore.filteredTasks" 
        :key="task.id" 
        class="task"
        :class="{ completed: task.completed }"
      >
        <input 
          type="checkbox" 
          :checked="task.completed"
          @change="taskStore.toggleTask(task.id)"
        />
        <span class="task-title">{{ task.title }}</span>
        <span class="priority" :class="task.priority">
          {{ task.priority === 'high' ? '💖 High' : task.priority === 'medium' ? '💜 Medium' : '💕 Low' }}
        </span>
        <button @click="taskStore.deleteTask(task.id)" class="delete">✗</button>
      </div>
    </div>
    
    <button v-if="taskStore.completedTasks > 0" @click="taskStore.clearCompleted" class="clear-btn">
      🧹 Clear Completed
    </button>
  </div>
</template>

<script setup>
import { useTaskStore } from '../stores/taskStore'

const taskStore = useTaskStore()
</script>

<style scoped>
.task-list {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(155, 89, 182, 0.15);
}
.task-list h3 {
  color: #8e44ad;
  margin-bottom: 15px;
}
.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.filters button {
  padding: 8px 16px;
  background: #f0e6ff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  color: #6c3483;
  font-weight: 500;
}
.filters button.active {
  background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%);
  color: white;
}
.filters button:hover {
  transform: translateY(-2px);
}
.task {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-bottom: 1px solid #f0e6ff;
  transition: background 0.2s;
}
.task:hover {
  background: #fff5f9;
}
.task.completed .task-title {
  text-decoration: line-through;
  color: #d4a5e0;
}
.priority {
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 20px;
  font-weight: 500;
}
.priority.high { 
  background: #ff9ff3; 
  color: #8e44ad;
}
.priority.medium { 
  background: #d4a5e0; 
  color: #6c3483;
}
.priority.low { 
  background: #f0e6ff; 
  color: #9b59b6;
}
.delete {
  margin-left: auto;
  background: #ff6b81;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  padding: 5px 12px;
  transition: transform 0.2s;
}
.delete:hover {
  transform: scale(1.05);
  background: #ff4757;
}
.clear-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #a29bfe 0%, #9b59b6 100%);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
}
.clear-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(155, 89, 182, 0.3);
}
</style>