
function ActivityBlock() {
  return (
    <>
      <div className="h-auto w-auto">
        <div className="h-15 w-full flex items-center font-semibold text-xl text-gray-600">
          Activity History
        </div>
        <div className="h-65 w-full flex flex-wrap p-5 bg-white rounded-lg shadow-lg">
          <div className="h-5 w-5 m-1 bg-blue-400 rounded"></div>
          <div className="h-5 w-5 m-1 bg-blue-400 rounded"></div>
        </div>
      </div>
    </>
  );
}

export default ActivityBlock;
