import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const moreDetails = useLoaderData();
    console.log(moreDetails)
    return (
        <div>
            
        </div>
    );
};

export default FriendDetails;