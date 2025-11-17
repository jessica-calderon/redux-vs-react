import { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { increment, decrement, reset } from '../store/counterSlice'
import { toggleTheme } from '../store/themeSlice'
import { setQuery, fetchSearchResults, clearResults } from '../store/searchSlice'
import './PageStyles.css'

export default function ReduxStatePage() {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.value)
  const theme = useAppSelector((state) => state.theme.theme)
  const { query, results, loading } = useAppSelector((state) => state.search)
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme'
  }, [theme])

  // Debounce the search API calls
  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current)
    }

    if (query.trim()) {
      debounceTimer.current = setTimeout(() => {
        dispatch(fetchSearchResults(query))
      }, 300)
    } else {
      dispatch(clearResults())
    }

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current)
      }
    }
  }, [query, dispatch])

  const handleSearchChange = (value: string) => {
    dispatch(setQuery(value))
  }

  return (
    <div className="page-container">
      <h1>Redux State Demo (Redux Toolkit)</h1>
      <p className="feature-explanation info-box-top">
        <strong>The Purpose of Redux State Management:</strong> Redux provides a global store that persists across navigation and page refreshes. 
        This counter is stored in Redux, so it stays the same when you navigate to other pages or refresh the browser. 
        Notice the counter in the navigation bar - it shows the same value because Redux state is accessible from any component.
      </p>
      
      <div className="demo-section">
        <h2>Counter (Redux Slice)</h2>
        <div className="counter-display">
          <span className="counter-value">{count}</span>
        </div>
        <div className="button-group">
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
      </div>

      <div className="demo-section">
        <h2>Theme Toggle (Redux Slice)</h2>
        <p>Current theme: <strong>{theme}</strong></p>
        <button onClick={() => dispatch(toggleTheme())}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>

      <div className="demo-section">
        <h2>Search Filter (Redux Slice + Async Thunk)</h2>
        <p className="feature-explanation">
          This search uses <strong>Redux with createAsyncThunk</strong> to demonstrate async operations. 
          When you type, it dispatches an async action that simulates an API call (500ms delay). 
          Notice the "Loading..." indicator - this shows Redux handling async state (pending, fulfilled, rejected) automatically. 
          In a real app, this would fetch data from an API. The state is also stored globally, so it persists across navigation!
        </p>
        <input
          type="text"
          placeholder="Search items (with async thunk - try: 'a', 'e', 'berry')..."
          value={query}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="search-input"
        />
        {loading && <p className="loading"><i className="fas fa-spinner fa-spin"></i> Loading... (simulating API call)</p>}
        <div className="results-list">
          {results.length > 0 ? (
            <ul>
              {results.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : query && !loading ? (
            <p className="no-results">No results found</p>
          ) : null}
        </div>
        <p className="search-note">
          <i className="fas fa-lightbulb"></i> <strong>Key Difference:</strong> Redux automatically manages loading/error states through the async thunk. 
          Check Redux DevTools to see the pending → fulfilled action flow!
        </p>
      </div>

      <div className="explanation-box">
        <h3>Why Redux State Management Matters:</h3>
        <ul>
          <li><i className="fas fa-check-circle"></i> <strong>Persists Across Navigation</strong> - Increment the counter, then navigate to "Local State Demo" and back. The counter stays! Check the nav bar - it shows the same value even when you're on a different page.</li>
          <li><i className="fas fa-check-circle"></i> <strong>Persists Across Page Refreshes</strong> - Increment the counter, then refresh the page. It's still there! State is saved to localStorage automatically.</li>
          <li><i className="fas fa-check-circle"></i> <strong>Global Access</strong> - Any component can access this state without prop drilling. The Navigation component shows the counter even though it's not on this page.</li>
          <li><i className="fas fa-check-circle"></i> <strong>Centralized Store</strong> - Single source of truth. One place to manage state, accessible from anywhere.</li>
          <li><i className="fas fa-check-circle"></i> <strong>Async Operations</strong> - Built-in support for async actions (see search above with loading states)</li>
          <li><i className="fas fa-check-circle"></i> <strong>DevTools</strong> - Time-travel debugging with Redux DevTools extension</li>
          <li><i className="fas fa-check-circle"></i> <strong>Predictable Updates</strong> - Actions and reducers make state changes traceable and debuggable</li>
          <li><i className="fas fa-check-circle"></i> <strong>Scalability</strong> - Easy to add new features without passing props through multiple components</li>
        </ul>
      </div>
    </div>
  )
}

