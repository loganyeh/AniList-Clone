import './App.css'
import { Route, Routes } from 'react-router-dom'
import AnimeList from './pages/AnimeList';
import MangaList from './pages/MangaList';
import Favorites from './pages/Favorites';
import Stats from './pages/Stats';
import Social from './pages/Social';
import Reviews from './pages/Reviews';
import Submissions from './pages/Submissions';
import WIP from './pages/WIP';
import Browse from './pages/Browse';
import { useState, useContext } from 'react';
import { MyContext } from './context/MyContext';
import Overview from './pages/Overview';

function App() {
  const [page, setPage] = useState("overview");

  return (
    <>
      <MyContext.Provider value={{page, setPage}}>
        {page === "overview" && <Overview />}
        {page === "animelist" && <AnimeList />}
        {page === "mangalist" && <MangaList />}
        {page === "favorites" && <Favorites />}
        {page === "stats" && <Stats />}
        {page === "social" && <Social />}
        {page === "reviews" && <Reviews />}
        {page === "submissions" && <Submissions />}
        {page === "wip" && <WIP />}
        {/* TOP NAVBAR */}
        {page === "browse" && <Browse />}
      </MyContext.Provider>
    </>
  )
}

export default App
