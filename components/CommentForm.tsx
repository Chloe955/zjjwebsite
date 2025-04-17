import React, { useState } from 'react';

interface CommentFormProps {
  onSubmit: (name: string, content: string) => Promise<void>;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim() || !content.trim()) {
      setError('Name and comment are required.');
      return;
    }
    setLoading(true);
    try {
      await onSubmit(name, content);
      setName('');
      setContent('');
    } catch (err: any) {
      setError(err.message || 'Failed to submit comment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mt-8">
      <h2 className="text-xl font-semibold mb-2">Leave a Comment</h2>
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <input
        className="w-full border rounded px-3 py-2"
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <textarea
        className="w-full border rounded px-3 py-2"
        placeholder="Your Comment"
        value={content}
        onChange={e => setContent(e.target.value)}
        rows={4}
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default CommentForm;
