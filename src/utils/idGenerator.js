/**
 * Generate a unique ID
 * Combines timestamp with random string for uniqueness
 * @returns {string} Unique identifier
 */
export const generateId = () => {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substr(2, 9)
  return `${timestamp}-${random}`
}