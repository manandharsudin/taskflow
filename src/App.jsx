import { useState } from 'react'
import { Header, TaskStats, TaskFilter, TaskList } from './components'
import AddTaskForm from './components/AddTaskForm/AddTaskForm'
import { sampleTasks } from './data/sampleTasks'
import { filterTasks, sortTasks, getTaskStats } from './utils'
import { FILTER_OPTIONS, SORT_OPTIONS } from './constants'
import './App.css'

function App() {
  // Tasks state - initialized with sample data
  const [tasks, setTasks] = useState(sampleTasks)
  
  // Filter and sort state
  const [currentFilter, setCurrentFilter] = useState(FILTER_OPTIONS.ALL)
  const [currentSort, setCurrentSort] = useState(SORT_OPTIONS.PRIORITY)
  
  // Form visibility state
  const [showAddForm, setShowAddForm] = useState(false)

  const [successMessage, setSuccessMessage] = useState('')
  
  // Data transformation pipeline
  const filteredTasks = filterTasks(tasks, currentFilter)
  const sortedTasks = sortTasks(filteredTasks, currentSort)
  const stats = getTaskStats(tasks)
  
  /**
   * Add new task to the list
   */
  const handleAddTask = (newTask) => {
    setTasks(prevTasks => [newTask, ...prevTasks]) // Add to beginning
    setShowAddForm(false) // Hide form after adding
  }
  
  /**
   * Handle filter change
   */
  const handleFilterChange = (filter) => {
    setCurrentFilter(filter)
  }
  
  /**
   * Handle sort change
   */
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
        {/* Success Message */}
        {successMessage && (
          <div className="success-message">
            ✓ {successMessage}
          </div>
        )}
        {/* Add Task Button */}
        <div className="action-bar">
          <button 
            className="btn-add-task"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            {showAddForm ? '✕ Cancel' : '+ Add New Task'}
          </button>
        </div>
        
        {/* Add Task Form (conditional) */}
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
        
        <TaskList tasks={sortedTasks} />
      </main>
    </div>
  )
}

export default App