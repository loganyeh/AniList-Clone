import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Footer from "../components/Shell/Footer";
import GlobalNav from "../components/Shell/GlobalNav";
import BannerAndMidNav from "../components/Shell/BannerAndMidNav";
import ListSelectMenu from "../components/lists/sideBar/ListSelectMenu";
import ListTitles from "../components/lists/sideBar/ListTitles";

function Submissions() {
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
            {/* SIDE NAVBAR */}
            <div className="h-full w-1/5 flex flex-col items-end">
              {/* LISTS CONTAINER */}
              <ListSelectMenu height={"50"} listName={"Submissions"} >
                <ListTitles title={"Anime"} />
                <ListTitles title={"Manga"} />
                <ListTitles title={"Characters"} />
                <ListTitles title={"Staff"} />
              </ListSelectMenu>
            </div>

            <div className="h-130 w-4/5 flex justify-center items-start pt-20 font-light text-gray-800 text-2xl">
              No anime submissions yet (◕︿◕✿)
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Submissions;
