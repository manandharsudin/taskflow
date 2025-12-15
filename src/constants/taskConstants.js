// Task Status Options
export const TASK_STATUS = {
  PENDING: 'pending',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed'
}

// Task Priority Options
export const TASK_PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high'
}

// Filter Options
export const FILTER_OPTIONS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
}

// Sort Options
export const SORT_OPTIONS = {
  PRIORITY: 'priority',
  DUE_DATE: 'dueDate',
  STATUS: 'status'
}

// Priority Order for Sorting
export const PRIORITY_ORDER = {
  [TASK_PRIORITY.HIGH]: 1,
  [TASK_PRIORITY.MEDIUM]: 2,
  [TASK_PRIORITY.LOW]: 3
}

// Status Order for Sorting
export const STATUS_ORDER = {
  [TASK_STATUS.IN_PROGRESS]: 1,
  [TASK_STATUS.PENDING]: 2,
  [TASK_STATUS.COMPLETED]: 3
}

// Priority Icons
export const PRIORITY_ICONS = {
  [TASK_PRIORITY.HIGH]: '🔴',
  [TASK_PRIORITY.MEDIUM]: '🟡',
  [TASK_PRIORITY.LOW]: '🟢'
}

// Status Icons
export const STATUS_ICONS = {
  [TASK_STATUS.PENDING]: '⏳',
  [TASK_STATUS.IN_PROGRESS]: '🔄',
  [TASK_STATUS.COMPLETED]: '✅'
}