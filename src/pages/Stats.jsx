import rukia from "../assets/rukia.jpg";
import banner from "../assets/banner.jpg";
import bleach from "../assets/bleach.jpg";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Footer from "../components/Shell/Footer";

function Stats() {
  const { page, setPage } = useContext(MyContext);

  return (
    <>
      {/* DESIGNING THE ANIME LIST PAGE FIRST */}
      <div className="relative">
        <div className="absolute h-24 w-full flex bg-gray-900 opacity-100">
          <div className="h-full w-1/4 flex justify-center items-center">
            <div
              className="h-20 w-20 bg-center bg-cover"
              style={{ backgroundImage: `url(${logo})` }}
            ></div>
          </div>
          <div className="h-full w-2/4">
            <div className="h-full w-full flex justify-between items-center font-light text-xl text-gray-200">
              <div onClick={() => setPage("wip")}>Home</div>
              <div onClick={() => setPage("overview")}>Profile</div>
              <div onClick={() => setPage("animelist")}>Anime List</div>
              <div onClick={() => setPage("mangalist")}>Manga List</div>
              <div onClick={() => setPage("browse")}>Browse</div>
              <div onClick={() => setPage("wip")}>Forum</div>
            </div>
          </div>
          <div className="h-full w-1/4 flex justify-center items-center">
            <div className="h-full w-auto flex justify-between items-center">
              <i className="w-12 bx bx-search text-white text-3xl"></i>
              <div
                className="h-14 w-14 bg-center bg-cover rounded"
                style={{ backgroundImage: `url(${rukia})` }}
              ></div>
              <i className="w-10 bx bx-chevron-down text-white text-3xl"></i>
            </div>
          </div>
        </div>

        <div id="anime-list-page" className="h-auto w-screen">
          {/* PROFILE BANNER */}
          <div
            id="anime-list-header-container"
            className="h-1/2 w-full flex flex-col items-center"
          >
            <div
              className="grid grid-rows-12 grid-cols-12 h-106 w-full border-b-1 border-gray-300 bg-center bg-cover"
              style={{ backgroundImage: `url(${banner})` }}
            >
              <div
                className="row-start-7 row-end-13 col-start-1 col-end-3 mt-1 ml-20 mr-6 bg-cover rounded-t"
                style={{ backgroundImage: `url(${rukia})` }}
              ></div>
              <span className="row-start-11 row-end-12 col-start-3 col-end-4 flex justify-start items-center mt-2 pt-6 ml-1 text-2xl text-gray-700 font-semibold">
                rukia
              </span>
            </div>
            <div className="h-14 w-10/12 flex justify-around items-center text-lg font-semibold text-gray-500">
              <span onClick={() => setPage("overview")}>Overview</span>
              <span
                onClick={() => setPage("animelist")}
                className="text-blue-500"
              >
                Anime List
              </span>
              <span onClick={() => setPage("mangalist")}>Manga List</span>
              <span onClick={() => setPage("favorites")}>Favorites</span>
              <span onClick={() => setPage("stats")}>Stats</span>
              <span onClick={() => setPage("social")}>Social</span>
              <span onClick={() => setPage("reviews")}>Reviews</span>
              <span onClick={() => setPage("submissions")}>Submissions</span>
            </div>
          </div>

          {/* ANIME LIST BODY */}
          <div
            id="profile-body"
            className="h-full w-full flex flex-row border-t-1 border-gray-300 bg-gray-200"
          >
            {/* NAVBAR */}
            <div className="h-full w-1/5 flex flex-col items-end">
              {/* LISTS CONTAINER */}
              <div id="list-div" className="h-70 w-59 flex flex-col mt-8 mr-16">
                <div className="h-1/12 w-full flex items-center text-lg text-gray-500">
                  Anime Stats
                </div>
                {/* INNER NESTED */}
                <div className="h-11/12 w-full flex flex-col justify-around mt-2">
                  <span className="h-8 w-full flex items-center pl-3 text-gray-600 font-semibold bg-white rounded">
                    Overview
                  </span>
                  <span className="h-8 w-full flex items-center pl-3 text-gray-500">
                    Genres
                  </span>
                  <span className="h-8 w-full flex items-center pl-3 text-gray-500">
                    Tags
                  </span>
                  <span className="h-8 w-full flex items-center pl-3 text-gray-500">
                    Voice Actors
                  </span>
                  <span className="h-8 w-full flex items-center pl-3 text-gray-500">
                    Studios
                  </span>
                  <span className="h-8 w-full flex items-center pl-3 text-gray-500">
                    Staff
                  </span>
                </div>
              </div>

              <div id="list-div" className="h-50 w-59 flex flex-col mt-8 mr-16">
                <div className="h-1/12 w-full flex items-center text-lg text-gray-500">
                  Manga Stats
                </div>
                {/* INNER NESTED */}
                <div className="h-11/12 w-full flex flex-col justify-around mt-2">
                  <span className="h-8 w-full flex items-center pl-3 text-gray-600 font-semibold bg-white rounded">
                    Overview
                  </span>
                  <span className="h-8 w-full flex items-center pl-3 text-gray-500">
                    Genres
                  </span>
                  <span className="h-8 w-full flex items-center pl-3 text-gray-500">
                    Tags
                  </span>
                  <span className="h-8 w-full flex items-center pl-3 text-gray-500">
                    Staff
                  </span>
                </div>
              </div>
            </div>

            <div className="h-auto w-8/12">
              {/* ANIME STATISTICS BLOCK */}
              <div className="h-80 w-11/12 flex flex-wrap my-15">
                {/* STAT 1 */}
                <div className="h-1/2 w-1/3 flex justify-center items-center">
                  <div className="h-16 w-16 flex justify-center items-center ml-20 bg-white rounded-full shadow-md">
                    <i className="bx bx-tv text-4xl text-gray-500"></i>
                  </div>
                  <div className="h-full w-1/2 flex flex-col justify-center items-center ml-6">
                    <div className="h-20 w-full flex justify-start items-end text-blue-400 text-5xl font-semibold">
                      73
                    </div>
                    <div className="h-15 w-full flex justify-start items-start text-gray-500 text-lg font-semibold whitespace-nowrap">
                      Total Anime
                    </div>
                  </div>
                </div>

                {/* STAT 2 */}
                <div className="h-1/2 w-1/3 flex justify-center items-center">
                  <div className="h-16 w-16 flex justify-center items-center ml-20 bg-white rounded-full shadow-md">
                    <i class="bx bx-play text-4xl text-gray-500"></i>
                  </div>
                  <div className="h-full w-1/2 flex flex-col justify-center items-center ml-6">
                    <div className="h-20 w-full flex justify-start items-end text-blue-400 text-5xl font-semibold">
                      1725
                    </div>
                    <div className="h-15 w-full flex justify-start items-start text-gray-500 text-lg font-semibold whitespace-nowrap">
                      Episodes Watched
                    </div>
                  </div>
                </div>

                {/* STAT 3 */}
                <div className="h-1/2 w-1/3 flex justify-center items-center">
                  <div className="h-16 w-16 flex justify-center items-center ml-20 bg-white rounded-full shadow-md">
                    <i className="bx bx-calendar-alt text-4xl text-gray-500"></i>
                  </div>
                  <div className="h-full w-1/2 flex flex-col justify-center items-center ml-6">
                    <div className="h-20 w-full flex justify-start items-end text-blue-400 text-5xl font-semibold">
                      28.4
                    </div>
                    <div className="h-15 w-full flex justify-start items-start text-gray-500 text-lg font-semibold whitespace-nowrap">
                      Days Watched
                    </div>
                  </div>
                </div>

                {/* STAT 4 */}
                <div className="h-1/2 w-1/3 flex justify-center items-center">
                  <div className="h-16 w-16 flex justify-center items-center ml-20 bg-white rounded-full shadow-md">
                    <i className="bx bx-hourglass text-4xl text-gray-500"></i>
                  </div>
                  <div className="h-full w-1/2 flex flex-col justify-center items-center ml-6">
                    <div className="h-20 w-full flex justify-start items-end text-blue-400 text-5xl font-semibold">
                      40.3
                    </div>
                    <div className="h-15 w-full flex justify-start items-start text-gray-500 text-lg font-semibold whitespace-nowrap">
                      Days Planned
                    </div>
                  </div>
                </div>

                {/* STAT 5 */}
                <div className="h-1/2 w-1/3 flex justify-center items-center">
                  <div className="h-16 w-16 flex justify-center items-center ml-20 bg-white rounded-full shadow-md">
                    <i className="bx bx-plus text-4xl text-gray-500"></i>
                  </div>
                  <div className="h-full w-1/2 flex flex-col justify-center items-center ml-6">
                    <div className="h-20 w-full flex justify-start items-end text-blue-400 text-5xl font-semibold">
                      78.15
                    </div>
                    <div className="h-15 w-full flex justify-start items-start text-gray-500 text-lg font-semibold whitespace-nowrap">
                      Mean Score
                    </div>
                  </div>
                </div>

                {/* STAT 6 */}
                <div className="h-1/2 w-1/3 flex justify-center items-center">
                  <div className="h-16 w-16 flex justify-center items-center ml-20 bg-white rounded-full shadow-md">
                    <i className="bx bx-minus text-4xl text-gray-500"></i>
                  </div>
                  <div className="h-full w-1/2 flex flex-col justify-center items-center ml-6">
                    <div className="h-20 w-full flex justify-start items-end text-blue-400 text-5xl font-semibold">
                      14.4
                    </div>
                    <div className="h-15 w-full flex justify-start items-start text-gray-500 text-lg font-semibold whitespace-nowrap">
                      Standard Deviation
                    </div>
                  </div>
                </div>
              </div>

              {/* SCORE CHART BLOCK */}
              <div className="h-80 w-full mb-25">
                {/* TITLE - SCORE */}
                <div className="h-1/5 w-full flex justify-between items-center">
                  <div className="h-full w-1/3 flex justify-start items-center text-2xl text-gray-600 font-semibold">
                    Score
                  </div>
                  <div className="h-12 w-95 flex justify-around items-center text-lg font-semibold text-gray-500 bg-white rounded-full">
                    <div className="h-8 w-45 flex justify-center items-center text-white bg-blue-400 rounded-full">
                      Titles Watched
                    </div>
                    <div className="h-8 w-45 flex justify-center items-center rounded-full">
                      Hours Watched
                    </div>
                  </div>
                </div>

                {/* CHART - SCORE */}
                <div className="h-70 w-full bg-white rounded-xl shadow-lg">
                  <div className="h-3/4 w-full flex">
                    <div className="h-full w-1/7 flex flex-col justify-end items-center">
                      <span className="font-bold text-gray-600 text-md">1</span>
                      <div className="h-1/12 w-1/3 bg-blue-400 rounded-t-lg"></div>
                    </div>
                    <div className="h-full w-1/7 flex flex-col justify-end items-center">
                      <span className="font-bold text-gray-600 text-md">2</span>
                      <div className="h-2/12 w-1/3 bg-blue-400 rounded-t-lg"></div>
                    </div>
                    <div className="h-full w-1/7 flex flex-col justify-end items-center">
                      <span className="font-bold text-gray-600 text-md">8</span>
                      <div className="h-6/12 w-1/3 bg-blue-400 rounded-t-lg"></div>
                    </div>
                    <div className="h-full w-1/7 flex flex-col justify-end items-center">
                      <span className="font-bold text-gray-600 text-md">
                        10
                      </span>
                      <div className="h-7/12 w-1/3 bg-blue-400 rounded-t-lg"></div>
                    </div>
                    <div className="h-full w-1/7 flex flex-col justify-end items-center">
                      <span className="font-bold text-gray-600 text-md">
                        12
                      </span>
                      <div className="h-8/12 w-1/3 bg-blue-400 rounded-t-lg"></div>
                    </div>
                    <div className="h-full w-1/7 flex flex-col justify-end items-center">
                      <span className="font-bold text-gray-600 text-md">
                        16
                      </span>
                      <div className="h-10/12 w-1/3 bg-blue-400 rounded-t-lg"></div>
                    </div>
                    <div className="h-full w-1/7 flex flex-col justify-end items-center">
                      <span className="font-bold text-gray-600 text-md">5</span>
                      <div className="h-4/12 w-1/3 bg-blue-400 rounded-t-lg"></div>
                    </div>
                  </div>
                  <div className="h-1/4 w-full flex bg-gray-300 rounded-b-xl">
                    <div className="h-full w-1/7 flex justify-center items-center font-bold text-gray-600 text-lg">
                      4
                    </div>
                    <div className="h-full w-1/7 flex justify-center items-center font-bold text-gray-600 text-lg">
                      5
                    </div>
                    <div className="h-full w-1/7 flex justify-center items-center font-bold text-gray-600 text-lg">
                      6
                    </div>
                    <div className="h-full w-1/7 flex justify-center items-center font-bold text-gray-600 text-lg">
                      7
                    </div>
                    <div className="h-full w-1/7 flex justify-center items-center font-bold text-gray-600 text-lg">
                      8
                    </div>
                    <div className="h-full w-1/7 flex justify-center items-center font-bold text-gray-600 text-lg">
                      9
                    </div>
                    <div className="h-full w-1/7 flex justify-center items-center font-bold text-gray-600 text-lg">
                      10
                    </div>
                  </div>
                </div>
              </div>

              {/* EPISODE COUNT BLOCK */}
              <div className="h-80 w-full mb-25">
                <div className="h-80 w-full mb-15">
                  {/* TITLE - EPISDOE COUNT */}
                  <div className="h-1/5 w-full flex justify-between items-center">
                    <div className="h-full w-1/3 flex justify-start items-center text-2xl text-gray-600 font-semibold">
                      Episode Count
                    </div>
                    <div className="h-12 w-145 flex justify-around items-center text-lg font-semibold text-gray-500 bg-white rounded-full">
                      <div className="h-8 w-45 flex justify-center items-center text-white bg-blue-400 rounded-full">
                        Titles Watched
                      </div>
                      <div className="h-8 w-45 flex justify-center items-center rounded-full">
                        Hours Watched
                      </div>
                      <div className="h-8 w-45 flex justify-center items-center rounded-full">
                        Mean Score
                      </div>
                    </div>
                  </div>

                  {/* CHART - EPISDOE COUNT */}
                  <div className="h-70 w-full bg-white rounded-xl shadow-lg">
                    <div className="h-3/4 w-full flex">
                      <div className="h-full w-1/5 flex flex-col justify-end items-center">
                        <span className="font-bold text-gray-600 text-md">
                          11
                        </span>
                        <div className="h-4/12 w-1/4 bg-blue-400 rounded-t-lg"></div>
                      </div>
                      <div className="h-full w-1/5 flex flex-col justify-end items-center">
                        <span className="font-bold text-gray-600 text-md">
                          8
                        </span>
                        <div className="h-2/12 w-1/4 bg-blue-400 rounded-t-lg"></div>
                      </div>
                      <div className="h-full w-1/5 flex flex-col justify-end items-center">
                        <span className="font-bold text-gray-600 text-md">
                          38
                        </span>
                        <div className="h-10/12 w-1/4 bg-blue-400 rounded-t-lg"></div>
                      </div>
                      <div className="h-full w-1/5 flex flex-col justify-end items-center">
                        <span className="font-bold text-gray-600 text-md">
                          10
                        </span>
                        <div className="h-4/12 w-1/4 bg-blue-400 rounded-t-lg"></div>
                      </div>
                      <div className="h-full w-1/5 flex flex-col justify-end items-center">
                        <span className="font-bold text-gray-600 text-md">
                          5
                        </span>
                        <div className="h-2/12 w-1/4 bg-blue-400 rounded-t-lg"></div>
                      </div>
                    </div>
                    <div className="h-1/4 w-full flex bg-gray-300 rounded-b-xl">
                      <div className="h-full w-1/5 flex justify-center items-center font-bold text-gray-600 text-lg">
                        1
                      </div>
                      <div className="h-full w-1/5 flex justify-center items-center font-bold text-gray-600 text-lg">
                        2-6
                      </div>
                      <div className="h-full w-1/5 flex justify-center items-center font-bold text-gray-600 text-lg">
                        7-16
                      </div>
                      <div className="h-full w-1/5 flex justify-center items-center font-bold text-gray-600 text-lg">
                        17-28
                      </div>
                      <div className="h-full w-1/5 flex justify-center items-center font-bold text-gray-600 text-lg">
                        101+
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PIE CHARTS BLOCK */}
              <div className="h-85 w-full flex justify-around items-center mb-15">
                {/* PIE CHART 1 */}
                <div className="h-full w-1/4 flex flex-col items-center bg-white rounded-xl shadow-lg">
                  <div className="h-2/12 w-10/12 flex items-center text-xl font-semibold text-gray-500">
                    Format Distribution
                  </div>
                  <div className="h-5/12 w-10/12 flex justify-center items-center text-xl font-semibold text-gray-500">
                    <i className="bx bx-pie-chart-alt-2 text-9xl"></i>
                  </div>
                  <div className="h-5/12 w-10/12 flex flex-col justify-around text-md font-semibold text-white">
                    <div className="h-9 w-full flex justify-between items-center bg-blue-400 rounded-lg">
                      <div className="pl-3">TV</div>
                      <div className="h-full w-14 flex justify-center items-center bg-blue-300 opacity-100 rounded-lg">
                        68%
                      </div>
                    </div>
                    <div className="h-9 w-full flex justify-between items-center bg-gray-700 rounded-lg">
                      <div className="pl-3">MOVIE</div>
                      <div className="h-full w-14 flex justify-center items-center bg-gray-400 opacity-100 rounded-lg">
                        11%
                      </div>
                    </div>
                    <div className="h-9 w-full flex justify-between items-center bg-red-500 rounded-lg">
                      <div className="pl-3">OVA</div>
                      <div className="h-full w-14 flex justify-center items-center bg-red-300 opacity-100 rounded-lg">
                        10%
                      </div>
                    </div>
                  </div>
                </div>

                {/* PIE CHART 2 */}
                <div className="h-full w-1/4 flex flex-col items-center bg-white rounded-xl shadow-lg">
                  <div className="h-2/12 w-10/12 flex items-center text-xl font-semibold text-gray-500">
                    Status Distribution
                  </div>
                  <div className="h-5/12 w-10/12 flex justify-center items-center text-xl font-semibold text-gray-500">
                    <i className="bx bx-pie-chart-alt-2 text-9xl"></i>
                  </div>
                  <div className="h-5/12 w-10/12 flex flex-col justify-around text-md font-semibold text-white">
                    <div className="h-9 w-full flex justify-between items-center bg-blue-400 rounded-lg">
                      <div className="pl-3">Planning</div>
                      <div className="h-full w-14 flex justify-center items-center bg-blue-300 opacity-100 rounded-lg">
                        68%
                      </div>
                    </div>
                    <div className="h-9 w-full flex justify-between items-center bg-gray-700 rounded-lg">
                      <div className="pl-3">Completed</div>
                      <div className="h-full w-14 flex justify-center items-center bg-gray-400 opacity-100 rounded-lg">
                        24%
                      </div>
                    </div>
                    <div className="h-9 w-full flex justify-between items-center bg-red-500 rounded-lg">
                      <div className="pl-3">Paused</div>
                      <div className="h-full w-14 flex justify-center items-center bg-red-300 opacity-100 rounded-lg">
                        5%
                      </div>
                    </div>
                  </div>
                </div>

                {/* PIE CHART 3 */}
                <div className="h-full w-1/4 flex flex-col items-center bg-white rounded-xl shadow-lg">
                  <div className="h-2/12 w-10/12 flex items-center text-xl font-semibold text-gray-500">
                    Country Distribution
                  </div>
                  <div className="h-5/12 w-10/12 flex justify-center items-center text-xl font-semibold text-gray-500">
                    <i className="bx bx-pie-chart-alt-2 text-9xl"></i>
                  </div>
                  <div className="h-5/12 w-10/12 flex flex-col justify-around text-md font-semibold text-white">
                    <div className="h-9 w-full flex justify-between items-center bg-blue-400 rounded-lg">
                      <div className="pl-3">Japan</div>
                      <div className="h-full w-14 flex justify-center items-center bg-blue-300 opacity-100 rounded-lg">
                        96%
                      </div>
                    </div>
                    <div className="h-9 w-full flex justify-between items-center bg-gray-700 rounded-lg">
                      <div className="pl-3">China</div>
                      <div className="h-full w-14 flex justify-center items-center bg-gray-400 opacity-100 rounded-lg">
                        3%
                      </div>
                    </div>
                    <div className="h-9 w-full flex justify-between items-center bg-red-500 rounded-lg">
                      <div className="pl-3">South Korea</div>
                      <div className="h-full w-14 flex justify-center items-center bg-red-300 opacity-100 rounded-lg">
                        1%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RELEASE YEAR BLOCK */}
              <div className="h-80 w-full mb-25">
                <div className="h-80 w-full mb-15">
                  {/* TITLE - EPISDOE COUNT */}
                  <div className="h-1/5 w-full flex justify-between items-center">
                    <div className="h-full w-1/3 flex justify-start items-center text-2xl text-gray-600 font-semibold">
                      Release Year
                    </div>
                    <div className="h-12 w-145 flex justify-around items-center text-lg font-semibold text-gray-500 bg-white rounded-full">
                      <div className="h-8 w-45 flex justify-center items-center text-white bg-blue-400 rounded-full">
                        Titles Watched
                      </div>
                      <div className="h-8 w-45 flex justify-center items-center rounded-full">
                        Hours Watched
                      </div>
                      <div className="h-8 w-45 flex justify-center items-center rounded-full">
                        Mean Score
                      </div>
                    </div>
                  </div>

                  {/* CHART - Release Year */}
                  <div className="h-70 w-full bg-white rounded-xl shadow-lg">
                    <div className="h-3/4 w-full flex"></div>
                    <div className="h-1/4 w-full flex justify-around bg-gray-300 rounded-b-xl">
                      <div className="h-full w-auto flex justify-center items-center font-bold text-gray-600 text-lg">
                        2020
                      </div>
                      <div className="h-full w-auto flex justify-center items-center font-bold text-gray-600 text-lg">
                        2021
                      </div>
                      <div className="h-full w-auto flex justify-center items-center font-bold text-gray-600 text-lg">
                        2022
                      </div>
                      <div className="h-full w-auto flex justify-center items-center font-bold text-gray-600 text-lg">
                        2023
                      </div>
                      <div className="h-full w-auto flex justify-center items-center font-bold text-gray-600 text-lg">
                        2024
                      </div>
                      <div className="h-full w-auto flex justify-center items-center font-bold text-gray-600 text-lg">
                        2025
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WATCH YEAR BLOCK */}
              <div className="h-80 w-full mb-25">
                <div className="h-80 w-full mb-15">
                  {/* TITLE - watch year */}
                  <div className="h-1/5 w-full flex justify-between items-center">
                    <div className="h-full w-1/3 flex justify-start items-center text-2xl text-gray-600 font-semibold">
                      Release Year
                    </div>
                    <div className="h-12 w-145 flex justify-around items-center text-lg font-semibold text-gray-500 bg-white rounded-full">
                      <div className="h-8 w-45 flex justify-center items-center text-white bg-blue-400 rounded-full">
                        Titles Watched
                      </div>
                      <div className="h-8 w-45 flex justify-center items-center rounded-full">
                        Hours Watched
                      </div>
                      <div className="h-8 w-45 flex justify-center items-center rounded-full">
                        Mean Score
                      </div>
                    </div>
                  </div>

                  {/* CHART - Watch Year */}
                  <div className="h-70 w-full bg-white rounded-xl shadow-lg">
                    <div className="h-3/4 w-full flex"></div>
                    <div className="h-1/4 w-full flex justify-around bg-gray-300 rounded-b-xl">
                      <div className="h-full w-auto flex justify-center items-center font-bold text-gray-600 text-lg">
                        2023
                      </div>
                      <div className="h-full w-auto flex justify-center items-center font-bold text-gray-600 text-lg">
                        2024
                      </div>
                      <div className="h-full w-auto flex justify-center items-center font-bold text-gray-600 text-lg">
                        2025
                      </div>
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

export default Stats;
