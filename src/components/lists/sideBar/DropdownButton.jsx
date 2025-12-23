function DropdownButton({ dropdownName }) {
  return (
    <>
      <button className="h-10 w-full flex justify-start items-center mt-1 pl-4 bg-white text-md text-gray-400 rounded">
        <div className="w-full flex justify-between pr-4">
          <span>{dropdownName}</span>
          <span><i className='bx bx-chevron-down text-lg'></i></span>
        </div>
      </button>
    </>
  );
}

export default DropdownButton;
