import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './post.css'

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();
    const  holdOnto = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h4>{id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}><button>Show More</button></Link>
            <button onClick={holdOnto}>Hold on</button>

        </div>
    );
};

export default Post;