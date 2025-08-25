import Slider from "react-slick"
import { useNavigate } from "react-router-dom"
import MovieCard from "./MovieCard" // <- import vào

const TopMovie = ({ movies }) => {
  const navigate = useNavigate()

  if (!movies || movies.length === 0) return null

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  }

  return (
    <div className="">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="hover:scale-105 transition-transform duration-300 px-2 py-8 cursor-pointer"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default TopMovie
