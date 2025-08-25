import { createContext, useEffect, useState } from "react"

const APT_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

export const MovieContext = createContext()

export const MovieProvider = ({ children }) => {
  const [moviesList, setMoviesList] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const fetchMovies = async (query = '', pageNum = page) => {
    setIsLoading(true)
    setErrorMessage('')
    try {
      const endpoint = query
        ? `${APT_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&page=${pageNum}`
        : `${APT_BASE_URL}/discover/movie?sort_by=popularity.desc&page=${pageNum}`

      const response = await fetch(endpoint, API_OPTION)
      if (!response.ok) throw new Error("Network error")

      const data = await response.json()
      if (pageNum === 1) {
        setMoviesList(data.results || [])
      } else {
        setMoviesList((prev) => [...prev, ...(data.results || [])])
      }
    } catch (err) {
      console.error(err)
      setErrorMessage("Failed to fetch movies")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMovies('', page)
  }, [page])

  return (
    <MovieContext.Provider value={{ moviesList, isLoading, errorMessage, setPage, fetchMovies }}>
      {children}
    </MovieContext.Provider>
  )
}
