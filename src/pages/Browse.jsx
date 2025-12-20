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
    haikyu,
    onepiece,
  } from "../assets/animes";
  import { useContext } from "react";
  import { MyContext } from "../context/MyContext";
  
  function Browse() {
    const { page, setPage } = useContext(MyContext);
  
    return (
      <>
        {/* HEADER, NAV BAR, BANNER/PFP, MID NAVBAR */}
        <div className="flex flex-col">
          {/* NAV BAR */}
          <div className="h-24 w-full flex bg-gray-900 opacity-100">
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
          {/* END OF TOP NAV BAR */}
  
          <div id="anime-list-page" className="h-auto w-screen flex justify-center items-center bg-gray-200">

            {/* ANIME LIST - BODY */}
            <div id="profile-body" className="h-auto w-10/12 flex flex-col border-2 border-red-600">
              {/* <div className="h-130 w-full flex justify-center items-start pt-20 font-light text-gray-800 text-3xl border-2 border-black"> No reviews yet ｡ﾟヽ(ﾟ´Д｀)ﾉﾟ｡</div> */}

                {/* SEARCH FILTERS */}
                <div className="h-30 w-full mt-10 mb-15 flex justify-between border-blue-600 border-2">
                    <div className="h-full w-10/12 flex justify-around">

                        {/* SEARCH */}
                        <div className="h-30 w-70">
                            <div className="h-1/2 w-full flex justify-start items-center pl-2 text-xl font-semibold text-gray-700">Search</div>
                            <div className="h-14 w-11/12 flex justify-between ml-4 bg-white rounded-lg shadow-lg">
                                    <div className="h-full w-15 flex justify-center items-center">
                                        <i className='bx bx-search text-2xl text-gray-400'></i>
                                    </div>
                                    <input type="text" className="h-full w-47 text-xl text-gray-600"/>
                            </div>
                        </div>
                        {/* Genres */}
                        <div className="h-30 w-70">
                            <div className="h-1/2 w-full flex justify-start items-center pl-2 text-xl font-semibold text-gray-700">Genres</div>
                            <div className="h-14 w-11/12 flex justify-between ml-4 bg-white rounded-lg shadow-lg">
                                    <input type="text" className="h-full w-52 ml-3 pl-3 text-xl" placeholder="Any" />
                                    <div className="h-full w-10 flex justify-center items-center"><i className='bx bx-chevron-down pr-4 text-3xl text-gray-400'></i></div>
                            </div>
                        </div>
                        {/* Year */}
                        <div className="h-30 w-70">
                            <div className="h-1/2 w-full flex justify-start items-center pl-2 text-xl font-semibold text-gray-700">Year</div>
                            <div className="h-14 w-11/12 flex justify-between ml-4 bg-white rounded-lg shadow-lg">
                                    <input type="text" className="h-full w-52 ml-3 pl-3 text-xl" placeholder="Any" />
                                    <div className="h-full w-10 flex justify-center items-center"><i className='bx bx-chevron-down pr-4 text-3xl text-gray-400'></i></div>
                            </div>
                        </div>
                        {/* Season */}
                        <div className="h-30 w-70">
                            <div className="h-1/2 w-full flex justify-start items-center pl-2 text-xl font-semibold text-gray-700">Season</div>
                            <div className="h-14 w-11/12 flex justify-between ml-4 bg-white rounded-lg shadow-lg">
                                    <input type="text" className="h-full w-52 ml-3 pl-3 text-xl" placeholder="Any" />
                                    <div className="h-full w-10 flex justify-center items-center"><i className='bx bx-chevron-down pr-4 text-3xl text-gray-400'></i></div>
                            </div>
                        </div>
                        {/* Format */}
                        <div className="h-30 w-70">
                            <div className="h-1/2 w-full flex justify-start items-center pl-2 text-xl font-semibold text-gray-700">Format</div>
                            <div className="h-14 w-11/12 flex justify-between ml-4 bg-white rounded-lg shadow-lg">
                                    <input type="text" className="h-full w-52 ml-3 pl-3 text-xl" placeholder="Any" />
                                    <div className="h-full w-10 flex justify-center items-center"><i className='bx bx-chevron-down pr-4 text-3xl text-gray-400'></i></div>
                            </div>
                        </div>
                        

                    </div>
                    <div className="h-full w-1/12 flex justify-end items-end">
                        <div className="h-12 w-12 flex justify-center items-center mb-2 bg-white rounded-lg shadow-md">
                            <i className='bx bx-slider flex justify-center items-center text-3xl text-gray-400'></i>
                        </div>
                    </div>
                </div>

                {/* TRENDING NOW BLOCK */}
                <div className="h-auto w-full mb-15 border-red-600 border-2">
                    <div className="h-17 w-full flex justify-between items-center">
                        <div className="h-full w-1/2 flex justify-start items-center font-semibold text-gray-700 text-xl">TRENDING NOW</div>
                        <div className="h-full w-1/2 flex justify-end items-center font-semibold text-gray-500 text-md">View All</div>
                    </div>
                    <div className="h-auto w-full flex flex-wrap justify-around items-center">

                        <div className="h-full w-63 m-2">
                            <div className="h-80 w-full bg-center bg-cover rounded-xl shadow-md" style={{backgroundImage: `url(${demon_slayer})`}}></div>
                            <div className="h-10 w-full flex items-center pl-2 text-gray-600 font-semibold text-lg">Demon Slayer</div>
                        </div>
                        <div className="h-full w-63 m-2">
                            <div className="h-80 w-full bg-center bg-cover rounded-xl shadow-md" style={{backgroundImage: `url(${jjk})`}}></div>
                            <div className="h-10 w-full flex items-center pl-2 text-gray-600 font-semibold text-lg">Jujutsu Kaisen</div>
                        </div>
                        <div className="h-full w-63 m-2">
                            <div className="h-80 w-full bg-center bg-cover rounded-xl shadow-md" style={{backgroundImage: `url(${mha})`}}></div>
                            <div className="h-10 w-full flex items-center pl-2 text-gray-600 font-semibold text-lg">My Hero Acadamia</div>
                        </div>
                        <div className="h-full w-63 m-2">
                            <div className="h-80 w-full bg-center bg-cover rounded-xl shadow-md" style={{backgroundImage: `url(${csm})`}}></div>
                            <div className="h-10 w-full flex items-center pl-2 text-gray-600 font-semibold text-lg">Chainsaw Man</div>
                        </div>
                        <div className="h-full w-63 m-2">
                            <div className="h-80 w-full bg-center bg-cover rounded-xl shadow-md" style={{backgroundImage: `url(${naruto})`}}></div>
                            <div className="h-10 w-full flex items-center pl-2 text-gray-600 font-semibold text-lg">Naruto</div>
                        </div>
                       
                        
                    </div>
                </div>

                {/* POPULAR THIS SEASON BLOCK */}
                <div className="h-auto w-full mb-15 border-red-600 border-2">
                    <div className="h-17 w-full flex justify-between items-center">
                        <div className="h-full w-1/2 flex justify-start items-center font-semibold text-gray-700 text-xl">POPULAR THIS SEASON</div>
                        <div className="h-full w-1/2 flex justify-end items-center font-semibold text-gray-500 text-md">View All</div>
                    </div>
                    <div className="h-auto w-full flex flex-wrap justify-around items-center">

                        <div className="h-full w-63 m-2">
                            <div className="h-80 w-full bg-center bg-cover rounded-xl shadow-md" style={{backgroundImage: `url(${haikyu})`}}></div>
                            <div className="h-10 w-full flex items-center pl-2 text-gray-600 font-semibold text-lg">Haikyu</div>
                        </div>
                        <div className="h-full w-63 m-2">
                            <div className="h-80 w-full bg-center bg-cover rounded-xl shadow-md" style={{backgroundImage: `url(${jjk})`}}></div>
                            <div className="h-10 w-full flex items-center pl-2 text-gray-600 font-semibold text-lg">Jujutsu Kaisen</div>
                        </div>
                        <div className="h-full w-63 m-2">
                            <div className="h-80 w-full bg-center bg-cover rounded-xl shadow-md" style={{backgroundImage: `url(${mha})`}}></div>
                            <div className="h-10 w-full flex items-center pl-2 text-gray-600 font-semibold text-lg">My Hero Acadamia</div>
                        </div>
                        <div className="h-full w-63 m-2">
                            <div className="h-80 w-full bg-center bg-cover rounded-xl shadow-md" style={{backgroundImage: `url(${csm})`}}></div>
                            <div className="h-10 w-full flex items-center pl-2 text-gray-600 font-semibold text-lg">Chainsaw Man</div>
                        </div>
                        <div className="h-full w-63 m-2">
                            <div className="h-80 w-full bg-center bg-cover rounded-xl shadow-md" style={{backgroundImage: `url(${naruto})`}}></div>
                            <div className="h-10 w-full flex items-center pl-2 text-gray-600 font-semibold text-lg">Naruto</div>
                        </div>
                       
                        
                    </div>
                </div>

                {/* UPCOMING NEXT SEASON BLOCK */}
                <div className="h-auto w-full mb-15 border-red-600 border-2">
                    <div className="h-17 w-full flex justify-between items-center">
                        <div className="h-full w-1/2 flex justify-start items-center font-semibold text-gray-700 text-xl">UPCOMING NEXT SEASON</div>
                        <div className="h-full w-1/2 flex justify-end items-center font-semibold text-gray-500 text-md">View All</div>
                    </div>
                    <div className="h-auto w-full flex flex-wrap justify-around items-center">

                        <div className="h-full w-63 m-2">
                            <div className="h-80 w-full bg-center bg-cover rounded-xl shadow-md" style={{backgroundImage: `url(${haikyu})`}}></div>
                            <div className="h-10 w-full flex items-center pl-2 text-gray-600 font-semibold text-lg">Haikyu</div>
                        </div>
                        <div className="h-full w-63 m-2">
                            <div className="h-80 w-full bg-center bg-cover rounded-xl shadow-md" style={{backgroundImage: `url(${jjk})`}}></div>
                            <div className="h-10 w-full flex items-center pl-2 text-gray-600 font-semibold text-lg">Jujutsu Kaisen</div>
                        </div>
                        <div className="h-full w-63 m-2">
                            <div className="h-80 w-full bg-center bg-cover rounded-xl shadow-md" style={{backgroundImage: `url(${mha})`}}></div>
                            <div className="h-10 w-full flex items-center pl-2 text-gray-600 font-semibold text-lg">My Hero Acadamia</div>
                        </div>
                        <div className="h-full w-63 m-2">
                            <div className="h-80 w-full bg-center bg-cover rounded-xl shadow-md" style={{backgroundImage: `url(${csm})`}}></div>
                            <div className="h-10 w-full flex items-center pl-2 text-gray-600 font-semibold text-lg">Chainsaw Man</div>
                        </div>
                        <div className="h-full w-63 m-2">
                            <div className="h-80 w-full bg-center bg-cover rounded-xl shadow-md" style={{backgroundImage: `url(${naruto})`}}></div>
                            <div className="h-10 w-full flex items-center pl-2 text-gray-600 font-semibold text-lg">Naruto</div>
                        </div>
                       
                        
                    </div>
                </div>

                {/* ALL TIME POPULAR BLOCK */}
                <div className="h-auto w-full mb-15 border-red-600 border-2">
                    <div className="h-17 w-full flex justify-between items-center">
                        <div className="h-full w-1/2 flex justify-start items-center font-semibold text-gray-700 text-xl">ALL TIME POPULAR</div>
                        <div className="h-full w-1/2 flex justify-end items-center font-semibold text-gray-500 text-md">View All</div>
                    </div>
                    <div className="h-auto w-full flex flex-wrap justify-around items-center">

                        <div className="h-full w-63 m-2">
                            <div className="h-80 w-full bg-center bg-cover rounded-xl shadow-md" style={{backgroundImage: `url(${haikyu})`}}></div>
                            <div className="h-10 w-full flex items-center pl-2 text-gray-600 font-semibold text-lg">Haikyu</div>
                        </div>
                        <div className="h-full w-63 m-2">
                            <div className="h-80 w-full bg-center bg-cover rounded-xl shadow-md" style={{backgroundImage: `url(${naruto})`}}></div>
                            <div className="h-10 w-full flex items-center pl-2 text-gray-600 font-semibold text-lg">Naruto</div>
                        </div>
                        <div className="h-full w-63 m-2">
                            <div className="h-80 w-full bg-center bg-cover rounded-xl shadow-md" style={{backgroundImage: `url(${onepiece})`}}></div>
                            <div className="h-10 w-full flex items-center pl-2 text-gray-600 font-semibold text-lg">One Piece</div>
                        </div>
                        <div className="h-full w-63 m-2">
                            <div className="h-80 w-full bg-center bg-cover rounded-xl shadow-md" style={{backgroundImage: `url(${csm})`}}></div>
                            <div className="h-10 w-full flex items-center pl-2 text-gray-600 font-semibold text-lg">Chainsaw Man</div>
                        </div>
                        <div className="h-full w-63 m-2">
                            <div className="h-80 w-full bg-center bg-cover rounded-xl shadow-md" style={{backgroundImage: `url(${naruto})`}}></div>
                            <div className="h-10 w-full flex items-center pl-2 text-gray-600 font-semibold text-lg">Naruto</div>
                        </div>
                       
                        
                    </div>
                </div>

                {/* TOP 100 ANIMES */}
                <div className="h-auto w-full mb-15 border-red-600 border-2">

                    <div className="h-17 w-full flex justify-between items-center">
                        <div className="h-full w-1/2 flex justify-start items-center font-semibold text-gray-700 text-xl">TOP 100 ANIME</div>
                        <div className="h-full w-1/2 flex justify-end items-center font-semibold text-gray-500 text-md">View All</div>
                    </div>


                    {/* TOP 1 ANIME */}
                    <div className="h-auto w-full mb-8 flex flex-wrap justify-around items-center">
                        <div className="h-30 w-full flex border-2 border-black">
                            <div className="h-full w-1/12 flex justify-center items-center font-semibold text-gray-500 text-4xl border-2 border-red-600">#1</div>
                            <div className="h-full w-11/12 flex bg-white border-2 border-red-600 rounded-lg shadow-md">
                                <div className="h-full w-1/12 border-2 border-red-600"></div>
                                <div className="h-full w-5/12 border-2 border-red-600"></div>
                                <div className="h-full w-6/12 border-2 border-red-600"></div>

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
  
  export default Browse;
  