// src/pages/Blog.js
import React from 'react';
import { Link } from 'react-router-dom';

// サンプル用のブログデータ
const blogData = [
  { id: 1, title: 'First Post', summary: 'This is the summary of the first post.' },
  { id: 2, title: 'Second Post', summary: 'This is the summary of the second post.' },
  { id: 3, title: 'Third Post', summary: 'This is the summary of the third post.' },
];

function Blog() {
  return (
    <div>
      <h2>Blog</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {blogData.map((post) => (
          <li key={post.id} style={{ marginBottom: '1rem' }}>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            {/* リンク先にブログ記事のIDを埋め込む */}
            <Link to={`/blog/${post.id}`}>Read More</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
