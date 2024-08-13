import React, { useContext, useEffect, useState } from "react";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { isDark } = useContext(AppContext);
  return (
    <div
      className={` ${isDark ? "bg-black text-white" : "bg-white text-black"} `}
    >
      <Header />
      <div>
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
