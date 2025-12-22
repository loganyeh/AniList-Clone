import rukia from "../assets/rukia.jpg";
import banner from "../assets/banner.jpg";
import bleach from "../assets/bleach.jpg";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Footer from "../components/Shell/Footer";
import GlobalNav from "../components/Shell/GlobalNav";
import BannerAndMidNav from "../components/Shell/BannerAndMidNav";

function MangaList() {
  const { page, setPage } = useContext(MyContext);

  return (
    <>
      {/* DESIGNING THE ANIME LIST PAGE FIRST */}
      <div className="relative">
        <GlobalNav />

        <div id="anime-list-page" className="h-auto w-screen">
          <BannerAndMidNav />

          {/* ANIME LIST BODY */}
          <div
            id="profile-body"
            className="h-full w-full flex flex-row border-t-1 border-gray-300 bg-gray-200"
          >
            {/* NAVBAR */}
            <div className="h-full w-1/5 flex flex-col items-end">
              <form className="h-13 w-58 mt-8 mr-16">
                <input
                  type="text"
                  id="filter-input"
                  className="h-full w-full pl-8 bg-white rounded"
                  placeholder="Filter"
                />
              </form>

              {/* LISTS CONTAINER */}
              <div id="list-div" className="h-70 w-59 flex flex-col mt-8 mr-16">
                <div className="h-1/12 w-full flex items-center text-lg text-gray-500">
                  Lists
                </div>
                {/* INNER NESTED */}
                <div className="h-11/12 w-full flex flex-col justify-around mt-2">
                  <span className="h-8 w-full flex items-center pl-3 text-gray-600 font-semibold bg-white rounded">
                    All
                  </span>
                  <span className="h-8 w-full flex items-center pl-3 text-gray-500">
                    Reading
                  </span>
                  <span className="h-8 w-full flex items-center pl-3 text-gray-500">
                    Rereading
                  </span>
                  <span className="h-8 w-full flex items-center pl-3 text-gray-500">
                    Completed
                  </span>
                  <span className="h-8 w-full flex items-center pl-3 text-gray-500">
                    Paused
                  </span>
                  <span className="h-8 w-full flex items-center pl-3 text-gray-500">
                    Planning
                  </span>
                </div>
              </div>

              {/* FILTERS */}
              <div id="list-div" className="h-65 w-59 mt-7 mr-16">
                <div className="h-1/12 w-full flex text-lg text-gray-500">
                  Filters
                </div>
                <div className="h-11/12 w-full flex flex-col justify-around mt-3">
                  <button className="h-10 w-full flex justify-start items-center mt-1 pl-4 bg-white text-md text-gray-400 rounded">
                    <div className="w-full flex justify-between pr-4">
                      <span>Format</span>
                      <span>\/</span>
                    </div>
                  </button>
                  <button className="h-10 w-full flex justify-start items-center mt-1 pl-4 bg-white text-md text-gray-400 rounded">
                    <div className="w-full flex justify-between pr-4">
                      <span>Status</span>
                      <span>\/</span>
                    </div>
                  </button>
                  <button className="h-10 w-full flex justify-start items-center mt-1 pl-4 bg-white text-md text-gray-400 rounded">
                    <div className="w-full flex justify-between pr-4">
                      <span>Genres</span>
                      <span>\/</span>
                    </div>
                  </button>
                  <button className="h-10 w-full flex justify-start items-center mt-1 pl-4 bg-white text-md text-gray-400 rounded">
                    <div className="w-full flex justify-between pr-4">
                      <span>Country</span>
                      <span>\/</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* YEAR */}
              <div id="list-div" className="h-20 w-59 flex flex-col mt-7 mr-16">
                <div className="h-12 w-full flex items-center text-lg text-gray-500">
                  Year
                </div>
                {/* INNER NESTED */}
                <div className="h-2 w-full flex flex-col justify-around mt-1 bg-white"></div>
              </div>

              {/* SORT */}
              <div id="list-div" className="h-24 w-59 flex flex-col mt-4 mr-16">
                <div className="h-14 w-full flex items-center text-lg text-gray-500">
                  Sort
                </div>
                {/* INNER NESTED */}
                <div className="h-11/12 w-full flex flex-col mt-1">
                  <button className="h-10 w-full flex justify-start items-center mt-1 pl-4 bg-white text-md text-gray-400 rounded">
                    <div className="w-full flex justify-between pr-4">
                      <span>Score</span>
                      <span>\/</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* -------------------- */}
            {/* LISTING BODY SHWS IN HERE */}
            <div className="h-full w-4/5">
              {/*  */}
              <div className="h-20 w-11/12 flex justify-end items-center">
                <div className="h-auto w-auto flex justify-center items-center bg-white rounded">
                  <i className="bx bx-list-ul h-full w-1/3 flex justify-center items-center m-2 text-3xl text-blue-400 cursor-pointer"></i>
                  <i className="bx bx-list-ol h-full w-1/3 flex justify-center items-center m-2 text-3xl cursor-pointer"></i>
                  <i className="bx bxs-grid-alt h-full w-1/3 flex justify-center items-center m-2 text-3xl cursor-pointer"></i>
                </div>
              </div>

              {/* Reading HEADER */}
              <div className="h-auto w-11/12">
                <div className="h-12 w-full flex items-start pl-4 text-2xl font-light text-gray-800">
                  Reading
                </div>

                <div className="bg-white rounded">
                  <div
                    id="watching-header"
                    className="h-20 w-full flex justify-between items-center text-xl font-medium text-gray-800"
                  >
                    <div className="h-full w-1/2 flex items-center pl-29 ">
                      Title
                    </div>
                    <div className="h-full w-1/2 flex justify-around items-center">
                      <span>Score</span>
                      <span>Progress</span>
                      <span>Type</span>
                    </div>
                  </div>

                  {/* BLEACH */}
                  <div className="h-20 w-full flex justify-around items-center text-lg font-light text-gray-800 hover:bg-blue-400">
                    <div className="h-full w-1/2 flex items-center">
                      <div
                        className="h-17 w-17 flex justify-center items-center ml-6 bg-cover bg-center rounded"
                        style={{ backgroundImage: `url(${bleach})` }}
                      ></div>
                      <div className="h-full w-auto flex justify-center items-center ml-6">
                        Bleach
                      </div>
                    </div>
                    <div className="h-full w-1/2 flex justify-around items-center">
                      <span>10/10</span>
                      <span>20/366</span>
                      <span>TV</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* COMPLETED SECTION */}
              <div className="h-15 w-11/12 flex justify-end items-center">
                <div className="h-auto w-auto flex justify-center items-center bg-white rounded"></div>
              </div>
              {/* COMPLETED HEADER */}
              <div className="h-auto w-11/12">
                <div className="h-12 w-full flex items-start pl-4 text-2xl font-light text-gray-800">
                  Completed
                </div>

                <div className="bg-white rounded">
                  <div
                    id="watching-header"
                    className="h-20 w-full flex justify-between items-center text-xl font-medium text-gray-800"
                  >
                    <div className="h-full w-1/2 flex items-center pl-29 ">
                      Title
                    </div>
                    <div className="h-full w-1/2 flex justify-around items-center">
                      <span>Score</span>
                      <span>Progress</span>
                      <span>Type</span>
                    </div>
                  </div>

                  {/* BLEACH */}
                  <div className="h-20 w-full flex justify-around items-center text-lg font-light text-gray-800 hover:bg-blue-400">
                    <div className="h-full w-1/2 flex items-center">
                      <div
                        className="h-17 w-17 flex justify-center items-center ml-6 bg-cover bg-center rounded"
                        style={{ backgroundImage: `url(${bleach})` }}
                      ></div>
                      <div className="h-full w-auto flex justify-center items-center ml-6">
                        Bleach
                      </div>
                    </div>
                    <div className="h-full w-1/2 flex justify-around items-center">
                      <span>10/10</span>
                      <span>20/366</span>
                      <span>TV</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Paused SECTION */}
              <div className="h-15 w-11/12 flex justify-end items-center">
                <div className="h-auto w-auto flex justify-center items-center bg-white rounded"></div>
              </div>
              {/* Paused HEADER */}
              <div className="h-auto w-11/12">
                <div className="h-12 w-full flex items-start pl-4 text-2xl font-light text-gray-800">
                  Paused
                </div>

                <div className="bg-white rounded">
                  <div
                    id="watching-header"
                    className="h-20 w-full flex justify-between items-center text-xl font-medium text-gray-800"
                  >
                    <div className="h-full w-1/2 flex items-center pl-29 ">
                      Title
                    </div>
                    <div className="h-full w-1/2 flex justify-around items-center">
                      <span>Score</span>
                      <span>Progress</span>
                      <span>Type</span>
                    </div>
                  </div>

                  {/* BLEACH */}
                  <div className="h-20 w-full flex justify-around items-center text-lg font-light text-gray-800 hover:bg-blue-400">
                    <div className="h-full w-1/2 flex items-center">
                      <div
                        className="h-17 w-17 flex justify-center items-center ml-6 bg-cover bg-center rounded"
                        style={{ backgroundImage: `url(${bleach})` }}
                      ></div>
                      <div className="h-full w-auto flex justify-center items-center ml-6">
                        Bleach
                      </div>
                    </div>
                    <div className="h-full w-1/2 flex justify-around items-center">
                      <span>10/10</span>
                      <span>20/366</span>
                      <span>TV</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Planning SECTION */}
              <div className="h-15 w-11/12 flex justify-end items-center">
                <div className="h-auto w-auto flex justify-center items-center bg-white rounded"></div>
              </div>
              {/* Planning HEADER */}
              <div className="h-auto w-11/12 mb-20">
                <div className="h-12 w-full flex items-start pl-4 text-2xl font-light text-gray-800">
                  Planning
                </div>

                <div className="bg-white rounded">
                  <div
                    id="watching-header"
                    className="h-20 w-full flex justify-between items-center text-xl font-medium text-gray-800"
                  >
                    <div className="h-full w-1/2 flex items-center pl-29 ">
                      Title
                    </div>
                    <div className="h-full w-1/2 flex justify-around items-center">
                      <span>Score</span>
                      <span>Progress</span>
                      <span>Type</span>
                    </div>
                  </div>

                  {/* BLEACH */}
                  <div className="h-20 w-full flex justify-around items-center text-lg font-light text-gray-800 hover:bg-blue-400">
                    <div className="h-full w-1/2 flex items-center">
                      <div
                        className="h-17 w-17 flex justify-center items-center ml-6 bg-cover bg-center rounded"
                        style={{ backgroundImage: `url(${bleach})` }}
                      ></div>
                      <div className="h-full w-auto flex justify-center items-center ml-6">
                        Bleach
                      </div>
                    </div>
                    <div className="h-full w-1/2 flex justify-around items-center">
                      <span>10/10</span>
                      <span>20/366</span>
                      <span>TV</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================ */}
      {/* FOOTER */}
      <Footer />
      {/* ============================ */}
    </>
  );
}

export default MangaList;
