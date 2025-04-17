import React from 'react';
import type { Metadata } from 'next';
import { supabase } from '../../lib/supabaseClient';
import PostCard from '../components/PostCard';
import { Post } from '../../types';

export const metadata: Metadata = {
  title: 'Life Reflections | Personal Brand',
  description: 'Personal growth insights and life philosophies.',
};

async function fetchReflections(): Promise<Post[]> {
  const { data, error: _error } = await supabase
    .from('posts')
    .select('*')
    .eq('type', 'reflection')
    .order('published_date', { ascending: false });
  return data || [];
}

export default async function ReflectionsPage() {
  const reflections = await fetchReflections();
  return (
    <section className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">Life Reflections</h1>
      {reflections.length === 0 ? (
        <p className="mb-4 text-gray-500">No reflections found.</p>
      ) : (
        <div className="grid gap-6">
          {reflections.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
