import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import themeReducer from './themeSlice'
import searchReducer from './searchSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    search: searchReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

