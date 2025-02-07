// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        
          <Image src="/profile.png" alt="Logo" className="navbar-logo" width={40} height={40} />
        
      </Link>
      <div className="navbar-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
