import './WeekComplete.css'

function WeekComplete() {
  return (
    <div className="week-complete">
      <div className="celebration-card">
        <div className="emoji-burst">🎉</div>
        <h2>Week 1 Complete!</h2>
        <p>You've mastered React fundamentals and built a beautiful UI.</p>
        <ul className="achievements">
          <li>✅ 5 Reusable Components</li>
          <li>✅ Responsive Design</li>
          <li>✅ Professional Code Structure</li>
          <li>✅ Best Practices Applied</li>
        </ul>
        <p className="next-week">Ready for Week 2? Let's add interactivity with State! 🚀</p>
      </div>
    </div>
  )
}

export default WeekComplete