import { PRIORITY_ICONS } from '../../constants/taskConstants'
import './TaskCard.css'

/**
 * TaskCard Component
 * Displays a single task with all its information and actions
 */
function TaskCard({ 
  id,
  title = "Untitled Task",
  description = "",
  priority = "medium",
  dueDate = "No due date",
  status = "pending",
  onDelete,
  onEdit,
  onToggleComplete
}) {
  /**
   * Get icon for priority level
   */
  const getPriorityIcon = (priority) => {
    return PRIORITY_ICONS[priority] || '⚪'
  }
  
  /**
   * Handle delete with confirmation
   */
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      onDelete(id)
    }
  }

  return (
    <div className={`task-card ${status === 'completed' ? 'completed' : ''}`}>
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
        <div className="task-info">
          <span className="task-due-date">📅 {dueDate}</span>
          <span className={`task-status status-${status}`}>
            {status}
          </span>
        </div>
        
        {/* Action Buttons */}
        <div className="task-actions">
          <button 
            className="btn-action btn-complete"
            onClick={() => onToggleComplete(id)}
            title={status === 'completed' ? 'Mark as incomplete' : 'Mark as complete'}
          >
            {status === 'completed' ? '↶' : '✓'}
          </button>
          
          <button 
            className="btn-action btn-edit"
            onClick={() => onEdit(id)}
            title="Edit task"
          >
            ✎
          </button>
          
          <button 
            className="btn-action btn-delete"
            onClick={handleDelete}
            title="Delete task"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskCard