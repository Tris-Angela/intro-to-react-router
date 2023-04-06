import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../friend/Friend';
import './friends.css'

const Friends = () => {
    const friends = useLoaderData();
    return (
        <div>
            <h4>I have {friends.length} friends </h4>
            <div className='friend-zone'>
                {
                    friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;