import './App.css'
import { Route, Routes } from 'react-router-dom'
import AnimeList from './pages/AnimeList';
import MangaList from './pages/MangaList';
import Favorites from './pages/Favorites';
import { useState, useContext } from 'react';
import { MyContext } from './context/MyContext';

function App() {
  const [page, setPage] = useState("animelist");
  const [isPageSelectedBlue, setIsPageSelectedBlue] = useState('animelist');

  return (
    <>
      <MyContext.Provider value={{page, setPage, isPageSelectedBlue, setIsPageSelectedBlue}}>
        {page === "animelist" && <AnimeList />}
        {page === "mangalist" && <MangaList />}
        {page === "favorites" && <Favorites />}
      </MyContext.Provider>
    </>
  )
}

export default App
