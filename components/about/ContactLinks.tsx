'use client';

import Link from 'next/link';
import { ContactLink } from '@/lib/types';

interface ContactLinksProps {
  links: ContactLink[];
}

export const ContactLinks = ({ links }: ContactLinksProps) => {
  return (
    <div className="flex flex-col gap-4">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-gray-700 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2"
        >
          {/* Placeholder for icon. In a real app, this would be an actual icon component */}
          <span className="text-xl">
            {link.icon === 'email' && '📧'}
            {link.icon === 'github' && '🐙'}
            {link.icon === 'linkedin' && '💼'}
            {link.icon === 'blog' && '✍️'}
            {!['email', 'github', 'linkedin', 'blog'].includes(link.icon) && '🔗'}
          </span>
          {link.name}
        </Link>
      ))}
    </div>
  );
};