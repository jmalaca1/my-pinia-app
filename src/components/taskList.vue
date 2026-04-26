<template>
  <div class="task-list">
    <h3>Your Tasks</h3>
    
    <!-- Filter Buttons -->
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

    <!-- Task Items -->
    <div v-if="taskStore.filteredTasks.length === 0" class="empty">
      No tasks to show 🎉
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
          {{ task.priority }}
        </span>
        <button @click="taskStore.deleteTask(task.id)" class="delete">✗</button>
      </div>
    </div>
    
    <button v-if="taskStore.completedTasks > 0" @click="taskStore.clearCompleted" class="clear-btn">
      Clear Completed
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
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.filters button {
  padding: 8px 16px;
  background: #eee;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.filters button.active {
  background: #42b883;
  color: white;
}
.task {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-bottom: 1px solid #eee;
}
.task.completed .task-title {
  text-decoration: line-through;
  color: #999;
}
.priority {
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
}
.priority.high { background: #ff4757; color: white; }
.priority.medium { background: #ffa502; color: white; }
.priority.low { background: #2ed573; color: white; }
.delete {
  margin-left: auto;
  background: #ff4757;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 4px 8px;
}
.clear-btn {
  margin-top: 20px;
  padding: 8px 16px;
  background: #747bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>