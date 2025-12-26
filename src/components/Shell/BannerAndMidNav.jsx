import { banner, rukia,  } from "../../assets/animes";
import { Link } from "react-router-dom";

function BannerAndMidNav() {
  const linkData = [
    {id: "1", to: "/overview", title: "Overview"},
    {id: "2", to: "/", title: "Anime List"},
    {id: "3", to: "/mangalist", title: "Manga List"},
    {id: "4", to: "/favorites", title: "Favorites"},
    {id: "5", to: "/stats", title: "Stats"},
    {id: "6", to: "/social", title: "Social"},
    {id: "7", to: "/reviews", title: "Reviews"},
    {id: "8", to: "/submissions", title: "Submissions"},
  ]
  
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
          {linkData.map((link, index) => {
            return <Link key={index} to={link.to} className={`hover:text-blue-500 active:text-blue-700`}>{link.title}</Link>
          })}
        </div>
      </div>
    </>
  );
}

export default BannerAndMidNav;
