import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "PHP", body: "Description" },
    { id: 2, title: "JavaScript", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList remove={deletePost} posts={posts} title="All posts" />
    </div>
  );
};

export default App;
