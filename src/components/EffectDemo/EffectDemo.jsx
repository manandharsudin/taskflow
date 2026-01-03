import { useState, useEffect } from 'react'
import './EffectDemo.css'

function EffectDemo() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  
  // Effect 1: Runs after every render
  useEffect(() => {
    console.log('1. Effect ran after render')
  })
  
  // Effect 2: Runs only on mount
  useEffect(() => {
    console.log('2. Component mounted!')
  }, [])
  
  // Effect 3: Runs when count changes
  useEffect(() => {
    console.log('3. Count changed to:', count)
  }, [count])
  
  // Effect 4: Runs when name changes
  useEffect(() => {
    console.log('4. Name changed to:', name)
  }, [name])
  
  console.log('Component rendering...')
  
  return (
    <div className="effect-demo">
      <h2>useEffect Demo</h2>
      <p>Open console to see effects!</p>
      
      <div className="demo-section">
        <button onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>
      </div>
      
      <div className="demo-section">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name..."
        />
        <p>Name: {name}</p>
      </div>
    </div>
  )
}

export default EffectDemo