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
        {loading && <p className="loading">⏳ Loading... (simulating API call)</p>}
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
          💡 <strong>Key Difference:</strong> Redux automatically manages loading/error states through the async thunk. 
          Check Redux DevTools to see the pending → fulfilled action flow!
        </p>
      </div>

      <div className="explanation-box">
        <h3>Why Redux is Better Here:</h3>
        <ul>
          <li>✅ <strong>Global State</strong> - State persists across navigation! Look at the counter in the navigation bar - it stays the same when you navigate!</li>
          <li>✅ <strong>Centralized Store</strong> - Single source of truth accessible from ANY component (see counter in nav bar)</li>
          <li>✅ <strong>Async Actions</strong> - Built-in support for async operations (see search above with loading state)</li>
          <li>✅ <strong>DevTools</strong> - Time-travel debugging with Redux DevTools (install extension to see all actions)</li>
          <li>✅ <strong>Predictable Updates</strong> - Actions and reducers make state changes traceable</li>
          <li>✅ <strong>Scalability</strong> - Easy to add new features without prop drilling</li>
          <li>✅ <strong>Type Safety</strong> - Full TypeScript support with typed hooks</li>
          <li>✅ <strong>No Prop Drilling</strong> - Access state from any component without passing props</li>
        </ul>
        <p className="demo-tip">
          💡 <strong>Try this:</strong> Increment the counter to 10, then navigate to "Local State Demo" and back. 
          Notice the counter stays at 10 AND you can see it in the navigation bar! That's global state persistence.
        </p>
        <p className="demo-tip">
          🔧 <strong>Redux DevTools:</strong> Install the Redux DevTools browser extension, then open DevTools → Redux tab 
          to see all actions, state changes, and time-travel debugging!
        </p>
      </div>
    </div>
  )
}

