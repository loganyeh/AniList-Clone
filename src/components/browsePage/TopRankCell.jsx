function TopRankCell({ num, anime, title }) {
  return (
    <>
      <div className="h-auto w-full mb-8 flex flex-wrap justify-around items-center">
        <div className="h-30 w-full flex">
          <div className="h-full w-1/12 flex justify-center items-center font-semibold text-gray-500 text-4xl">
            #{num}
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
                <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                  adventure
                </div>
                <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                  drama
                </div>
                <div className="h-1/2 w-45 flex justify-center items-center font-light text-lg bg-green-400 rounded-full">
                  fantasy
                </div>
              </div>
            </div>
            {/* ANIME SCORING PERCENTAGE */}
            <div className="h-full w-6/12 flex">
              {/* PERCENTAGE */}
              <div className="h-full w-1/3 flex">
                <div className="h-full w-1/4 flex justify-center items-center">
                  <i class="bx bx-smile text-5xl text-green-500"></i>
                </div>
                <div className="h-full w-3/4">
                  <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                    91%
                  </div>
                  <div className="h-1/2 w-full font-normal text-gray-500">
                    361451 users
                  </div>
                </div>
              </div>
              {/* TV SHOW */}
              <div className="h-full w-1/3 flex justify-center items-center">
                <div className="h-full w-3/4">
                  <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                    TV Show
                  </div>
                  <div className="h-1/2 w-full font-normal text-gray-500">
                    28 episodes
                  </div>
                </div>
              </div>
              {/* FALL 2023 */}
              <div className="h-full w-1/3 flex justify-center items-center">
                <div className="h-full w-3/4">
                  <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
                    Fall 2023
                  </div>
                  <div className="h-1/2 w-full font-normal text-gray-500">
                    Finished
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopRankCell;
