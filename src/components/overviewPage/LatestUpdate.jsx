function LatestUpdate({ img, title, text, time }) {
  return (
    <>
      {/* 1 WATCH HISTORY */}
      <div className="h-25 w-215 my-3 flex bg-white rounded-lg shadow-md">
        <div
          className="h-full w-20 bg-center bg-cover rounded-l-lg"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="h-full w-10/12 flex justify-center items-center">
          <div className="h-1/2 w-full flex items-center pl-4 font-light text-lg text-gray-500">
            {text}
            <span className="pl-1 font-light text-lg text-blue-400">
              {title}
            </span>
          </div>
        </div>
        <div className="h-full w-2/12 flex flex-col items-center justify-center">
          <div className="h-1/2 w-full flex justify-center items-center font-normal text-lg text-gray-600">
            {time}
          </div>
          <div className="h-1/2 w-8/12 flex justify-end items-center">
            <i className="bx bxs-chat h-auto w-auto mr-1 text-blue-300 text-2xl"></i>
            <i className="bx bxs-heart h-auto w-auto text-blue-300 text-2xl"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestUpdate;
