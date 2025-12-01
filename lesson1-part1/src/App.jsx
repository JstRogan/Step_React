import { useState } from 'react'
import './App.css'
import Task1CityFunctional from './tasks/task1-city-functional/Task1CityFunctional.jsx'
import Task2CityClass from './tasks/task2-city-class/Task2CityClass.jsx'
import Task3BookFunctional from './tasks/task3-book-functional/Task3BookFunctional.jsx'
import Task4BookClass from './tasks/task4-book-class/Task4BookClass.jsx'

const tasks = {
  1: Task1CityFunctional,
  2: Task2CityClass,
  3: Task3BookFunctional,
  4: Task4BookClass,
}

function App() {
  const [activeTask, setActiveTask] = useState(1)
  const ActiveTaskComponent = tasks[activeTask]

  return (
    <>
      <header className="toolbar">
        <span className="toolbar-title">Module 4 – Part 1</span>
        <div className="toolbar-buttons">
          <button
            type="button"
            className={activeTask === 1 ? 'tab-button tab-button-active' : 'tab-button'}
            onClick={() => setActiveTask(1)}
          >
            Task 1: City (func)
          </button>
          <button
            type="button"
            className={activeTask === 2 ? 'tab-button tab-button-active' : 'tab-button'}
            onClick={() => setActiveTask(2)}
          >
            Task 2: City (class)
          </button>
          <button
            type="button"
            className={activeTask === 3 ? 'tab-button tab-button-active' : 'tab-button'}
            onClick={() => setActiveTask(3)}
          >
            Task 3: Book (func)
          </button>
          <button
            type="button"
            className={activeTask === 4 ? 'tab-button tab-button-active' : 'tab-button'}
            onClick={() => setActiveTask(4)}
          >
            Task 4: Book (class)
          </button>
        </div>
      </header>
      <ActiveTaskComponent />
    </>
  )
}

export default App
