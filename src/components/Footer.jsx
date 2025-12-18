import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="mx-auto container px-0 lg:px-8 pt-12 text-white">
      <div className="bg-[var(--color-primary)] rounded-0 lg:rounded-t-3xl px-6 lg:px-12 py-4 lg:py-6">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-between items-center text-sm">
          {/* Copyright & Privacy */}
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 text-center items-center">
            <p>© {new Date().getFullYear()} NexOpsAI. All Rights Reserved.</p>
            <Link to="/about-us" className="hover:text-[var(--color-accent)] transition-colors">
              About Us
            </Link>
            <Link to="/privacy-policy" className="hover:text-[var(--color-accent)] transition-colors">
              Privacy Policy
            </Link>
          </div>

          {/* Social Icons */}
          <div className="icons flex gap-4">
            <a
              href="https://www.linkedin.com/company/nexopsai/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full bg-[var(--color-gray-light)] p-2 hover:bg-[var(--color-accent)] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-[var(--color-primary)]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
