
function LikedAnimeCharacter({ img }) {
  return (
    <>
      <div
        className="h-50 w-40 flex flex-row justify-start m-5 bg-center bg-cover rounded-xl"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </>
  );
}

export default LikedAnimeCharacter;
