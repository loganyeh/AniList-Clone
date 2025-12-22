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
} from "../assets/animes";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Footer from "../components/Shell/Footer";
import GlobalNav from "../components/Shell/GlobalNav";
import BannerAndMidNav from "../components/Shell/BannerAndMidNav";

function WIP() {
  const { page, setPage } = useContext(MyContext);

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
            <div className="h-130 w-full flex justify-center items-start pt-20 font-light text-gray-800 text-3xl">
              🚧 UNDER CONSTRUCTION 🚧<br></br>[ ======= ]<br></br>| BUILDING |
              <br></br>| IN PROGRESS |<br></br>
              |===========|<br></br>
              We're working on this page.<br></br>
              Check back soon!<br></br>
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

export default WIP;
