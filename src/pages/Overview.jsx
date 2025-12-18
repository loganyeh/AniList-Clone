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
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

function Overview() {
  const { page, setPage, selectedPage, setSelectedPage } = useContext(MyContext);
    const isBlue = selectedPage === "overview";

    function handleBlue(){
        setSelectedPage("animelist");
    }

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
              <div>Home</div>
              <div>Profile</div>
              <div>Anime List</div>
              <div>Manga List</div>
              <div>Browse</div>
              <div>Forum</div>
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
              <span onClick={() => {setPage("overview")}}>Overview</span>
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
          <div
            id="profile-body"
            className="h-full w-full flex flex-row border-t-1 border-gray-300 bg-gray-200"
          >
            <div className="h-50 w-full border-2 border-red-600"></div>
          </div>
        </div>
      </div>

      {/* FOOTER DIV */}
      {/* AT THE BOTTOM OF THE PAGE */}
      <div>
        {/* FOOTER */}
        <div className="h-80 w-full flex flex-row border-2 border-red-600 bg-gray-900 text-gray-200">
          <div className="h-full w-1/5 border-2 border-red-600">
            <div>Site Theme</div>
          </div>
          <div className="h-full w-1/5 border-2 border-red-600"></div>
          <div className="h-full w-1/5 border-2 border-red-600"></div>
          <div className="h-full w-1/5 border-2 border-red-600"></div>
          <div className="h-full w-1/5 border-2 border-red-600"></div>
        </div>
      </div>
    </>
  );
}

export default Overview;
