import Footer from "../components/Shell/Footer";
import GlobalNav from "../components/Shell/GlobalNav";
import BannerAndMidNav from "../components/Shell/BannerAndMidNav";
import ListSelectMenu from "../components/lists/sideBar/ListSelectMenu";
import ListTitles from "../components/lists/sideBar/ListTitles";
import StatsBlock from "../components/overviewPage/StatsBlock";

function Stats() {
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
              {/* LISTS CONTAINER */}
              <ListSelectMenu height={"70"} listName={"Anime Stats"}>
                <ListTitles title={"Overview"} />
                <ListTitles title={"Genres"} />
                <ListTitles title={"Tags"} />
                <ListTitles title={"Voice Actors"} />
                <ListTitles title={"Studios"} />
                <ListTitles title={"Staff"} />
              </ListSelectMenu>
              <ListSelectMenu height={"50"} listName={"Manga Stats"}>
                <ListTitles title={"Overview"} />
                <ListTitles title={"Genres"} />
                <ListTitles title={"Tags"} />
                <ListTitles title={"Staff"} />
              </ListSelectMenu>
            </div>

            <div className="h-auto w-8/12">
              <StatsBlock />


              {/* +========== BEGIN */}
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

              {/* =================== */}

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

      <Footer />
    </>
  );
}

export default Stats;
