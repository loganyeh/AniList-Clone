
function TotalBlock({ watchedTitle, totalWatched, timeTitle, time, mean, firstNum, secondNum, thirdNum }) {

  return (
    <>
      <div className="h-70 w-215 mt-15">
        <div className="h-55 w-full flex flex-col items-center bg-white rounded-lg shadow-lg">
          <div className="h-55 w-full mt-4 flex justify-between items-center">
            <div className="h-full w-1/3 flex flex-col justify-center items-center">
              <div className="font-semibold text-xl text-blue-400">{totalWatched}</div>
              <div className="font-light text-lg text-gray-500">
                {watchedTitle}
              </div>
            </div>
            <div className="h-full w-1/3 flex flex-col justify-center items-center">
              <div className="font-semibold text-xl text-blue-400">{time}</div>
              <div className="font-light text-lg text-gray-500">
                {timeTitle}
              </div>
            </div>
            <div className="h-full w-1/3 flex flex-col justify-center items-center">
              <div className="font-semibold text-xl text-blue-400">{mean}</div>
              <div className="font-light text-lg text-gray-500">Mean Score</div>
            </div>
          </div>

          <div className="h-1/3 w-full flex flex-wrap bg-gray-300">
            <div className="h-12 w-full flex justify-around items-center text-md text-gray-600 font-light">
              <div className="h-full w-1/3 flex justify-center items-center">
                {firstNum}
              </div>
              <div className="h-full w-1/3 flex justify-center items-center">
                {secondNum}
              </div>
              <div className="h-full w-1/3 flex justify-center items-center">
                {thirdNum}
              </div>
            </div>
            <div className="h-3 w-1/2 bg-blue-400 rounded-bl-sm rounded-r-sm"></div>
            <div className="h-3 w-1/2 bg-gray-400 rounded-br-sm"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TotalBlock;
