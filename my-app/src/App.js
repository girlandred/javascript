import React, { useState } from "react";
import PostList from "./components/PostList";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "PHP", body: "Description" },
    { id: 2, title: "JavaScript", body: "Description" },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} />
    </div>
  );
};

export default App;