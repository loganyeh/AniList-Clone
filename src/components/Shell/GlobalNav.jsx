import { rukia, logo } from "../../assets/animes";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

function GlobalNav() {
  const { page, setPage } = useContext(MyContext);

  return (
    <>
      {/* ================================= */}
      {/* GLOBAL NAV */}
      {/* ================================= */}
      <div className="absolute h-24 w-full flex bg-gray-900 opacity-100">
        {/* LEFT SIDE LOGO */}
        <div className="h-full w-1/4 flex justify-center items-center">
          <div
            className="h-20 w-20 bg-center bg-cover"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
        </div>
        {/* MIDDLE NAV ELEMENTS */}
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
        {/* RIGHT SEARCH & PROFILE */}
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
      {/* ============================== End of GLOBAL NAV */}
    </>
  );
}

export default GlobalNav;
