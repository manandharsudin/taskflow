import { useState } from 'react'
import { Header, TaskStats, TaskFilter, TaskList } from './components'
import { sampleTasks } from './data/sampleTasks'
import { filterTasks, sortTasks, getTaskStats } from './utils'
import { FILTER_OPTIONS, SORT_OPTIONS } from './constants'
import Counter from './components/Counter/Counter'
import './App.css'

function App() {
  const [currentFilter, setCurrentFilter] = useState(FILTER_OPTIONS.ALL)
  const [currentSort, setCurrentSort] = useState(SORT_OPTIONS.PRIORITY)
  const [showStats, setShowStats] = useState(true) // New state!
  
  const filteredTasks = filterTasks(sampleTasks, currentFilter)
  const sortedTasks = sortTasks(filteredTasks, currentSort)
  const stats = getTaskStats(sampleTasks)
  
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
        {/* Temporary: Counter Demo */}
        <Counter />
        {/* Toggle button */}
        <button 
          onClick={() => setShowStats(!showStats)}
          style={{
            marginBottom: '1rem',
            padding: '0.75rem 1.5rem',
            background: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          {showStats ? 'Hide' : 'Show'} Statistics
        </button>
        
        {/* Conditional render based on state */}
        {showStats && <TaskStats stats={stats} />}
        
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