import React from 'react';
import { Link } from 'react-router-dom';
import { navbarLinks } from '../data';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mx-auto container px-0 lg:px-8 pt-12 text-white">
      <div className="bg-[var(--color-primary)] rounded-0 lg:rounded-t-3xl px-6 lg:px-12 py-10 lg:py-12">
        {/* Top Row - Logo, Links, Social */}
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-center mb-8">
          {/* Logo */}
          <div className="logo text-2xl font-bold">
            <Link to="/">
              <span className="text-white">NextOps</span>
              <span className="bg-[var(--color-accent)] px-1 rounded text-[var(--color-dark)]">AI</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="links flex flex-col lg:flex-row text-center gap-4 lg:gap-8">
            {navbarLinks.map((link) => {
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className="hover:text-[var(--color-accent)] transition-colors"
                >
                  {link.text}
                </a>
              );
            })}
          </div>

          {/* Social Icons */}
          <div className="icons flex gap-4">
            <a
              href="#"
              className="cursor-pointer rounded-full bg-[var(--color-gray-light)] p-2 hover:bg-[var(--color-accent)] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-[var(--color-primary)]" />
            </a>
            <a
              href="#"
              className="cursor-pointer rounded-full bg-[var(--color-gray-light)] p-2 hover:bg-[var(--color-accent)] transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="text-[var(--color-primary)]" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Bottom Row - Copyright & Privacy */}
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-8 text-center justify-center text-sm">
          <p>© {new Date().getFullYear()} NextOpsAI. All Rights Reserved.</p>
          <Link to="/privacy-policy" className="hover:text-[var(--color-accent)] transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
