import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const base = 'px-3 py-1.5 rounded-full text-xs font-medium border transition-colors'
  const variant =
    theme === 'dark'
      ? 'bg-slate-800 text-slate-50 border-slate-500 hover:bg-slate-700'
      : 'bg-slate-100 text-slate-900 border-slate-300 hover:bg-slate-200'

  return (
    <button type="button" onClick={toggleTheme} className={`${base} ${variant}`}>
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}