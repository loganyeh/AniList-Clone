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
// animeData
import {
  watchingAL, 
  completedAL, 
  pausedAL,
  droppedAL,
  planningAL,
} from "../data/animeDataArrays";

function AnimeList() {
  const ListTitlesArray = ["All", "Watching", "Completed", "Paused", "Dropped", "Planning"];
  const dropdownBtnNamesArr = ["Format", "Status", "Genres", "Country"];  

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
            {/* BODY NAVBAR */}
            <div className="h-full w-1/5 flex flex-col items-end">
              <FilterSearchBar />
              {/* List Select Menu */}
              <ListSelectMenu height={"70"} listName={"Lists"}>
                {ListTitlesArray.map((title) => {
                  return <ListTitles title={title} />
                })}
              </ListSelectMenu>
              {/* ============== */}
              {/* FILTERS */}
              <DropdownMenu height={"65"} menuName={"Filters"}>
                {dropdownBtnNamesArr.map((name) => {
                  return <DropdownButton dropdownName={name} />
                })}
              </DropdownMenu>
              {/* YEAR */}
              <YearSlider />
              {/* SORT */}
              <DropdownMenu height={"24"} menuName={"Sort"}>
                <DropdownButton dropdownName={"Score"} />
              </DropdownMenu>
            </div>

            {/* BODY */}
            <div className="h-full w-4/5">
              <FormatListView />

              {/* Watching */}
              <ListingBlock
                headingTitle={"Watching"}
                progressTitle={"Progress"}
              >
                {watchingAL.map((anime) => {
                  return <AnimeCell key={anime.id} animeCover={anime.cover} title={anime.title} score={anime.score} progress={anime.progress} type={anime.type} />
                })}
              </ListingBlock>

              {/* COMPELTED */}
              <ListingBlock
                headingTitle={"Completed"}
                progressTitle={"Progress"}
              >
                {completedAL.map((anime) => {
                  return <AnimeCell key={anime.id} animeCover={anime.cover} title={anime.title} score={anime.score} progress={anime.progress} type={anime.type} />
                })}
              </ListingBlock>

              {/* PAUSED */}
              <ListingBlock
                headingTitle={"Paused"}
                progressTitle={"Progress"}
              >
                {pausedAL.map((anime) => {
                  return <AnimeCell key={anime.id} animeCover={anime.cover} title={anime.title} score={anime.score} progress={anime.progress} type={anime.type} />
                })}
              </ListingBlock>

              {/* Dropped */}
              <ListingBlock
                headingTitle={"Dropped"}
                progressTitle={"Progress"}
              >
                {droppedAL.map((anime) => {
                  return <AnimeCell key={anime.id} animeCover={anime.cover} title={anime.title} score={anime.score} progress={anime.progress} type={anime.type} />
                })}
              </ListingBlock>

              {/* Planning */}
              <ListingBlock
                headingTitle={"Planning"}
                progressTitle={"Progress"}
              >
                {planningAL.map((anime) => {
                  return <AnimeCell key={anime.id} animeCover={anime.cover} title={anime.title} score={anime.score} progress={anime.progress} type={anime.type} />
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

export default AnimeList;
