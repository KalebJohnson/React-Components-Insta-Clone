//Complete the necessary code in this file
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data.js";
// import data 

const PostsPage = (props) => {

  console.log(props)
  const [post,setpost] = useState(dummyData)
  return (
    <div className="posts-container-wrapper">
      
      {dummyData.map(post => {
        return ( 
            <Post 
            post={post}
        />
        );
      })}

    </div>
  );
};

export default PostsPage;

