import React from 'react';
import Link from 'next/link';
import { Post } from '../../types';
import { formatDate } from '../utils/date';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => (
  <div className="border rounded-lg p-4 bg-white shadow hover:shadow-md transition">
    <h2 className="text-xl font-bold mb-2">
      <Link href={`/posts/${post.slug}`}>{post.title}</Link>
    </h2>
    <div className="text-gray-500 text-xs mb-2">{formatDate(post.published_date)}</div>
    <div className="text-gray-700 line-clamp-3 mb-2">{post.content.slice(0, 120)}...</div>
    <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:underline text-sm">Read more</Link>
  </div>
);

export default PostCard;
