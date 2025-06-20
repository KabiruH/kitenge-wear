// src/components/layout/Header.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Make Order', href: '/order' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <header className= "bg-white shadow-md sticky top-0 z-50" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
            <div className="flex justify-between items-center h-16" >
                {/* Logo */ }
                < Link href = "/" >
                    <div className="flex items-center space-x-2" >
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center" >
                            <span className="text-white font-bold text-sm" > K </span>
                                </div>
                                < span className = "text-xl font-bold text-secondary" >
                                    { SITE_CONFIG.name }
                                    </span>
                                    </div>
                                    </Link>


    {/* Desktop Navigation */ }
    <nav className="hidden md:flex space-x-8" >
    {
        navItems.map((item) => (
            <Link
                key= { item.name }
                href = { item.href }
                className = "text-gray-700 hover:text-primary transition-colors duration-200"
            >
            { item.name }
            </Link>
        ))
    }
        </nav>

    {/* Mobile menu button */ }
    <button
            onClick={ () => setIsMenuOpen(!isMenuOpen) }
    className = "md:hidden p-2"
        >
        { isMenuOpen?<X size = { 24 } /> : <Menu size={ 24 } />
}
</button>
    </div>

{/* Mobile Navigation */ }
{
    isMenuOpen && (
        <div className="md:hidden" >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t" >
            {
                navItems.map((item) => (
                    <Link
                  key= { item.name }
                  href = { item.href }
                  className = "block px-3 py-2 text-gray-700 hover:text-primary"
                  onClick = {() => setIsMenuOpen(false)}
                >
                { item.name }
                </Link>
              ))
}
</div>
    </div>
        )}
</div>
    </header>
  );
};

export default Header;