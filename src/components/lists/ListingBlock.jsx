
function ListingBlock({ headingTitle, progressTitle, children }) {
  return (
    <>
      <div className="h-auto w-11/12 pb-15">
        <div className="h-12 w-full flex items-start pl-4 text-2xl font-light text-gray-800">
          {headingTitle}
        </div>

        <div className="bg-white rounded">
          <div
            id="watching-header"
            className="h-20 w-full flex justify-between items-center text-xl font-medium text-gray-800"
          >
            <div className="h-full w-1/2 flex items-center pl-29 ">Title</div>
            <div className="h-full w-1/2 flex justify-around items-center">
              <span>Score</span>
              <span>{progressTitle}</span>
              <span>Type</span>
            </div>
          </div>

          {children}
        </div>
      </div>
    </>
  );
}

export default ListingBlock;
