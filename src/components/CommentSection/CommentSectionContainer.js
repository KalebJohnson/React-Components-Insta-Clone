// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../../dummy-data";


const CommentSection = props => {
  // Add state for the comments
  const [comments, setcomments] = useState(props.comments);

  return (
    <div>
      {comments.map((comments) => {
        return <Comment comments = {comments} />;
    })}
      
      <CommentInput />
    </div>
  );
};

export default CommentSection;


//     {props..map(c => {
//  return ( 
//    <Comment
//    comments={c}
///>
//);
//})}