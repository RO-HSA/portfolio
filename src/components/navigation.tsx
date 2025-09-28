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
      <div className="lg:flex-shrink-0">
        <Sidebar isOpen={isMenuOpen} onClose={closeMenu} />
      </div>

      <HamburguerButton onClick={toggleMenu} isOpen={isMenuOpen} />

      <div className="flex-1 lg:ml-6">{children}</div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navigation;
