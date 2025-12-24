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

function Browse() {
  const inputBarNames = ["Genres", "Year", "Season", "Format"];
  const animeBubbleColors = ["bg-green-400", "bg-orange-400", "bg-pink-400", "bg-yellow-400", "bg-blue-400", "bg-red-400", "bg-green-400", "bg-red-400", "bg-blue-400", "bg-red-400",]
  const animeData = [
    {id: 1, title: "Bleach", cover: bleach, rating: "90%", type: "TV Show", episodes: "366 Episodes", season: "Fall 2004",current_status: "Finished" },
    {id: 2, title: "Chainsaw Man", cover: csm, rating: "90%", type: "TV Show", episodes: "12 Episodes", season: "Fall 2022",current_status: "Finished" },
    {id: 3, title: "Jujutsu Kaisen", cover: jjk, rating: "90%", type: "TV Show", episodes: "39 Episodes", season: "Fall 2020",current_status: "Finished" },
    {id: 4, title: "My Hero Acadamia", cover: mha, rating: "90%", type: "TV Show", episodes: "250 Episodes", season: "Spring 2016",current_status: "Finished" },
    {id: 5, title: "Naruto", cover: naruto, rating: "90%", type: "TV Show", episodes: "220 Episodes", season: "Fall 2002",current_status: "Finished" },
    {id: 6, title: "Demon Slayer", cover: demon_slayer, rating: "90%", type: "TV Show", episodes: "55 Episodes", season: "Spring 2019",current_status: "Finished" },
    {id: 7, title: "Haikyu", cover: haikyu, rating: "90%", type: "TV Show", episodes: "90 Episodes", season: "Spring 2014",current_status: "Finished" },
    {id: 8, title: "One Piece", cover: onepiece, rating: "90%", type: "TV Show", episodes: "1000 Episodes", season: "...",current_status: "Ongoing" },
    {id: 9, title: "Frieren", cover: frieren, rating: "90%", type: "TV Show", episodes: "28 Episodes", season: "Fall 2023",current_status: "Finished" },
    {id: 10, title: "Hunter x Hunter", cover: hxh, rating: "90%", type: "TV Show", episodes: "148 Episodes", season: "Fall 2011",current_status: "Finished" },
  ]
  const trendingNowData = [
    {id: 1, title: "Haikyu", cover: haikyu, rating: "90%", type: "TV Show", episodes: "90 Episodes", season: "Spring 2014", current_status: "Finished"},
    {id: 2, title: "Demon Slayer", cover: demon_slayer, rating: "90%", type: "TV Show", episodes: "55 Episodes", season: "Spring 2019", current_status: "Finished"},
    {id: 3, title: "Jujutsu Kaisen", cover: jjk, rating: "90%", type: "TV Show", episodes: "39 Episodes", season: "Fall 2020", current_status: "Finished"},
    {id: 4, title: "One Piece", cover: onepiece, rating: "90%", type: "TV Show", episodes: "1000 Episodes", season: "...", current_status: "Ongoing"},
    {id: 5, title: "Frieren", cover: frieren, rating: "90%", type: "TV Show", episodes: "28 Episodes", season: "Fall 2023", current_status: "Finished"}
  ];
  const popularThisSeasonData = [
    {id: 1, title: "Bleach", cover: bleach, rating: "90%", type: "TV Show", episodes: "366 Episodes", season: "Fall 2004", current_status: "Finished"},
    {id: 2, title: "Hunter x Hunter", cover: hxh, rating: "90%", type: "TV Show", episodes: "148 Episodes", season: "Fall 2011", current_status: "Finished"},
    {id: 3, title: "Naruto", cover: naruto, rating: "90%", type: "TV Show", episodes: "220 Episodes", season: "Fall 2002", current_status: "Finished"},
    {id: 4, title: "Chainsaw Man", cover: csm, rating: "90%", type: "TV Show", episodes: "12 Episodes", season: "Fall 2022", current_status: "Finished"},
    {id: 5, title: "My Hero Acadamia", cover: mha, rating: "90%", type: "TV Show", episodes: "250 Episodes", season: "Spring 2016", current_status: "Finished"}
  ];
  const upcomingNextSeasonData = [
    {id: 1, title: "Demon Slayer", cover: demon_slayer, rating: "90%", type: "TV Show", episodes: "55 Episodes", season: "Spring 2019", current_status: "Finished"},
    {id: 2, title: "Frieren", cover: frieren, rating: "90%", type: "TV Show", episodes: "28 Episodes", season: "Fall 2023", current_status: "Finished"},
    {id: 3, title: "Jujutsu Kaisen", cover: jjk, rating: "90%", type: "TV Show", episodes: "39 Episodes", season: "Fall 2020", current_status: "Finished"},
    {id: 4, title: "Haikyu", cover: haikyu, rating: "90%", type: "TV Show", episodes: "90 Episodes", season: "Spring 2014", current_status: "Finished"},
    {id: 5, title: "One Piece", cover: onepiece, rating: "90%", type: "TV Show", episodes: "1000 Episodes", season: "...", current_status: "Ongoing"}
  ];
  const allTimePopularData = [
    {id: 1, title: "Chainsaw Man", cover: csm, rating: "90%", type: "TV Show", episodes: "12 Episodes", season: "Fall 2022", current_status: "Finished"},
    {id: 2, title: "Bleach", cover: bleach, rating: "90%", type: "TV Show", episodes: "366 Episodes", season: "Fall 2004", current_status: "Finished"},
    {id: 3, title: "Hunter x Hunter", cover: hxh, rating: "90%", type: "TV Show", episodes: "148 Episodes", season: "Fall 2011", current_status: "Finished"},
    {id: 4, title: "My Hero Acadamia", cover: mha, rating: "90%", type: "TV Show", episodes: "250 Episodes", season: "Spring 2016", current_status: "Finished"},
    {id: 5, title: "Naruto", cover: naruto, rating: "90%", type: "TV Show", episodes: "220 Episodes", season: "Fall 2002", current_status: "Finished"}
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
                  return <InputBar key={index} title={title} />
                })}
              </div>
              <FilterTab />
            </div>

            <TrendingBlock title={"TRENDING NOW"}>
              {trendingNowData.map((anime) => {
                return <TrendingAnimePoster key={anime.id} anime={anime.cover} title={anime.title}/>
              })}
            </TrendingBlock>

            <TrendingBlock title={"POPULAR THIS SEASON"}>
              {popularThisSeasonData.map((anime) => {
                return <TrendingAnimePoster key={anime.id} anime={anime.cover} title={anime.title} />
              })}
            </TrendingBlock>

            <TrendingBlock title={"UPCOMING NEXT SEASON"}>
              {upcomingNextSeasonData.map((anime) => {
                return <TrendingAnimePoster key={anime.id} anime={anime.cover} title={anime.title} />
              })}
            </TrendingBlock>

            <TrendingBlock title={"ALL TIME POPULAR"}>
              {allTimePopularData.map((anime) => {
                return <TrendingAnimePoster key={anime.id} anime={anime.cover} title={anime.title} />
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
                      <ShowInfo title={anime.season} subtitle={anime.current_status} />
                    </>
                  }
                >
                  <CatBubble category={"adventure"} color={animeBubbleColors[index]} />
                  <CatBubble category={"drama"} color={animeBubbleColors[index]} />
                  <CatBubble category={"fantasy"} color={animeBubbleColors[index]} />
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
