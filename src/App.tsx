import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navigation from './components/Navigation'
import LocalStatePage from './pages/LocalStatePage'
import ReduxStatePage from './pages/ReduxStatePage'
import './App.css'

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navigation />
        <Routes>
          <Route
            path="/local-state"
            element={
              <ThemeProvider>
                <LocalStatePage />
              </ThemeProvider>
            }
          />
          <Route path="/redux-state" element={<ReduxStatePage />} />
          <Route path="/" element={<Navigate to="/local-state" replace />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
