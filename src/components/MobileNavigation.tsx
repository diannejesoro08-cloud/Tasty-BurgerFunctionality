import { Link, useLocation } from "react-router-dom";
import navigationMenu from "../constants/navigationMenu.json";

function MobileNavigation() {
  const { pathname } = useLocation();
  return (
    <nav className="flex flex-col p-4 w-full">
      <ul className="flex flex-col gap-4 w-full">
        {navigationMenu.mainMenu.map((item, index) => (
          <li key={index} className="w-full">
            <Link to={item.link} className={`block px-2 py-2 border-b-2 transition-colors ${pathname === item.link || (item.link === "/#contact" && pathname === "/") ? "text-yellow-400 border-yellow-400" : "border-transparent text-white"}`}>
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default MobileNavigation;
