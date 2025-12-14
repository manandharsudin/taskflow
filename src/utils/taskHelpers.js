// Filter tasks by status
export const filterTasks = (tasks, filter) => {
  switch (filter) {
    case 'active':
      return tasks.filter(task => task.status !== 'completed')
    case 'completed':
      return tasks.filter(task => task.status === 'completed')
    case 'all':
    default:
      return tasks
  }
}

// Sort tasks
export const sortTasks = (tasks, sortBy) => {
  const tasksCopy = [...tasks] // Don't mutate original array
  
  switch (sortBy) {
    case 'priority':
      const priorityOrder = { high: 1, medium: 2, low: 3 }
      return tasksCopy.sort((a, b) => 
        priorityOrder[a.priority] - priorityOrder[b.priority]
      )
    
    case 'dueDate':
      return tasksCopy.sort((a, b) => 
        new Date(a.dueDate) - new Date(b.dueDate)
      )
    
    case 'status':
      const statusOrder = { 'in-progress': 1, pending: 2, completed: 3 }
      return tasksCopy.sort((a, b) => 
        statusOrder[a.status] - statusOrder[b.status]
      )
    
    default:
      return tasksCopy
  }
}

// Calculate task statistics
export const getTaskStats = (tasks) => {
  return {
    total: tasks.length,
    active: tasks.filter(task => task.status !== 'completed').length,
    completed: tasks.filter(task => task.status === 'completed').length,
    highPriority: tasks.filter(task => task.priority === 'high').length,
    mediumPriority: tasks.filter(task => task.priority === 'medium').length,
    lowPriority: tasks.filter(task => task.priority === 'low').length
  }
}