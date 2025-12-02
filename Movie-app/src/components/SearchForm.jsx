import React, { useRef } from 'react'
import { fetchMovies } from '../services/fetchService'
import { useMovieSearch } from '../contexts/MovieSearchContext.jsx'

function SearchForm() {
  const searchInput = useRef()
  const { setMovies } = useMovieSearch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const query = searchInput.current.value.trim()
    if (!query) return
    const res = await fetchMovies(query)
    setMovies(res)
  }

  return (
    <div className="m-5 h-12">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          className="w-80 h-[50px] rounded-md border border-slate-300 bg-slate-100 px-3 text-slate-900 placeholder:text-slate-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-50"
          ref={searchInput}
          placeholder="Enter movie name"
          type="search"
          name="movie-name"
          id="movie-name"
        />
        <button
          type="submit"
          className="px-4 rounded-md bg-slate-100 text-slate-900 font-medium"
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchForm
