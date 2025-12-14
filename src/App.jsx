import Header from './components/Header/Header'
import TaskStats from './components/TaskStats/TaskStats'
import TaskFilter from './components/TaskFilter/TaskFilter'
import TaskList from './components/TaskList/TaskList'
import { sampleTasks } from './data/sampleTasks'
import { filterTasks, sortTasks, getTaskStats } from './utils/taskHelpers'
import './App.css'

function App() {
    // 🔮 WEEK 2: These will become state!
  // const [currentFilter, setCurrentFilter] = useState('all')
  // const [currentSort, setCurrentSort] = useState('priority')

  // For now, these are hardcoded (Week 2 will make them dynamic!)
  const currentFilter = 'all' // Try changing to 'active' or 'completed'
  const currentSort = 'priority' // Try 'dueDate' or 'status'
  
  // Apply filter and sort
  const filteredTasks = filterTasks(sampleTasks, currentFilter)
  const sortedTasks = sortTasks(filteredTasks, currentSort)
  
  // Calculate statistics
  const stats = getTaskStats(sampleTasks)
  
  return (
    <div className="app">
      <Header 
        icon="✓"
        title="TaskFlow"
        subtitle="Organize your tasks efficiently"
      />
      
      <main className="main-content">
        <TaskStats stats={stats} />
        
        <TaskFilter 
          activeFilter={currentFilter}
          totalTasks={stats.total}
          activeTasks={stats.active}
          completedTasks={stats.completed}
        />
        
        <TaskList tasks={sortedTasks} isLoading={false} />
      </main>
    </div>
  )
}

export default App