import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Link } from "react-router-dom";

export default function Header() {
  const { isDark, setIsdark } = useContext(AppContext);

  return (
    <header
      className={` mx-auto  py-4 border-b-2 border-b-blue-400 drop-shadow-md fixed top-0 inset-x-0  ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1
        className={`font-bold text-3xl uppercase text-center flex justify-center gap-8 items-center ${
          isDark ? " text-blue-400" : " text-blue-500"
        } `}
      >
        <Link to={"/"}>SMART-ED BLOGS</Link>
        {/*  dark mode button */}
        <div
          className="flex justify-center items-center transition-all duration-200"
          onClick={() => setIsdark(!isDark)}
        >
          <DarkModeSwitch
            style={{}}
            checked={isDark}
            onChange={(checked) => setIsdark(checked)}
            size={30}
            moonColor="#FFEE0D"
            sunColor="#9400D3"
          />
        </div>
      </h1>
    </header>
  );
}
