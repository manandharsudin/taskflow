import { Header, TaskStats, TaskFilter, TaskList } from './components'
import { sampleTasks } from './data/sampleTasks'
import { filterTasks, sortTasks, getTaskStats } from './utils'
import { FILTER_OPTIONS, SORT_OPTIONS } from './constants'
import WeekComplete from './components/WeekComplete/WeekComplete'
import './App.css'

/**
 * Main App Component
 * Manages the overall application layout and data flow
 */
function App() {
  // Current filter and sort settings (hardcoded for Week 1)
  // Week 2 will convert these to state with useState
  const currentFilter = FILTER_OPTIONS.ALL
  const currentSort = SORT_OPTIONS.PRIORITY
  
  // Data transformation pipeline
  // 1. Filter tasks based on current filter
  const filteredTasks = filterTasks(sampleTasks, currentFilter)
  
  // 2. Sort filtered tasks based on current sort option
  const sortedTasks = sortTasks(filteredTasks, currentSort)
  
  // 3. Calculate statistics from original data
  const stats = getTaskStats(sampleTasks)
  
  return (
    <div className="app">
      {/* App Header */}
      <Header 
        icon="✓"
        title="TaskFlow"
        subtitle="Organize your tasks efficiently"
      />
      
      {/* Main Content Area */}
      <main className="main-content">
        {/* Statistics Dashboard */}
        <TaskStats stats={stats} />
        
        {/* Filter and Sort Controls */}
        <TaskFilter 
          activeFilter={currentFilter}
          totalTasks={stats.total}
          activeTasks={stats.active}
          completedTasks={stats.completed}
        />
        
        {/* Task List */}
        <TaskList tasks={sortedTasks} />
      </main>

      {/* Week Complete Modal */}
      <WeekComplete />
    </div>
  )
}

export default App