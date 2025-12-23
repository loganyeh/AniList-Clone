function StatCell({ icon, num, subtitle}) {
  return (
    <>
      <div className="h-1/2 w-1/3 flex justify-center items-center">
        <div className="h-16 w-16 flex justify-center items-center ml-20 bg-white rounded-full shadow-md">
          <i className={`bx ${icon} text-4xl text-gray-500`}></i>
        </div>
        <div className="h-full w-1/2 flex flex-col justify-center items-center ml-6">
          <div className="h-20 w-full flex justify-start items-end text-blue-400 text-5xl font-semibold">
            {num}
          </div>
          <div className="h-15 w-full flex justify-start items-start text-gray-500 text-lg font-semibold whitespace-nowrap">
            {subtitle}
          </div>
        </div>
      </div>
    </>
  );
}

export default StatCell;
