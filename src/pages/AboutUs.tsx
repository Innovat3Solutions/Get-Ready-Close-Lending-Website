import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function AboutUs() {
    const { t } = useLanguage();

    return (
        <div className="antialiased font-serif bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Images/freepik__luxury-waterfront-mansion-in-coral-gables-large-wi__31262.png"
                        alt="GRC Lending Team"
                        className="w-full h-full object-cover filter grayscale-[20%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-corp-grey/95 via-corp-grey/80 to-corp-grey/40"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="font-display text-5xl md:text-7xl text-white mb-8 leading-tight">
                            {t('about.hero.title1')}<br /><span className="italic font-light text-grc-blue">{t('about.hero.title2')}</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed font-light mx-auto max-w-2xl">
                            {t('about.hero.desc')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="bg-light-grey py-24 border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
                    <span className="material-symbols-outlined text-5xl text-grc-blue opacity-50 mb-8 block">format_quote</span>
                    <h2 className="font-display text-3xl md:text-4xl leading-relaxed text-corp-grey mb-8">
                        {t('about.quote.text')}
                    </h2>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
                        {t('about.quote.author')}<span className="font-light">{t('about.quote.role')}</span>
                    </p>
                </div>
            </section>

            {/* Expertise Details Section */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6 sm:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-[1px] bg-growth-green"></span>
                                <h3 className="text-growth-green font-bold text-[10px] uppercase tracking-[0.3em]">{t('about.expertise.badge')}</h3>
                            </div>
                            <h2 className="font-display text-4xl text-corp-grey mb-8 leading-tight">
                                {t('about.expertise.title')}
                            </h2>
                            <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                                {t('about.expertise.p1')}
                            </p>
                            <p className="text-lg text-slate-600 font-light leading-relaxed">
                                {t('about.expertise.p2')}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-corp-grey text-white p-10 text-center">
                                <p className="text-5xl font-display mb-4">{t('about.stats.years.val')}</p>
                                <p className="text-xs uppercase tracking-widest text-slate-400">{t('about.stats.years.label')}</p>
                            </div>
                            <div className="bg-light-grey border border-slate-200 p-10 text-center">
                                <p className="text-5xl font-display text-corp-grey mb-4">{t('about.stats.transparency.val')}</p>
                                <p className="text-xs uppercase tracking-widest text-slate-500">{t('about.stats.transparency.label')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Loan Officers Section */}
            <section className="bg-white py-32 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 sm:px-8">
                    <div className="text-center mb-20">
                        <h2 className="font-display text-4xl text-corp-grey mb-4">{t('about.team.title')}</h2>
                        <div className="w-16 h-[2px] bg-grc-blue mx-auto mb-6"></div>
                        <p className="text-slate-500 font-light max-w-2xl mx-auto">
                            {t('about.team.desc')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Placeholder Officer 1 */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-slate-50 shadow-lg relative bg-slate-100 flex items-center justify-center">
                                {/* Placeholder Image handling */}
                                <span className="material-symbols-outlined text-gray-300 text-6xl">person</span>
                                {/* User will replace src below */}
                                {/* <img src="/Images/staff-1.jpg" alt="Staff Member" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /> */}
                            </div>
                            <h3 className="font-display text-2xl text-corp-grey mb-1">{t('about.team.jane.name')}</h3>
                            <p className="text-grc-blue font-bold text-xs uppercase tracking-widest mb-3">{t('about.team.jane.role')}</p>
                            <p className="text-xs text-slate-400 font-light mb-4">{t('about.team.jane.nmls')}</p>
                            <p className="text-sm text-slate-500 leading-relaxed font-light">
                                {t('about.team.jane.desc')}
                            </p>
                            <a href="mailto:jane@grclending.com" className="mt-4 text-xs font-bold text-growth-green uppercase tracking-widest hover:text-corp-grey transition-colors">{t('about.team.jane.contact')}</a>
                        </div>

                        {/* Placeholder Officer 2 */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-slate-50 shadow-lg relative bg-slate-100 flex items-center justify-center">
                                {/* Placeholder Image handling */}
                                <span className="material-symbols-outlined text-gray-300 text-6xl">person</span>
                            </div>
                            <h3 className="font-display text-2xl text-corp-grey mb-1">{t('about.team.john.name')}</h3>
                            <p className="text-grc-blue font-bold text-xs uppercase tracking-widest mb-3">{t('about.team.john.role')}</p>
                            <p className="text-xs text-slate-400 font-light mb-4">{t('about.team.john.nmls')}</p>
                            <p className="text-sm text-slate-500 leading-relaxed font-light">
                                {t('about.team.john.desc')}
                            </p>
                            <a href="mailto:john@grclending.com" className="mt-4 text-xs font-bold text-growth-green uppercase tracking-widest hover:text-corp-grey transition-colors">{t('about.team.john.contact')}</a>
                        </div>

                        {/* Placeholder Officer 3 */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-slate-50 shadow-lg relative bg-slate-100 flex items-center justify-center">
                                {/* Placeholder Image handling */}
                                <span className="material-symbols-outlined text-gray-300 text-6xl">person</span>
                            </div>
                            <h3 className="font-display text-2xl text-corp-grey mb-1">{t('about.team.maria.name')}</h3>
                            <p className="text-grc-blue font-bold text-xs uppercase tracking-widest mb-3">{t('about.team.maria.role')}</p>
                            <p className="text-xs text-slate-400 font-light mb-4">{t('about.team.maria.nmls')}</p>
                            <p className="text-sm text-slate-500 leading-relaxed font-light">
                                {t('about.team.maria.desc')}
                            </p>
                            <a href="mailto:maria@grclending.com" className="mt-4 text-xs font-bold text-growth-green uppercase tracking-widest hover:text-corp-grey transition-colors">{t('about.team.maria.contact')}</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-corp-grey py-32 text-center text-white">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="font-display text-4xl mb-6">{t('about.cta.title')}</h2>
                    <p className="text-lg text-slate-400 font-light mb-12 leading-relaxed">
                        {t('about.cta.desc')}
                    </p>
                    <Link
                        to="/contact"
                        className="group relative inline-flex items-center justify-center bg-transparent border border-white text-white px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:border-grc-blue"
                    >
                        <span className="relative z-10 transition-colors duration-500 group-hover:text-white">{t('about.cta.btn')}</span>
                        <div className="absolute inset-0 bg-grc-blue transform scale-y-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-100"></div>
                    </Link>
                </div>
            </section>
        </div>
    );
}
