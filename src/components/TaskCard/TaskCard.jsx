import './TaskCard.css'

function TaskCard({ 
    title = "Untitled Task", 
    description = "No description provided", 
    priority = "medium", 
    dueDate = "No due date", 
    status = "pending"
}) {

    // Function to get priority icon
  const getPriorityIcon = (priority) => {
    switch(priority) {
      case 'high': return '🔴'
      case 'medium': return '🟡'
      case 'low': return '🟢'
      default: return '⚪'
    }
  }
    
  return (
    <div className="task-card">
      <div className="task-card-header">
        <h3 className="task-title">{title}</h3>
        <span className={`priority-badge priority-${priority}`}>
          {getPriorityIcon(priority)} {priority}
        </span>
      </div>
      
      {description && (
        <p className="task-description">{description}</p>
      )}
      
      <div className="task-card-footer">
        <span className="task-due-date">📅 {dueDate}</span>
        <span className={`task-status status-${status}`}>
          {status}
        </span>
      </div>
    </div>
  )
}

export default TaskCard