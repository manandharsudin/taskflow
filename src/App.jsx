import { useState, useEffect } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import { Header, TaskStats, TaskFilter, TaskList } from './components'
import AddTaskForm from './components/AddTaskForm/AddTaskForm'
import EditTaskForm from './components/EditTaskForm/EditTaskForm'
import { sampleTasks } from './data/sampleTasks'
import { filterTasks, sortTasks, getTaskStats } from './utils'
import { FILTER_OPTIONS, SORT_OPTIONS, TASK_STATUS } from './constants'
import './App.css'

const STORAGE_KEY = 'taskflow_tasks'

function App() {
  const [tasks, setTasks] = useLocalStorage('taskflow_tasks', sampleTasks)
  const [currentFilter, setCurrentFilter] = useState(FILTER_OPTIONS.ALL)
  const [currentSort, setCurrentSort] = useState(SORT_OPTIONS.PRIORITY)
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const [successMessage, setSuccessMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  
  // Simulate loading from storage
  useEffect(() => {
    // Brief delay to show loading state
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300)
    
    return () => clearTimeout(timer)
  }, [])
  
  // Document title effect
  useEffect(() => {
    const activeCount = tasks.filter(t => t.status !== TASK_STATUS.COMPLETED).length
    document.title = activeCount > 0 
      ? `TaskFlow (${activeCount} active)` 
      : 'TaskFlow - No active tasks'
  }, [tasks])
  
  const filteredTasks = filterTasks(tasks, currentFilter)
  const sortedTasks = sortTasks(filteredTasks, currentSort)
  const stats = getTaskStats(tasks)
  
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask])
    setShowAddForm(false)
    setSuccessMessage('Task added successfully')
    // Clear success message after 3 seconds
    setTimeout(() => setSuccessMessage(''), 3000)
  }

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
    setSuccessMessage('Task deleted successfully')
    setTimeout(() => setSuccessMessage(''), 3000)
  }

  const handleEditTask = (task) => {
    setEditingTask(task)
  }

  const handleSaveEdit = (updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ))
    setEditingTask(null)
    setSuccessMessage('Task updated successfully')
    setTimeout(() => setSuccessMessage(''), 3000)
  }

  const handleCancelEdit = () => {
    setEditingTask(null)
  }

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        const newStatus = task.status === TASK_STATUS.COMPLETED 
          ? TASK_STATUS.PENDING 
          : TASK_STATUS.COMPLETED
        return { ...task, status: newStatus }
      }
      return task
    }))
  }

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter)
  }

  const handleSortChange = (sortOption) => {
    setCurrentSort(sortOption)
  }
  
  return (
    <div className="app">
      <Header 
        icon="✓"
        title="TaskFlow"
        subtitle="Organize your tasks efficiently"
      />
      
      <main className="main-content">
        {successMessage && (
          <div className="success-message">
            ✓ {successMessage}
          </div>
        )}
        
        <div className="action-bar">
          <button 
            className="btn-add-task"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            {showAddForm ? '✕ Cancel' : '+ Add New Task'}
          </button>
        </div>
        
        {showAddForm && (
          <AddTaskForm 
            onAddTask={handleAddTask}
            onCancel={() => setShowAddForm(false)}
          />
        )}
        
        <TaskStats stats={stats} />
        
        <TaskFilter 
          activeFilter={currentFilter}
          totalTasks={stats.total}
          activeTasks={stats.active}
          completedTasks={stats.completed}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
        
        <TaskList 
          tasks={sortedTasks}
          isLoading={isLoading}
          onDeleteTask={handleDeleteTask}
          onEditTask={handleEditTask}
          onToggleComplete={handleToggleComplete}
        />
      </main>
      
      {editingTask && (
        <EditTaskForm
          task={editingTask}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  )
}

export default App