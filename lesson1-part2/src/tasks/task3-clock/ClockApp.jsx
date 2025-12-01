import { useEffect, useState } from 'react'

function ClockDisplay({ label, time }) {
  return (
    <div>
      <h1>{label}</h1>
      <p className="subtitle">{time}</p>
    </div>
  )
}

function ClockApp() {
  const [timeString, setTimeString] = useState('')

  useEffect(() => {
    function updateTime() {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      setTimeString(`${hours}:${minutes}:${seconds}`)
    }

    updateTime()
    const intervalId = setInterval(updateTime, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <main className="page">
      <section className="card">
        <ClockDisplay label="Current time" time={timeString} />
      </section>
    </main>
  )
}

export default ClockApp
