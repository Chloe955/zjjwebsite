export interface Post {
  id: string;
  created_at: string;
  title: string;
  slug: string;
  content: string;
  published_date: string;
  type: 'review' | 'analysis' | 'learning' | 'reflection';
}

export interface Comment {
  id: string;
  created_at: string;
  post_id: string;
  author_name: string;
  content: string;
}

export interface ContactSubmission {
  id: string;
  created_at: string;
  name: string;
  email: string;
  message: string;
  is_read: boolean;
}
