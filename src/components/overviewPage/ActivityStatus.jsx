function ActivityStatus() {
  return (
    <>
      <div className="h-35 w-215">
        <div className="h-15 w-full flex justify-between items-center font-semibold text-xl text-gray-600">
          <div>Activity</div>
          <div className="text-md font-light mr-2">
            Filter
            <i className="bx bx-chevron-down flex justify-center items-center"></i>
          </div>
        </div>
        <form className="h-10 w-full flex flex-col items-center bg-white rounded-lg shadow-lg">
          <input
            className="h-full w-full pl-4"
            type="text"
            placeholder="Write a status..."
          />
        </form>
      </div>
    </>
  );
}

export default ActivityStatus;
