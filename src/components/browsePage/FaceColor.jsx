function FaceColor({ faceColor }) {
  return (
    <>
      <div className="h-full w-1/4 flex justify-center items-center">
        <i class={`bx bx-smile text-5xl ${faceColor}`}></i>
      </div>
    </>
  );
}

export default FaceColor;
