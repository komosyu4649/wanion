import React from 'react';

const date: Date = new Date();

const Footer = () => {
  return (
    <footer className="mb-16">
      <small className="text-white">@{date.getFullYear().toString()} wanion</small>
    </footer>
  );
};

export default Footer;
