import React, { useState, useContext } from 'react'
import HeroImg from '../src/hero-img.png'
import Search from './Components/Search'
import Spinner from './Components/Spinner'
import MovieCard from './Components/MovieCard'
import TopMovie from './Components/TopMovie'
import { useDebounce } from 'react-use'
import { MovieContext } from "./Components/MovieContext"
import Header from './Components/Header'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const { moviesList, isLoading, errorMessage, setPage, fetchMovies } = useContext(MovieContext)

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm])

  // Fetch khi search
  React.useEffect(() => {
    fetchMovies(debouncedSearchTerm, 1)  // reset về page=1 khi search
  }, [debouncedSearchTerm])

  return (
    <div>
      <Header />
      <main>
        <div className='pattern'>
          <div className='wrapper'>
            <header>
              <img src={HeroImg} alt="Hero Banner" />
              <h1>
                Find <span className='text-gradient'>Movies</span> You'll enjoy Without the Hassle
              </h1>
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </header>

            <section className='pb-10'>
              <h2 className='pb-9'>Top Movies</h2>
              <TopMovie 
                movies={moviesList
                  .filter((movie) => movie.vote_average >= 7)
                  .sort((a, b) => b.vote_average - a.vote_average)
                  .slice(0, 6)} 
              />
            </section>

            <section className='all-movies'>
              <h2>All movies</h2>
              {isLoading ? (
                <Spinner/>
              ) : errorMessage ? (
                <p className='text-white'>{errorMessage}</p>
              ) : (
                <ul>
                  {moviesList.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                  ))}
                </ul>
              )}
              
              {/* Nút Load More */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setPage((prev) => prev + 1)}
                  disabled={isLoading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {isLoading ? "Loading..." : "Load More"}
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
