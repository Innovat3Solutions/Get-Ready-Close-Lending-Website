import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function InvestorLoan() {
    const { t } = useLanguage();

    return (
        <div className="antialiased font-serif bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-20 text-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Images/freepik__aerial-drone-shot-of-luxury-highrise-condo-towers-__31251.png"
                        alt="Investment Property Loans DSCR Florida Miami"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-corp-grey/90 via-corp-grey/60 to-corp-grey/20"></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-6 w-full z-10 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-full mb-8 text-white text-[10px] font-bold uppercase tracking-[0.3em]">
                            <span className="w-1.5 h-1.5 rounded-full bg-grc-blue animate-pulse"></span>
                            {t('inv.hero.tag')}
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl text-white mb-6 leading-[1.1] tracking-tight">
                            {t('inv.hero.title')}
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl text-center mx-auto font-light leading-relaxed">
                            {t('inv.hero.desc')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    {/* DSCR Spotlight - Full Width Impact */}
                    <div className="mb-24">
                        <div className="bg-corp-grey rounded-2xl relative overflow-hidden flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 p-12 lg:p-16 relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-grc-blue/20 border border-grc-blue/40 rounded-full mb-6 text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                                    {t('inv.dscr.tag')}
                                </div>
                                <h2 className="font-display text-4xl lg:text-5xl text-white mb-4">{t('inv.dscr.title')}</h2>
                                <h4 className="text-xl text-grc-blue font-bold mb-6">{t('inv.dscr.subtitle')}</h4>
                                <p className="text-slate-300 font-light text-lg leading-relaxed mb-8">
                                    {t('inv.dscr.desc')}
                                </p>
                                <ul className="space-y-4 text-white font-light">
                                    <li className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-grc-blue/20 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined flex-shrink-0 text-sm">check</span>
                                        </div>
                                        {t('inv.dscr.1')}
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-grc-blue/20 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined flex-shrink-0 text-sm">check</span>
                                        </div>
                                        {t('inv.dscr.2')}
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-grc-blue/20 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined flex-shrink-0 text-sm">check</span>
                                        </div>
                                        {t('inv.dscr.3')}
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 w-full h-full relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-corp-grey to-transparent z-10 hidden md:block"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-corp-grey to-transparent z-10 md:hidden"></div>
                                <img
                                    src="/Images/freepik__cinematic-aerial-drone-shot-of-the-downtown-miami-__31255.png"
                                    alt="Miami Drone Shot DSCR Loans"
                                    className="w-full h-full object-cover min-h-[400px] opacity-80"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Two Column Layout: Features & Data Viz */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        {/* CSS Graph: DSCR Math */}
                        <div className="p-10 border border-slate-100 shadow-sm bg-white">
                            <h3 className="font-display text-3xl text-corp-grey mb-2">{t('inv.graph.title')}</h3>
                            <p className="text-slate-500 text-sm font-light mb-8">{t('inv.graph.desc')}</p>

                            <div className="bg-light-grey p-6 rounded-lg text-center mb-8 border border-slate-200">
                                <span className="text-xl font-bold text-corp-grey" dangerouslySetInnerHTML={{ __html: t('inv.graph.calc') }} />
                            </div>

                            <div className="space-y-8">
                                {/* Income Bar */}
                                <div>
                                    <div className="flex justify-between text-sm font-bold text-corp-grey mb-2">
                                        <span>{t('inv.graph.l1')}</span>
                                        <span className="text-growth-green">{t('inv.graph.v1')}</span>
                                    </div>
                                    <div className="w-full bg-slate-100 h-6">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            transition={{ duration: 1.2, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                            className="bg-growth-green h-full"
                                        />
                                    </div>
                                </div>
                                {/* Payment Bar */}
                                <div>
                                    <div className="flex justify-between text-sm font-bold text-corp-grey mb-2">
                                        <span>{t('inv.graph.l2')}</span>
                                        <span className="text-slate-400">{t('inv.graph.v2')}</span>
                                    </div>
                                    <div className="w-full bg-slate-100 h-6">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '80%' }}
                                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                                            viewport={{ once: true }}
                                            className="bg-slate-300 h-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                                <span className="block text-4xl font-display text-corp-grey mb-1">
                                    1.25<span className="text-xl">x</span>
                                </span>
                                <span className="text-sm font-bold text-growth-green uppercase tracking-wider">{t('inv.graph.ratio')}</span>
                                <p className="text-xs text-slate-500 mt-2 font-light">
                                    {t('inv.graph.ratioDesc')}
                                </p>
                            </div>
                        </div>

                        {/* Traditional & Flip content */}
                        <div>
                            <div className="mb-10">
                                <h3 className="font-display text-3xl text-corp-grey mb-4">{t('inv.conv.title')}</h3>
                                <p className="text-slate-600 font-light leading-relaxed mb-4">
                                    {t('inv.conv.desc')}
                                </p>
                                <ul className="space-y-2 text-sm text-slate-500 font-light border-l-2 border-slate-200 pl-4">
                                    <li>{t('inv.conv.1')}</li>
                                    <li>{t('inv.conv.2')}</li>
                                    <li>{t('inv.conv.3')}</li>
                                    <li>{t('inv.conv.4')}</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-display text-3xl text-corp-grey mb-4">{t('inv.flip.title')}</h3>
                                <p className="text-slate-600 font-light leading-relaxed mb-4">
                                    {t('inv.flip.desc')}
                                </p>
                                <ul className="space-y-2 text-sm text-slate-500 font-light border-l-2 border-slate-200 pl-4">
                                    <li>{t('inv.flip.1')}</li>
                                    <li>{t('inv.flip.2')}</li>
                                    <li>{t('inv.flip.3')}</li>
                                    <li>{t('inv.flip.4')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Action Section */}
                    <div className="bg-light-grey relative overflow-hidden py-16 px-8 lg:px-16 flex flex-col items-center text-center border-y border-slate-200">
                        <h2 className="font-display text-3xl md:text-5xl text-corp-grey mb-4 relative z-10">{t('inv.cta.title')}</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto font-light text-lg mb-8 relative z-10">
                            {t('inv.cta.desc')}
                        </p>

                        <div className="relative z-10">
                            <Link to="/contact?type=investment" className="group relative inline-flex items-center justify-center bg-grc-blue text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-500">
                                <span className="relative z-10 group-hover:text-grc-blue transition-colors duration-500">{t('inv.cta.btn')}</span>
                                <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-500 border border-grc-blue group-hover:scale-x-100"></div>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
