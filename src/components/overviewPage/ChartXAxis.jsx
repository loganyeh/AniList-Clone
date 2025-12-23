function ChartXAxis({ num, xAxisBorder }) {
  return (
    <>
      <div
        className={`h-full ${xAxisBorder} flex justify-center items-center font-bold text-gray-600 text-lg`}
      >
        {num}
      </div>
    </>
  );
}

export default ChartXAxis;
