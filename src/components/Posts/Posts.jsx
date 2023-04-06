import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../post/Post';
import './posts.css';

const Posts = () => {
    const loadPosts = useLoaderData();
    return (
        <div>
            <h2>Here is shown all the posts</h2>
            <p>post available: {loadPosts.length}</p>
            <div className='post-container'>
                {
                    loadPosts.map(post => <Post
                    key={post.id}
                    post={post}
                    ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;