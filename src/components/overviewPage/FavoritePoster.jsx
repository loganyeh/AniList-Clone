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

function FavoritePoster({ img }) {
  return (
    <>
      <div
        className="h-40 w-30 bg-center bg-cover rounded"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </>
  );
}

export default FavoritePoster;
