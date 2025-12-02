import React from 'react'
import SearchForm from '../components/SearchForm'
import { useMemo } from 'react'
import { useMovieSearch } from '../contexts/MovieSearchContext.jsx'

function SearchWithLifting() {
  const { movies } = useMovieSearch()

  const movieCards = useMemo(() => {
    if (!movies || !movies.results) return null

    return movies.results.map((m) => (
      <div
        key={m.id}
        className="relative flex flex-col my-6 w-72 rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900"
      >
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card"
          />
        </div>
        <div className="p-4">
          <h6 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-50">{m.title}</h6>
          <p className="leading-normal font-light line-clamp-4 text-slate-600 dark:text-slate-300">
            {m.overview}
          </p>
        </div>
        <div className="px-4 pb-4 pt-0 mt-2">
          <button
            className="rounded-md bg-slate-100 py-2 px-4 border border-transparent text-center text-sm text-slate-900 transition-all shadow-md hover:shadow-lg active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Read more
          </button>
        </div>
      </div>
    ))
  }, [movies])

  return (
    <div className="flex items-center justify-center flex-col py-8">
      <SearchForm />
      <div className="flex flex-row flex-wrap justify-center gap-4 mt-4">
        {movieCards}
      </div>
    </div>
  )
}

export default SearchWithLifting;
