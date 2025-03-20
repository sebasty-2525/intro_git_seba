// src/pages/BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';

// サンプル用のブログデータ（Blog.jsと重複しないよう共通化してもOK）
const blogData = [
  { id: 1, title: 'First Post', content: 'Detailed content of the first post...' },
  { id: 2, title: 'Second Post', content: 'Detailed content of the second post...' },
  { id: 3, title: 'Third Post', content: 'Detailed content of the third post...' },
];

function BlogPost() {
  const { id } = useParams(); 
  // URLパラメータを取得 (例: /blog/1 の "1")

  // 数値へ変換
  const postId = parseInt(id, 10);

  // 該当するidのブログ記事を検索
  const post = blogData.find(item => item.id === postId);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPost;
