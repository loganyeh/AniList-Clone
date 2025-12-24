import Footer from "../components/Shell/Footer";
import GlobalNav from "../components/Shell/GlobalNav";
import BannerAndMidNav from "../components/Shell/BannerAndMidNav";
import FavBlock from "../components/favPage/FavBlock";
import LikedAnimeCharacter from "../components/favPage/LikedAnimeCharacter";
// animeData 
import { favAnimes, favCharacters } from "../data/animeDataArrays";

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
              {favAnimes.map((anime, index) => {
                return <LikedAnimeCharacter key={index} img={anime.cover} />
              })}
            </FavBlock>
            {/* CHARACTERS FAVORITES SECTION */}
            <FavBlock title={"Characters"}>
              {favCharacters.map((char, index) => {
                return <LikedAnimeCharacter key={index} img={char.character} />
              })}
            </FavBlock>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Favorites;
