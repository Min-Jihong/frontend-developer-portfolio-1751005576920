'use client';

import React from 'react';
import Link from 'next/link';
import { NavItem } from '@/lib/types';

interface HeaderProps {
  name: string;
  jobTitle: string;
  navItems: NavItem[];
}

export const Header: React.FC<HeaderProps> = ({ name, jobTitle, navItems }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors duration-300 cursor-pointer">
            {name}
          </Link>
          <span className="text-sm text-gray-600">{jobTitle}</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300 cursor-pointer"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};