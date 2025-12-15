import { 
  FILTER_OPTIONS, 
  TASK_STATUS, 
  PRIORITY_ORDER, 
  STATUS_ORDER 
} from '../constants/taskConstants'

/**
 * Filter tasks based on their status
 * @param {Array} tasks - Array of task objects
 * @param {string} filter - Filter type ('all', 'active', 'completed')
 * @returns {Array} Filtered array of tasks
 */
export const filterTasks = (tasks, filter) => {
  switch (filter) {
    case FILTER_OPTIONS.ACTIVE:
      return tasks.filter(task => task.status !== TASK_STATUS.COMPLETED)
    
    case FILTER_OPTIONS.COMPLETED:
      return tasks.filter(task => task.status === TASK_STATUS.COMPLETED)
    
    case FILTER_OPTIONS.ALL:
    default:
      return tasks
  }
}

/**
 * Sort tasks based on specified criteria
 * @param {Array} tasks - Array of task objects
 * @param {string} sortBy - Sort criteria ('priority', 'dueDate', 'status')
 * @returns {Array} Sorted array of tasks (new array, doesn't mutate original)
 */
export const sortTasks = (tasks, sortBy) => {
  // Create a copy to avoid mutating the original array
  const tasksCopy = [...tasks]
  
  switch (sortBy) {
    case 'priority':
      return tasksCopy.sort((a, b) => 
        PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]
      )
    
    case 'dueDate':
      return tasksCopy.sort((a, b) => 
        new Date(a.dueDate) - new Date(b.dueDate)
      )
    
    case 'status':
      return tasksCopy.sort((a, b) => 
        STATUS_ORDER[a.status] - STATUS_ORDER[b.status]
      )
    
    default:
      return tasksCopy
  }
}

/**
 * Calculate statistics from tasks array
 * @param {Array} tasks - Array of task objects
 * @returns {Object} Statistics object with various counts
 */
export const getTaskStats = (tasks) => {
  return {
    total: tasks.length,
    active: tasks.filter(task => task.status !== TASK_STATUS.COMPLETED).length,
    completed: tasks.filter(task => task.status === TASK_STATUS.COMPLETED).length,
    highPriority: tasks.filter(task => task.priority === 'high').length,
    mediumPriority: tasks.filter(task => task.priority === 'medium').length,
    lowPriority: tasks.filter(task => task.priority === 'low').length
  }
}