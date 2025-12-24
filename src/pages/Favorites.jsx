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
import {
  denji,
  giyuu,
  ichigo,
  itadori,
  okarun,
  zoro,
} from "../assets/characters";
import Footer from "../components/Shell/Footer";
import GlobalNav from "../components/Shell/GlobalNav";
import BannerAndMidNav from "../components/Shell/BannerAndMidNav";
import FavBlock from "../components/favPage/FavBlock";
import LikedAnimeCharacter from "../components/favPage/LikedAnimeCharacter";

function Favorites() {
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
            className="h-auto w-full flex flex-col items-center border-t-1 border-gray-300 bg-gray-200"
          >
            {/* ANIME FAVORITES SECTION */}
            <FavBlock title={"Anime"}>
              <LikedAnimeCharacter img={naruto} />
              <LikedAnimeCharacter img={demon_slayer} />
            </FavBlock>
            {/* CHARACTERS FAVORITES SECTION */}
            <FavBlock title={"Characters"}>
              <LikedAnimeCharacter img={denji} />
              <LikedAnimeCharacter img={zoro} />
            </FavBlock>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Favorites;
