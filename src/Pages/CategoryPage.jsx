import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import { AppContext } from "../context/AppContext";
const CategoryPage = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const category = location.pathname.split("/").at(-1);
  const { isDark } = useContext(AppContext);
  return (
    <div
      className={` ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <Header />

      <div className={` relative ${isDark ? " text-white" : " text-black"}`}>
        <button
          className="absolute top-20 border border-blue-400 px-2 rounded-sm left-96"
          onClick={() => navigation(-1)}
        >
          Back
        </button>
      </div>
      <h2>
        Blogs On <span>{category}</span>
      </h2>

      <Blogs />
      <Pagination />
    </div>
  );
};

export default CategoryPage;
