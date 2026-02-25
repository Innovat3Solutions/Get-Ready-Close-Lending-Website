import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll detection for island effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isScrolled ? 'pt-4' : 'pt-0'}`}>
        <div className={`mx-auto transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isScrolled ? 'max-w-7xl px-4' : 'w-full'}`}>
          <div className={`flex justify-between items-center h-20 px-6 lg:px-8 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isScrolled ? 'bg-white/90 backdrop-blur-2xl border border-slate-200/50 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.05)]' : 'bg-transparent'}`}>

            {/* Left Nav (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-10 w-1/3">
              <Link className={`text-[14px] font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-corp-grey' : 'text-white/80 hover:text-white'}`} to="/about">
                {t('nav.about')}
              </Link>

              {/* Mega Menu styling for Mortgages */}
              <div className="relative group/nav">
                <Link className={`text-[14px] font-medium transition-colors flex items-center gap-1 py-8 ${isScrolled ? 'text-slate-600 hover:text-corp-grey' : 'text-white/80 hover:text-white'}`} to="/mortgages">
                  Programs
                </Link>

                <div className="absolute top-[80px] left-0 mt-2 w-[650px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover/nav:translate-y-0 z-50">
                  <div className="bg-[#FAF9F6] rounded-3xl overflow-hidden border border-slate-200 flex flex-col">
                    <div className="p-8">
                      <p className="text-sm font-bold text-corp-grey mb-6 px-3 tracking-wide">Loan Solutions</p>
                      <div className="grid grid-cols-3 gap-6">
                        {/* Column 1 */}
                        <div className="flex flex-col space-y-2">
                          <Link to="/mortgages/fha" className="px-3 py-2 rounded-xl text-[14px] font-medium text-slate-600 hover:bg-white hover:text-[#1a1814] hover:shadow-sm transition-all">FHA Loans</Link>
                          <Link to="/mortgages/va" className="px-3 py-2 rounded-xl text-[14px] font-medium text-slate-600 hover:bg-white hover:text-[#1a1814] hover:shadow-sm transition-all">VA Loans</Link>
                          <Link to="/mortgages/usda" className="px-3 py-2 rounded-xl text-[14px] font-medium text-slate-600 hover:bg-white hover:text-[#1a1814] hover:shadow-sm transition-all">USDA</Link>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col space-y-2">
                          <Link to="/mortgages/conventional" className="px-3 py-2 rounded-xl text-[14px] font-medium text-slate-600 hover:bg-white hover:text-[#1a1814] hover:shadow-sm transition-all">Conventional</Link>
                          <Link to="/mortgages/jumbo" className="px-3 py-2 rounded-xl text-[14px] font-medium text-slate-600 hover:bg-white hover:text-[#1a1814] hover:shadow-sm transition-all">Jumbo Loans</Link>
                          <Link to="/mortgages/first-time-buyer" className="px-3 py-2 rounded-xl text-[14px] font-medium text-slate-600 hover:bg-white hover:text-[#1a1814] hover:shadow-sm transition-all">First-Time Buyer</Link>
                        </div>

                        {/* Column 3 */}
                        <div className="flex flex-col space-y-2">
                          <Link to="/mortgages/non-qm" className="px-3 py-2 rounded-xl text-[14px] font-medium text-slate-600 hover:bg-white hover:text-[#1a1814] hover:shadow-sm transition-all">Non-QM</Link>
                          <Link to="/mortgages/investment" className="px-3 py-2 rounded-xl text-[14px] font-medium text-slate-600 hover:bg-white hover:text-[#1a1814] hover:shadow-sm transition-all">Investment</Link>
                          <Link to="/mortgages/refinance" className="px-3 py-2 rounded-xl text-[14px] font-medium text-slate-600 hover:bg-white hover:text-[#1a1814] hover:shadow-sm transition-all">Refinance</Link>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Quick Action */}
                    <div className="bg-slate-100/50 p-6 border-t border-slate-200 flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-500">Not sure which program is right for you?</span>
                      <Link to="/contact" className="text-xs font-bold uppercase tracking-widest text-[#1a1814] hover:text-grc-blue flex items-center gap-1 transition-colors">Find your loan <span className="material-symbols-outlined text-[14px]">arrow_forward</span></Link>
                    </div>

                  </div>
                </div>
              </div>

              <Link className={`text-[14px] font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-corp-grey' : 'text-white/80 hover:text-white'}`} to="/calculator">
                {t('nav.calculator')}
              </Link>
            </nav>

            {/* Center Logo */}
            <div className="flex-1 flex justify-start lg:justify-center">
              <Link to="/" className="flex items-center gap-2 group">
                <img
                  src={isScrolled ? "/Logo/GRC-logo-PNG_Color.png" : "/Logo/grc-logo-white.png"}
                  alt="GRC Logo"
                  className="h-7 lg:h-8 object-contain transition-all duration-500 group-hover:scale-105"
                />
              </Link>
            </div>

            {/* Right Action Section (Desktop) */}
            <div className="hidden lg:flex items-center justify-end gap-8 w-1/3">
              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-1 text-[12px] font-bold transition-colors ${isScrolled ? 'text-slate-400 hover:text-slate-600' : 'text-white/40 hover:text-white'}`}
              >
                <span className={language === 'en' ? (isScrolled ? 'text-corp-grey' : 'text-white') : ''}>EN</span>
                <span className="font-light">/</span>
                <span className={language === 'es' ? (isScrolled ? 'text-corp-grey' : 'text-white') : ''}>ES</span>
              </button>

              <Link
                to="/contact"
                className={`flex items-center justify-center px-6 py-2.5 rounded-full text-[14px] font-medium transition-colors duration-300 ${isScrolled ? 'bg-corp-grey text-white hover:bg-slate-800' : 'bg-white text-[#1a1814] hover:bg-slate-200'}`}
              >
                <span className="material-symbols-outlined text-[18px] mr-2">phone_iphone</span>
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden justify-end">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={`p-2 ${isScrolled ? 'text-corp-grey' : 'text-white'}`}
              >
                <span className="material-symbols-outlined text-[28px]">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Glass Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-2xl flex flex-col pt-6 px-6 pb-12 overflow-y-auto"
          >
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center mb-12">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                <img
                  src="/Logo/GRC-logo-PNG_Color.png"
                  alt="GRC Logo"
                  className="h-8 object-contain filter brightness-0 invert"
                />
              </Link>

              <div className="flex items-center gap-4">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center bg-white text-[#1a1814] px-4 py-2 rounded-full text-[15px] font-medium"
                >
                  <span className="material-symbols-outlined text-[18px] mr-2 text-[#1a1814]">phone_iphone</span>
                  Contact Us
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white p-2 -mr-2"
                >
                  <span className="material-symbols-outlined text-3xl font-light">close</span>
                </button>
              </div>
            </div>

            {/* Mobile Nav Links */}
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex flex-col space-y-7 flex-1 px-4"
            >
              <Link
                to="/mortgages"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[28px] font-medium text-white tracking-tight"
              >
                Programs
              </Link>
              <Link
                to="/calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[28px] font-medium text-white tracking-tight"
              >
                Calculator
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[28px] font-medium text-white tracking-tight"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[28px] font-medium text-white tracking-tight"
              >
                Contact
              </Link>

              <div className="w-full h-[1px] bg-white/10 my-4"></div>

              <div className="flex flex-col space-y-7">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-3 text-white/50 transition-colors text-left"
                >
                  <span className="material-symbols-outlined text-2xl">translate</span>
                  <span className="text-[28px] font-medium tracking-tight">
                    <span className={language === 'en' ? 'text-white' : ''}>EN</span>
                    <span className="mx-2 font-light">/</span>
                    <span className={language === 'es' ? 'text-white' : ''}>ES</span>
                  </span>
                </button>
              </div>
            </motion.nav>

            {/* Social Bottom Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-auto px-4 pt-16 pb-8"
            >
              <p className="text-white/40 text-sm font-medium mb-6">Follow us</p>
              <div className="flex flex-col space-y-5">
                <a href="#" className="flex items-center gap-3 text-white transition-opacity hover:opacity-80">
                  <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                  <span className="text-[17px] font-medium">Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-white transition-opacity hover:opacity-80">
                  <span className="material-symbols-outlined text-[20px]">play_circle</span>
                  <span className="text-[17px] font-medium">TikTok</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
