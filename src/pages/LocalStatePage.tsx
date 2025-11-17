import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import './PageStyles.css'

export default function LocalStatePage() {
  const [count, setCount] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const { theme, toggleTheme } = useTheme()

  // Mock search results
  const allItems = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape']
  const filteredItems = allItems.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  )

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme'
  }, [theme])

  return (
    <div className="page-container">
      <h1>Local State Demo (React Native State Management)</h1>
      
      <div className="comparison-banner">
        <strong>Notice the difference:</strong> Look at the navigation bar above - it shows "Redux Counter (persists): X". 
        That Redux counter persists when you navigate between pages and even survives page refreshes. 
        This page's counter below uses local state (useState), so it resets to 0 when you navigate away or refresh the page.
      </div>
      
      <div className="demo-section">
        <h2>Counter (useState)</h2>
        <div className="counter-display">
          <span className="counter-value">{count}</span>
        </div>
        <div className="button-group">
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>

      <div className="demo-section">
        <h2>Theme Toggle (useContext)</h2>
        <p>Current theme: <strong>{theme}</strong></p>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>

      <div className="demo-section">
        <h2>Search Filter (useState)</h2>
        <p className="feature-explanation">
          This search uses <strong>useState</strong> to store the query and filters an array synchronously. 
          The filtering happens instantly as you type - no loading states, no async operations. 
          This is perfect for simple, local filtering of data already in memory.
        </p>
        <input
          type="text"
          placeholder="Search items (try: 'a', 'e', 'berry')..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <div className="results-list">
          {filteredItems.length > 0 ? (
            <ul>
              {filteredItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : searchQuery ? (
            <p className="no-results">No results found</p>
          ) : (
            <p className="no-results">Type to search...</p>
          )}
        </div>
      </div>

      <div className="explanation-box">
        <h3>React Native State Management (useState, useContext):</h3>
        <ul>
          <li>✅ <strong>Simple</strong> - useState for component-level state, useContext for sharing across a few components</li>
          <li>✅ <strong>No Dependencies</strong> - Built into React, no extra libraries needed</li>
          <li>✅ <strong>Perfect for Small Apps</strong> - Great when state is only needed in a few components</li>
          <li>⚠️ <strong>State is Lost on Navigation</strong> - Increment the counter, navigate to Redux page and back. It resets to 0!</li>
          <li>⚠️ <strong>State is Lost on Refresh</strong> - Refresh the page and all state resets. It's stored in memory only.</li>
          <li>⚠️ <strong>Component-Scoped</strong> - State lives with the component. When component unmounts, state is gone.</li>
          <li>⚠️ <strong>No Global Access</strong> - Can't easily access this counter from other components without prop drilling</li>
          <li>⚠️ <strong>No Built-in Persistence</strong> - Would need to manually add localStorage for persistence</li>
        </ul>
        <p className="demo-tip">
          <strong>Notice:</strong> Look at the navigation bar - it shows "Redux Counter: X". That's Redux state, accessible from anywhere. This page's counter can't be accessed from the nav bar because it's local state.
        </p>
        <p className="demo-tip">
          <strong>Try this:</strong> Increment this counter to 5, then navigate to "Redux Demo" and back. The counter resets! Now go to Redux page, increment to 10, navigate here and back - Redux counter stays at 10. That's the difference.
        </p>
      </div>
    </div>
  )
}

