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
} from "../../assets/animes";
import {
  denji,
  giyuu,
  ichigo,
  itadori,
  okarun,
  zoro,
} from "../../assets/characters";

function FavoriteBlock({ children, title, height }) {
  return (
    <>
      {/* ANIME SHOWS */}
      <div className={`h-${height} w-auto mt-5`}>
        <div className="h-15 w-full flex items-center font-semibold text-xl text-gray-600">
          {title}
        </div>
        <div className="min-h-100 w-full flex justify-around flex-wrap p-5 bg-white rounded-lg shadow-lg">
          {children}
        </div>
      </div>
    </>
  );
}

export default FavoriteBlock;
