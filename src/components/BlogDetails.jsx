import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const BlogDetails = ({ post }) => {
  const { isDark } = useContext(AppContext);
  return (
    <div
      className={` ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <NavLink to={`/blog/${post.id}`}>
        <span
          className={`font-semibold text-2xl ${
            isDark ? "text-green-500" : "text-black"
          }`}
        >
          {post.title}
        </span>
      </NavLink>
      <p className="italic text-sm mt-1 ">
        By
        <span>{post.author}</span>
        on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span>{post.category}</span>
        </NavLink>
      </p>
      <p className="text-sm">Posted on {post.date}</p>
      <p className="mt-2">{post.content}</p>
      <div className="mt-1">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className=" text-blue-400 pr-3 underline text-sm ">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
