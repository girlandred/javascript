import React, {useCallback, useEffect, useMemo, useState} from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import CustomModal from "./components/UI/modal/CustomModal";
import Button from "./components/UI/button";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getPageCount} from "./utils/pages";

const App = () => {
    const [filter, setFilter] = useState({sort: "", query: ""});
    const [modal, setModal] = useState(false);
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const pageArray = useMemo(() => {
        for (let i = 0; i < totalPages; i++) {
            pageArray.push(i + 1);
        }
        return pageArray;
    }, [totalPages]);
    // console.log([pageArray]);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAllData();
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    });

    const sortedSearchedPosts = usePosts(posts, filter.sort, filter.query);

    useEffect(() => {
        fetchPosts()
    }, [])

    const createPost = useCallback((newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }, [posts]);


    /**TODO:
     * - rewrite function using useCallback +
     * - learn more about useCallback hook
     */

    const deletePost = useCallback((post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    }, [posts]);

    return (
        <div className="App">
            <Button style={{marginTop: 30}} onClick={() => setModal(true)}>Create post</Button>
            <CustomModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </CustomModal>
            <div style={{padding: "15px 0"}}></div>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {postError && <h1>Error</h1>}
            {isPostsLoading
                ? <div style={{display: "flex", justifyContent: "center", marginTop: 50}}><Loader/></div>
                : <PostList
                    remove={deletePost}
                    posts={sortedSearchedPosts}
                    title="All posts"
                />
            }
        </div>
    );
};

export default App;
