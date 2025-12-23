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

function MangaList() {
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
            className="h-full w-full flex flex-row border-t-1 border-gray-300 bg-gray-200"
          >
            {/* NAVBAR */}
            <div className="h-full w-1/5 flex flex-col items-end">
              <FilterSearchBar />
              {/* LISTS CONTAINER */}
              <ListSelectMenu height={"70"} listName={"Lists"}>
                <ListTitles title={"All"} />
                <ListTitles title={"Reading"} />
                <ListTitles title={"Rereading"} />
                <ListTitles title={"Completed"} />
                <ListTitles title={"Paused"} />
                <ListTitles title={"Planning"} />
              </ListSelectMenu>
              {/* FILTERS */}
              <DropdownMenu height={"65"} menuName={"Filters"}>
                <DropdownButton dropdownName={"Format"} />
                <DropdownButton dropdownName={"Status"} />
                <DropdownButton dropdownName={"Genres"} />
                <DropdownButton dropdownName={"Country"} />
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
              <ListingBlock headingTitle={"Reading"} progressTitle={"Chapters"}>
                <AnimeCell
                  animeCover={bleach}
                  title={"Bleach"}
                  score={"0/10"}
                  progress={"0/10"}
                  type={"Manga"}
                />
              </ListingBlock>
              <ListingBlock
                headingTitle={"Rereading"}
                progressTitle={"Chapters"}
              >
                <AnimeCell
                  animeCover={bleach}
                  title={"Bleach"}
                  score={"0/10"}
                  progress={"0/10"}
                  type={"Manga"}
                />
              </ListingBlock>
              <ListingBlock
                headingTitle={"Completed"}
                progressTitle={"Chapters"}
              >
                <AnimeCell
                  animeCover={bleach}
                  title={"Bleach"}
                  score={"0/10"}
                  progress={"0/10"}
                  type={"Manga"}
                />
              </ListingBlock>
              <ListingBlock headingTitle={"Paused"} progressTitle={"Chapters"}>
                <AnimeCell
                  animeCover={bleach}
                  title={"Bleach"}
                  score={"0/10"}
                  progress={"0/10"}
                  type={"Manga"}
                />
              </ListingBlock>
              <ListingBlock
                headingTitle={"Planning"}
                progressTitle={"Chapters"}
              >
                <AnimeCell
                  animeCover={bleach}
                  title={"Bleach"}
                  score={"0/10"}
                  progress={"0/10"}
                  type={"Manga"}
                />
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
