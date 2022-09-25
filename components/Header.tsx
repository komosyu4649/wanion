import React from 'react';

const menus = [
  {
    text: 'post',
    href: 'post'
  },
  {
    text: 'timeline',
    // href: 'timeline'
    href: '/'
  }
];

const Header = () => {
  return (
    <header className="fixed w-9/12 font-semibold text-white">
      <nav className="flex flex-row justify-between">
        <a href="/" className="py-12 px-8">
          wanion
        </a>
        <ul className="flex flex-row">
          {menus.map((menu) => (
            <li className="">
              <a href={menu.href} className="inline-block py-12 px-8">
                {menu.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
