import { useEffect, useState } from 'react'
import useSWR from 'swr'

const API_BASE = 'https://rickandmortyapi.com/api'

type Character = {
  id: number
  name: string
  status: string
  species: string
  image: string
  gender: string
  origin: {
    name: string
  }
  location: {
    name: string
  }
}

type CharactersResponse = {
  results: Character[]
}

const fetcher = async (url: string): Promise<CharactersResponse> => {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Request failed')
  }
  return res.json()
}

export function useData(query: string) {
  const [fallbackData, setFallbackData] = useState<CharactersResponse | undefined>(undefined)

  const trimmed = query.trim()
  const url =
    API_BASE + '/character' + (trimmed ? `/?name=${encodeURIComponent(trimmed)}` : '')

  const { data, error, isLoading, mutate, isValidating } = useSWR<CharactersResponse>(
    url,
    fetcher,
    {
      fallbackData,
      keepPreviousData: true,
      revalidateOnFocus: true,
    },
  )

  useEffect(() => {
    if (data && !error) {
      setFallbackData(data)
    }
  }, [data, error])

  return {
    characters: data?.results ?? [],
    error,
    isLoading,
    isValidating,
    mutate,
  }
}

export type { Character }
