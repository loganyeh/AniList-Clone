
function DropdownMenu({ children, height, menuName }) {
  return (
    <>
      <div id="list-div" className={`h-${height} w-59 mt-7 mr-16`}>
        <div className="h-1/12 w-full flex text-lg text-gray-500">{menuName}</div>
        <div className="h-11/12 w-full flex flex-col justify-around mt-3">
          {children}
        </div>
      </div>
    </>
  );
}

export default DropdownMenu;
