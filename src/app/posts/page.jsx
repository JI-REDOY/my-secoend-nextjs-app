import React from 'react';
import PostCard from '../components/PostCard';


const PostsPage = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    console.log(posts);


    return (
        <div>
            <h1>Posts Page: {posts.length}</h1>
            <div className='grid gap-4 sm:grid-cols-3'>
                {posts.map(post => <PostCard key={post.id} post={post} />)}
            </div>
        </div>
    );
};

export default PostsPage;