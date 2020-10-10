import React from 'react';
import { Link, navigate } from 'gatsby';

// function goToSlicemasters() {
//   // 1 - wait for 2 seconds
//   setTimeout(() => {
//     console.log('slicemasters');
//     navigate('/slicemasters', { replace: true });
//   }, 2000);

//   // 2 - change page
// }

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/beers">Beers</Link>
        </li>
        {/* example of button navigation
        <li>
          <button onClick={goToSlicemasters} type="button">
            Click me to see slicemasters after 2 seconds
          </button>
        </li> */}
      </ul>
    </nav>
  );
}
