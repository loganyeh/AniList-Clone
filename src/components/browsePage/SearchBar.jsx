function SearchBar() {
  return (
    <>
      <div className="h-30 w-70">
        <div className="h-1/2 w-full flex justify-start items-center pl-2 text-xl font-semibold text-gray-700">
          Search
        </div>
        <div className="h-14 w-11/12 flex justify-between ml-4 bg-white rounded-lg shadow-lg">
          <div className="h-full w-15 flex justify-center items-center">
            <i className="bx bx-search text-2xl text-gray-400"></i>
          </div>
          <input type="text" className="h-full w-47 text-xl text-gray-600" />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
