import React, { FC, ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = {
  title: string;
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children, title = 'wanion' }) => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-800">
      <Header />
      <main className="min-h-screen w-5/12 py-56">{children}</main>
      <Footer />
    </div>
  );
};
