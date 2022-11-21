import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Comment from '../Comment/Comment';

import './MoreDeta.css';

const MoreData = () => {

    const sentData = useLocation();
    const { body, title, userId, id } = sentData.state;

    const [comment, setComment] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`)
            .then(res => res.json())
            .then(data => setComment(data))
    }, []);

    const [postUser, setPostUser] = useState();
    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=${id}`)
            .then(res => res.json())
            .then(data => setPostUser(data.results[0].picture.large))
    }, []);

    return (
        <div className='see__detles'>
            <div className='see__user'>
                <div><img className='profile__img' src={postUser} alt="" /></div>
                <div>
                    <h1><span>Title:</span> {title}</h1>
                    <h2><span>Post:</span> {body}</h2>
                    <h5><span>User ID:</span> {userId}</h5>
                    <h5><span>Profile ID:</span> {id}</h5>
                </div>
            </div>
            <div><h1>See More Comments</h1></div>
            <div className='comment__box'>
                {
                    comment.map(data => <Comment comment={data} userId={userId} key={data.id} ></Comment>)
                }
            </div>

        </div>
    );
};

export default MoreData;