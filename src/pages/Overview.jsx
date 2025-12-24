import {
  bleach,
  csm,
  jjk,
  mha,
  naruto,
  demon_slayer,
  haikyu,
  onepiece,
  frieren,
  hxh
} from "../assets/animes";
import {
  denji,
  giyuu,
  ichigo,
  itadori,
  okarun,
  zoro,
} from "../assets/characters";
import GlobalNav from "../components/Shell/GlobalNav";
import Footer from "../components/Shell/Footer";
import BannerAndMidNav from "../components/Shell/BannerAndMidNav";
import TotalBlock from "../components/overviewPage/TotalBlock";
import FavoriteBlock from "../components/overviewPage/FavoriteBlock";
import FavoritePoster from "../components/overviewPage/FavoritePoster";
import ActivityBlock from "../components/overviewPage/ActivityBlock";
import GenreBlock from "../components/overviewPage/GenreBlock";
import ActivityStatus from "../components/overviewPage/ActivityStatus";
import LatestUpdate from "../components/overviewPage/LatestUpdate";

function Overview() {

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
                <ActivityStatus />

                {/* WATCH HISTORY */}
                <div className="h-auto w-full flex flex-col items-center border-2 border-black">
                  <LatestUpdate img={naruto} title={"Naruto"} text={"Watched Episode 1 of"} time={"2 Days Ago"} />

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
