import type { FormEvent } from 'react'
import { useState } from 'react'
import Card from '../components/Card'
import { useData, type Character } from '../hooks/useData'

function Home() {
  const [value, setValue] = useState('')
  const [search, setSearch] = useState('')

  const { characters, error, isLoading, isValidating, mutate } = useData(search)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSearch(value.trim())
  }

  const handleReset = () => {
    setValue('')
    setSearch('')
  }

  const handleRefresh = () => {
    mutate()
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>Rick and Morty Explorer</h1>
        <p>Search characters by name using SWR and a public API.</p>
      </header>

      <section className="search-section">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="search"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="Search characters by name"
          />
          <button type="submit">Search</button>
          <button type="button" onClick={handleReset}>
            Clear
          </button>
          <button type="button" onClick={handleRefresh} disabled={isValidating}>
            Refresh
          </button>
        </form>
        {search && (
          <p className="search-summary">
            Showing results for <span>{search}</span>
          </p>
        )}
      </section>

      <section className="content-section">
        {error && <p className="state state-error">Something went wrong. Try another name.</p>}
        {!error && isLoading && <p className="state state-loading">Loading characters...</p>}
        {!error && !isLoading && characters.length === 0 && (
          <p className="state">No characters found.</p>
        )}
        <div className="cards-grid">
          {characters.map((character: Character) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
