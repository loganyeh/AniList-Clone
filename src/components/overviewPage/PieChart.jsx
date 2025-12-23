import PieBar from "./PieBar";

function PieChart({ heading, title1, title2, title3, num1, num2, num3 }) {
  return (
    <>
      {/* PIE CHART 1 */}
      <div className="h-full w-1/4 flex flex-col items-center bg-white rounded-xl shadow-lg">
        <div className="h-2/12 w-10/12 flex items-center text-xl font-semibold text-gray-500">
          {heading}
        </div>

        <div className="h-5/12 w-10/12 flex justify-center items-center text-xl font-semibold text-gray-500">
          <i className="bx bx-pie-chart-alt-2 text-9xl"></i>
        </div>

        <div className="h-5/12 w-10/12 flex flex-col justify-around text-md font-semibold text-white">
            <PieBar title={title1} num={num1} barColor={"bg-blue-400"} numColor={"bg-blue-300"} />
            <PieBar title={title2} num={num2} barColor={"bg-gray-700"} numColor={"bg-gray-400"} />
            <PieBar title={title3} num={num3} barColor={"bg-red-500"} numColor={"bg-red-300"} />
        </div>
      </div>
    </>
  );
}

export default PieChart;
