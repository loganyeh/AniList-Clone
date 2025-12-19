import {
  rukia,
  banner,
  bleach,
  logo,
  csm,
  jjk,
  mha,
  naruto,
  demon_slayer,
} from "../assets/animes";
import {
  denji,
  giyuu,
  ichigo,
  itadori,
  okarun,
  zoro,
} from "../assets/characters";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

function Overview() {
  const { page, setPage } = useContext(MyContext);

  return (
    <>
      {/* HEADER, NAV BAR, BANNER/PFP, MID NAVBAR */}
      <div className="relative">
        {/* NAV BAR */}
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
              <div onClick={() => setPage("wip")}>Browse</div>
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
          {/* BANNER/PFP */}
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
              <span
                onClick={() => {
                  setPage("overview");
                }}
              >
                Overview
              </span>
              <span
                onClick={() => {
                  setPage("animelist");
                }}
                className="text-blue-500"
              >
                Anime List
              </span>
              <span
                onClick={() => {
                  setPage("mangalist");
                }}
              >
                Manga List
              </span>
              <span onClick={() => setPage("favorites")}>Favorites</span>
              <span onClick={() => setPage("stats")}>Stats</span>
              <span onClick={() => setPage("social")}>Social</span>
              <span onClick={() => setPage("reviews")}>Reviews</span>
              <span onClick={() => setPage("submissions")}>Submissions</span>
            </div>
          </div>

          {/* ANIME LIST - BODY */}
          <div id="profile-body" className="h-full w-full flex flex-row border-t-1 border-gray-300 bg-gray-200">
            {/* WORKING */}
            <div className="h-auto w-full flex justify-center border-2 border-red-600">
                
                {/* LEFT SIDE - OVERVIEW */}
                <div className="h-full w-1/3">

                  {/* ACTIVITY HISTORY */}
                  <div className="h-auto w-auto">
                    <div className="h-15 w-full flex items-center font-semibold text-xl text-gray-600">Activity History</div>
                    <div className="h-65 w-full flex flex-wrap p-5 bg-white rounded-lg shadow-lg">
                      <div className="h-5 w-5 m-1 bg-blue-400 rounded"></div>
                      <div className="h-5 w-5 m-1 bg-blue-400 rounded"></div>
                    </div>
                  </div>

                  {/* GENRE OVERVIEW */}
                  <div className="h-auto w-auto mt-5">
                    <div className="h-15 w-full flex items-center font-semibold text-xl text-gray-600">Genre Overview</div>
                    <div className="h-24 w-full flex flex-col items-center bg-white rounded-lg shadow-lg">
                      <div className="h-1/3 w-130 mt-4 flex justify-between items-center">
                        <div className="h-full w-30 flex justify-center items-center text-white text-xl font-light bg-green-400 rounded-lg">Comedy</div>
                        <div className="h-full w-30 flex justify-center items-center text-white text-xl font-light bg-blue-400 rounded-lg">Action</div>
                        <div className="h-full w-30 flex justify-center items-center text-white text-xl font-light bg-purple-400 rounded-lg">Supernatural</div>
                        <div className="h-full w-30 flex justify-center items-center text-white text-xl font-light bg-pink-400 rounded-lg">Drama</div>
                      </div>
                      <div className="h-1/3 w-130 flex justify-between items-center">
                        <div className="h-full w-30 flex justify-center items-center text-gray-400 text-sm font-light"><span className="pr-1 text-lg text-green-400">51</span>Entries</div>
                        <div className="h-full w-30 flex justify-center items-center text-gray-400 text-sm font-light"><span className="pr-1 text-lg text-blue-400">46</span>Entries</div>
                        <div className="h-full w-30 flex justify-center items-center text-gray-400 text-sm font-light"><span className="pr-1 text-lg text-purple-400">38</span>Entries</div>
                        <div className="h-full w-30 flex justify-center items-center text-gray-400 text-sm font-light"><span className="pr-1 text-lg text-pink-400">33</span>Entries</div>
                      </div>
                      <div className="h-1/3 w-full flex items-end">
                        <div className="h-3 w-4/12 bg-green-400 rounded-bl-sm"></div>
                        <div className="h-3 w-2/12 bg-blue-400"></div>
                        <div className="h-3 w-2/12 bg-purple-400"></div>
                        <div className="h-3 w-2/12 bg-pink-400"></div>
                        <div className="h-3 w-1/12 bg-red-500"></div>
                        <div className="h-3 w-1/12 bg-orange-400"></div>
                      </div>
                    </div>
                  </div>

                  {/* ANIME SHOWS */}
                  <div className="h-auto w-auto mt-5">
                    <div className="h-15 w-full flex items-center font-semibold text-xl text-gray-600">Anime</div>
                    <div className="min-h-100 w-full flex justify-around flex-wrap p-5 bg-white rounded-lg shadow-lg">
                      <div className="h-40 w-30 bg-center bg-cover rounded" style={{backgroundImage: `url(${naruto})`}}></div>
                      <div className="h-40 w-30 bg-center bg-cover rounded" style={{backgroundImage: `url(${csm})`}}></div>
                      <div className="h-40 w-30 bg-center bg-cover rounded" style={{backgroundImage: `url(${mha})`}}></div>
                      <div className="h-40 w-30 bg-center bg-cover rounded" style={{backgroundImage: `url(${bleach})`}}></div>
                      <div className="h-40 w-30 bg-center bg-cover rounded" style={{backgroundImage: `url(${demon_slayer})`}}></div>
                    </div>
                  </div>

                  {/* CHARACTERS */}
                  <div className="h-auto w-auto mt-5">
                    <div className="h-15 w-full flex items-center font-semibold text-xl text-gray-600">Anime</div>
                    <div className="min-h-100 w-full flex justify-around flex-wrap p-5 bg-white rounded-lg shadow-lg">
                      <div className="h-40 w-30 bg-center bg-cover rounded" style={{backgroundImage: `url(${denji})`}}></div>
                      <div className="h-40 w-30 bg-center bg-cover rounded" style={{backgroundImage: `url(${ichigo})`}}></div>
                      <div className="h-40 w-30 bg-center bg-cover rounded" style={{backgroundImage: `url(${itadori})`}}></div>
                      <div className="h-40 w-30 bg-center bg-cover rounded" style={{backgroundImage: `url(${zoro})`}}></div>
                      <div className="h-40 w-30 bg-center bg-cover rounded" style={{backgroundImage: `url(${giyuu})`}}></div>
                    </div>
                  </div>

                </div>
  

                {/* RIGHT SIDE - OVERVIEW */}
                <div className="h-full w-1/2 flex flex-col justify-start items-center border-2 border-red-600">

                  {/* TOTAL ANIME */}
                  <div className="h-70 w-215 mt-10">
                    <div className="h-55 w-full flex flex-col items-center bg-white rounded-lg shadow-lg">
                      <div className="h-55 w-full mt-4 flex justify-between items-center">
                          <div className="h-full w-1/3 flex flex-col justify-center items-center">
                            <div className="font-semibold text-xl text-blue-400">73</div>
                            <div className="font-light text-lg text-gray-500">Total Anime</div>
                          </div>
                          <div className="h-full w-1/3 flex flex-col justify-center items-center">
                            <div className="font-semibold text-xl text-blue-400">28.4</div>
                            <div className="font-light text-lg text-gray-500">Days Watched</div>
                          </div>
                          <div className="h-full w-1/3 flex flex-col justify-center items-center">
                            <div className="font-semibold text-xl text-blue-400">78.2</div>
                            <div className="font-light text-lg text-gray-500">Mean Score</div>
                          </div>
                      </div>

                      <div className="h-1/3 w-full flex flex-wrap bg-gray-300">
                        <div className="h-12 w-full flex justify-around items-center text-md text-gray-600 font-light">
                          <div className="h-full w-1/3 flex justify-center items-center">10</div>
                          <div className="h-full w-1/3 flex justify-center items-center">30</div>
                          <div className="h-full w-1/3 flex justify-center items-center">50</div>
                        </div>
                        <div className="h-3 w-1/2 bg-blue-400 rounded-bl-sm rounded-r-sm"></div>
                        <div className="h-3 w-1/2 bg-gray-400 rounded-br-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* TOTAL MANGA */}
                  <div className="h-70 w-215">
                    <div className="h-55 w-full flex flex-col items-center bg-white rounded-lg shadow-lg">
                      <div className="h-55 w-full mt-4 flex justify-between items-center">
                          <div className="h-full w-1/3 flex flex-col justify-center items-center">
                            <div className="font-semibold text-xl text-blue-400">12</div>
                            <div className="font-light text-lg text-gray-500">Total Manga</div>
                          </div>
                          <div className="h-full w-1/3 flex flex-col justify-center items-center">
                            <div className="font-semibold text-xl text-blue-400">674</div>
                            <div className="font-light text-lg text-gray-500">Chapters Read</div>
                          </div>
                          <div className="h-full w-1/3 flex flex-col justify-center items-center">
                            <div className="font-semibold text-xl text-blue-400">85.0</div>
                            <div className="font-light text-lg text-gray-500">Mean Score</div>
                          </div>
                      </div>

                      <div className="h-1/3 w-full flex flex-wrap bg-gray-300">
                        <div className="h-12 w-full flex justify-around items-center text-md text-gray-600 font-light">
                          <div className="h-full w-1/3 flex justify-center items-center">100</div>
                          <div className="h-full w-1/3 flex justify-center items-center">500</div>
                          <div className="h-full w-1/3 flex justify-center items-center">100</div>
                        </div>
                        <div className="h-3 w-2/3 bg-blue-400 rounded-bl-sm rounded-r-sm"></div>
                        <div className="h-3 w-1/3 bg-gray-400 rounded-br-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* ACTIVITY */}
                  <div className="h-35 w-215">
                    <div className="h-15 w-full flex justify-between items-center font-semibold text-xl text-gray-600">
                      <div>Activity</div>
                      <div className="text-md font-light mr-2">Filter<i className='bx bx-chevron-down flex justify-center items-center'></i></div>
                    </div>
                    <form className="h-10 w-full flex flex-col items-center bg-white rounded-lg shadow-lg">
                      <input className="h-full w-full pl-4" type="text" placeholder="Write a status..." />
                    </form>
                  </div>

                  {/* WATCH HISTORY */}
                  <div className="h-auto w-full flex flex-col items-center border-2 border-red-600">
                    <div className="h-25 w-215 my-3 flex border-2 bg-white border-black rounded-lg shadow-md">
                      <div className="h-full w-20 bg-center bg-cover border-2 border-red-600 rounded-l-lg" style={{backgroundImage: `url(${naruto})`}}></div>
                      <div className="h-full w-10/12 flex justify-center items-center border-2 border-red-600">
                        <div className="h-1/2 w-full flex items-center pl-4 font-light text-lg text-gray-500 border-2 border-red-600">Watched Episode 1 of<span className="pl-1 font-light text-lg text-blue-400">Naruto</span></div>
                      </div>
                      <div className="h-full w-2/12 flex flex-col items-center justify-center border-2 border-red-600">
                        <div className="h-1/2 w-full flex justify-center items-center font-normal text-lg text-gray-600 border-2 border-red-600">2 Days Ago</div>
                        <div className="h-1/2 w-8/12 flex justify-end items-center border-2 border-red-600">
                          <i className='bx bxs-chat' ></i>
                          <i className='bx bxs-heart' ></i>
                        </div>
                      </div>
                    </div>
                  </div>



                </div>

            </div>



          </div>
        </div>
      </div>

      {/* FOOTER DIV */}
      {/* AT THE BOTTOM OF THE PAGE */}
      <div>
        {/* FOOTER */}
        <div className="h-90 w-full flex flex-row justify-center items-center bg-gray-900 font-light text-xl text-gray-200">
          <div className="h-1/3 w-4/12 flex justify-center">
            <div className="flex flex-col justify-start items-center">
              <div className="w-full font-normal text-3xl text-blue-400 whitespace-nowrap">
                Site Theme
              </div>
              <div className="w-full flex justify-start text-4xl">
                <i className="bx bx-sun p-2"></i>
                <i className="bx bxs-sun p-2"></i>
                <i className="bx bx-moon p-2"></i>
                <i className="bx bxs-moon p-2"></i>
              </div>
            </div>
          </div>
          {/* COL 1 */}
          <div className="h-2/3 w-2/12 flex flex-col">
            <span className="p-3">Logout</span>
            <span className="p-3">Donate</span>
            <span className="p-3">Anilist.co</span>
            <span className="p-3">AniChart.net</span>
          </div>
          {/* COL 2 */}
          <div className="h-2/3 w-2/12 flex flex-col">
            <span className="p-3">Apps</span>
            <span className="p-3">Site Stats</span>
            <span className="p-3">Recommendations</span>
            <span className="p-3">API</span>
          </div>
          {/* COL 3 */}
          <div className="h-2/3 w-2/12 flex flex-col">
            <span className="p-3">Discord</span>
            <span className="p-3">Twitter</span>
            <span className="p-3">Bluesky</span>
            <span className="p-3">Facebook</span>
            <span className="p-3">Github</span>
          </div>
          {/* COL 4 */}
          <div className="h-2/3 w-2/12 flex flex-col">
            <span className="p-3">Add Data</span>
            <span className="p-3">Moderators</span>
            <span className="p-3">Contact</span>
            <span className="p-3">Terms & Privacy</span>
            <span className="p-3">Site Map</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
