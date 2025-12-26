import { useState } from 'react'
import { TASK_PRIORITY, TASK_STATUS } from '../../constants'
import './EditTaskForm.css'

/**
 * EditTaskForm Component
 * Form for editing existing tasks
 */
function EditTaskForm({ task, onSave, onCancel }) {
  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description || '')
  const [priority, setPriority] = useState(task.priority)
  const [status, setStatus] = useState(task.status)
  const [dueDate, setDueDate] = useState(
    task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : ''
  )
  const [errors, setErrors] = useState({})
  
  const validateForm = () => {
    const newErrors = {}
    
    if (!title.trim()) {
      newErrors.title = 'Title is required'
    } else if (title.length < 3) {
      newErrors.title = 'Title must be at least 3 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    const updatedTask = {
      ...task,
      title: title.trim(),
      description: description.trim(),
      priority,
      status,
      dueDate: dueDate || task.dueDate
    }
    
    onSave(updatedTask)
  }
  
  return (
    <div className="edit-task-overlay" onClick={onCancel}>
      <div className="edit-task-modal" onClick={(e) => e.stopPropagation()}>
        <form className="edit-task-form" onSubmit={handleSubmit}>
          <h2>Edit Task</h2>
          
          <div className="form-group">
            <label htmlFor="edit-title">
              Title <span className="required">*</span>
            </label>
            <input
              type="text"
              id="edit-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={errors.title ? 'error' : ''}
              maxLength="50"
            />
            {errors.title && (
              <span className="error-message">{errors.title}</span>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="edit-description">Description</label>
            <textarea
              id="edit-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="edit-priority">Priority</label>
              <select
                id="edit-priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value={TASK_PRIORITY.LOW}>Low</option>
                <option value={TASK_PRIORITY.MEDIUM}>Medium</option>
                <option value={TASK_PRIORITY.HIGH}>High</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="edit-status">Status</label>
              <select
                id="edit-status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value={TASK_STATUS.PENDING}>Pending</option>
                <option value={TASK_STATUS.IN_PROGRESS}>In Progress</option>
                <option value={TASK_STATUS.COMPLETED}>Completed</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="edit-dueDate">Due Date</label>
            <input
              type="date"
              id="edit-dueDate"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          
          <div className="form-actions">
            <button type="button" onClick={onCancel} className="btn-cancel">
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditTaskForm