import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const items = [
  {
    title: "my orders",
    desc: "View, modify and track orders",
    url: "/account/orders",
  },
  { title: "my payments", desc: "View and modify payment methods" },
  {
    title: "my wallet",
    desc: "Bewakoof Wallet History and redeemed gift cards",
  },
  { title: "my addresses", desc: "Edit, add or remove addresses" },
  { title: "my profile", desc: "Edit personal info, change password" },
  { title: "refer and earn", desc: "Invite your friends and earn rewards" },
];

const AccountContainer = () => {
  return (
    <div className="xl:w-[80%] xl:mx-auto md:mx-6 sm:mx-4 mx-2 py-4 md:pb-8">
      <div className=" hidden md:block py-8 px-4">
        <div className=" font-bold text-[1.7em] text-[#181818] leading-[1.8em] ">
          My Account
        </div>
        <div className="w-[117px] h-[2px] bg-[#fbd139] mt-[6px] mr-[2px] "></div>
      </div>
      <div className="grid md:grid-cols-3  gap-3">
        {items.map((item) => (
          <Link to={item.url || "#"}>
            <div className=" border border-[#969696] rounded-xl py-6 px-4 md:h-32">
              <div className="flex items-center ">
                <span className="text-[#181818] capitalize text-[16px] tracking-[0.1px] font-medium ">
                  {item.title}
                </span>
                <span className="text-[20px] ml-4 text-[#181818] opacity-70">
                  <BsChevronRight />
                </span>
              </div>
              <p className="text-sm tracking-tighter text-[#181818] opacity-50 my-2">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AccountContainer;
