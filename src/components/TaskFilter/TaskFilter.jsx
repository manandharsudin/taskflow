import './TaskFilter.css'

/**
 * TaskFilter Component
 * Provides filtering and sorting controls for tasks
 */
function TaskFilter({ 
  activeFilter, 
  totalTasks, 
  activeTasks, 
  completedTasks,
  onFilterChange,
  onSortChange
}) {
  return (
    <div className="task-filter">
      <div className="filter-buttons">
        <button 
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          All
          <span className="filter-count">{totalTasks}</span>
        </button>
        
        <button 
          className={`filter-btn ${activeFilter === 'active' ? 'active' : ''}`}
          onClick={() => onFilterChange('active')}
        >
          Active
          <span className="filter-count">{activeTasks}</span>
        </button>
        
        <button 
          className={`filter-btn ${activeFilter === 'completed' ? 'active' : ''}`}
          onClick={() => onFilterChange('completed')}
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
          onChange={(e) => onSortChange(e.target.value)}
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