import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <header>
      <nav className='my-nav-bar'>
        <ul>
          <div className='my-nav-Logo'>
            <li><h3>Logo</h3></li>
          </div>
          <div className='my-nav-elements'>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/blog"}>Blog</Link></li>
            <li><Link href={"/about-us"}>About us</Link></li>
            <li><Link href={"/contact-us"}>Conatct us</Link></li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
