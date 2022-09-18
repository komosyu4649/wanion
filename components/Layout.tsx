import React, { FC, ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children, title = 'wanion' }) => {
  return (
    <div className="flex justify-center bg-zinc-800 py-72">
      <main className="w-5/12">{children}</main>
    </div>
  );
};
