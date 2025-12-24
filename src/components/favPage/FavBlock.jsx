
function FavBlock({children, title}) {

  return (
    <>
      <div className="h-auto w-10/12 mt-10 mb-15">
        <div className="h-1/5 w-full flex justify-between items-center">
          <span className="font-semibold text-gray-800 text-lg">{title}</span>
          <div className="h-10 w-26 flex justify-center items-center bg-blue-500 font-semibold text-white text-lg rounded">
            Reorder
          </div>
        </div>
        <div className="h-4/5 w-full mt-4 flex justify-start flex-wrap bg-white rounded">
          {children}
        </div>
      </div>
    </>
  );
}

export default FavBlock;
