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
import GlobalNav from "../components/Shell/GlobalNav";
import Footer from "../components/Shell/Footer";
import BannerAndMidNav from "../components/Shell/BannerAndMidNav";

function Overview() {
  const { page, setPage } = useContext(MyContext);

  return (
    <>
      {/* HEADER, NAV BAR, BANNER/PFP, MID NAVBAR */}
      <div className="relative">
        <GlobalNav />

        <div id="anime-list-page" className="h-auto w-screen">
          <BannerAndMidNav />

          {/* ANIME LIST - BODY */}
          <div id="profile-body" className="h-full w-full flex flex-row border-t-1 border-gray-300 bg-gray-200">
            {/* WORKING */}
            <div className="h-auto w-full flex justify-center">
                
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
                  <div className="h-auto w-auto mt-5 mb-40">
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
                <div className="h-full w-1/2 flex flex-col justify-start items-center">

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
                  <div className="h-auto w-full flex flex-col items-center">
                    {/* 1 WATCH HISTORY */}
                    <div className="h-25 w-215 my-3 flex bg-white rounded-lg shadow-md">
                      <div className="h-full w-20 bg-center bg-cover rounded-l-lg" style={{backgroundImage: `url(${naruto})`}}></div>
                      <div className="h-full w-10/12 flex justify-center items-center">
                        <div className="h-1/2 w-full flex items-center pl-4 font-light text-lg text-gray-500">Watched Episode 1 of<span className="pl-1 font-light text-lg text-blue-400">Naruto</span></div>
                      </div>
                      <div className="h-full w-2/12 flex flex-col items-center justify-center">
                        <div className="h-1/2 w-full flex justify-center items-center font-normal text-lg text-gray-600">2 Days Ago</div>
                        <div className="h-1/2 w-8/12 flex justify-end items-center">
                          <i className='bx bxs-chat h-auto w-auto mr-1 text-blue-300 text-2xl' ></i>
                          <i className='bx bxs-heart h-auto w-auto text-blue-300 text-2xl' ></i>
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

export default Overview;
