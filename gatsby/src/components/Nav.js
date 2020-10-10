import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Hot Now</Link>
        </li>
        <li>
          <Link href="/pizzas">Pizza Menu</Link>
        </li>
        <li>
          <Link href="/">LOGO</Link>
        </li>

        <li>
          <Link href="/slicemasters">SliceMasters</Link>
        </li>

        <li>
          <Link href="/order">Order Ahead!</Link>
        </li>
      </ul>
    </nav>
  );
}
