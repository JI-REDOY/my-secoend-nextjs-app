import React from 'react';

const PostCard = ({ post }) => {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
            <h2 className="mb-3 text-2xl font-bold text-gray-800">
                {post.title}
            </h2>

            <p className="text-lg leading-relaxed text-gray-600">
                {post.body}
            </p>
        </div>
    );
};

export default PostCard;