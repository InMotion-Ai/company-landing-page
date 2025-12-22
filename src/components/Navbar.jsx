import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from './ui/Button';
import { navbarLinks } from '../data';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // Check if it's an anchor link (starts with #)
    if (href.startsWith('#')) {
      const sectionId = href.substring(1);

      // If not on home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // It's a regular route link
      navigate(href);
    }
  };

  const handleCTAClick = () => {
    setIsMenuOpen(false);

    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const accessSection = document.getElementById('get-access');
        if (accessSection) {
          accessSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const accessSection = document.getElementById('get-access');
      if (accessSection) {
        accessSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <div className="relative bg-white shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center gap-5 w-full">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img
                src="/opexai-logo-navbar-large.png"
                alt="OpexAI Logo"
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-xl cursor-pointer text-[var(--color-dark)]"
          >
            {isMenuOpen ? <HiX /> : <FaBars />}
          </button>

          {/* Navbar Links - Desktop */}
          <div className="links hidden md:block">
            <ul className="flex justify-center items-center gap-[40px]">
              {navbarLinks.map((navLink) => {
                return (
                  <li key={navLink.id} className="whitespace-nowrap">
                    <a
                      href={navLink.href}
                      onClick={(e) => handleNavClick(e, navLink.href)}
                      className="text-[var(--color-dark)] hover:text-[var(--color-primary-light)] transition-colors cursor-pointer"
                    >
                      {navLink.text}
                    </a>
                  </li>
                );
              })}

              {/* CTA Button */}
              <Button
                text="Join the waitlist"
                className="bg-[var(--color-primary-light)] text-white hover:bg-[var(--color-primary)] transition-colors px-6 py-3 rounded-lg"
                onClick={handleCTAClick}
              />
            </ul>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-[100%] left-0 w-full bg-white border-t border-gray-200 py-4 md:hidden z-50 shadow-lg">
              <ul className="px-8 space-y-4">
                {navbarLinks.map((navLink) => {
                  return (
                    <li key={navLink.id} className="whitespace-nowrap">
                      <a
                        href={navLink.href}
                        onClick={(e) => handleNavClick(e, navLink.href)}
                        className="text-[var(--color-dark)] hover:text-[var(--color-primary-light)] transition-colors cursor-pointer"
                      >
                        {navLink.text}
                      </a>
                    </li>
                  );
                })}
                <Button
                  text="Join the waitlist"
                  className="bg-[var(--color-primary-light)] text-white hover:bg-[var(--color-primary)] transition-colors w-full px-6 py-3 rounded-lg"
                  onClick={handleCTAClick}
                />
              </ul>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
