import './TaskStats.css'

function TaskStats({ stats }) {
  return (
    <div className="task-stats">
      <div className="stat-card">
        <div className="stat-icon">📊</div>
        <div className="stat-info">
          <div className="stat-value">{stats.total}</div>
          <div className="stat-label">Total Tasks</div>
        </div>
      </div>
      
      <div className="stat-card">
        <div className="stat-icon">⏳</div>
        <div className="stat-info">
          <div className="stat-value">{stats.active}</div>
          <div className="stat-label">Active</div>
        </div>
      </div>
      
      <div className="stat-card">
        <div className="stat-icon">✅</div>
        <div className="stat-info">
          <div className="stat-value">{stats.completed}</div>
          <div className="stat-label">Completed</div>
        </div>
      </div>
      
      <div className="stat-card priority-breakdown">
        <div className="stat-icon">🎯</div>
        <div className="stat-info">
          <div className="priority-stats">
            <span className="priority-stat high">
              🔴 {stats.highPriority}
            </span>
            <span className="priority-stat medium">
              🟡 {stats.mediumPriority}
            </span>
            <span className="priority-stat low">
              🟢 {stats.lowPriority}
            </span>
          </div>
          <div className="stat-label">By Priority</div>
        </div>
      </div>
    </div>
  )
}

export default TaskStats