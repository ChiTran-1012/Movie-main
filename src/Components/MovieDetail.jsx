import {useParams, useNavigate, Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './Header'

const APT_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const MovieDetail = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
   

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(`${APT_BASE_URL}/movie/${id}`, API_OPTION)
        const data = await response.json()
        setMovie(data)
      } catch (err) {
        setError('Không thể lấy thông tin phim.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovieDetail()
  }, [id])

  if (isLoading) return <p>Đang tải...</p>
  if (error) return <p>{error}</p>
  if (!movie) return <p>Không có dữ liệu phim.</p>

  return (
    <>
    <Header/>
    <div className="relative w-full min-h-screen text-white pt-28">
        
        {/* Ảnh nền mờ */}
        <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            }}
        ></div>

        {/* Lớp phủ tối nhẹ */}
        <div className="absolute inset-0 bg-opacity-70"></div>

        {/* Nội dung phía trên ảnh nền */}
        <div className="relative z-10 px-6 pt-20 max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
            {/* Poster */}
            <div className="w-full md:w-1/3">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-lg shadow-lg w-full"
            />
            </div>

            {/* Thông tin phim */}
            <div className="w-full md:w-2/3">
            
            <h2 className="text-5xl font-bold mb-4">
                {movie.title}
                
            </h2>

            {/* Thể loại, thời lượng, năm */}
            <div className="flex flex-wrap gap-3 text-2xl text-gray-300 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" viewBox="0 0 24 24">
                <rect x="3" y="4" width="20" height="19" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>

                <span>{movie.release_date?.split("-")[0]}</span>
            </div>

            {/* Rating + Play button */}
            <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-1">
                <span className="text-yellow-400 text-3xl">★</span>
                <span className="text-2xl font-semibold">{movie.vote_average.toFixed(1)}</span>
                </div>
                <Link 
                  to={`/watch/${id}`} 
                  className="hover:bg-[#AB8BFF] flex items-center gap-2 border border-[#AB8BFF] text-white font-semibold px-4 py-2 rounded-full shadow cursor-pointer transition-colors"
                >
                  ▶ PLAY NOW
                </Link>

            </div>

            {/* Mô tả */}
            <p className="text-gray-200 text-xl leading-relaxed">{movie.overview}</p>
            </div>
        </div>
        </div>

        </>
  )
}

export default MovieDetail
