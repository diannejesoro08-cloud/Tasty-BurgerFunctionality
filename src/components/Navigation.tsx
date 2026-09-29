import { Link, useLocation } from "react-router-dom";
import navigationMenu from "../constants/navigationMenu.json";

function Navigation() {
  const { pathname } = useLocation();
  return (
    <nav className="hidden lg:flex">
      <ul className="flex flex-row gap-4">
        {navigationMenu.mainMenu.map((item, index) => {
          const active = item.link.startsWith("/#")
            ? pathname === "/"
            : pathname === item.link;
          return (
            <li className="group" key={index}>
              <Link to={item.link} className={`px-2 py-2 border-b-2 transition-colors group-hover:border-yellow-400 group-hover:text-yellow-400 ${active ? "text-yellow-400 border-yellow-400" : "border-transparent text-white"}`}>
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
