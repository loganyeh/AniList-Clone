import FooterCol from "./FooterCol"

function Footer() {
  const column1 = ["Logout", "Donate", "Anilist.co", "AniChart.net"]
  const column2 = ["Apps", "Site Stats", "Recommendations", "API"]
  const column3 = ["Discord", "Twitter", "Bluesky", "Facebook", "Github"]
  const column4 = ["Add Data", "Moderators", "Contact", "Terms & Privacy", "Site Map"]

  return (
    <>
      {/* FOOTER CONTAINER */}
      <div className="h-90 w-full flex flex-row justify-center items-center bg-gray-900 font-light text-xl text-gray-200">
        {/* SITE THEME SECTION */}
        <div className="h-1/3 w-4/12 flex justify-center">
          <div className="flex flex-col justify-start items-center">
            <div className="w-full font-normal text-3xl text-blue-400 whitespace-nowrap">
              Site Theme
            </div>
            <div className="w-full flex justify-start text-4xl">
              <i className="bx bx-sun p-2"></i>
              <i className="bx bxs-sun p-2"></i>
              <i className="bx bx-moon p-2"></i>
              <i className="bx bxs-moon p-2"></i>
            </div>
          </div>
        </div>

        <FooterCol>
          {column1.map((row, index) => {
            return <span key={index} className="p-3 hover:text-blue-400 active:text-blue-500 cursor-pointer">{row}</span>
          })}
        </FooterCol>
        <FooterCol>
          {column2.map((row, index) => {
            return <span key={index} className="p-3 hover:text-blue-400 active:text-blue-500 cursor-pointer">{row}</span>
          })}
        </FooterCol>
        <FooterCol>
          {column3.map((row, index) => {
            return <span key={index} className="p-3 hover:text-blue-400 active:text-blue-500 cursor-pointer">{row}</span>
          })}
        </FooterCol>
        <FooterCol>
          {column4.map((row, index) => {
            return <span key={index} className="p-3 hover:text-blue-400 active:text-blue-500 cursor-pointer">{row}</span>
          })}
        </FooterCol>

      </div>
    </>
  );
}

export default Footer;
