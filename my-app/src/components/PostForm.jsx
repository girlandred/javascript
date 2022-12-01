import React, { useState } from "react";
import Button from "./UI/button/Button";
import CustomInput from "./UI/input/CustomInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <CustomInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Enter the name of post"
      />
      <CustomInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Enter the description of post"
      />
      <Button onClick={addNewPost}>Create post</Button>
    </form>
  );
};

export default PostForm;
