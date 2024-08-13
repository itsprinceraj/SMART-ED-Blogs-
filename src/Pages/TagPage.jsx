import React, { useContext } from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import { AppContext } from "../context/AppContext";

const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  const { isDark } = useContext(AppContext);

  return (
    <div
      className={` ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Header />

      <div className=" mt-14">
        {/* Back Button and Tag Label */}
        <div className="">
          <button
            className={`  absolute top-20 border border-blue-400 px-2 rounded-sm left-96  transition-colors ${
              isDark ? " text-white" : " text-black"
            }`}
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <h2 className="text-xl absolute font-semibold left-96 top-28 ">
            Blog Tagged <span>#{tag}</span>
          </h2>
        </div>
      </div>


      <Blogs />
      <Pagination />
    </div>
  );
};

export default TagPage;
