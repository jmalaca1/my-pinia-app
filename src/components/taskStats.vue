<template>
  <div class="task-stats">
    <h3>📊 Statistics</h3>
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
    
    <div class="progress-bar">
      <div 
        class="progress-fill" 
        :style="{ width: taskStore.completionPercentage + '%' }"
      ></div>
    </div>
    <p class="progress-text" v-if="taskStore.completionPercentage === 100">
      🎉 Perfect! All tasks completed! 🎉
    </p>
  </div>
</template>

<script setup>
import { useTaskStore } from '../stores/taskStore'

const taskStore = useTaskStore()
</script>

<style scoped>
.task-stats {
  background: linear-gradient(135deg, #f8f0ff 0%, #ffe6f0 100%);
  padding: 25px;
  border-radius: 15px;
  margin-top: 20px;
}
.task-stats h3 {
  color: #8e44ad;
  margin-bottom: 15px;
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
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(155, 89, 182, 0.1);
  transition: transform 0.2s;
}
.stat-card:hover {
  transform: translateY(-3px);
}
.stat-value {
  font-size: 32px;
  font-weight: bold;
  background: linear-gradient(135deg, #9b59b6 0%, #e84393 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.stat-label {
  font-size: 12px;
  color: #9b59b6;
  margin-top: 5px;
  font-weight: 500;
}
.progress-bar {
  background: #f0e6ff;
  height: 25px;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
}
.progress-fill {
  background: linear-gradient(90deg, #9b59b6 0%, #e84393 100%);
  height: 100%;
  transition: width 0.5s ease;
  border-radius: 25px;
}
.progress-text {
  text-align: center;
  margin-top: 10px;
  color: #e84393;
  font-weight: bold;
}
</style>