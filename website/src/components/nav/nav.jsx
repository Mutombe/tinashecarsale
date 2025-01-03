import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/lunguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, translations } = useLanguage();
  const location = useLocation();

  const t = translations[language].navigation;

  const navItems = [
    { name: t.home, path: '/' },
    { name: t.vehicles, path: '/vehicles' },
    { name: t.about, path: '/about' },
    { name: t.contact, path: '/contact' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'sn', name: 'Shona' },
    { code: 'nd', name: 'Ndebele' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Tinashe Car Sale"
              className="h-10 w-auto"
            />
            <span className="ml-2 text-xl font-bold text-blue-900">
              Tinashe Car Sale
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 
                  ${location.pathname === item.path ? 'text-blue-600' : 'text-gray-700'}`}
              >
                {item.name}
              </Link>
            ))}

            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <Globe size={20} />
                <span className="text-sm font-medium">
                  {languages.find(lang => lang.code === language)?.name}
                </span>
              </button>
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium 
                    ${location.pathname === item.path
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <div className="flex flex-col space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className={`flex items-center space-x-2 text-sm font-medium
                        ${language === lang.code ? 'text-blue-600' : 'text-gray-700'}`}
                    >
                      <Globe size={16} />
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;