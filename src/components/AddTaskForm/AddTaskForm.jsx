import { useState } from 'react'
import { TASK_PRIORITY, TASK_STATUS } from '../../constants'
import { generateId } from '../../utils'
import './AddTaskForm.css'

/**
 * AddTaskForm Component
 * Form for creating new tasks with validation
*/
function AddTaskForm({ onAddTask, onCancel }) {
  // Form state - each input has its own state
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(TASK_PRIORITY.MEDIUM)
  const [dueDate, setDueDate] = useState('')
  
  // Validation error state
  const [errors, setErrors] = useState({})
  
  /**
   * Validate form fields
   * @returns {boolean} True if valid, false otherwise
   */
  const validateForm = () => {
    const newErrors = {}
    
    // Title is required
    if (!title.trim()) {
      newErrors.title = 'Title is required'
    } else if (title.length < 3) {
      newErrors.title = 'Title must be at least 3 characters'
    }
    
    // Due date must be in the future (optional check)
    if (dueDate) {
      const selectedDate = new Date(dueDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0) // Reset time for accurate comparison
      
      if (selectedDate < today) {
        newErrors.dueDate = 'Due date cannot be in the past'
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  /**
   * Reset form to initial state
   */
  const resetForm = () => {
    setTitle('')
    setDescription('')
    setPriority(TASK_PRIORITY.MEDIUM)
    setDueDate('')
    setErrors({})
  }

  /**
   * Handle cancel button
   */
  const handleCancel = () => {
    resetForm()
    onCancel()
  }
  
  /**
   * Handle form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault() // Prevent page reload
    
    // Validate before submitting
    if (!validateForm()) {
      return
    }
    
    // Create new task object
    const newTask = {
      id: generateId(), // Better ID generation
      title: title.trim(),
      description: description.trim(),
      priority,
      dueDate: dueDate || new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
      status: TASK_STATUS.PENDING
    }
    
    // Call parent's add function
    onAddTask(newTask)
    
    // Reset form
    resetForm() // Reset after adding
  }
  
  return (
    <div className="add-task-form-container">
      <form className="add-task-form" onSubmit={handleSubmit}>
        <h2>Add New Task</h2>
        
        {/* Title Input */}
        <div className="form-group">
          <div className="label-with-counter">
            <label htmlFor="title">
              Title <span className="required">*</span>
            </label>
            <span className="char-counter">
              {title.length} / 50
            </span>
          </div>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title..."
            maxLength="50"
            className={errors.title ? 'error' : ''}
          />
          {errors.title && (
            <span className="error-message">{errors.title}</span>
          )}
        </div>
        
        {/* Description Input */}
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description..."
            rows="4"
          />
        </div>
        
        {/* Priority Select */}
        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value={TASK_PRIORITY.LOW}>Low</option>
            <option value={TASK_PRIORITY.MEDIUM}>Medium</option>
            <option value={TASK_PRIORITY.HIGH}>High</option>
          </select>
        </div>
        
        {/* Due Date Input */}
        <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className={errors.dueDate ? 'error' : ''}
          />
          {errors.dueDate && (
            <span className="error-message">{errors.dueDate}</span>
          )}
        </div>
        
        {/* Form Actions */}
        <div className="form-actions">
          <button type="button" onClick={handleCancel} className="btn-cancel">
            Cancel
          </button>
          <button type="submit" className="btn-submit">
            Add Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTaskForm