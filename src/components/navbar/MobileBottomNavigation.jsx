import { Link, useLocation } from "react-router-dom";
import { bottomNavItems } from "../../assets/data/data";

const MobileBottomNavigation = () => {
  const { pathname } = useLocation();
  const active = pathname.split("/")[1] || "home";
  return (
    <div className="fixed bottom-0 z-10 min-h-[56px] bg-[#fff] w-full shadow-md">
      <ul className="flex items-center justify-evenly">
        {bottomNavItems.map((item, i) => (
          <li key={i} className="py-2 w-1/4">
            <Link to={`/${item.title === "home" ? "" : item.title}`}>
              <div className="text-[#0e0e0e] text-[11px] tracking-[-0.12px] text-center px-2.5 cursor-pointer">
                {" "}
                <img
                  src={item.title === active ? item.url_active : item.url}
                  alt={item.title}
                  className="mx-auto w-6 h-6"
                />
                <span
                  className={`capitalize font-bold ${
                    active === item.title ? "text-[#000]" : "text-[#757575]"
                  }`}
                >
                  {item.title}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileBottomNavigation;
