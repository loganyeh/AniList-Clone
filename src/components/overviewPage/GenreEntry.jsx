function GenreEntry({ num, color }) {
  return (
    <>
      <div className="h-full w-30 flex justify-center items-center text-gray-400 text-sm font-light">
        <span className={`pr-1 text-lg text-${color}-400`}>{num}</span>
        Entries
      </div>
    </>
  );
}

export default GenreEntry;
