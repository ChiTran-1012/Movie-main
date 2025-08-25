// import React, { useEffect, useState } from "react";
// import Header from "./Header";
// import MovieCard from "./MovieCard";
// import { getTvShows } from "./MovieService"; // sẽ viết ở MovieService

// const TvShows = () => {
//   const [shows, setShows] = useState([]);
//   const [page, setPage] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchShows = async () => {
//     setIsLoading(true);
//     const data = await getTvShows(page);
//     setShows((prev) => [...prev, ...data.results]);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     fetchShows();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [page]);

//   return (
//     <div>
//       <Header />
//       <div className="pattern">
//         <div className="wrapper">
//           <section className="all-movies">
//             <h2>TV Shows</h2>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               {shows.map((show) => (
//                 <MovieCard key={show.id} movie={show} />
//               ))}
//             </div>

//             {/* Nút Load More */}
//             <div className="flex justify-center mt-6">
//               <button
//                 onClick={() => setPage((prev) => prev + 1)}
//                 disabled={isLoading}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//               >
//                 {isLoading ? "Loading..." : "Load More"}
//               </button>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TvShows;
