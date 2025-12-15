import './ComponentTemplate.css'

/**
 * ComponentTemplate Component
 * [Brief description of what this component does]
 * 
 * @param {Object} props - Component props
 * @param {string} props.exampleProp - Description of prop
 */
function ComponentTemplate({ exampleProp = "default" }) {
  return (
    <div className="component-template">
      <p>Component content here</p>
    </div>
  )
}

export default ComponentTemplate