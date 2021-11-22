import React, { useEffect, useState } from 'react';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const resp = await fetch(
                'http://127.0.0.1:8787/posts'
            );
            const postsResp = await resp.json();
            setPosts(postsResp.reverse());
        };

        getPosts();
    }, []);

    return (
        <div class="posts">
            {posts.map((post) => (
                <div class="post">
                    <h2>{post.title}</h2>
                    <h3><em>{post.username}</em></h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}