import Header from './components/Header/Header'
import TaskCard from './components/TaskCard/TaskCard'
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
        <TaskCard 
          title="Complete React Tutorial"
          description="Finish the Week 1 Day 3 tutorial and understand props and components."
          priority="high"
          dueDate="Nov 6, 2025"
          status="in-progress"
        />
        
        <TaskCard 
          title="Review JavaScript Fundamentals"
          description="Go through ES6+ features: arrow functions, destructuring, and spread operators."
          priority="medium"
          dueDate="Nov 8, 2025"
          status="pending"
        />
        
        <TaskCard 
          title="Setup Development Environment"
          description="Install Node.js, VS Code, and create first React app with Vite."
          priority="low"
          dueDate="Nov 5, 2025"
          status="completed"
        />

        <TaskCard 
        title="Build TaskCard Component"
        description="Create a reusable component for displaying task information with styling."
        priority="high"
        dueDate="Nov 6, 2025"
        status="completed"
        />

        <TaskCard 
        title="Plan Next Week's Learning"
        priority="medium"
        dueDate="Nov 10, 2025"
        status="pending"
        />

        <TaskCard title="Task 5" />
      </main>
    </div>
  )
}

export default App