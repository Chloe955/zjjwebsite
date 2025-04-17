import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Personal Brand',
  description: 'Contact the owner via this form for professional or personal inquiries.',
};

export default function ContactPage() {
  return (
    <section className="max-w-md mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <ContactForm />
    </section>
  );
}
