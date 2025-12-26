import './App.css'
import { Route, Routes } from 'react-router-dom'
import { MyContext } from './context/MyContext';
import AnimeList from './pages/AnimeList';
import MangaList from './pages/MangaList';
import Favorites from './pages/Favorites';
import Stats from './pages/Stats';
import Social from './pages/Social';
import Reviews from './pages/Reviews';
import Submissions from './pages/Submissions';
import WIP from './pages/WIP';
import Browse from './pages/Browse';
import Overview from './pages/Overview';

function App() {

  return (
    <>
      <MyContext.Provider value={{}}>
        <Routes>
          <Route path='/overview' element={<Overview />} />
          <Route path='/' element={<AnimeList />} />
          <Route path='/mangalist' element={<MangaList />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/stats' element={<Stats />} />
          <Route path='/social' element={<Social />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/submissions' element={<Submissions />} />
          <Route path='/browse' element={<Browse />} />
          <Route path='/wip' element={<WIP />} />
        </Routes>
      </MyContext.Provider>
    </>
  )
}

export default App
