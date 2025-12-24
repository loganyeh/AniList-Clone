function TopRankCell({ rank, anime, title, cats, faceColor, children }) {
  return (
    <>
      <div className="h-auto w-full mb-8 flex flex-wrap justify-around items-center">
        <div className="h-30 w-full flex">
          <div className="h-full w-1/12 flex justify-center items-center font-semibold text-gray-500 text-4xl">
            #{rank}
          </div>
          <div className="h-full w-11/12 flex bg-white rounded-lg shadow-md">
            {/* ANIME COVER */}
            <div className="h-full w-1/12 flex justify-center items-center">
              <div
                className="h-25 w-20 bg-center bg-cover rounded"
                style={{ backgroundImage: `url(${anime})` }}
              ></div>
            </div>
            {/* TITLE CARD & CATEGORIES */}
            <div className="h-full w-5/12">
              <div className="h-1/2 w-full flex justify-center items-center text-gray-700 font-semibold text-xl">
                {title}
              </div>
              <div className="h-1/2 w-full flex justify-around items-center">
                {children}
              </div>
            </div>
            {/* ANIME SCORING PERCENTAGE */}
            <div className="h-full w-6/12 flex">
                {cats}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopRankCell;
