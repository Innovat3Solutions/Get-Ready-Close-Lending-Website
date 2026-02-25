import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Mortgages from './pages/Mortgages';
import VALoan from './pages/VALoan';
import FHALoan from './pages/FHALoan';
import ConventionalLoan from './pages/ConventionalLoan';
import USDALoan from './pages/USDALoan';
import JumboLoan from './pages/JumboLoan';
import NonQMLoan from './pages/NonQMLoan';
import FirstTimeBuyer from './pages/FirstTimeBuyer';
import Refinance from './pages/Refinance';
import InvestorLoan from './pages/InvestorLoan';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="mortgages" element={<Mortgages />} />
            <Route path="mortgages/va" element={<VALoan />} />
            <Route path="mortgages/fha" element={<FHALoan />} />
            <Route path="mortgages/conventional" element={<ConventionalLoan />} />
            <Route path="mortgages/usda" element={<USDALoan />} />
            <Route path="mortgages/jumbo" element={<JumboLoan />} />
            <Route path="mortgages/non-qm" element={<NonQMLoan />} />
            <Route path="mortgages/first-time-buyer" element={<FirstTimeBuyer />} />
            <Route path="mortgages/refinance" element={<Refinance />} />
            <Route path="mortgages/investment" element={<InvestorLoan />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
