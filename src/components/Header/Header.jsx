import './Header.css'

function Header({ icon = "✓", title = "TaskFlow", subtitle = "Organize your tasks" }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          <span className="header-icon">{icon}</span>
          {title}
        </h1>
        <p className="header-subtitle">{subtitle}</p>
      </div>
    </header>
  )
}

export default Header