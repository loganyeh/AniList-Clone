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
} from "../assets/animes";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Footer from "../components/Shell/Footer";
import GlobalNav from "../components/Shell/GlobalNav";
import TrendingBlock from "../components/browsePage/TrendingBlock";
import SearchBar from "../components/browsePage/SearchBar";
import InputBar from "../components/browsePage/InputBar";
import FilterTab from "../components/browsePage/FilterTab";
import TrendingAnimePoster from "../components/browsePage/TrendingAnimePoster";
import TopRankCell from "../components/browsePage/TopRankCell";

function Browse() {
  const { page, setPage } = useContext(MyContext);

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
              <TrendingAnimePoster anime={demon_slayer} title={"Demon Slayer"} />
              <TrendingAnimePoster anime={jjk} title={"Jujutsu Kaisen"} />
              <TrendingAnimePoster anime={mha} title={"My Hero Acadamia"} />
              <TrendingAnimePoster anime={csm} title={"Chainsaw Man"} />
              <TrendingAnimePoster anime={naruto} title={"Naruto"} />
            </TrendingBlock>

            <TrendingBlock title={"POPULAR THIS SEASON"}>
              <TrendingAnimePoster anime={demon_slayer} title={"Demon Slayer"} />
              <TrendingAnimePoster anime={jjk} title={"Jujutsu Kaisen"} />
              <TrendingAnimePoster anime={mha} title={"My Hero Acadamia"} />
              <TrendingAnimePoster anime={csm} title={"Chainsaw Man"} />
              <TrendingAnimePoster anime={naruto} title={"Naruto"} />
            </TrendingBlock>
            
            <TrendingBlock title={"UPCOMING NEXT SEASON"}>
              <TrendingAnimePoster anime={demon_slayer} title={"Demon Slayer"} />
              <TrendingAnimePoster anime={jjk} title={"Jujutsu Kaisen"} />
              <TrendingAnimePoster anime={mha} title={"My Hero Acadamia"} />
              <TrendingAnimePoster anime={csm} title={"Chainsaw Man"} />
              <TrendingAnimePoster anime={naruto} title={"Naruto"} />
            </TrendingBlock>

            <TrendingBlock title={"ALL TIME POPULAR"}>
              <TrendingAnimePoster anime={demon_slayer} title={"Demon Slayer"} />
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

              {/* TOP 1 ANIME */}
                <TopRankCell num={"1"} anime={frieren} title={"Frieren: Beyond Journey's End"} />
              {/*  */}

              {/* 2 */}
              <div className="h-auto w-full mb-8 flex flex-wrap justify-around items-center">
                <div className="h-30 w-full flex">
                  <div className="h-full w-1/12 flex justify-center items-center font-semibold text-gray-500 text-4xl">
                    #2
                  </div>
                  <div className="h-full w-11/12 flex bg-white rounded-lg shadow-md">
                    {/* ANIME COVER */}
                    <div className="h-full w-1/12 flex justify-center items-center">
                      <div
                        className="h-25 w-20 bg-center bg-cover rounded"
                        style={{ backgroundImage: `url(${frieren})` }}
                      ></div>
                    </div>
                    {/* TITLE CARD & CATEGORIES */}
                    <div className="h-full w-5/12">
                      <div className="h-1/2 w-full flex justify-center items-center text-gray-700 font-semibold text-xl">
                        Frieren: Beyond Journey's End
                      </div>
                      <div className="h-1/2 w-full flex justify-around items-center">
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          adventure
                        </div>
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          drama
                        </div>
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          fantasy
                        </div>
                      </div>
                    </div>
                    {/* ANIME SCORING PERCENTAGE */}
                    <div className="h-full w-6/12 flex">
                      {/* PERCENTAGE */}
                      <div className="h-full w-1/3 flex">
                        <div className="h-full w-1/4 flex justify-center items-center">
                          <i class="bx bx-smile text-5xl text-green-500"></i>
                        </div>
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            91%
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            361451 users
                          </div>
                        </div>
                      </div>
                      {/* TV SHOW */}
                      <div className="h-full w-1/3 flex justify-center items-center">
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            TV Show
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            28 episodes
                          </div>
                        </div>
                      </div>
                      {/* FALL 2023 */}
                      <div className="h-full w-1/3 flex justify-center items-center">
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            Fall 2023
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            Finished
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 */}
              <div className="h-auto w-full mb-8 flex flex-wrap justify-around items-center">
                <div className="h-30 w-full flex">
                  <div className="h-full w-1/12 flex justify-center items-center font-semibold text-gray-500 text-4xl">
                    #3
                  </div>
                  <div className="h-full w-11/12 flex bg-white rounded-lg shadow-md">
                    {/* ANIME COVER */}
                    <div className="h-full w-1/12 flex justify-center items-center">
                      <div
                        className="h-25 w-20 bg-center bg-cover rounded"
                        style={{ backgroundImage: `url(${frieren})` }}
                      ></div>
                    </div>
                    {/* TITLE CARD & CATEGORIES */}
                    <div className="h-full w-5/12">
                      <div className="h-1/2 w-full flex justify-center items-center text-gray-700 font-semibold text-xl">
                        Frieren: Beyond Journey's End
                      </div>
                      <div className="h-1/2 w-full flex justify-around items-center">
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          adventure
                        </div>
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          drama
                        </div>
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          fantasy
                        </div>
                      </div>
                    </div>
                    {/* ANIME SCORING PERCENTAGE */}
                    <div className="h-full w-6/12 flex">
                      {/* PERCENTAGE */}
                      <div className="h-full w-1/3 flex">
                        <div className="h-full w-1/4 flex justify-center items-center">
                          <i class="bx bx-smile text-5xl text-green-500"></i>
                        </div>
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            91%
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            361451 users
                          </div>
                        </div>
                      </div>
                      {/* TV SHOW */}
                      <div className="h-full w-1/3 flex justify-center items-center">
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            TV Show
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            28 episodes
                          </div>
                        </div>
                      </div>
                      {/* FALL 2023 */}
                      <div className="h-full w-1/3 flex justify-center items-center">
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            Fall 2023
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            Finished
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 */}
              <div className="h-auto w-full mb-8 flex flex-wrap justify-around items-center">
                <div className="h-30 w-full flex">
                  <div className="h-full w-1/12 flex justify-center items-center font-semibold text-gray-500 text-4xl">
                    #4
                  </div>
                  <div className="h-full w-11/12 flex bg-white rounded-lg shadow-md">
                    {/* ANIME COVER */}
                    <div className="h-full w-1/12 flex justify-center items-center">
                      <div
                        className="h-25 w-20 bg-center bg-cover rounded"
                        style={{ backgroundImage: `url(${frieren})` }}
                      ></div>
                    </div>
                    {/* TITLE CARD & CATEGORIES */}
                    <div className="h-full w-5/12">
                      <div className="h-1/2 w-full flex justify-center items-center text-gray-700 font-semibold text-xl">
                        Frieren: Beyond Journey's End
                      </div>
                      <div className="h-1/2 w-full flex justify-around items-center">
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          adventure
                        </div>
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          drama
                        </div>
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          fantasy
                        </div>
                      </div>
                    </div>
                    {/* ANIME SCORING PERCENTAGE */}
                    <div className="h-full w-6/12 flex">
                      {/* PERCENTAGE */}
                      <div className="h-full w-1/3 flex">
                        <div className="h-full w-1/4 flex justify-center items-center">
                          <i class="bx bx-smile text-5xl text-green-500"></i>
                        </div>
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            91%
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            361451 users
                          </div>
                        </div>
                      </div>
                      {/* TV SHOW */}
                      <div className="h-full w-1/3 flex justify-center items-center">
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            TV Show
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            28 episodes
                          </div>
                        </div>
                      </div>
                      {/* FALL 2023 */}
                      <div className="h-full w-1/3 flex justify-center items-center">
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            Fall 2023
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            Finished
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5 */}
              <div className="h-auto w-full mb-8 flex flex-wrap justify-around items-center">
                <div className="h-30 w-full flex">
                  <div className="h-full w-1/12 flex justify-center items-center font-semibold text-gray-500 text-4xl">
                    #5
                  </div>
                  <div className="h-full w-11/12 flex bg-white rounded-lg shadow-md">
                    {/* ANIME COVER */}
                    <div className="h-full w-1/12 flex justify-center items-center">
                      <div
                        className="h-25 w-20 bg-center bg-cover rounded"
                        style={{ backgroundImage: `url(${frieren})` }}
                      ></div>
                    </div>
                    {/* TITLE CARD & CATEGORIES */}
                    <div className="h-full w-5/12">
                      <div className="h-1/2 w-full flex justify-center items-center text-gray-700 font-semibold text-xl">
                        Frieren: Beyond Journey's End
                      </div>
                      <div className="h-1/2 w-full flex justify-around items-center">
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          adventure
                        </div>
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          drama
                        </div>
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          fantasy
                        </div>
                      </div>
                    </div>
                    {/* ANIME SCORING PERCENTAGE */}
                    <div className="h-full w-6/12 flex">
                      {/* PERCENTAGE */}
                      <div className="h-full w-1/3 flex">
                        <div className="h-full w-1/4 flex justify-center items-center">
                          <i class="bx bx-smile text-5xl text-green-500"></i>
                        </div>
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            91%
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            361451 users
                          </div>
                        </div>
                      </div>
                      {/* TV SHOW */}
                      <div className="h-full w-1/3 flex justify-center items-center">
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            TV Show
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            28 episodes
                          </div>
                        </div>
                      </div>
                      {/* FALL 2023 */}
                      <div className="h-full w-1/3 flex justify-center items-center">
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            Fall 2023
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            Finished
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6 */}
              <div className="h-auto w-full mb-8 flex flex-wrap justify-around items-center">
                <div className="h-30 w-full flex">
                  <div className="h-full w-1/12 flex justify-center items-center font-semibold text-gray-500 text-4xl">
                    #6
                  </div>
                  <div className="h-full w-11/12 flex bg-white rounded-lg shadow-md">
                    {/* ANIME COVER */}
                    <div className="h-full w-1/12 flex justify-center items-center">
                      <div
                        className="h-25 w-20 bg-center bg-cover rounded"
                        style={{ backgroundImage: `url(${frieren})` }}
                      ></div>
                    </div>
                    {/* TITLE CARD & CATEGORIES */}
                    <div className="h-full w-5/12">
                      <div className="h-1/2 w-full flex justify-center items-center text-gray-700 font-semibold text-xl">
                        Frieren: Beyond Journey's End
                      </div>
                      <div className="h-1/2 w-full flex justify-around items-center">
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          adventure
                        </div>
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          drama
                        </div>
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          fantasy
                        </div>
                      </div>
                    </div>
                    {/* ANIME SCORING PERCENTAGE */}
                    <div className="h-full w-6/12 flex">
                      {/* PERCENTAGE */}
                      <div className="h-full w-1/3 flex">
                        <div className="h-full w-1/4 flex justify-center items-center">
                          <i class="bx bx-smile text-5xl text-green-500"></i>
                        </div>
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            91%
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            361451 users
                          </div>
                        </div>
                      </div>
                      {/* TV SHOW */}
                      <div className="h-full w-1/3 flex justify-center items-center">
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            TV Show
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            28 episodes
                          </div>
                        </div>
                      </div>
                      {/* FALL 2023 */}
                      <div className="h-full w-1/3 flex justify-center items-center">
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            Fall 2023
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            Finished
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7 */}
              <div className="h-auto w-full mb-8 flex flex-wrap justify-around items-center">
                <div className="h-30 w-full flex">
                  <div className="h-full w-1/12 flex justify-center items-center font-semibold text-gray-500 text-4xl">
                    #7
                  </div>
                  <div className="h-full w-11/12 flex bg-white rounded-lg shadow-md">
                    {/* ANIME COVER */}
                    <div className="h-full w-1/12 flex justify-center items-center">
                      <div
                        className="h-25 w-20 bg-center bg-cover rounded"
                        style={{ backgroundImage: `url(${frieren})` }}
                      ></div>
                    </div>
                    {/* TITLE CARD & CATEGORIES */}
                    <div className="h-full w-5/12">
                      <div className="h-1/2 w-full flex justify-center items-center text-gray-700 font-semibold text-xl">
                        Frieren: Beyond Journey's End
                      </div>
                      <div className="h-1/2 w-full flex justify-around items-center">
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          adventure
                        </div>
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          drama
                        </div>
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          fantasy
                        </div>
                      </div>
                    </div>
                    {/* ANIME SCORING PERCENTAGE */}
                    <div className="h-full w-6/12 flex">
                      {/* PERCENTAGE */}
                      <div className="h-full w-1/3 flex">
                        <div className="h-full w-1/4 flex justify-center items-center">
                          <i class="bx bx-smile text-5xl text-green-500"></i>
                        </div>
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            91%
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            361451 users
                          </div>
                        </div>
                      </div>
                      {/* TV SHOW */}
                      <div className="h-full w-1/3 flex justify-center items-center">
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            TV Show
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            28 episodes
                          </div>
                        </div>
                      </div>
                      {/* FALL 2023 */}
                      <div className="h-full w-1/3 flex justify-center items-center">
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            Fall 2023
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            Finished
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 8 */}
              <div className="h-auto w-full mb-8 flex flex-wrap justify-around items-center">
                <div className="h-30 w-full flex">
                  <div className="h-full w-1/12 flex justify-center items-center font-semibold text-gray-500 text-4xl">
                    #8
                  </div>
                  <div className="h-full w-11/12 flex bg-white rounded-lg shadow-md">
                    {/* ANIME COVER */}
                    <div className="h-full w-1/12 flex justify-center items-center">
                      <div
                        className="h-25 w-20 bg-center bg-cover rounded"
                        style={{ backgroundImage: `url(${frieren})` }}
                      ></div>
                    </div>
                    {/* TITLE CARD & CATEGORIES */}
                    <div className="h-full w-5/12">
                      <div className="h-1/2 w-full flex justify-center items-center text-gray-700 font-semibold text-xl">
                        Frieren: Beyond Journey's End
                      </div>
                      <div className="h-1/2 w-full flex justify-around items-center">
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          adventure
                        </div>
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          drama
                        </div>
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          fantasy
                        </div>
                      </div>
                    </div>
                    {/* ANIME SCORING PERCENTAGE */}
                    <div className="h-full w-6/12 flex">
                      {/* PERCENTAGE */}
                      <div className="h-full w-1/3 flex">
                        <div className="h-full w-1/4 flex justify-center items-center">
                          <i class="bx bx-smile text-5xl text-green-500"></i>
                        </div>
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            91%
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            361451 users
                          </div>
                        </div>
                      </div>
                      {/* TV SHOW */}
                      <div className="h-full w-1/3 flex justify-center items-center">
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            TV Show
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            28 episodes
                          </div>
                        </div>
                      </div>
                      {/* FALL 2023 */}
                      <div className="h-full w-1/3 flex justify-center items-center">
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            Fall 2023
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            Finished
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 9 */}
              <div className="h-auto w-full mb-8 flex flex-wrap justify-around items-center">
                <div className="h-30 w-full flex">
                  <div className="h-full w-1/12 flex justify-center items-center font-semibold text-gray-500 text-4xl">
                    #9
                  </div>
                  <div className="h-full w-11/12 flex bg-white rounded-lg shadow-md">
                    {/* ANIME COVER */}
                    <div className="h-full w-1/12 flex justify-center items-center">
                      <div
                        className="h-25 w-20 bg-center bg-cover rounded"
                        style={{ backgroundImage: `url(${frieren})` }}
                      ></div>
                    </div>
                    {/* TITLE CARD & CATEGORIES */}
                    <div className="h-full w-5/12">
                      <div className="h-1/2 w-full flex justify-center items-center text-gray-700 font-semibold text-xl">
                        Frieren: Beyond Journey's End
                      </div>
                      <div className="h-1/2 w-full flex justify-around items-center">
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          adventure
                        </div>
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          drama
                        </div>
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          fantasy
                        </div>
                      </div>
                    </div>
                    {/* ANIME SCORING PERCENTAGE */}
                    <div className="h-full w-6/12 flex">
                      {/* PERCENTAGE */}
                      <div className="h-full w-1/3 flex">
                        <div className="h-full w-1/4 flex justify-center items-center">
                          <i class="bx bx-smile text-5xl text-green-500"></i>
                        </div>
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            91%
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            361451 users
                          </div>
                        </div>
                      </div>
                      {/* TV SHOW */}
                      <div className="h-full w-1/3 flex justify-center items-center">
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            TV Show
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            28 episodes
                          </div>
                        </div>
                      </div>
                      {/* FALL 2023 */}
                      <div className="h-full w-1/3 flex justify-center items-center">
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            Fall 2023
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            Finished
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 10 */}
              <div className="h-auto w-full mb-8 flex flex-wrap justify-around items-center">
                <div className="h-30 w-full flex">
                  <div className="h-full w-1/12 flex justify-center items-center font-semibold text-gray-500 text-4xl">
                    #10
                  </div>
                  <div className="h-full w-11/12 flex bg-white rounded-lg shadow-md">
                    {/* ANIME COVER */}
                    <div className="h-full w-1/12 flex justify-center items-center">
                      <div
                        className="h-25 w-20 bg-center bg-cover rounded"
                        style={{ backgroundImage: `url(${frieren})` }}
                      ></div>
                    </div>
                    {/* TITLE CARD & CATEGORIES */}
                    <div className="h-full w-5/12">
                      <div className="h-1/2 w-full flex justify-center items-center text-gray-700 font-semibold text-xl">
                        Frieren: Beyond Journey's End
                      </div>
                      <div className="h-1/2 w-full flex justify-around items-center">
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          adventure
                        </div>
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          drama
                        </div>
                        <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                          fantasy
                        </div>
                      </div>
                    </div>
                    {/* ANIME SCORING PERCENTAGE */}
                    <div className="h-full w-6/12 flex">
                      {/* PERCENTAGE */}
                      <div className="h-full w-1/3 flex">
                        <div className="h-full w-1/4 flex justify-center items-center">
                          <i class="bx bx-smile text-5xl text-green-500"></i>
                        </div>
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            91%
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            361451 users
                          </div>
                        </div>
                      </div>
                      {/* TV SHOW */}
                      <div className="h-full w-1/3 flex justify-center items-center">
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            TV Show
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            28 episodes
                          </div>
                        </div>
                      </div>
                      {/* FALL 2023 */}
                      <div className="h-full w-1/3 flex justify-center items-center">
                        <div className="h-full w-3/4">
                          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                            Fall 2023
                          </div>
                          <div className="h-1/2 w-full font-normal text-gray-500">
                            Finished
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
      {/* ============================ */}
    </>
  );
}

export default Browse;
