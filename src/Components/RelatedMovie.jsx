import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import { getMovieSimilar } from "./MovieService";
import Slider from "react-slick"

const MovieSimilar = () => {
  const { id } = useParams(); // lấy movie_id từ URL
  const [movies, setMovies] = useState([]);
    const navigate = useNavigate()

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

  useEffect(() => {
    const fetchSimilar = async () => {
      try {
        const data = await getMovieSimilar(id); // gọi API similar theo id
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching similar movies:", error);
      }
    };

    fetchSimilar();
  }, [id]); // chạy lại khi id thay đổi

  return (
    <div className="py-10">
        <h2>Movies you may interest</h2>
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
  );
};

export default MovieSimilar;
