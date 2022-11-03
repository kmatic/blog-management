import { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "../components/Post";

const Home = () => {
    const [posts, setPosts] = useState([]);
    
    const getPosts = async () => {
        try {
            const res = await fetch('https://ghostly-zombie-21867.herokuapp.com/api/posts');
            const data = await res.json();
            setPosts(data.posts);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div>
            <h2>Posts</h2>
            <PostsWrapper>
                {posts.map((post) => (
                    <Post post={post} key={post._id}/>
                ))}
            </PostsWrapper>
        </div>
    )
}

const PostsWrapper = styled.div`
    margin: 15px 0px;
    display: grid;
    gap: 15px;
`;

export default Home;