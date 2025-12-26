import TaskCard from '../TaskCard/TaskCard'
import './TaskList.css'

function TaskList({ tasks, isLoading, onDeleteTask, onEditTask, onToggleComplete }) {
  if (isLoading) {
    return (
      <div className="task-list">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading tasks...</p>
        </div>
      </div>
    )
  }
  
  if (tasks.length === 0) {
    return (
      <div className="task-list">
        <div className="empty-state">
          <span className="empty-icon">📝</span>
          <h3>No tasks found!</h3>
          <p>Try adjusting your filters or create a new task.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="task-list">
      <div className="task-list-header">
        <h2 className="task-list-title">My Tasks</h2>
        <span className="task-count">{tasks.length} tasks</span>
      </div>
      
      <div className="task-list-content">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            {...task}
            onDelete={onDeleteTask}
            onEdit={onEditTask}
            onToggleComplete={onToggleComplete}
          />
        ))}
      </div>
    </div>
  )
}

export default TaskList