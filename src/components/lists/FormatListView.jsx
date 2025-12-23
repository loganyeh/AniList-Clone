function FormatListView() {
  return (
    <>
      <div className="h-20 w-11/12 mt-5 flex justify-end items-center">
        <div className="h-auto w-auto flex justify-center items-center bg-white rounded">
          <i className="bx bx-list-ul h-full w-1/3 flex justify-center items-center m-2 text-3xl text-blue-400 cursor-pointer"></i>
          <i className="bx bx-list-ol h-full w-1/3 flex justify-center items-center m-2 text-3xl cursor-pointer"></i>
          <i className="bx bxs-grid-alt h-full w-1/3 flex justify-center items-center m-2 text-3xl cursor-pointer"></i>
        </div>
      </div>
    </>
  );
}

export default FormatListView;
