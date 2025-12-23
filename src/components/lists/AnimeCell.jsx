
function AnimeCell({ animeCover, title, score, progress, type }) {
  return (
    <>
      <div className="h-20 w-full flex justify-around items-center text-lg font-light text-gray-800 hover:bg-blue-400">
        <div className="h-full w-1/2 flex items-center">
          <div
            className="h-17 w-17 flex justify-center items-center ml-6 bg-cover bg-center rounded"
            style={{ backgroundImage: `url(${animeCover})` }}
          ></div>
          <div className="h-full w-auto flex justify-center items-center ml-6">
            {title}
          </div>
        </div>
        <div className="h-full w-1/2 flex justify-around items-center">
          <span>{score}</span>
          <span>{progress}</span>
          <span>{type}</span>
        </div>
      </div>
    </>
  );
}

export default AnimeCell;
