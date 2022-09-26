import Link from 'next/link';
import React from 'react';

const menus = [
  {
    text: 'post',
    href: '/post/'
  },
  {
    text: 'timeline',
    // href: 'timeline'
    href: '/'
  },
  {
    text: 'search',
    // href: 'timeline'
    href: '/search/'
  }
];

const Header = () => {
  return (
    <header className="fixed w-9/12 font-semibold text-white">
      <nav className="flex flex-row justify-between">
        <Link href="/">
          <a className="py-12 px-8">wanion</a>
        </Link>
        <ul className="flex flex-row">
          {menus.map((menu) => (
            <li className="">
              <Link href={menu.href}>
                <a className="inline-block py-12 px-8">{menu.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
