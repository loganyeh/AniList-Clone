import { rukia, logo } from "../../assets/animes";
import { Link } from "react-router-dom";

function GlobalNav() {
  const linkData = [
    {to: "/wip", title: "Home"},
    {to: "/overview", title: "Profile"},
    {to: "/", title: "Anime List"},
    {to: "/mangalist", title: "Manga List"},
    {to: "/browse", title: "Browse"},
    {to: "/wip", title: "Forum"},
  ]

  return (
    <>
      <div className="absolute h-24 w-full flex bg-gray-900 opacity-100">
        <div className="h-full w-1/4 flex justify-center items-center">
          <div
            className="h-20 w-20 bg-center bg-cover"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
        </div>
        {/* MIDDLE NAV ELEMENTS */}
        <div className="h-full w-2/4">
          <div className="h-full w-full flex justify-between items-center font-light text-xl text-gray-200">
            {linkData.map((link, index) => {
              return <Link key={index} to={link.to} className="hover:text-white">{link.title}</Link>
            })}
          </div>
        </div>
        {/* RIGHT SEARCH & PROFILE */}
        <div className="h-full w-1/4 flex justify-center items-center">
          <div className="h-full w-auto flex justify-between items-center">
            <i className="w-12 bx bx-search text-white text-3xl"></i>
            <div
              className="h-14 w-14 bg-center bg-cover rounded"
              style={{ backgroundImage: `url(${rukia})` }}
            ></div>
            <i className="w-10 bx bx-chevron-down text-white text-3xl"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default GlobalNav;
