import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const postDetails = useLoaderData();
   const {body, id, title} = postDetails;
   const navigate = useNavigate();

   const returnHandler = () =>{
        navigate(-1);
   }
   
    return (
        <div>
            <h5>New post coming soon {id}</h5>
            <p><small>{body}</small></p>
            <button onClick={returnHandler}>Return</button>
        </div>
    );
};

export default PostDetail;