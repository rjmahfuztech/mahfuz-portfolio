import React from "react";
import BlogInfo from "../BlogInfo/BlogInfo";
import blogs from "../../../Data/blogs";
import {useHistory} from "react-router";
import Fade from "react-reveal/Fade";

const Blog = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/blog");
  };
  return (
    <div className="text-center">
      <Fade bottom>
        <div className="margin text-white">
          <h3 className="bottom-border">MY BLOG</h3>
        </div>
        <div className="row">
          {blogs.map((blog, index) => (
            <BlogInfo key={index} blog={blog}></BlogInfo>
          ))}
        </div>
        <button onClick={handleClick} className="btn btn-outline-success mt-5">
          SEE MORE BLOGS
        </button>
      </Fade>
    </div>
  );
};

export default Blog;
