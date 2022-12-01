import React, { useState } from "react";

const PostItem = (props) => {
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>{props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btns">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
