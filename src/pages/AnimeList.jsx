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

function AnimeList() {

  return (
    <>
      {/* HEADER, NAV BAR, BANNER/PFP, MID NAVBAR */}
      <div className="relative">
        <GlobalNav />

        <div id="anime-list-page" className="h-auto w-screen">
          <BannerAndMidNav />

          {/* ANIME LIST - BODY */}
          {/* ================== */}
          <div
            id="profile-body"
            className="h-full w-full flex flex-row border-t-1 border-gray-300 bg-gray-200"
          >
            {/* BODY NAVBAR */}
            <div className="h-full w-1/5 flex flex-col items-end">
              <FilterSearchBar />
              {/* List Select Menu */}
              <ListSelectMenu height={"70"} listName={"Lists"}>
                <ListTitles title={"All"} />
                <ListTitles title={"Watching"} />
                <ListTitles title={"Completed"} />
                <ListTitles title={"Paused"} />
                <ListTitles title={"Dropped"} />
                <ListTitles title={"Planning"} />
              </ListSelectMenu>
              {/* ============== */}
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
            {/* ================== */}

            {/* -------------------- */}
            {/* LISTING BODY SHWS IN HERE */}
            <div className="h-full w-4/5">
              <FormatListView />

              <ListingBlock
                headingTitle={"Watching"}
                progressTitle={"Progress"}
              >
                <AnimeCell
                  animeCover={bleach}
                  title={"Bleach"}
                  progress={"20/366"}
                  type={"TV"}
                />
              </ListingBlock>
              <ListingBlock
                headingTitle={"Completed"}
                progressTitle={"Progress"}
              >
                <AnimeCell
                  animeCover={naruto}
                  title={"Naruto"}
                  score={"10"}
                  progress={"220"}
                  type={"TV"}
                />
              </ListingBlock>
              <ListingBlock headingTitle={"Paused"} progressTitle={"Progress"}>
                <AnimeCell
                  animeCover={csm}
                  title={"Chainsaw Man"}
                  progress={"8/12"}
                  type={"TV"}
                />
              </ListingBlock>
              <ListingBlock headingTitle={"Dropped"} progressTitle={"Progress"}>
                <AnimeCell
                  animeCover={jjk}
                  title={"JUJUTSU KAISEN Season 2"}
                  progress={"9/23"}
                  type={"TV"}
                />
              </ListingBlock>
              <ListingBlock
                headingTitle={"Planning"}
                progressTitle={"Progress"}
              >
                <AnimeCell
                  animeCover={mha}
                  title={"My Hero Acadamia"}
                  progress={"0/10"}
                  type={"TV"}
                />
              </ListingBlock>
            </div>
            {/* =================== */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AnimeList;
