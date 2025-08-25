import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentSection from "./CommentSection";
import Header from "./Header";
import RelatedMovie from './RelatedMovie'

const YOUTUBE_BASE_URL = "https://www.youtube.com/embed/";
const APT_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const WatchMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [videoKey, setVideoKey] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        // Lấy chi tiết phim
        const response = await fetch(`${APT_BASE_URL}/movie/${id}`, API_OPTION);
        const data = await response.json();
        setMovie(data);

        // Lấy video (trailer)
        const videoRes = await fetch(
          `${APT_BASE_URL}/movie/${id}/videos`,
          API_OPTION
        );
        const videoData = await videoRes.json();
        if (videoData.results && videoData.results.length > 0) {
          const trailer =
            videoData.results.find((v) => v.type === "Trailer") ||
            videoData.results[0];
          setVideoKey(trailer.key);
        }
      } catch (err) {
        setError("Không thể lấy thông tin phim.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (isLoading) return <p className="text-center">Đang tải...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!movie) return <p className="text-center">Không có dữ liệu phim.</p>;

  return (
    <>
      <Header />
      <div className="watch-movie max-w-5xl mx-auto p-4 text-white">

        {/* Movie Video */}
        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
          {videoKey ? (
            <iframe
              width="100%"
              height="100%"
              src={`${YOUTUBE_BASE_URL}${videoKey}`}
              title={movie.title || movie.name || "Movie Trailer"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          ) : (
            <p className="text-center text-gray-400">Không có trailer.</p>
          )}
        </div>

        {/* Movie Info */}
        <div className="pt-6 flex flex-col md:flex-row gap-6">
          {/* Poster */}
          <div className="w-32 flex-shrink-0">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-lg shadow-lg w-full"
                />
            </div>

          {/* Info */}
          <div className="md:w-2/3 w-full">
            <h2 className="text-3xl font-bold mb-3">
              {movie.title || movie.name}
            </h2>
            <p className="text-gray-300 mb-4">{movie.overview}</p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <p><span className="font-semibold text-white">Ngày phát hành:</span> {movie.release_date}</p>
              <p><span className="font-semibold text-white">Điểm IMDb:</span> {movie.vote_average}</p>
              <p><span className="font-semibold text-white">Vote count:</span> {movie.vote_count}</p>
            </div>
          </div>
        </div>

        <RelatedMovie/>

        {/* Comment Section */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-3">Bình luận</h3>
          <CommentSection movieId={movie.id} />
        </div>
      </div>
    </>
  );
};

export default WatchMovie;
