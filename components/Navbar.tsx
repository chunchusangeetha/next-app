'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-end gap-8 shadow-md">
      <Link href="/" className="hover:text-blue-300 transition">Home</Link>
      <Link href="/about" className="hover:text-blue-300 transition">About</Link>
      <Link href="/contact" className="hover:text-blue-300 transition">Contact</Link>
    </nav>
  );
}
