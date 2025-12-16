import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Benefits from './components/Benefits';
import WorkingProcess from './components/WorkingProcess';
import FeaturesIncluded from './components/FeaturesIncluded';
// import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <Benefits />
      <WorkingProcess />
      <FeaturesIncluded />
      {/* <FAQ /> */}
      <ContactUs />
      <Footer />
    </main>
  );
};

export default App;
