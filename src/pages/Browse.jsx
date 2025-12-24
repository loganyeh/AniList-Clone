import Footer from "../components/Shell/Footer";
import GlobalNav from "../components/Shell/GlobalNav";
import TrendingBlock from "../components/browsePage/TrendingBlock";
import SearchBar from "../components/browsePage/SearchBar";
import InputBar from "../components/browsePage/InputBar";
import FilterTab from "../components/browsePage/FilterTab";
import TrendingAnimePoster from "../components/browsePage/TrendingAnimePoster";
import TopRankCell from "../components/browsePage/TopRankCell";
import CatBubble from "../components/browsePage/CatBubble";
import ShowInfo from "../components/browsePage/ShowInfo";
import FaceColor from "../components/browsePage/FaceColor";
// animeData
import {
  animeData,
  trendingNowData,
  popularThisSeasonData,
  upcomingNextSeasonData,
  allTimePopularData,
} from "../data/animeDataArrays.js";

function Browse() {
  const inputBarNames = ["Genres", "Year", "Season", "Format"];
  const animeBubbleColors = [
    "bg-green-400",
    "bg-orange-400",
    "bg-pink-400",
    "bg-yellow-400",
    "bg-blue-400",
    "bg-red-400",
    "bg-green-400",
    "bg-red-400",
    "bg-blue-400",
    "bg-red-400",
  ];

  return (
    <>
      {/* HEADER, NAV BAR, BANNER/PFP, MID NAVBAR */}
      <div className="relative">
        <GlobalNav />

        <div
          id="anime-list-page"
          className="h-auto w-screen flex justify-center items-center pt-24 bg-gray-200"
        >
          {/* ANIME LIST - BODY */}
          <div id="profile-body" className="h-auto w-10/12 flex flex-col">
            <div className="h-30 w-full mt-10 mb-15 flex justify-between">
              <div className="h-full w-10/12 flex justify-around">
                <SearchBar />
                {inputBarNames.map((title, index) => {
                  return <InputBar key={index} title={title} />;
                })}
              </div>
              <FilterTab />
            </div>

            <TrendingBlock title={"TRENDING NOW"}>
              {trendingNowData.map((anime) => {
                return (
                  <TrendingAnimePoster
                    key={anime.id}
                    anime={anime.cover}
                    title={anime.title}
                  />
                );
              })}
            </TrendingBlock>

            <TrendingBlock title={"POPULAR THIS SEASON"}>
              {popularThisSeasonData.map((anime) => {
                return (
                  <TrendingAnimePoster
                    key={anime.id}
                    anime={anime.cover}
                    title={anime.title}
                  />
                );
              })}
            </TrendingBlock>

            <TrendingBlock title={"UPCOMING NEXT SEASON"}>
              {upcomingNextSeasonData.map((anime) => {
                return (
                  <TrendingAnimePoster
                    key={anime.id}
                    anime={anime.cover}
                    title={anime.title}
                  />
                );
              })}
            </TrendingBlock>

            <TrendingBlock title={"ALL TIME POPULAR"}>
              {allTimePopularData.map((anime) => {
                return (
                  <TrendingAnimePoster
                    key={anime.id}
                    anime={anime.cover}
                    title={anime.title}
                  />
                );
              })}
            </TrendingBlock>

            <div className="h-auto w-full mb-15">
              <div className="h-17 w-full flex justify-between items-center">
                <div className="h-full w-1/2 flex justify-start items-center font-semibold text-gray-700 text-xl">
                  TOP 100 ANIME
                </div>
                <div className="h-full w-1/2 flex justify-end items-center font-semibold text-gray-500 text-md">
                  View All
                </div>
              </div>

              {animeData.map((anime, index) => (
                <TopRankCell
                  key={anime.id}
                  rank={index + 1}
                  anime={anime.cover}
                  title={anime.title}
                  faceColor={"text-green-500"}
                  cats={
                    <>
                      <ShowInfo title={anime.rating} subtitle={"361451 users"}>
                        <FaceColor faceColor={"text-green-500"} />
                      </ShowInfo>
                      <ShowInfo title={anime.type} subtitle={anime.episodes} />
                      <ShowInfo
                        title={anime.season}
                        subtitle={anime.airing}
                      />
                    </>
                  }
                >
                  <CatBubble
                    category={"adventure"}
                    color={animeBubbleColors[index]}
                  />
                  <CatBubble
                    category={"drama"}
                    color={animeBubbleColors[index]}
                  />
                  <CatBubble
                    category={"fantasy"}
                    color={animeBubbleColors[index]}
                  />
                </TopRankCell>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Browse;
