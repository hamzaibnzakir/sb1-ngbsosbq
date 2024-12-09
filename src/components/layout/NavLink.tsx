import React from 'react';

interface NavLinkProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export function NavLink({ onClick, children }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className="block w-full px-3 py-2 text-base font-medium text-gray-600 hover:text-green-600 hover:bg-gray-50 transition-colors duration-200 rounded-md md:inline-block md:w-auto md:px-0 md:py-0 md:hover:bg-transparent"
    >
      {children}
    </button>
  );
}