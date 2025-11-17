import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface SearchState {
  query: string
  results: string[]
  loading: boolean
  error: string | null
}

const initialState: SearchState = {
  query: '',
  results: [],
  loading: false,
  error: null,
}

// Fake API call to demonstrate async thunk
export const fetchSearchResults = createAsyncThunk(
  'search/fetchResults',
  async (query: string) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))
    
    // Fake search results
    const allItems = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape']
    const filtered = allItems.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    )
    
    return filtered
  }
)

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
    clearResults: (state) => {
      state.results = []
      state.query = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loading = false
        state.results = action.payload
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch results'
      })
  },
})

export const { setQuery, clearResults } = searchSlice.actions
export default searchSlice.reducer

