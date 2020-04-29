// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";
const border = {
border:'solid red'
}
// pass props in this file to
const Post = props => {
  // set up state for the likes
const [likes, setLikes] = useState(props.post.likes);
console.log(props)
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection likes = {props.post.likes}/>
      <CommentSection comments = {props.post.comments}
      postId={props.post.imageUrl}/> 
    </div>
  );
};

export default Post;


