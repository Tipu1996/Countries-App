import React, { createContext, useState } from 'react'
import './App.css'
import { Home } from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }
  return (
    <Router>
      <ThemeContext.Provider value={{ toggleTheme, theme }}>
        <div id={theme}>
          <Home />
        </div>
      </ThemeContext.Provider>
    </Router>
  )
}

export default App
