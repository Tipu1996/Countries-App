import React, { createContext, useState } from 'react'
import './App.css'
import { Home } from './pages/home'

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <div id={theme}>
        <Home />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
