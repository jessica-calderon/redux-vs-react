import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import themeReducer from './themeSlice'
import searchReducer from './searchSlice'

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    search: searchReducer,
  },
  preloadedState: loadState(),
})

// Save state to localStorage
const saveState = () => {
  try {
    const state = store.getState()
    // Only persist counter and theme, not search (ephemeral)
    const stateToSave = {
      counter: state.counter,
      theme: state.theme,
    }
    const serializedState = JSON.stringify(stateToSave)
    localStorage.setItem('reduxState', serializedState)
  } catch (err) {
    // Ignore write errors
  }
}

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
  saveState()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

