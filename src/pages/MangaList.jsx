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
import BannerAndMidNav from "../components/Shell/BannerAndMidNav";
import ListingBlock from "../components/lists/ListingBlock";
import AnimeCell from "../components/lists/AnimeCell";
import FormatListView from "../components/lists/FormatListView";
import ListSelectMenu from "../components/lists/sideBar/ListSelectMenu";
import ListTitles from "../components/lists/sideBar/ListTitles";
import DropdownMenu from "../components/lists/sideBar/DropdownMenu";
import DropdownButton from "../components/lists/sideBar/DropdownButton";
import YearSlider from "../components/lists/sideBar/YearSlider";
import FilterSearchBar from "../components/lists/sideBar/FilterSearchBar";
// mangaData
import { readingML, rereadingML, completedML, pausedML, planningML } from "../data/animeDataArrays";

function MangaList() {
  const listTitlesArr = ["All", "Reading", "Rereading", "Completed", "Paused", "Planning"];
  const dropdownBtnNamesArr = ["Format", "Status", "Genres", "Country"];  

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
            className="h-full w-full flex flex-row border-t-1 border-gray-300 bg-gray-200"
          >
            {/* NAVBAR */}
            <div className="h-full w-1/5 flex flex-col items-end">
              <FilterSearchBar />
              {/* LISTS CONTAINER */}
              <ListSelectMenu height={"70"} listName={"Lists"}>
                {listTitlesArr.map((title, index) => {
                  return <ListTitles key={index} title={title} />
                })}
              </ListSelectMenu>
              {/* FILTERS */}
              <DropdownMenu height={"65"} menuName={"Filters"}>
                {dropdownBtnNamesArr.map((name, index) => {
                  return <DropdownButton key={index} dropdownName={name} />
                })}
              </DropdownMenu>
              {/* YEAR */}
              <YearSlider />
              {/* SORT */}
              <DropdownMenu height={"24"} menuName={"Sort"}>
                <DropdownButton dropdownName={"Score"} />
              </DropdownMenu>
            </div>

            {/* LISTING BODY SHWS IN HERE */}
            <div className="h-full w-4/5">
              <FormatListView />

              {/* ========================== */}
              {/* Reading */}
              <ListingBlock headingTitle={"Reading"} progressTitle={"Chapters"}>
                {readingML.map((manga) => {
                  return <AnimeCell key={manga.id} animeCover={manga.cover} title={manga.title} score={manga.score} progress={manga.progress} type={manga.type} />
                })}
              </ListingBlock>

              {/* Rereading */}
              <ListingBlock headingTitle={"Rereading"} progressTitle={"Chapters"}>
                {rereadingML.map((manga) => {
                  return <AnimeCell key={manga.id} animeCover={manga.cover} title={manga.title} score={manga.score} progress={manga.progress} type={manga.type} />
                })}
              </ListingBlock>

              {/* Completed */}
              <ListingBlock headingTitle={"Completed"} progressTitle={"Chapters"}>
                {completedML.map((manga) => {
                  return <AnimeCell key={manga.id} animeCover={manga.cover} title={manga.title} score={manga.score} progress={manga.progress} type={manga.type} />
                })}
              </ListingBlock>

              {/* Paused */}
              <ListingBlock headingTitle={"Paused"} progressTitle={"Chapters"}>
                {pausedML.map((manga) => {
                  return <AnimeCell key={manga.id} animeCover={manga.cover} title={manga.title} score={manga.score} progress={manga.progress} type={manga.type} />
                })}
              </ListingBlock>

              {/* Planning */}
              <ListingBlock headingTitle={"Planning"} progressTitle={"Chapters"}>
                {planningML.map((manga) => {
                  return <AnimeCell key={manga.id} animeCover={manga.cover} title={manga.title} score={manga.score} progress={manga.progress} type={manga.type} />
                })}
              </ListingBlock>


              
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MangaList;
