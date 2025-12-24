import { banner, rukia,  } from "../../assets/animes";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

function BannerAndMidNav() {
    const { page, setPage } = useContext(MyContext);
    
  return (
    <>
      {/* BANNER & MID NAV BAR */}
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
          <span onClick={() => setPage("animelist")} className="text-blue-500">
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
      {/* =================== End of BANNER & MID NAV BAR */}
    </>
  );
}

export default BannerAndMidNav;
