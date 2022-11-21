import React, { useEffect, useState } from 'react';
import MultiActionAreaCard from '../UserCard/UserCard';


import './Home.css';


const Home = () => {
    const [userPost, setUserPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setUserPost(data))
    }, []);

    return (
        <>
            <div className='header__card'><h1>All User Card</h1></div>
            <div className='all__card'>
                {
                    userPost.map(post => <MultiActionAreaCard post={post} key={post.id}></MultiActionAreaCard>)
                }
            </div>
        </>
    );
};

export default Home;