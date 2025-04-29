
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { isNative } from '@/utils/platform';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`flex min-h-screen flex-col ${isNative() ? 'pt-safe-top pb-safe-bottom' : ''}`}>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
