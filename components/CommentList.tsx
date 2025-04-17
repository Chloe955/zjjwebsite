import React from 'react';
import { Comment } from '../types';

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <div className="space-y-4 mt-8">
    <h2 className="text-xl font-semibold mb-2">Comments</h2>
    {comments.length === 0 && <div className="text-gray-500">No comments yet.</div>}
    {comments.map(comment => (
      <div key={comment.id} className="border rounded p-3 bg-gray-50">
        <div className="font-bold text-sm mb-1">{comment.author_name}</div>
        <div className="text-gray-700 text-sm">{comment.content}</div>
        <div className="text-xs text-gray-400 mt-1">{new Date(comment.created_at).toLocaleString()}</div>
      </div>
    ))}
  </div>
);

export default CommentList;
