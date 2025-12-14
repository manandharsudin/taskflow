import './TaskFilter.css'

function TaskFilter({ activeFilter, totalTasks, activeTasks, completedTasks }) {
  // Temporary: Just log clicks (Week 2 will make these functional!)
  const handleFilterClick = (filter) => {
    console.log('Filter clicked:', filter)
    // 🔮 Week 2: Will call setCurrentFilter(filter)
  }
  
  const handleSortChange = (event) => {
    console.log('Sort changed:', event.target.value)
    // 🔮 Week 2: Will call setCurrentSort(event.target.value)
  }
  
  return (
    <div className="task-filter">
      <div className="filter-buttons">
        <button 
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterClick('all')}
        >
          All
          <span className="filter-count">{totalTasks}</span>
        </button>
        
        <button 
          className={`filter-btn ${activeFilter === 'active' ? 'active' : ''}`}
          onClick={() => handleFilterClick('active')}
        >
          Active
          <span className="filter-count">{activeTasks}</span>
        </button>
        
        <button 
          className={`filter-btn ${activeFilter === 'completed' ? 'active' : ''}`}
          onClick={() => handleFilterClick('completed')}
        >
          Completed
          <span className="filter-count">{completedTasks}</span>
        </button>
      </div>
      
      <div className="sort-section">
        <label htmlFor="sort-select">Sort by:</label>
        <select 
          id="sort-select" 
          className="sort-select"
          onChange={handleSortChange}
        >
          <option value="priority">Priority</option>
          <option value="dueDate">Due Date</option>
          <option value="status">Status</option>
        </select>
      </div>
    </div>
  )
}

export default TaskFilter