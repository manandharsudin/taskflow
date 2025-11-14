import Header from './components/Header/Header'
import TaskList from './components/TaskList/TaskList'
import { sampleTasks } from './data/sampleTasks'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header 
        icon="✓"
        title="TaskFlow"
        subtitle="Organize your tasks efficiently"
      />
      
      <main className="main-content">
        <TaskList tasks={sampleTasks} />
      </main>
    </div>
  )
}

export default App