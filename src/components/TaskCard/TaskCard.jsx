import { PRIORITY_ICONS } from '../../constants/taskConstants'
import './TaskCard.css'

/**
 * TaskCard Component
 * Displays a single task with title, description, priority, due date, and status
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Task title
 * @param {string} props.description - Task description (optional)
 * @param {string} props.priority - Task priority ('low', 'medium', 'high')
 * @param {string} props.dueDate - Task due date string
 * @param {string} props.status - Task status ('pending', 'in-progress', 'completed')
 */
function TaskCard({ 
  title = "Untitled Task",
  description = "",
  priority = "medium",
  dueDate = "No due date",
  status = "pending"
}) {
  /**
   * Get icon for priority level
   * @param {string} priority - Priority level
   * @returns {string} Emoji icon
   */
  const getPriorityIcon = (priority) => {
    return PRIORITY_ICONS[priority] || '⚪'
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