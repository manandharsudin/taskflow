import { useState } from 'react'
import { Header, TaskStats, TaskFilter, TaskList } from './components'
import AddTaskForm from './components/AddTaskForm/AddTaskForm'
import EditTaskForm from './components/EditTaskForm/EditTaskForm'
import { sampleTasks } from './data/sampleTasks'
import { filterTasks, sortTasks, getTaskStats } from './utils'
import { FILTER_OPTIONS, SORT_OPTIONS, TASK_STATUS } from './constants'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(sampleTasks)
  const [currentFilter, setCurrentFilter] = useState(FILTER_OPTIONS.ALL)
  const [currentSort, setCurrentSort] = useState(SORT_OPTIONS.PRIORITY)
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const [successMessage, setSuccessMessage] = useState('')
  
  const filteredTasks = filterTasks(tasks, currentFilter)
  const sortedTasks = sortTasks(filteredTasks, currentSort)
  const stats = getTaskStats(tasks)
  
  /**
   * Show temporary success message
   */
  const showSuccess = (message) => {
    setSuccessMessage(message)
    setTimeout(() => setSuccessMessage(''), 3000)
  }
  
  /**
   * Add new task
   */
  const handleAddTask = (newTask) => {
    setTasks(prevTasks => [newTask, ...prevTasks])
    setShowAddForm(false)
    showSuccess('Task added successfully!')
  }
  
  /**
   * Delete task by ID
   */
  const handleDeleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId))
    showSuccess('Task deleted successfully!')
  }
  
  /**
   * Toggle task completion status
   */
  const handleToggleComplete = (taskId) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId
          ? { 
              ...task, 
              status: task.status === TASK_STATUS.COMPLETED 
                ? TASK_STATUS.PENDING 
                : TASK_STATUS.COMPLETED 
            }
          : task
      )
    )
  }
  
  /**
   * Edit task (placeholder for now)
   */
  const handleEditTask = (taskId) => {
    const task = tasks.find(t => t.id === taskId)
    if (task) {
      setEditingTask(task)
    }
  }

  /**
   * Save edited task
   */
  const handleSaveEdit = (updatedTask) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      )
    )
    setEditingTask(null)
    showSuccess('Task updated successfully!')
  }
  
  /**
   * Cancel editing
   */
  const handleCancelEdit = () => {
    setEditingTask(null)
  }
  
  const handleFilterChange = (filter) => {
    setCurrentFilter(filter)
  }
  
  const handleSortChange = (sort) => {
    setCurrentSort(sort)
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
          onDeleteTask={handleDeleteTask}
          onEditTask={handleEditTask}
          onToggleComplete={handleToggleComplete}
        />
      </main>

      {/* Edit Modal */}
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