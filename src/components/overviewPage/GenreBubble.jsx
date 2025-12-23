function GenreBubble({ title, color }) {
  return (
    <>
      <div className={`h-full w-30 flex justify-center items-center text-white text-xl font-light bg-${color}-400 rounded-lg`}>
        {title}
      </div>
    </>
  );
}

export default GenreBubble;
