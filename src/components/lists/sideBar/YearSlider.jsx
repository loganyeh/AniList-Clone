function YearSlider() {
  return (
    <>
      <div id="list-div" className="h-20 w-59 flex flex-col mt-7 mr-16">
        <div className="h-12 w-full flex items-center text-lg text-gray-500">
          Year
        </div>
        {/* INNER NESTED */}
        <div className="h-2 w-full flex flex-col justify-around mt-1 bg-white"></div>
      </div>
    </>
  );
}

export default YearSlider;
