import { useState } from 'react'
import './App.css'
import SearchWithLifting from './pages/SearchWithLifting.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const [activePage, setActivePage] = useState('movies')

  let content = null
  if (activePage === 'movies') {
    content = <SearchWithLifting />
  } else if (activePage === 'login') {
    content = <LoginPage />
  } else if (activePage === 'register') {
    content = <RegisterPage />
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
      <Navbar activePage={activePage} onChangePage={setActivePage} />
      {content}
    </div>
  )
}

export default App

