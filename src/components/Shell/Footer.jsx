
function Footer() {

  return (
    <>
      {/* ============================ */}
      {/* FOOTER */}
      {/* ============================ */}
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
        {/* COLUMN 1 */}
        <div className="h-2/3 w-2/12 flex flex-col">
          <span className="p-3">Logout</span>
          <span className="p-3">Donate</span>
          <span className="p-3">Anilist.co</span>
          <span className="p-3">AniChart.net</span>
        </div>
        {/* COLUMN 2 */}
        <div className="h-2/3 w-2/12 flex flex-col">
          <span className="p-3">Apps</span>
          <span className="p-3">Site Stats</span>
          <span className="p-3">Recommendations</span>
          <span className="p-3">API</span>
        </div>
        {/* COLUMN 3 */}
        <div className="h-2/3 w-2/12 flex flex-col">
          <span className="p-3">Discord</span>
          <span className="p-3">Twitter</span>
          <span className="p-3">Bluesky</span>
          <span className="p-3">Facebook</span>
          <span className="p-3">Github</span>
        </div>
        {/* COLUMN 4 */}
        <div className="h-2/3 w-2/12 flex flex-col">
          <span className="p-3">Add Data</span>
          <span className="p-3">Moderators</span>
          <span className="p-3">Contact</span>
          <span className="p-3">Terms & Privacy</span>
          <span className="p-3">Site Map</span>
        </div>
      </div>
      {/* ============================ END OF FOOTER  */}
    </>
  );
}

export default Footer;
