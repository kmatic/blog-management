import { useEffect, useState } from "react";
import styled from "styled-components";

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
            <PostWrapper>
                {posts.map((post) => (
                    <div>
                        <h3>{post.title}</h3>
                        <p>{post.text}</p>
                    </div>
                ))}
            </PostWrapper>
        </div>
    )
}

const PostWrapper = styled.div`
    margin: 15px 0px;
`;

export default Home;