import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, title: 'Watch Vue 3 tutorial', completed: false, priority: 'high' },
      { id: 2, title: 'Build Pinia store', completed: false, priority: 'medium' },
      { id: 3, title: 'Deploy to Cloudflare', completed: true, priority: 'low' }
    ],
    filter: 'all' // 'all', 'completed', 'pending'
  }),

  getters: {
    filteredTasks: (state) => {
      if (state.filter === 'completed') {
        return state.tasks.filter(task => task.completed)
      }
      if (state.filter === 'pending') {
        return state.tasks.filter(task => !task.completed)
      }
      return state.tasks
    },

    totalTasks: (state) => state.tasks.length,
    completedTasks: (state) => state.tasks.filter(t => t.completed).length,
    pendingTasks: (state) => state.tasks.filter(t => !t.completed).length,
    
    completionPercentage: (state) => {
      if (state.tasks.length === 0) return 0
      return Math.round((state.completedTasks / state.tasks.length) * 100)
    }
  },


  actions: {
    addTask(taskTitle, priority = 'medium') {
      if (!taskTitle.trim()) return
      
      const newTask = {
        id: Date.now(), // Simple unique ID
        title: taskTitle,
        completed: false,
        priority: priority
      }
      this.tasks.push(newTask)
    },

    toggleTask(taskId) {
      const task = this.tasks.find(t => t.id === taskId)
      if (task) {
        task.completed = !task.completed
      }
    },

    deleteTask(taskId) {
      this.tasks = this.tasks.filter(t => t.id !== taskId)
    },

    setFilter(filterType) {
      this.filter = filterType
    },

    clearCompleted() {
      this.tasks = this.tasks.filter(t => !t.completed)
    }
  }
})
