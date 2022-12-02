import React, { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

const App = () => {
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const [posts, setPosts] = useState([
    { id: 1, title: "PHP", body: "Description" },
    { id: 2, title: "JavaScript", body: "Description" },
  ]);

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <div style={{ padding: "15px 0" }}></div>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {sortedSearchedPosts.length !== 0 ? (
        <PostList
          remove={deletePost}
          posts={sortedSearchedPosts}
          title="All posts"
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Posts not found</h1>
      )}
    </div>
  );
};

export default App;
