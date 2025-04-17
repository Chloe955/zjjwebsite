import Link from 'next/link';
import React from 'react';
import SearchInput from './SearchInput';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/analysis', label: 'Analysis' },
  { href: '/learning', label: 'Learning' },
  { href: '/hobbies', label: 'Hobbies' },
  { href: '/reflections', label: 'Reflections' },
  { href: '/contact', label: 'Contact' },
];

const Header: React.FC = () => (
  <header className="bg-white border-b shadow-sm">
    <nav className="container mx-auto flex items-center justify-between px-4 py-3">
      <div className="font-bold text-xl">
        <Link href="/">My Brand</Link>
      </div>
      <ul className="flex space-x-4">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="hover:text-blue-600 transition-colors">{label}</Link>
          </li>
        ))}
      </ul>
      <div className="ml-6">
        <SearchInput />
      </div>
    </nav>
  </header>
);

export default Header;
