import { Link, useLocation } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'
import './Navigation.css'

export default function Navigation() {
  const location = useLocation()
  // Demonstrate Redux global state - accessible from ANY component!
  const reduxCounter = useAppSelector((state) => state.counter.value)

  return (
    <nav className="navigation">
      <div className="nav-container">
        <h2 className="nav-title">Redux vs React State</h2>
        <div className="nav-content">
          <div className="nav-links">
            <Link
              to="/local-state"
              className={location.pathname === '/local-state' ? 'active' : ''}
            >
              Local State Demo
            </Link>
            <Link
              to="/redux-state"
              className={location.pathname === '/redux-state' ? 'active' : ''}
            >
              Redux Demo
            </Link>
          </div>
          <div className="redux-indicator" title="Redux counter persists across navigation and page refreshes! This demonstrates global state accessible from any component.">
            <span className="redux-label">Redux Counter (persists):</span>
            <span className="redux-value">{reduxCounter}</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

