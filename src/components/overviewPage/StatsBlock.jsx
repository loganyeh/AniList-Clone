import StatCell from "./StatCell";

function StatsBlock() {
  return (
    <>
      <div className="h-80 w-11/12 flex flex-wrap my-15">
        <StatCell icon={"bx-tv"} num={"73"} subtitle={"Total Anime"}/>
        <StatCell icon={"bx-play"} num={"1725"} subtitle={"Episodes Watched"}/>
        <StatCell icon={"bx-calendar-alt"} num={"28.4"} subtitle={"Days Watched"}/>
        <StatCell icon={"bx-hourglass"} num={"40.3"} subtitle={"Days Planned"}/>
        <StatCell icon={"bx-plus"} num={"78.15"} subtitle={"Mean Score"}/>
        <StatCell icon={"bx-minus"} num={"14.4"} subtitle={"Standard Deviation"}/>
      </div>
    </>
  );
}

export default StatsBlock;
