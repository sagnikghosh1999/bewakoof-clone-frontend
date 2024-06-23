import { BsPhone } from "react-icons/bs";

function HeaderTop() {
  return (
    <div className="h-6 w-screen z-50 bg-[#eeeeee] flex items-center justify-center">
      <div className="xl:w-3/4 w-full px-4 xl:px-0 justify-between flex items-center h-full  font-medium">
        <div className="flex gap-5 text-[10px] ">
          <div className="cursor-pointer hover:underline">Offers</div>
          <div className="cursor-pointer hover:underline">Fanbook</div>
          <div className="flex gap-1 items-center cursor-pointer hover:underline">
            <BsPhone />
            Download App
          </div>
          <div className="cursor-pointer hover:underline">TriBe Membership</div>
        </div>
        <div className="flex gap-4 text-[11px]">
          <div className="cursor-pointer hover:underline">Contact Us</div>
          <div className="cursor-pointer hover:underline">Track Order</div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
