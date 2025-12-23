
function ChartGraph({ num, chartWidthBorder, chartHeight, chartWidth }) {
    
  return (
    <>
      <div className={`h-full ${chartWidthBorder} flex flex-col justify-end items-center`}>
        <span className="font-bold text-gray-600 text-md">{num}</span>
        <div className={`${chartHeight} ${chartWidth} bg-blue-400 rounded-t-lg`}></div>
      </div>
    </>
  );
}

export default ChartGraph;
