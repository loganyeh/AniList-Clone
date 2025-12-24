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
    haikyu,
    onepiece,
    frieren,
  } from "../../assets/animes";

function TrendingBlock({ title, children }) {
  return (
    <>
      <div className="h-auto w-full mb-15">
        <div className="h-17 w-full flex justify-between items-center">
          <div className="h-full w-1/2 flex justify-start items-center font-semibold text-gray-700 text-xl">
            {title}
          </div>
          <div className="h-full w-1/2 flex justify-end items-center font-semibold text-gray-500 text-md">
            View All
          </div>
        </div>
        <div className="h-auto w-full flex flex-wrap justify-around items-center">
          {children}
        </div>
      </div>
    </>
  );
}

export default TrendingBlock;
