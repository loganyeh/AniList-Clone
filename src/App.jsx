import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    {/* DESIGNING THE ANIME LIST PAGE FIRST */}
      <div id='anime-list-page' className='h-screen w-screen'>
        {/* PROFILE BANNER */}
        <div id='anime-list-header-container' className='h-1/2 w-full flex flex-col items-center'>
          <div className='grid grid-rows-12 grid-cols-12 h-106 w-full bg-gray-200'>
            <div className='row-start-7 row-end-13 col-start-1 col-end-3 mt-1 ml-20 mr-6 bg-white'></div>
            <span className='row-start-11 row-end-12 col-start-3 col-end-4 flex justify-start items-center mt-2 pt-6 ml-1 text-2xl font-semibold'>username</span>
          </div>
          <div className='h-14 w-10/12 flex justify-around items-center text-lg font-semibold text-gray-500'>
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
        <div id='profile-body' className='h-full w-full flex flex-row border-2 border-blue-600 bg-gray-200'>
          {/* NAVBAR */}
          <div className='h-full w-1/5 flex flex-col items-end'>
            <form className='h-13 w-58 mt-8 mr-16'>
              <input type="text" id='filter-input' className='h-full w-full pl-8 bg-white rounded' placeholder='Filter' />
            </form>

            {/* LISTS CONTAINER */}
            <div id="list-div" className='h-70 w-59 flex flex-col mt-8 mr-16'>
              <div className='h-1/12 w-full flex items-center text-lg text-gray-500'>Lists</div>
              {/* INNER NESTED */}
              <div className='h-11/12 w-full flex flex-col justify-around mt-2'>
                <span className='h-8 w-full flex items-center pl-3 text-gray-600 font-semibold bg-white rounded'>All</span>
                <span className='h-8 w-full flex items-center pl-3 text-gray-500'>Watching</span>
                <span className='h-8 w-full flex items-center pl-3 text-gray-500'>Completed</span>
                <span className='h-8 w-full flex items-center pl-3 text-gray-500'>Paused</span>
                <span className='h-8 w-full flex items-center pl-3 text-gray-500'>Dropped</span>
                <span className='h-8 w-full flex items-center pl-3 text-gray-500'>Planning</span>
              </div>
            </div>

            {/* FILTERS */}
            <div id="list-div" className='h-65 w-59 mt-7 mr-16'>
              <div className='h-1/12 w-full flex text-lg text-gray-500'>Filters</div>
              <div className='h-11/12 w-full flex flex-col justify-around mt-3'>
                <button className='h-10 w-full flex justify-start items-center mt-1 pl-4 bg-white text-md text-gray-400 rounded'>
                  <div className='w-full flex justify-between pr-4'><span>Format</span><span>\/</span></div>
                </button>
                <button className='h-10 w-full flex justify-start items-center mt-1 pl-4 bg-white text-md text-gray-400 rounded'>
                  <div className='w-full flex justify-between pr-4'><span>Status</span><span>\/</span></div>
                </button>
                <button className='h-10 w-full flex justify-start items-center mt-1 pl-4 bg-white text-md text-gray-400 rounded'>
                  <div className='w-full flex justify-between pr-4'><span>Genres</span><span>\/</span></div>
                </button>
                <button className='h-10 w-full flex justify-start items-center mt-1 pl-4 bg-white text-md text-gray-400 rounded'>
                  <div className='w-full flex justify-between pr-4'><span>Country</span><span>\/</span></div>
                </button>
              </div>
            </div>

            {/* YEAR */}
            <div id="list-div" className='h-20 w-59 flex flex-col mt-7 mr-16'>
              <div className='h-12 w-full flex items-center text-lg text-gray-500'>Year</div>
              {/* INNER NESTED */}
              <div className='h-2 w-full flex flex-col justify-around mt-1 bg-white'>
              </div>
            </div>

            {/* SORT */}
            <div id="list-div" className='h-24 w-59 flex flex-col mt-4 mr-16'>
              <div className='h-14 w-full flex items-center text-lg text-gray-500'>Sort</div>
              {/* INNER NESTED */}
              <div className='h-11/12 w-full flex flex-col mt-1'>
                <button className='h-10 w-full flex justify-start items-center mt-1 pl-4 bg-white text-md text-gray-400 rounded'>
                  <div className='w-full flex justify-between pr-4'><span>Score</span><span>\/</span></div>
                </button>
              </div>
            </div>

          </div>

          {/* LISTING BODY SHWS IN HERE */}
          <div className='h-full w-4/5 border-2 border-red-600'>

            {/*  */}
            <div className='h-20 w-11/12 flex justify-end items-center border-2 border-black'>
              <div className='h-16 w-35 flex justify-center items-center border-2 border-red-600 bg-white rounded'>X X </div>
            </div>

            {/*  */}
            <div className='h-auto w-11/12 border-2 border-purple-600'>
              <div className='h-20 w-full flex items-center pl-4 border-2 border-blue-600 text-xl text-gray-800'>Watching</div>
              <div id='watching-header' className='h-20 w-full flex justify-around items-center bg-white'>
                <span>Title</span>
                <span>Score</span>
                <span>Progress</span>
                <span>Type</span>
              </div>
              <div className='h-20 w-full flex justify-between items-center border-2 border-red-600'>
                <img src="#" alt="bleach" />
                <span>Bleach</span>
                <div>20/366</div>
                <div>TV</div>
              </div>
              <div className='h-20 w-full flex justify-between items-center border-2 border-red-600'>
                <img src="#" alt="bleach" />
                <span>Bleach</span>
                <div>20/366</div>
                <div>TV</div>
              </div>
            </div>





            {/* <div className='h-50 w-11/12 border-2 border-black'>
              <span>Completed</span>
            </div>
            <div className='h-50 w-11/12 border-2 border-black'>
              <span>Paused</span>
            </div>
            <div className='h-50 w-11/12 border-2 border-black'>
              <span>Dropped</span>
            </div>
            <div className='h-50 w-11/12 border-2 border-black'>
              <span>Planning</span>
            </div> */}
          </div>

        </div>
      </div>
    </>
  )
}

export default App
