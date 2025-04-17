"use client";
import React, { Suspense } from 'react';
import { supabase } from '../../lib/supabaseClient';
import PostCard from '../components/PostCard';
import { Post } from '../../types';
import { useSearchParams } from 'next/navigation';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = React.useState<Post[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    async function search() {
      if (!query.trim()) {
        setResults([]);
        return;
      }
      setLoading(true);
      setError('');
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .or(`title.ilike.%${query}%,content.ilike.%${query}%`)
        .order('published_date', { ascending: false });
      setLoading(false);
      if (error) {
        setError('Failed to search.');
        setResults([]);
      } else {
        setResults(data || []);
      }
    }
    search();
  }, [query]);

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Search Results</h1>
      {loading && <div className="mb-4 text-gray-500">Searching...</div>}
      {error && <div className="mb-4 text-red-600">{error}</div>}
      {!loading && !error && results.length === 0 && query.trim() && (
        <div className="mb-4 text-gray-500">No results found for &ldquo;{query}&rdquo;.</div>
      )}
      {!loading && !error && results.length === 0 && !query.trim() && (
        <div className="mb-4 text-gray-500">Enter a search query above.</div>
      )}
      <div className="grid gap-6">
        {results.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default function SearchPage() {
  return (
    <section className="max-w-2xl mx-auto py-12">
      <Suspense fallback={<div>Loading search...</div>}>
        <SearchResults />
      </Suspense>
    </section>
  );
}
