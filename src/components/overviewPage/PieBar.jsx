function PieBar({ title, num, barColor, numColor }) {
  return (
    <>
      <div className={`h-9 w-full flex justify-between items-center ${barColor} rounded-lg`}>
        <div className="pl-3">{title}</div>
        <div className={`h-full w-14 flex justify-center items-center ${numColor} opacity-100 rounded-lg`}>
          {num}%
        </div>
      </div>
    </>
  );
}

export default PieBar;
