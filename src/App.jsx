import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    {/* DESIGNING THE ANIME LIST PAGE FIRST */}
      <div id='anime-list-page' className='h-screen w-screen border-2 border-red-600'>
        {/* PROFILE BANNER */}
        <div id='anime-list-header-container' className='h-1/2 w-full flex flex-col items-center border-2 border-red-600'>
          <div className='grid grid-rows-12 grid-cols-12 h-106 w-full border-2 border-red-600 bg-gray-200'>
            <div className='row-start-7 row-end-13 col-start-1 col-end-3 ml-20 mr-6 bg-white'></div>
            <span className='row-start-11 row-end-12 col-start-3 col-end-4 flex justify-start items-center mt-2 pt-2 ml-1 border-2 border-red-600 text-2xl font-semibold'>username</span>
          </div>
          <div className='h-14 w-10/12 flex justify-around items-center border-2 border-red-600 text-lg font-semibold text-gray-500'>
            <span>Overview</span>
            <span className='text-blue-500'>Anime List</span>
            <span>Manga List</span>
            <span>Favorites</span>
            <span>Stats</span>
            <span>Social</span>
            <span>Reviews</span>
            <span>Submissions</span>
          </div>
        </div>
        
        {/* ANIME LIST BODY */}
        <div id='profile-body' className='min-h-screen w-full border-2 border-blue-600 bg-gray-200'>
          
        </div>
      </div>
    </>
  )
}

export default App
