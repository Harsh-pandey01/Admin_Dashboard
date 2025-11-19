import React, { useState } from "react";
import { Outlet } from "react-router";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

function Layout() {
  const [isToggleOpen, setIsSmallToggleOpen] = useState(false);

  return (
    <div>
      <Header setIsSmallToggleOpen={setIsSmallToggleOpen} />
      <div className="h-[calc(100vh-60px)] flex ">
        <Sidebar isToggleOpen={isToggleOpen} />
        <div className="flex-1 overflow-y-scroll custom-scrollbar">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
