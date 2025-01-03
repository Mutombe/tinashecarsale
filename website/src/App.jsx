import React from 'react';
import { BrowserRouter, Routes, useLocation , Route } from 'react-router-dom';
import Navbar from './components/nav/nav';
import Footer from './components/footer/footer';
import HomePage from './components/home/home';
import VehicleListingPage from './components/vehicles/vehicles';
import { VehicleDetailPage } from './components/vehicles/vehicleDetail';
import { AboutPage, ContactPage } from './components/vehicles/vehicleDetail';
import { useEffect } from 'react';
//import AboutPage from './pages/AboutPage';
//import ContactPage from './pages/ContactPage';
import { Toaster } from 'sonner';
import LanguageProvider from './context/lunguageContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/vehicles" element={<VehicleListingPage />} />
              <Route path="/vehicles/:id" element={<VehicleDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-center" />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;