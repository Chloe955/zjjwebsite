import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | Personal Brand',
  description: 'Learn more about the owner, professional background, expertise, and experience.',
};

export default function AboutPage() {
  return (
    <section className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">[Your personal introduction goes here. Include professional background, expertise, and experience. Optionally add a professional photograph and links to LinkedIn/GitHub.]</p>
      <div className="flex gap-4 mt-4">
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
      </div>
    </section>
  );
}
