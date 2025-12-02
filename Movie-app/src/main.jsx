import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { MovieSearchProvider } from './contexts/MovieSearchContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <MovieSearchProvider>
      <App />
    </MovieSearchProvider>
  </ThemeProvider>
)
