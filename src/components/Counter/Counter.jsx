import { useState } from 'react'
import './Counter.css'

/**
 * Counter Component - Demo of useState
 * Shows basic state management with increment/decrement
 */
function Counter() {
  const [count, setCount] = useState(0)
  
  // Better way - functional update
  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }
  
  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }
  
  const reset = () => {
    setCount(0) // Direct value is fine for reset
  }
  
  return (
    <div className="counter">
      <h2>Counter Demo</h2>
      <div className="counter-display">{count}</div>
      
      <div className="counter-buttons">
        <button onClick={decrement}>Decrease</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increase</button>
      </div>
      
      {/* Rapid update demo */}
      <button 
        onClick={() => {
          // This will only increment by 1 (wrong way)
          setCount(count + 1)
          setCount(count + 1)
          setCount(count + 1)
        }}
        style={{ marginTop: '1rem' }}
      >
        Try to add 3 (won't work)
      </button>
      
      <button 
        onClick={() => {
          // This will increment by 3 (correct way)
          setCount(prev => prev + 1)
          setCount(prev => prev + 1)
          setCount(prev => prev + 1)
        }}
        style={{ marginTop: '1rem' }}
      >
        Add 3 (works correctly)
      </button>
    </div>
  )
}

export default Counter