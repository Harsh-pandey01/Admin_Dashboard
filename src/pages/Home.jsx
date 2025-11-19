import React from "react";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { FaChevronUp } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import SimpleAreaChart from "../component/AreaChart";

function Home() {
  return (
    <div className="p-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-secondry px-5 py-5 w-full  shadow-md rounded-md ">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-grot">Users</h1>
            <div className="text-2xl flex items-center gap-2 font-grot text-green-500">
              <FaChevronUp className="text-sm" /> +5 %
            </div>
          </div>
          <div className="mt-10 text-5xl font-grot font-semibold text-secText">
            <h1>720</h1>
          </div>
          <div className="mt-5 flex justify-between items-center">
            <p className="text-sm font-robo text-secText  hover:text-text cursor-pointer">
              See all users{" "}
            </p>
            <div className="bg-blue-500 font-bold text-xl p-3 rounded-full   text-white">
              <CiUser />
            </div>
          </div>
        </div>
        <div className="bg-secondry px-5 py-5 w-full  shadow-md rounded-md ">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-grot">Orders</h1>
            <div className="text-2xl flex items-center gap-2 font-grot text-green-500">
              <FaChevronUp className="text-sm" /> +20 %
            </div>
          </div>
          <div className="mt-10 text-5xl font-grot font-semibold text-secText">
            <h1>73</h1>
          </div>
          <div className="mt-5 flex justify-between items-center">
            <p className="text-sm font-robo text-secText  hover:text-text cursor-pointer">
              View all orders{" "}
            </p>
            <div className="bg-red-500 text-xl p-3 rounded-full   text-white">
              <CiShoppingCart />
            </div>
          </div>
        </div>
        <div className="bg-secondry px-5 py-5 w-full  shadow-md rounded-md ">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-grot">Earning </h1>
            <div className="text-2xl flex items-center gap-2 font-grot text-green-500">
              <FaChevronUp className="text-sm" /> +15 %
            </div>
          </div>
          <div className="mt-10 text-5xl font-grot font-semibold text-secText">
            <h1>$100</h1>
          </div>
          <div className="mt-5 flex justify-between items-center">
            <p className="text-sm font-robo text-secText  hover:text-text cursor-pointer">
              View net earning{" "}
            </p>
            <div className="bg-purple-500 text-xl p-3 rounded-full   text-white">
              <CiUser />
            </div>
          </div>
        </div>
        <div className="bg-secondry px-5 py-5 w-full  shadow-md rounded-md ">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-grot">Balance</h1>
            <div className="text-2xl flex items-center gap-2 font-grot text-green-500">
              <FaChevronUp className="text-sm" /> +3 %
            </div>
          </div>
          <div className="mt-10 text-5xl font-grot font-semibold text-secText">
            <h1>$200</h1>
          </div>
          <div className="mt-5 flex justify-between items-center">
            <p className="text-sm font-robo text-secText  hover:text-text cursor-pointer">
              See details{" "}
            </p>
            <div className="bg-pink-500 text-xl p-3 rounded-full   text-white">
              <CiUser />
            </div>
          </div>
        </div>
      </div>
      <div className="my-5  flex xl:flex-row flex-col gap-2">
        <div className="p-5 max-w-150 bg-secondry shadow rounded-md">
          <div className="flex items-center justify-between ">
            <h1 className="text-xl font-grot text-text">Total Revenue</h1>
            <HiOutlineDotsVertical />
          </div>
          <div className="w-full flex items-center mt-8 justify-center">
            <div className="h-30 relative p-2 w-30 rounded-full bg-primary bg-[conic-gradient(blue_0deg,blue_270deg,transparent_180deg)]">
              <div className="relative text-secText text-2xl font-inter font-semibold h-full w-full bg-secondry rounded-full flex items-center justify-center">
                70%
              </div>
            </div>
          </div>
          <h1 className="font-grot text-center mt-1 text-secText">
            Total sales made today
          </h1>
          <h1 className="text-5xl text-center font-semibold font-grot  mt-5 text-secText">
            $ 420
          </h1>
          <p className="font-inter text-xs text-center text-secText mt-2">
            Previous transactions processing . Last payments may not be included
          </p>
          <div className="grid-cols-3 font-grot grid text-center mt-10">
            <div>
              <h1>Target</h1>
              <p className="text-red-400">$12.5k</p>
            </div>
            <div>
              <h1>Last Week</h1>
              <p className="text-green-400">$1.5k</p>
            </div>
            <div>
              <h1>Last Month</h1>
              <p className="text-orange-400">$2.5k</p>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-secondry w-full h-full rounded-md p-5">
          <h1>Last 6 Months (income) </h1>
          <div>
            <SimpleAreaChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
