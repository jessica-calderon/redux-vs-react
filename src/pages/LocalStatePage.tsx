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
        <h3>Why This Page Uses React Native State:</h3>
        <ul>
          <li>✅ <strong>useState</strong> for simple component-level state (counter, search)</li>
          <li>✅ <strong>useContext</strong> for sharing theme across this page's components</li>
          <li>✅ Perfect for small apps or isolated features</li>
          <li>✅ No external dependencies needed</li>
          <li>✅ Simple and straightforward for basic state needs</li>
          <li>⚠️ <strong>State is lost when navigating away</strong> - Try incrementing the counter, then navigate to Redux page and back. The counter resets to 0!</li>
          <li>⚠️ <strong>Context is scoped</strong> - Theme only works within ThemeProvider wrapper</li>
          <li>⚠️ Can become complex with deeply nested prop drilling</li>
          <li>⚠️ No built-in async handling - would need useEffect + manual state management</li>
        </ul>
        <p className="demo-tip">
          💡 <strong>Try this:</strong> Increment the counter to 5, then navigate to "Redux Demo" and back. 
          Notice the counter resets because local state doesn't persist across navigation!
        </p>
      </div>
    </div>
  )
}

