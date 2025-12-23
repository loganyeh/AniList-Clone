import rukia from "../assets/rukia.jpg";
import banner from "../assets/banner.jpg";
import bleach from "../assets/bleach.jpg";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Footer from "../components/Shell/Footer";
import GlobalNav from "../components/Shell/GlobalNav";
import BannerAndMidNav from "../components/Shell/BannerAndMidNav";
import ListSelectMenu from "../components/lists/sideBar/ListSelectMenu";
import ListTitles from "../components/lists/sideBar/ListTitles";

function Social() {
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
            <div className="h-full w-1/5 mb-80 flex flex-col items-end">
              {/* LISTS CONTAINER */}
            <ListSelectMenu height={"50"} listName={"Social"}>
              <ListTitles title={"Following"} />
              <ListTitles title={"Followers"} />
              <ListTitles title={"Forum Threads"} />
              <ListTitles title={"Forum Comments"} />
            </ListSelectMenu>
            </div>

            <div className="h-130 w-4/5 flex justify-center items-start pt-20 font-light text-gray-800 text-2xl">
              Following 0 users ｡ﾟヽ(ﾟ´Д｀)ﾉﾟ｡
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Social;
