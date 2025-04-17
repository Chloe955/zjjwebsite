import React from 'react';
import type { Metadata } from 'next';
import { supabase } from '../../lib/supabaseClient';
import PostCard from '../components/PostCard';
import { Post } from '../../types';

export const metadata: Metadata = {
  title: 'Literature Reviews | Personal Brand',
  description: 'Read literature reviews published by the owner.',
};

async function fetchReviews(): Promise<Post[]> {
  const { data, error: _error } = await supabase
    .from('posts')
    .select('*')
    .eq('type', 'review')
    .order('published_date', { ascending: false });
  return data || [];
}

export default async function ReviewsPage() {
  const reviews = await fetchReviews();
  return (
    <section className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">Literature Reviews</h1>
      {reviews.length === 0 ? (
        <p className="mb-4 text-gray-500">No reviews found.</p>
      ) : (
        <div className="grid gap-6">
          {reviews.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
