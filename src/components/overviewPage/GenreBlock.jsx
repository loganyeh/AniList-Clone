import GenreBubble from "./GenreBubble";
import GenreEntry from "./GenreEntry";

function GenreBlock() {
  return (
    <>
      <div className="h-auto w-auto mt-5">
        <div className="h-15 w-full flex items-center font-semibold text-xl text-gray-600">
          Genre Overview
        </div>
        <div className="h-24 w-full flex flex-col items-center bg-white rounded-lg shadow-lg">
          <div className="h-1/3 w-130 mt-4 flex justify-between items-center">
            <GenreBubble title={"Comedy"} color={"green"} />
            <GenreBubble title={"Action"} color={"blue"} />
            <GenreBubble title={"Supernatural"} color={"purple"} />
            <GenreBubble title={"Drama"} color={"pink"} />
          </div>
          <div className="h-1/3 w-130 flex justify-between items-center">
            <GenreEntry num={"51"} color={"green"} />
            <GenreEntry num={"46"} color={"blue"} />
            <GenreEntry num={"38"} color={"purple"} />
            <GenreEntry num={"33"} color={"pink"} />
          </div>


          <div className="h-1/3 w-full flex items-end">
            <div className="h-3 w-4/12 bg-green-400 rounded-bl-sm"></div>
            <div className="h-3 w-2/12 bg-blue-400"></div>
            <div className="h-3 w-2/12 bg-purple-400"></div>
            <div className="h-3 w-2/12 bg-pink-400"></div>
            <div className="h-3 w-1/12 bg-red-500"></div>
            <div className="h-3 w-1/12 bg-orange-400"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GenreBlock;
