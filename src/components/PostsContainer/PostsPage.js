//Complete the necessary code in this file
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data.js";
// import data 

const PostsPage = (props) => {



  return (
    <div className="posts-container-wrapper">
      
      {props.dummyData.map(item => {
        return ( 
            <Post 
            post={item}
        />
        );
      })}

    </div>
  );
};

export default PostsPage;

