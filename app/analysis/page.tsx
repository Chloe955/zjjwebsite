import React from 'react';
import type { Metadata } from 'next';
import { supabase } from '../../lib/supabaseClient';
import PostCard from '../components/PostCard';
import { Post } from '../../types';

export const metadata: Metadata = {
  title: 'Pharma Industry Analysis | Personal Brand',
  description: 'Analysis and commentary on the pharmaceutical industry.',
};

async function fetchAnalysis(): Promise<Post[]> {
  const { data, error: _error } = await supabase
    .from('posts')
    .select('*')
    .eq('type', 'analysis')
    .order('published_date', { ascending: false });
  return data || [];
}

export default async function AnalysisPage() {
  const analysisPosts = await fetchAnalysis();
  return (
    <section className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">Pharma Industry Analysis</h1>
      {analysisPosts.length === 0 ? (
        <p className="mb-4 text-gray-500">No analysis articles found.</p>
      ) : (
        <div className="grid gap-6">
          {analysisPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
