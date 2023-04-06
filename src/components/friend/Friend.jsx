import React from 'react';
import './friend.css'
import { Link } from 'react-router-dom';
const Friend = ({friend}) => {
    // console.log(friend)
    const {id,name, phone, email,website} = friend;
    return (
        <div className='friend'>
            <h4>{name}</h4>
            <ul>
                Contact:
                <li>Phone: {phone}</li>
                <li>Email: {email}</li>
            </ul>
            <p>website: {website}</p>
            <p><Link to={`/friend/${id}`}>Show more</Link></p>
        </div>
    );
};

export default Friend;