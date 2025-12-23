import ChartXAxis from "./ChartXAxis";

function ChartBlock({ title, bubbleWidth, bubbleTitles, chartGraphs, chartXTitles }) {
  return (
    <>
      <div className="h-80 w-full mb-25">
        {/* TITLE - SCORE */}
        <div className="h-1/5 w-full flex justify-between items-center">
          <div className="h-full w-1/3 flex justify-start items-center text-2xl text-gray-600 font-semibold">
            {title}
          </div>
          <div className={`h-12 ${bubbleWidth} flex justify-around items-center text-lg font-semibold text-gray-500 bg-white rounded-full`}>
            {bubbleTitles}
          </div>
        </div>

        {/* CHART - SCORE */}
        <div className="h-70 w-full bg-white rounded-xl shadow-lg">
          <div className="h-3/4 w-full flex">
            {chartGraphs}
          </div>
          <div className="h-1/4 w-full flex justify-around bg-gray-300 rounded-b-xl">
            {chartXTitles}
          </div>
        </div>
      </div>
    </>
  );
}

export default ChartBlock;
