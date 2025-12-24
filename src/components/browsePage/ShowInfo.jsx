function ShowInfo({ children, title, subtitle }) {
  return (
    <>
      <div className="h-full w-1/3 flex">
        {children}
        <div className="h-full w-3/4">
          <div className="h-1/2 w-full flex justify-start items-end text-xl text-gray-800">
            {title}
          </div>
          <div className="h-1/2 w-full font-normal text-gray-500">
            {subtitle} 
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowInfo;
