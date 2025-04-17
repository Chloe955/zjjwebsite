"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchInput: React.FC = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="border rounded px-2 py-1"
      />
      <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Search</button>
    </form>
  );
};

export default SearchInput;
