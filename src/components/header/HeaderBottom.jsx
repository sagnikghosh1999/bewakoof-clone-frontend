import { Link, useNavigate, createSearchParams } from "react-router-dom";
import { IoSearchOutline, IoBagOutline } from "react-icons/io5";
import { VscHeart } from "react-icons/vsc";
import { useState } from "react";
import DropDown from "./DropDown";
const HeaderBottom = () => {
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/search",
      search: createSearchParams({
        q: searchTerm,
      }).toString(),
    });
  };

  return (
    <div className="">
      <div className="w-screen  bg-white border-b border-[#cccccc] flex items-center justify-center ">
        <div className="xl:w-3/4 w-full px-4 xl:px-0 justify-between flex items-center h-full text-[#000000]/[0.8]">
          <div className=" flex items-center w-full justify-between">
            <ul className="flex items-center">
              <li>
                <Link to={"/"}>
                  <img
                    className="w-[150px] pr-4 pt-2.5 pb-2 xl:pr-5 xl:pt-3 xl:pb-2.5"
                    src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
                    alt="Bewakoof logo"
                  />
                </Link>
              </li>

              <li
                className={`px-4 pt-3 pb-2 xl:px-5 xl:pt-3.5 xl:pb-2.5 border-b-4 xl:text-[13px] text-[11px] font-semibold tracking-wider cursor-pointer ${
                  men ? "border-[#fdd835]" : " border-transparent "
                }`}
                onMouseEnter={() => setMen(true)}
                onMouseLeave={() => setMen(false)}
              >
                MEN
              </li>
              <li
                className={`px-4 pt-3 pb-2 xl:px-5 xl:pt-3.5 xl:pb-2.5 border-b-4 xl:text-[13px] text-[11px] font-semibold tracking-wider cursor-pointer ${
                  women ? "border-[#fdd835]" : " border-transparent "
                }`}
                onMouseEnter={() => setWomen(true)}
                onMouseLeave={() => setWomen(false)}
              >
                WOMEN
              </li>
              <li
                className={`px-4 pt-3 pb-2 xl:px-5 xl:pt-3.5 xl:pb-2.5 border-b-4 xl:text-[13px] text-[11px] font-semibold tracking-wider cursor-pointer ${
                  mobile ? "border-[#fdd835]" : " border-transparent "
                }`}
                onMouseEnter={() => setMobile(true)}
                onMouseLeave={() => setMobile(false)}
              >
                MOBILE COVERS
              </li>
            </ul>
            <div className="flex-1"></div>
            <ul className="flex items-center text-[13px] gap-x-4">
              <li className="lg:flex hidden ">
                <form
                  onSubmit={handleSearch}
                  className="flex items-center gap-1.5 h-[90%] text-[18px] rounded-md pl-2.5 bg-[#eeeeee] "
                >
                  <IoSearchOutline
                    className="cursor-pointer"
                    onClick={handleSearch}
                  />

                  <input
                    className=" rounded-md relative w-64 p-2.5 border-none bg-[#eeeeee] outline-none text-[10px] "
                    type="text"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="search by product,category or collection"
                  />
                </form>
              </li>
              <div className="h-6 w-[1px] bg-[#1e1e1e]" />
              <li className="text-[15px] cursor-pointer font-[550]">
                <Link to={"/login"}>Login</Link>
              </li>
              <li className="text-[18px] cursor-pointer">
                <Link to={"/wishlist"}>
                  <VscHeart />
                </Link>
              </li>
              <li className="text-[18px] cursor-pointer">
                <Link to={"/bag"}>
                  <IoBagOutline />
                </Link>
              </li>

              <li>
                <div className=" h-[30px] w-[30px] rounded-full cursor-pointer">
                  <img
                    src="https://images.bewakoof.com/web/india-flag-round-1639566913.png"
                    alt="Indian Flag"
                    className="h-[30px] w-[30px] rounded-full"
                  />
                </div>
              </li>
            </ul>
          </div>
          {men && (
            <div
              onMouseEnter={() => setMen(true)}
              onMouseLeave={() => setMen(false)}
            >
              <DropDown />
            </div>
          )}
          {women && (
            <div
              onMouseEnter={() => setWomen(true)}
              onMouseLeave={() => setWomen(false)}
            >
              <DropDown />
            </div>
          )}
          {mobile && (
            <div
              onMouseEnter={() => setMobile(true)}
              onMouseLeave={() => setMobile(false)}
            >
              <DropDown />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
