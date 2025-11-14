import TaskCard from '../TaskCard/TaskCard'
import './TaskList.css'

function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return (
      <div className="task-list">
        <div className="empty-state">
          <span className="empty-icon">📝</span>
          <h3>No tasks yet!</h3>
          <p>Create your first task to get started.</p>
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
          />
        ))}
      </div>
    </div>
  )
}

export default TaskList