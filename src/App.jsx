import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Benefits from './components/Benefits';
import WorkingProcess from './components/WorkingProcess';
import FeaturesIncluded from './components/FeaturesIncluded';
// import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import AboutUs from './components/AboutUs';
import ScrollToTop from './components/ScrollToTop';

const HomePage = () => {
  return (
    <>
      <Header />
      <Benefits />
      <WorkingProcess />
      <FeaturesIncluded />
      {/* <FAQ /> */}
      <ContactUs />
    </>
  );
};

const App = () => {
  return (
    <main>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
