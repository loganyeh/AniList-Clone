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
import TotalBlock from "../components/overviewPage/TotalBlock";
import FavoriteBlock from "../components/overviewPage/FavoriteBlock";
import FavoritePoster from "../components/overviewPage/FavoritePoster";
import ActivityBlock from "../components/overviewPage/ActivityBlock";
import GenreBlock from "../components/overviewPage/GenreBlock";

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
          <div
            id="profile-body"
            className="h-full w-full flex flex-row border-t-1 border-gray-300 bg-gray-200"
          >
            {/* WORKING */}
            <div className="h-auto w-full flex justify-center">
              {/* LEFT SIDE - OVERVIEW */}
              <div className="h-full w-1/3 pb-20">
                {/* ACTIVITY HISTORY */}
                <ActivityBlock />

                {/* GENRE OVERVIEW */}
                <GenreBlock />

                <FavoriteBlock height={"auto"} title={"Anime"}>
                  <FavoritePoster img={naruto} />
                  <FavoritePoster img={csm} />
                  <FavoritePoster img={mha} />
                  <FavoritePoster img={bleach} />
                  <FavoritePoster img={demon_slayer} />
                </FavoriteBlock>

                <FavoriteBlock height={"auto"} title={"Characters"}>
                  <FavoritePoster img={denji} />
                  <FavoritePoster img={ichigo} />
                  <FavoritePoster img={itadori} />
                  <FavoritePoster img={zoro} />
                  <FavoritePoster img={giyuu} />
                </FavoriteBlock>
              </div>

              {/* RIGHT SIDE - OVERVIEW */}
              <div className="h-full w-1/2 flex flex-col justify-start items-center">
                <TotalBlock watchedTitle={"Total Anime"} totalWatched={"73"} timeTitle={"Days Watched"} time={"28.4"} mean={"78.4"} firstNum={"10"} secondNum={"20"} thirdNum={"30"}  />
                <TotalBlock watchedTitle={"Total Manga"} totalWatched={"12"} timeTitle={"Chapters Read"} time={"674"} mean={"85.0"} firstNum={"100"} secondNum={"500"} thirdNum={"1000"}  />

                {/* ACTIVITY */}
                <div className="h-35 w-215">
                  <div className="h-15 w-full flex justify-between items-center font-semibold text-xl text-gray-600">
                    <div>Activity</div>
                    <div className="text-md font-light mr-2">
                      Filter
                      <i className="bx bx-chevron-down flex justify-center items-center"></i>
                    </div>
                  </div>
                  <form className="h-10 w-full flex flex-col items-center bg-white rounded-lg shadow-lg">
                    <input
                      className="h-full w-full pl-4"
                      type="text"
                      placeholder="Write a status..."
                    />
                  </form>
                </div>

                {/* WATCH HISTORY */}
                <div className="h-auto w-full flex flex-col items-center">
                  {/* 1 WATCH HISTORY */}
                  <div className="h-25 w-215 my-3 flex bg-white rounded-lg shadow-md">
                    <div
                      className="h-full w-20 bg-center bg-cover rounded-l-lg"
                      style={{ backgroundImage: `url(${naruto})` }}
                    ></div>
                    <div className="h-full w-10/12 flex justify-center items-center">
                      <div className="h-1/2 w-full flex items-center pl-4 font-light text-lg text-gray-500">
                        Watched Episode 1 of
                        <span className="pl-1 font-light text-lg text-blue-400">
                          Naruto
                        </span>
                      </div>
                    </div>
                    <div className="h-full w-2/12 flex flex-col items-center justify-center">
                      <div className="h-1/2 w-full flex justify-center items-center font-normal text-lg text-gray-600">
                        2 Days Ago
                      </div>
                      <div className="h-1/2 w-8/12 flex justify-end items-center">
                        <i className="bx bxs-chat h-auto w-auto mr-1 text-blue-300 text-2xl"></i>
                        <i className="bx bxs-heart h-auto w-auto text-blue-300 text-2xl"></i>
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

export default Overview;
