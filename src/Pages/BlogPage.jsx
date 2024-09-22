import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";
import { baseUrl } from "../baseUrl";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedblog, setRelatedblog] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading, isDark } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedblog(data.relatedBlogs);
    } catch (err) {
      console.log(err);
      setBlog(null);
      setRelatedblog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "black" : "white";
  }, [isDark]);

  return (
    <div
      className={` w-6/12 mx-auto pb-6 pt-24 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Header />
      <div className="mb-2 ml-1">
        <button
          className=" border px-3 rounded-sm  border-blue-400"
          onClick={() => navigation(-1)}
        >
          Back
        </button>
      </div>
      <div
        className={`  ${
          isDark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {loading ? (
          <p className="flex justify-center items-center text-xl font-semibold">
            Loading...
          </p>
        ) : blog ? (
          <div>
            <BlogDetails post={blog} />
            <h2 className=" text-3xl font-semibold my-4 underline">
              Releated Blogs
            </h2>
            {relatedblog.map((post) => (
              <div key={post.id}>
                <BlogDetails post={post} />
              </div>
            ))}
          </div>
        ) : (
          <p>No Blog Found</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
