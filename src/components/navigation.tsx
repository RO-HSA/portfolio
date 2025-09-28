'use client';

import { useState } from 'react';
import Sidebar from './sidebar';
import HamburguerButton from './hamburguer-button';

interface NavigationProps {
  children: React.ReactNode;
}

const Navigation = ({ children }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div>
        <Sidebar isOpen={isMenuOpen} onClose={closeMenu} />
      </div>

      <HamburguerButton onClick={toggleMenu} isOpen={isMenuOpen} />

      {children}

      {isMenuOpen && (
        <div
          className="before:fixed inset-0 before:bg-black/50 before:content-[''] before:w-full before:h-full before:z-10 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navigation;
