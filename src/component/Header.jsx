import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { toggleTheme } from "../store/slices/ThemeSlice";
import { LuPanelLeftClose } from "react-icons/lu";

function Header({ setIsSmallToggleOpen }) {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="w-full flex items-center justify-between px-5 py-3 border-b border-border font-grot">
      <div className="flex items-center gap-5">
        <Link to={"/"} className="text-2xl font-semibold">
          AdminDash
        </Link>
        <div
          onClick={() => {
            setIsSmallToggleOpen((prev) => !prev);
          }}
          className="cursor-pointer sm:hidden"
        >
          <LuPanelLeftClose />
        </div>
      </div>
      <div>
        <div className="border border-border border-dashed p-2 cursor-pointer group bg-secondry rounded-md">
          {theme == "dark" ? (
            <IoSunnyOutline
              onClick={() => {
                dispatch(toggleTheme());
              }}
              className="group-hover:rotate-45 duration-150 transition-all"
            />
          ) : (
            <IoMoonOutline
              onClick={() => {
                dispatch(toggleTheme());
              }}
              className=" duration-150 transition-all"
            />
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
