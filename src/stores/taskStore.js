import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  // STATE: The actual data
  state: () => ({
    tasks: [
      { id: 1, title: 'Learn Pinia', done: false }
    ]
  }),
  
  // GETTERS: Computed values
  getters: {
    completedTasks: (state) => {
      return state.tasks.filter(task => task.done).length
    }
  },
  
  // ACTIONS: Methods that change state
  actions: {
    addTask(taskTitle) {
      this.tasks.push({ 
        id: Date.now(), 
        title: taskTitle, 
        done: false 
      })
    }
  }
})
