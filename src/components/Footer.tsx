import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-corp-grey text-white pt-24 pb-12" id="contact">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
                    <div className="lg:col-span-2">
                        <div className="mb-8">
                            <img
                                src="/Logo/grc-logo-white.png"
                                alt="GRC Logo"
                                className="h-16 w-auto object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-light mb-6">
                            {t('footer.description')}
                        </p>

                        {/* Compliance Badges */}
                        <div className="flex items-center gap-4 text-slate-400">
                            <span className="material-symbols-outlined text-3xl">real_estate_agent</span>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold tracking-widest uppercase">Equal Housing Lender</span>
                                <span className="text-xs font-light">NMLS ID: 1234567 | FL License: MLD123</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8 flex items-center gap-2">
                            <span className="w-4 h-[1px] bg-growth-green"></span>
                            {t('footer.quickLinks')}
                        </h5>
                        <ul className="space-y-4 text-sm font-light text-slate-400">
                            <li><Link className="hover:text-white transition-colors" to="/">{t('nav.home')}</Link></li>
                            <li><Link className="hover:text-white transition-colors" to="/mortgages">{t('nav.mortgages')}</Link></li>
                            <li><Link className="hover:text-white transition-colors" to="/calculator">{t('nav.calculator')}</Link></li>
                            <li><Link className="hover:text-white transition-colors" to="/contact">{t('nav.contact')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8 flex items-center gap-2">
                            <span className="w-4 h-[1px] bg-grc-blue"></span>
                            {t('footer.contactUs')}
                        </h5>
                        <ul className="space-y-5 text-sm font-light text-slate-400">
                            <li className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-grc-blue text-lg">location_on</span>
                                <span className="leading-snug">South Florida<br />11401 SW 40 St Suite 206<br />Miami, Florida 33165</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-growth-green text-lg">call</span>
                                <a href="tel:305-201-0472" className="hover:text-white transition-colors">(305) 201-0472</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-red-400 text-lg">mail</span>
                                <a href="mailto:info@grclending.com" className="hover:text-white transition-colors">info@grclending.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Compliance Disclaimer Section */}
                <div className="border-t border-white/10 pt-8 mb-8">
                    <p className="text-[10px] text-slate-500 font-light leading-relaxed">
                        <strong>Compliance & Disclaimers:</strong> This is not a commitment to lend. All loans are subject to credit and property approval. Certain restrictions may apply. Programs, rates, terms, and conditions are subject to change without notice. GRC Lending is an Equal Housing Lender. NMLS Consumer Access: <a href="https://www.nmlsconsumeraccess.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-300">www.nmlsconsumeraccess.org</a>. The information provided on this website is for informational purposes only and should not be construed as legal or financial advice.
                    </p>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col items-center text-center space-y-2">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{t('footer.rights')}</p>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                        Designed by <a href="https://www.innovat3solutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Innovat3 Solutions</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
