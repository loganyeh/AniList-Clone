function CatBubble({ category, color }) {
  return (
    <>
      <div className={`h-1/2 w-45 flex justify-center items-center font-light text-lg ${color} rounded-full`}>
        {category}
      </div>
    </>
  );
}

export default CatBubble;
