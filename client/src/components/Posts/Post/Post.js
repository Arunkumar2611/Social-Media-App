import React from 'react';
import { useSelector } from 'react-redux';

const Post = () => {
    const posts = useSelector((state) => state.posts);
    console.log("POSts", posts);
    return (
        <h1>POST</h1>
    )
}

export default Post;