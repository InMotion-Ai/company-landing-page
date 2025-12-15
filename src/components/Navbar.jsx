import Button from './ui/Button';
import Modal from './ui/Modal';
import EarlyAccessForm from './forms/EarlyAccessForm';
import { navbarLinks } from '../data';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCTAClick = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };

  const handleFormSubmit = (formData) => {
    console.log('Early access request:', formData);
    alert('Thank you for your interest! We\'ll be in touch soon.');
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative bg-[var(--color-primary)]">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center gap-5 w-full">
          {/* Logo - Text-based placeholder */}
          <div className="logo">
            <a href="/" className="text-2xl font-bold">
              <span className="text-white">NextOps</span>
              <span className="bg-[var(--color-accent)] px-1 rounded text-[var(--color-dark)]">AI</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-xl cursor-pointer text-white"
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
                      className="text-white hover:text-[var(--color-accent)] transition-colors"
                    >
                      {navLink.text}
                    </a>
                  </li>
                );
              })}

              {/* CTA Button */}
              <Button
                text="Request early access"
                className="bg-[var(--color-primary-light)] text-white hover:bg-[var(--color-accent)] hover:text-[var(--color-dark)] transition-colors px-6 py-3 rounded-lg"
                onClick={handleCTAClick}
              />
            </ul>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-[100%] left-0 w-full bg-[var(--color-primary)] border-t border-[var(--color-primary-light)] py-4 md:hidden z-50">
              <ul className="px-8 space-y-4">
                {navbarLinks.map((navLink) => {
                  return (
                    <li key={navLink.id} className="whitespace-nowrap">
                      <a
                        href={navLink.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-white hover:text-[var(--color-accent)] transition-colors"
                      >
                        {navLink.text}
                      </a>
                    </li>
                  );
                })}
                <Button
                  text="Request early access"
                  className="bg-[var(--color-primary-light)] text-white hover:bg-[var(--color-accent)] hover:text-[var(--color-dark)] transition-colors w-full px-6 py-3 rounded-lg"
                  onClick={handleCTAClick}
                />
              </ul>
            </div>
          )}
        </nav>
      </div>

      {/* Modal with Early Access Form */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Request Early Access"
      >
        <EarlyAccessForm onSubmit={handleFormSubmit} />
      </Modal>
    </>
  );
};

export default Navbar;
