import React from "react";
import { Link } from "react-router";

function Sidebar({ isToggleOpen }) {
  return (
    <div
      className={`
    fixed h-full w-50 border-r border-r-border   font-grot bg-primary
    transform transition-all duration-200 ease-in-out

    ${isToggleOpen ? "translate-x-0" : "-translate-x-full"}   

    sm:static sm:translate-x-0                             
  `}
    >
      <div
        className={`absolute h-full w-screen left-0 top-0 bg-black/20 sm:hidden ${
          isToggleOpen ? "" : "hidden"
        }   z-0`}
      ></div>
      <div className="relative px-2 py-2 z-1 h-full bg-primary">
        <Link to={"/"}>
          <div className="px-2 py-2 hover:bg-secondry cursor-pointer rounded-md border border-transparent hover:border-border transition-all duration-100">
            Dashboard
          </div>
        </Link>
        <Link to={"products"}>
          <div className="px-2 py-2 hover:bg-secondry cursor-pointer rounded-md border border-transparent hover:border-border transition-all duration-100">
            Products
          </div>
        </Link>
        <Link to={"orders"}>
          <div className="px-2 py-2 hover:bg-secondry cursor-pointer rounded-md border border-transparent hover:border-border transition-all duration-100">
            Orders
          </div>
        </Link>
        <Link to={"settings"}>
          <div className="px-2 py-2 hover:bg-secondry cursor-pointer rounded-md border border-transparent hover:border-border transition-all duration-100">
            Setting
          </div>
        </Link>
        <Link to={"profile"}>
          <div className="px-2 py-2 hover:bg-secondry cursor-pointer rounded-md border border-transparent hover:border-border transition-all duration-100">
            Profile
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
