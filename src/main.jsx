import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import MovieDetail from './Components/MovieDetail.jsx'
import CommentSection from "./Components/CommentSection.jsx"
import WatchMovie from "./Components/WatchMovie.jsx"
import TopRate from './Components/TopRate.jsx'
import { MovieProvider } from './Components/MovieContext.jsx'  // 👈 nhớ import
// import TvShows from './Components/TVShow.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieProvider>   {/* 👈 bọc ở đây */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/watch/:id" element={<WatchMovie />} />
          <Route path="/top-rated" element={<TopRate />} />
          {/* <Route path="/tv-show" element={<TvShows />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  </StrictMode>
)
