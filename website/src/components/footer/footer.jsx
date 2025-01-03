import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/lunguageContext';
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const { language, translations } = useLanguage();
  const t = translations[language].footer;

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const contactInfo = [
    { icon: Mail, info: 'tinashechikwaiti@gmail.com', href: 'mailto:tinashechikwaiti@gmail.com' },
    { icon: Phone, info: '078 393 5399', href: 'tel:0783935399' },
    { icon: MapPin, info: t.location, href: '#' },
  ];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="/tc.jpeg"
              alt="Tinashe Car Sale"
              className="h-8 w-auto rounded-full"
            />
            <p className="text-gray-300 text-sm">
              {t.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              {Object.entries(t.links).map(([key, value]) => (
                <li key={key}>
                  <Link
                    to={`/${key}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contactUs}</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                    >
                      <Icon size={20} />
                      <span>{item.info}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.followUs}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Tinashe Car Sale. {t.rights}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-300 hover:text-white text-sm">
                {t.privacy}
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white text-sm">
                {t.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
