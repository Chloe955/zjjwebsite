import React from 'react';
import type { Metadata } from 'next';
import { supabase } from '../../lib/supabaseClient';
import PostCard from '../components/PostCard';
import { Post } from '../../types';

export const metadata: Metadata = {
  title: 'Learning Journey | Personal Brand',
  description: 'Ongoing learning activities, new skills, and technologies.',
};

async function fetchLearning(): Promise<Post[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('type', 'learning')
    .order('published_date', { ascending: false });
  return data || [];
}

export default async function LearningPage() {
  const learningPosts = await fetchLearning();
  return (
    <section className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">Learning Journey</h1>
      {learningPosts.length === 0 ? (
        <p className="mb-4 text-gray-500">No learning notes found.</p>
      ) : (
        <div className="grid gap-6">
          {learningPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
