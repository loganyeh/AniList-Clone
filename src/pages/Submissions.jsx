import rukia from "../assets/rukia.jpg";
import banner from "../assets/banner.jpg";
import bleach from "../assets/bleach.jpg";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Footer from "../components/Shell/Footer";
import GlobalNav from "../components/Shell/GlobalNav";
import BannerAndMidNav from "../components/Shell/BannerAndMidNav";

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
              <div id="list-div" className="h-50 w-59 flex flex-col mt-8 mr-16">
                <div className="h-1/12 w-full flex items-center text-lg text-gray-500">
                  Submissions
                </div>
                {/* INNER NESTED */}
                <div className="h-11/12 w-full flex flex-col justify-around mt-2">
                  <span className="h-8 w-full flex items-center pl-3 text-gray-600 font-semibold bg-white rounded">
                    Anime
                  </span>
                  <span className="h-8 w-full flex items-center pl-3 text-gray-500">
                    Manga
                  </span>
                  <span className="h-8 w-full flex items-center pl-3 text-gray-500">
                    Characters
                  </span>
                  <span className="h-8 w-full flex items-center pl-3 text-gray-500">
                    Staff
                  </span>
                </div>
              </div>
            </div>

            <div className="h-130 w-4/5 flex justify-center items-start pt-20 font-light text-gray-800 text-2xl">
              No anime submissions yet (◕︿◕✿)
            </div>
          </div>
        </div>
      </div>

      {/* ============================ */}
      {/* FOOTER */}
      <Footer />
      {/* ============================ */}
    </>
  );
}

export default Submissions;
