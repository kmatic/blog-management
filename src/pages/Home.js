import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Post from '../components/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const res = await fetch(
                'https://ghostly-zombie-21867.herokuapp.com/api/posts',
            );
            const data = await res.json();
            setPosts(data.posts);
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (e, postId) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const res = await fetch(
                `https://ghostly-zombie-21867.herokuapp.com/api/posts/${postId}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            if (res.status !== 200)
                return console.error('Something went wrong');
            const data = await res.json();
            const deleted = data.deletedPost;
            setPosts(posts.filter((post) => post._id !== deleted._id));
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            <PostsWrapper>
                {posts.map((post) => (
                    <Post
                        post={post}
                        key={post._id}
                        handleDelete={handleDelete}
                    />
                ))}
            </PostsWrapper>
        </div>
    );
};

const PostsWrapper = styled.div`
    margin: 15px 0px;
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
`;

export default Home;
