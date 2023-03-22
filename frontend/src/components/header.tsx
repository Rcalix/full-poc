import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import logo from '../assets/logo.svg';

interface HeaderProps {
    children: React.ReactNode;
}

const Header: React.FC<HeaderProps>= ({children}) => {
  return (
<div className="ml-auto mb-6 p-5 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    <nav className="bg-white shadow-lg">
        <div className="md:flex items-center justify-center py-2 md:px-12">
            <div className="flex justify-between items-center">
               <div className="text-2xl font-bold text-gray-800 md:text-3xl">
                    <a href="#">Github POC</a>
               </div>
                <div className="md:hidden">
                    <button type="button" className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path className="hidden" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/>
                            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>
    <div>{children}</div>
</div>
  );
};

export default Header;
