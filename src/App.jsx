import './App.css'
import { Route, Routes } from 'react-router-dom'
import AnimeList from './pages/AnimeList';
import MangaList from './pages/MangaList';
import Favorites from './pages/Favorites';
import Stats from './pages/Stats';
import Social from './pages/Social';
import Reviews from './pages/Reviews';
import Submissions from './pages/Submissions';
import { useState, useContext } from 'react';
import { MyContext } from './context/MyContext';
import Overview from './pages/Overview';

function App() {
  const [page, setPage] = useState("animelist");
  const [selectedPage, setSelectedPage] = useState('animelist');

  return (
    <>
      <MyContext.Provider value={{page, setPage, selectedPage, setSelectedPage}}>
        {page === "overview" && <Overview />}
        {page === "animelist" && <AnimeList />}
        {page === "mangalist" && <MangaList />}
        {page === "favorites" && <Favorites />}
        {page === "stats" && <Stats />}
        {page === "social" && <Social />}
        {page === "reviews" && <Reviews />}
        {page === "submissions" && <Submissions />}
      </MyContext.Provider>
    </>
  )
}

export default App
