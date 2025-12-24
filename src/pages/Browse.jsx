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
  const animeRankings = Array.from({ length: 10 });
  const animeShowRanking = [bleach, csm, jjk, mha, naruto, demon_slayer, haikyu, onepiece, frieren, hxh];
  const animeShowTitles = ["Bleach", "Chainsaw Man", "Jujutsu Kaisen", "My Hero Acadamia", "Naruto", "Demon Slayer", "Haikyu", "One Piece", "Frieren", "Hunter x Hunter"];
  const animeBubbleColors = ["bg-green-400", "bg-orange-400", "bg-pink-400", "bg-yellow-400", "bg-blue-400", "bg-red-400", "bg-green-400", "bg-red-400", "bg-blue-400", "bg-red-400",]

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
            {/* <div className="h-130 w-full flex justify-center items-start pt-20 font-light text-gray-800 text-3xl border-2 border-black"> No reviews yet ｡ﾟヽ(ﾟ´Д｀)ﾉﾟ｡</div> */}

            {/* SEARCH FILTERS */}
            <div className="h-30 w-full mt-10 mb-15 flex justify-between">
              <div className="h-full w-10/12 flex justify-around">
                {/* SEARCH */}
                <SearchBar />
                {/* Genres */}
                <InputBar title={"Genres"} />
                <InputBar title={"Year"} />
                <InputBar title={"Season"} />
                <InputBar title={"Format"} />
              </div>
              <FilterTab />
            </div>

            {/* TRENDING NOW BLOCK */}
            <TrendingBlock title={"TRENDING NOW"}>
              <TrendingAnimePoster
                anime={demon_slayer}
                title={"Demon Slayer"}
              />
              <TrendingAnimePoster anime={jjk} title={"Jujutsu Kaisen"} />
              <TrendingAnimePoster anime={mha} title={"My Hero Acadamia"} />
              <TrendingAnimePoster anime={csm} title={"Chainsaw Man"} />
              <TrendingAnimePoster anime={naruto} title={"Naruto"} />
            </TrendingBlock>

            <TrendingBlock title={"POPULAR THIS SEASON"}>
              <TrendingAnimePoster
                anime={demon_slayer}
                title={"Demon Slayer"}
              />
              <TrendingAnimePoster anime={jjk} title={"Jujutsu Kaisen"} />
              <TrendingAnimePoster anime={mha} title={"My Hero Acadamia"} />
              <TrendingAnimePoster anime={csm} title={"Chainsaw Man"} />
              <TrendingAnimePoster anime={naruto} title={"Naruto"} />
            </TrendingBlock>

            <TrendingBlock title={"UPCOMING NEXT SEASON"}>
              <TrendingAnimePoster
                anime={demon_slayer}
                title={"Demon Slayer"}
              />
              <TrendingAnimePoster anime={jjk} title={"Jujutsu Kaisen"} />
              <TrendingAnimePoster anime={mha} title={"My Hero Acadamia"} />
              <TrendingAnimePoster anime={csm} title={"Chainsaw Man"} />
              <TrendingAnimePoster anime={naruto} title={"Naruto"} />
            </TrendingBlock>

            <TrendingBlock title={"ALL TIME POPULAR"}>
              <TrendingAnimePoster
                anime={demon_slayer}
                title={"Demon Slayer"}
              />
              <TrendingAnimePoster anime={jjk} title={"Jujutsu Kaisen"} />
              <TrendingAnimePoster anime={mha} title={"My Hero Acadamia"} />
              <TrendingAnimePoster anime={csm} title={"Chainsaw Man"} />
              <TrendingAnimePoster anime={naruto} title={"Naruto"} />
            </TrendingBlock>

            {/* =========== */}

            {/* TOP 100 ANIMES */}
            <div className="h-auto w-full mb-15">
              <div className="h-17 w-full flex justify-between items-center">
                <div className="h-full w-1/2 flex justify-start items-center font-semibold text-gray-700 text-xl">
                  TOP 100 ANIME
                </div>
                <div className="h-full w-1/2 flex justify-end items-center font-semibold text-gray-500 text-md">
                  View All
                </div>
              </div>

              {animeRankings.map((_, index) => (
                <TopRankCell
                  key={index}
                  num={index + 1}
                  anime={animeShowRanking[index]}
                  title={animeShowTitles[index]}
                  faceColor={"text-green-500"}
                  cats={
                    <>
                      <ShowInfo num={"91%"} users={"361451 users"}>
                        <FaceColor faceColor={"text-green-500"} />
                      </ShowInfo>
                      <ShowInfo num={"TV Show"} users={"28 Episodes"} />
                      <ShowInfo num={"Fall 2023"} users={"Finished"} />
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
