// SHELLS
import GlobalNav from "../components/Shell/GlobalNav";
import Footer from "../components/Shell/Footer";
import BannerAndMidNav from "../components/Shell/BannerAndMidNav";
// overviewPage comp
import TotalBlock from "../components/overviewPage/TotalBlock";
import FavoriteBlock from "../components/overviewPage/FavoriteBlock";
import FavoritePoster from "../components/overviewPage/FavoritePoster";
import ActivityBlock from "../components/overviewPage/ActivityBlock";
import GenreBlock from "../components/overviewPage/GenreBlock";
import ActivityStatus from "../components/overviewPage/ActivityStatus";
import LatestUpdate from "../components/overviewPage/LatestUpdate";
// animeData
import {
  animeData,
  favCharacters,
  favAnimes
} from "../data/animeDataArrays";

function Overview() {
  return (
    <>
      {/* CONTAINER */}
      <div className="relative">
        {/* HEADERS */}
        <GlobalNav />
        <div id="anime-list-page" className="h-auto w-screen">
          <BannerAndMidNav />

          {/* BODY */}
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

                <GenreBlock />
                {/* FAV ANIMES */}
                <FavoriteBlock height={"auto"} title={"Anime"}>
                  {favAnimes.map((anime, index) => {
                    return <FavoritePoster img={anime.cover} />
                  })}
                </FavoriteBlock>

                {/* FAV CHARACTERS */}
                <FavoriteBlock height={"auto"} title={"Characters"}>
                  {favCharacters.map((character, index) => {
                    return <FavoritePoster img={character.character} />
                  })}
                </FavoriteBlock>
              </div>

              {/* RIGHT SIDE - OVERVIEW */}
              <div className="h-full w-1/2 flex flex-col justify-start items-center">
                <TotalBlock
                  watchedTitle={"Total Anime"}
                  totalWatched={"73"}
                  timeTitle={"Days Watched"}
                  time={"28.4"}
                  mean={"78.4"}
                  firstNum={"10"}
                  secondNum={"20"}
                  thirdNum={"30"}
                />
                <TotalBlock
                  watchedTitle={"Total Manga"}
                  totalWatched={"12"}
                  timeTitle={"Chapters Read"}
                  time={"674"}
                  mean={"85.0"}
                  firstNum={"100"}
                  secondNum={"500"}
                  thirdNum={"1000"}
                />

                {/* ACTIVITY */}
                <ActivityStatus />

                {/* WATCH HISTORY */}
                <div className="h-auto w-full flex flex-col items-center">
                  <LatestUpdate
                    img={animeData[4].cover}
                    title={"Naruto"}
                    text={"Watched Episode 1 of"}
                    time={"2 Days Ago"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default Overview;
