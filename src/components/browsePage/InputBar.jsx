function InputBar({ title }) {
  return (
    <>
      <div className="h-30 w-70">
        <div className="h-1/2 w-full flex justify-start items-center pl-2 text-xl font-semibold text-gray-700">
          {title}
        </div>
        <div className="h-14 w-11/12 flex justify-between ml-4 bg-white rounded-lg shadow-lg">
          <input
            type="text"
            className="h-full w-52 ml-3 pl-3 text-xl"
            placeholder="Any"
          />
          <div className="h-full w-10 flex justify-center items-center">
            <i className="bx bx-chevron-down pr-4 text-3xl text-gray-400"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputBar;
