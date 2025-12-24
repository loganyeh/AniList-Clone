import Footer from "../components/Shell/Footer";
import GlobalNav from "../components/Shell/GlobalNav";
import BannerAndMidNav from "../components/Shell/BannerAndMidNav";
import ListSelectMenu from "../components/lists/sideBar/ListSelectMenu";
import ListTitles from "../components/lists/sideBar/ListTitles";
import StatsBlock from "../components/overviewPage/StatsBlock";
import ChartBlock from "../components/overviewPage/ChartBlock";
import BubbleTitle from "../components/overviewPage/BubbleTitle";
import ChartGraph from "../components/overviewPage/ChartGraph";
import ChartXAxis from "../components/overviewPage/ChartXAxis";
import PieChart from "../components/overviewPage/PieChart";

function Stats() {
  const animeStatsListTitles = ["Overview", "Genres", "Tags", "Voice Actors", "Studios", "Staff"]
  const mangaStatsListTitles = ["Overview", "Genres", "Tags", "Staff"]

  return (
    <>
      {/* DESIGNING THE ANIME LIST PAGE FIRST */}
      <div className="relative">
        <GlobalNav />

        <div id="anime-list-page" className="h-auto w-screen">
          <BannerAndMidNav />

          {/* ANIME LIST BODY */}
          <div
            id="profile-body"
            className="h-full w-full flex flex-row border-t-1 border-gray-300 bg-gray-200"
          >
            {/* NAVBAR */}
            <div className="h-full w-1/5 flex flex-col items-end">
              {/* LISTS CONTAINER */}
              <ListSelectMenu height={"70"} listName={"Anime Stats"}>
                {animeStatsListTitles.map((title, index) => {
                  return <ListTitles key={index} title={title} />
                })}
              </ListSelectMenu>
              <ListSelectMenu height={"50"} listName={"Manga Stats"}>
              {mangaStatsListTitles.map((title, index) => {
                  return <ListTitles key={index} title={title} />
                })}
              </ListSelectMenu>
            </div>

            <div className="h-auto w-8/12">
              <StatsBlock />

              {/* SCORE CHART BLOCK */}
              <ChartBlock
                title={"Score"}
                bubbleWidth={"w-95"}
                bubbleTitles={
                  <>
                    <BubbleTitle title={"Titles Watched"} />
                    <BubbleTitle title={"Hours Watched"} />
                  </>
                }
                chartGraphs={
                  <>
                    <ChartGraph
                      num={"1"}
                      chartWidthBorder={"w-1/7"}
                      chartWidth={"w-1/3"}
                      chartHeight={"h-1/12"}
                    />
                    <ChartGraph
                      num={"2"}
                      chartWidthBorder={"w-1/7"}
                      chartWidth={"w-1/3"}
                      chartHeight={"h-2/12"}
                    />
                    <ChartGraph
                      num={"8"}
                      chartWidthBorder={"w-1/7"}
                      chartWidth={"w-1/3"}
                      chartHeight={"h-6/12"}
                    />
                    <ChartGraph
                      num={"10"}
                      chartWidthBorder={"w-1/7"}
                      chartWidth={"w-1/3"}
                      chartHeight={"h-7/12"}
                    />
                    <ChartGraph
                      num={"12"}
                      chartWidthBorder={"w-1/7"}
                      chartWidth={"w-1/3"}
                      chartHeight={"h-8/12"}
                    />
                    <ChartGraph
                      num={"16"}
                      chartWidthBorder={"w-1/7"}
                      chartWidth={"w-1/3"}
                      chartHeight={"h-10/12"}
                    />
                    <ChartGraph
                      num={"5"}
                      chartWidthBorder={"w-1/7"}
                      chartWidth={"w-1/3"}
                      chartHeight={"h-4/12"}
                    />
                  </>
                }
                chartXTitles={
                  <>
                    <ChartXAxis num={"4"} xAxisBorder={"w-1/7"} />
                    <ChartXAxis num={"5"} xAxisBorder={"w-1/7"} />
                    <ChartXAxis num={"6"} xAxisBorder={"w-1/7"} />
                    <ChartXAxis num={"7"} xAxisBorder={"w-1/7"} />
                    <ChartXAxis num={"8"} xAxisBorder={"w-1/7"} />
                    <ChartXAxis num={"9"} xAxisBorder={"w-1/7"} />
                    <ChartXAxis num={"10"} xAxisBorder={"w-1/7"} />
                  </>
                }
              />

              {/* EPISDOES WATCHED BLOCK */}
              <ChartBlock
                title={"Episode Count"}
                bubbleWidth={"w-145"}
                bubbleTitles={
                  <>
                    <BubbleTitle title={"Titles Watched"} />
                    <BubbleTitle title={"Hours Watched"} />
                    <BubbleTitle title={"Mean Score"} />
                  </>
                }
                chartGraphs={
                  <>
                    <ChartGraph
                      num={"11"}
                      chartWidthBorder={"w-1/5"}
                      chartWidth={"w-1/4"}
                      chartHeight={"h-4/12"}
                    />
                    <ChartGraph
                      num={"8"}
                      chartWidthBorder={"w-1/5"}
                      chartWidth={"w-1/4"}
                      chartHeight={"h-2/12"}
                    />
                    <ChartGraph
                      num={"38"}
                      chartWidthBorder={"w-1/5"}
                      chartWidth={"w-1/4"}
                      chartHeight={"h-10/12"}
                    />
                    <ChartGraph
                      num={"10"}
                      chartWidthBorder={"w-1/5"}
                      chartWidth={"w-1/4"}
                      chartHeight={"h-4/12"}
                    />
                    <ChartGraph
                      num={"5"}
                      chartWidthBorder={"w-1/5"}
                      chartWidth={"w-1/4"}
                      chartHeight={"h-2/12"}
                    />
                  </>
                }
                chartXTitles={
                  <>
                    <ChartXAxis num={"1"} xAxisBorder={"w-1/5"} />
                    <ChartXAxis num={"2-6"} xAxisBorder={"w-1/5"} />
                    <ChartXAxis num={"7-16"} xAxisBorder={"w-1/5"} />
                    <ChartXAxis num={"17-28"} xAxisBorder={"w-1/5"} />
                    <ChartXAxis num={"101+"} xAxisBorder={"w-1/5"} />
                  </>
                }
              />

              {/* PIE CHARTS BLOCK */}
              <div className="h-85 w-full flex justify-around items-center mb-15">
                {/* PIE CHART 1 */}
                <PieChart
                  heading={"Format Distribution"}
                  title1={"TV"}
                  title2={"MOVIE"}
                  title3={"OVA"}
                  num1={"68"}
                  num2={"11"}
                  num3={"10"}
                />

                {/* PIE CHART 2 */}
                <PieChart
                  heading={"Status Distribution"}
                  title1={"TV"}
                  title2={"MOVIE"}
                  title3={"OVA"}
                  num1={"68"}
                  num2={"24"}
                  num3={"5"}
                />

                {/* PIE CHART 3 */}
                <PieChart
                  heading={"Country Distribution"}
                  title1={"TV"}
                  title2={"MOVIE"}
                  title3={"OVA"}
                  num1={"96"}
                  num2={"3"}
                  num3={"1"}
                />
              </div>

              {/* RELEASE YEAR BLOCK */}
              <ChartBlock
                title={"Release Year"}
                bubbleWidth={"w-145"}
                bubbleTitles={
                  <>
                    <BubbleTitle title={"Titles Watched"} />
                    <BubbleTitle title={"Hours Watched"} />
                    <BubbleTitle title={"Mean Score"} />
                  </>
                }
                chartXTitles={
                  <>
                    <ChartXAxis num={"2021"} xAxisBorder={"w-auto"} />
                    <ChartXAxis num={"2022"} xAxisBorder={"w-auto"} />
                    <ChartXAxis num={"2023"} xAxisBorder={"w-auto"} />
                    <ChartXAxis num={"2024"} xAxisBorder={"w-auto"} />
                    <ChartXAxis num={"2025"} xAxisBorder={"w-auto"} />
                    <ChartXAxis num={"2026"} xAxisBorder={"w-auto"} />
                  </>
                }
              />

              {/* Watch YEAR BLOCK */}
              <ChartBlock
                title={"Watch Year"}
                bubbleWidth={"w-145"}
                bubbleTitles={
                  <>
                    <BubbleTitle title={"Titles Watched"} />
                    <BubbleTitle title={"Hours Watched"} />
                    <BubbleTitle title={"Mean Score"} />
                  </>
                }
                chartXTitles={
                  <>
                    <ChartXAxis num={"2023"} />
                    <ChartXAxis num={"2024"} />
                    <ChartXAxis num={"2025"} />
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Stats;
