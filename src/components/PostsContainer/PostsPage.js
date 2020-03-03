//Complete the necessary code in this file
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data.js";
// import data 

const PostsPage = () => {
  const [data, setdata] = useState(0);
  return (
    <div className="posts-container-wrapper">
      {
        <Post/>
      }
    </div>
  );
};

export default PostsPage;

