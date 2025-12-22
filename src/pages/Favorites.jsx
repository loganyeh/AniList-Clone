import { rukia, banner, bleach, naruto, logo, csm } from "../assets/animes";
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
import Footer from "../components/Shell/Footer";
import GlobalNav from "../components/Shell/GlobalNav";
import BannerAndMidNav from "../components/Shell/BannerAndMidNav";

function Favorites() {
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
            className="h-auto w-full flex flex-col items-center border-t-1 border-gray-300 bg-gray-200"
          >
            {/* ANIME FAVORITES SECTION */}
            <div className="h-auto w-10/12 mt-10 mb-15">
              <div className="h-1/5 w-full flex justify-between items-center">
                <span className="font-semibold text-gray-800 text-lg">
                  Anime
                </span>
                <div className="h-10 w-26 flex justify-center items-center bg-blue-500 font-semibold text-white text-lg rounded">
                  Reorder
                </div>
              </div>
              <div className="h-4/5 w-full mt-4 flex justify-start flex-wrap bg-white rounded">
                <div
                  className="h-50 w-40 flex flex-row justify-start m-5 bg-center bg-cover rounded-xl"
                  style={{ backgroundImage: `url(${naruto})` }}
                ></div>
                <div
                  className="h-50 w-40 flex flex-row justify-start m-5 bg-center bg-cover rounded-xl"
                  style={{ backgroundImage: `url(${csm})` }}
                ></div>
              </div>
            </div>

            {/* CHARACTERS FAVORITES SECTION */}
            <div className="h-auto w-10/12 mb-20">
              <div className="h-1/5 w-full flex justify-between items-center">
                <span className="font-semibold text-gray-800 text-lg">
                  Characters
                </span>
                <div className="h-10 w-26 flex justify-center items-center bg-blue-500 font-semibold text-white text-lg rounded">
                  Reorder
                </div>
              </div>
              <div className="h-4/5 w-full mt-4 flex justify-start flex-wrap bg-white rounded">
                <div
                  className="h-50 w-40 flex flex-row justify-start m-5 bg-center bg-cover rounded-xl"
                  style={{ backgroundImage: `url(${denji})` }}
                ></div>
                <div
                  className="h-50 w-40 flex flex-row justify-start m-5 bg-center bg-cover rounded-xl"
                  style={{ backgroundImage: `url(${zoro})` }}
                ></div>
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

export default Favorites;
