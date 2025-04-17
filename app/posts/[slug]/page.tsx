import React from 'react';
import { supabase } from '../../../lib/supabaseClient';
import CommentList from '../../../components/CommentList';
import CommentForm from '../../../components/CommentForm';
import { Post, Comment } from '../../../types';
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: { slug: string };
}

async function fetchPost(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single();
  if (error) return null;
  return data as Post;
}

async function fetchComments(post_id: string): Promise<Comment[]> {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('post_id', post_id)
    .order('created_at', { ascending: true });
  return data || [];
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await fetchPost(params.slug);
  if (!post) {
    return notFound();
  }
  const comments = await fetchComments(post.id);

  // TODO: Implement comment submission logic
  async function handleCommentSubmit(name: string, content: string) {
    await supabase.from('comments').insert({
      post_id: post.id,
      author_name: name,
      content,
    });
  }

  return (
    <section className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-500 text-sm mb-4">{new Date(post.published_date).toLocaleDateString()}</div>
      <article className="prose mb-8">
        {post.content}
      </article>
      <CommentList comments={comments} />
      <CommentForm onSubmit={handleCommentSubmit} />
    </section>
  );
}
