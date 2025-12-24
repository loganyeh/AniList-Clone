import Footer from "../components/Shell/Footer";
import GlobalNav from "../components/Shell/GlobalNav";
import BannerAndMidNav from "../components/Shell/BannerAndMidNav";
import ListSelectMenu from "../components/lists/sideBar/ListSelectMenu";
import ListTitles from "../components/lists/sideBar/ListTitles";

function Submissions() {
  const submissionsListTitles = ["Anime", "Manga", "Characters", "Staff"]

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
                {submissionsListTitles.map((title, index) => {
                  return <ListTitles key={index} title={title} />
                })}
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
