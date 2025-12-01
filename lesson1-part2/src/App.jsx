import { useState } from 'react'
import './App.css'
import FavoriteMovie from './tasks/task1-movie/FavoriteMovie.jsx'
import PersonalPage from './tasks/task2-profile/PersonalPage.jsx'
import ClockApp from './tasks/task3-clock/ClockApp.jsx'
import PetInfo from './tasks/task4-pet/PetInfo.jsx'

const tasks = {
  1: FavoriteMovie,
  2: PersonalPage,
  3: ClockApp,
  4: PetInfo,
}

function App() {
  const [activeTask, setActiveTask] = useState(1)
  const ActiveTaskComponent = tasks[activeTask]

  return (
    <>
      <header className="toolbar">
        <span className="toolbar-title">Module 5 – Part 1</span>
        <div className="toolbar-buttons">
          <button
            type="button"
            className={activeTask === 1 ? 'tab-button tab-button-active' : 'tab-button'}
            onClick={() => setActiveTask(1)}
          >
            Task 1: Movie
          </button>
          <button
            type="button"
            className={activeTask === 2 ? 'tab-button tab-button-active' : 'tab-button'}
            onClick={() => setActiveTask(2)}
          >
            Task 2: Profile
          </button>
          <button
            type="button"
            className={activeTask === 3 ? 'tab-button tab-button-active' : 'tab-button'}
            onClick={() => setActiveTask(3)}
          >
            Task 3: Clock
          </button>
          <button
            type="button"
            className={activeTask === 4 ? 'tab-button tab-button-active' : 'tab-button'}
            onClick={() => setActiveTask(4)}
          >
            Task 4: Pet
          </button>
        </div>
      </header>
      <ActiveTaskComponent />
    </>
  )
}

export default App
