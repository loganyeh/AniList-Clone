function ListSelectMenu({ height, children, listName }) {
  return (
    <>
      <div id="list-div" className={`h-${height} w-59 flex flex-col mt-8 mr-16`}>
        <div className="h-1/12 w-full flex items-center text-lg text-gray-500">
          {listName}
        </div>
        {/* -------------------- */}
        <div className="h-11/12 w-full flex flex-col justify-around mt-2">
          {children}
        </div>
      </div>
    </>
  );
}

export default ListSelectMenu;
