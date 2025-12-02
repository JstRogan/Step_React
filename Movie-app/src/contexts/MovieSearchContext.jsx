import { createContext, useContext, useState } from 'react'

const MovieSearchContext = createContext(null)

export function MovieSearchProvider({ children }) {
  const [movies, setMovies] = useState(null)

  return (
    <MovieSearchContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieSearchContext.Provider>
  )
}

export function useMovieSearch() {
  return useContext(MovieSearchContext)
}
