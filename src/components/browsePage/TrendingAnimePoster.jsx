function TrendingAnimePoster({ anime, title }) {
  return (
    <>
      <div className="h-full w-63 m-2">
        <div
          className="h-80 w-full bg-center bg-cover rounded-xl shadow-md"
          style={{ backgroundImage: `url(${anime})` }}
        ></div>
        <div className="h-10 w-full flex items-center pl-2 text-gray-600 font-semibold text-lg">
          {title}
        </div>
      </div>
    </>
  );
}

export default TrendingAnimePoster;
