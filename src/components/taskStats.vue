<template>
  <div class="task-stats">
    <h3>Statistics</h3>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-value">{{ taskStore.totalTasks }}</div>
        <div class="stat-label">Total Tasks</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">{{ taskStore.completedTasks }}</div>
        <div class="stat-label">Completed</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">{{ taskStore.pendingTasks }}</div>
        <div class="stat-label">Pending</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">{{ taskStore.completionPercentage }}%</div>
        <div class="stat-label">Progress</div>
      </div>
    </div>
    
    <!-- Progress bar (creative use of getter) -->
    <div class="progress-bar">
      <div 
        class="progress-fill" 
        :style="{ width: taskStore.completionPercentage + '%' }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from '../stores/taskStore'

const taskStore = useTaskStore()
</script>

<style scoped>
.task-stats {
  background: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-bottom: 20px;
}
.stat-card {
  background: white;
  padding: 15px;
  text-align: center;
  border-radius: 8px;
}
.stat-value {
  font-size: 28px;
  font-weight: bold;
  color: #42b883;
}
.stat-label {
  font-size: 12px;
  color: #666;
  margin-top: 5px;
}
.progress-bar {
  background: #ddd;
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
}
.progress-fill {
  background: #42b883;
  height: 100%;
  transition: width 0.3s ease;
}
</style>