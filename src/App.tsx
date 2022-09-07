import './App.css'
import { Home } from './pages/Home'
import { ThemeContextType } from './types'
import { createContext } from 'react'
import { useState } from 'react'

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
)

function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  const context: ThemeContextType = {
    toggleTheme,
    theme,
  }

  return (
    <ThemeContext.Provider value={context}>
      <div id={theme}>
        <Home />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
