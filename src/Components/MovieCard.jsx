import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  const { title, poster_path, vote_average, release_date, original_language, id } = movie
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/movie/${id}`)
  }

  return (
    <div className='hover:scale-105 transition-all duration-300 ease-in-out' onClick={handleClick}>
      <div className='movie-card'>
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : ``} alt={title} />
        <div className='mt-3'>
          <h3>{movie.title ?? movie.name ?? "No Title"}</h3>

          <div className='content'>
            <div className='rating'>
              <img src="star.svg" alt="Star Icon" />
              <p>{vote_average ? vote_average.toFixed(1) : 'NA'}</p>
            </div>

            <span>•</span>
            <p className='lang'>{original_language}</p>

            <span>•</span>
            <p className='year'>{release_date ? release_date.split('-')[0] : 'NA'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MovieCard
