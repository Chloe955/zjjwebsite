import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className="bg-gray-100 border-t mt-12 py-6">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
      <div className="mb-2 md:mb-0 text-sm text-gray-600">&copy; {new Date().getFullYear()} My Brand. All rights reserved.</div>
      <div className="flex items-center space-x-4">
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={20} />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={20} />
        </a>
        {/* Add WeChat QR code or icon here if desired */}
      </div>
    </div>
  </footer>
);

export default Footer;
