import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function NonQMLoan() {
    const { t } = useLanguage();

    return (
        <div className="antialiased font-serif bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-20 text-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Images/freepik__mortgage-professional-reviewing-documents-on-dual-__31260.png"
                        alt="Non-QM Loans Bank Statement Mortgages Florida"
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
                            {t('nonqm.hero.tag')}
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl text-white mb-6 leading-[1.1] tracking-tight">
                            <span dangerouslySetInnerHTML={{ __html: t('nonqm.hero.title1') }} />
                            <span className="text-grc-blue italic">{t('nonqm.hero.title2')}</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl text-center mx-auto font-light leading-relaxed">
                            {t('nonqm.hero.desc')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Two Column Layout: Features & Image */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <h2 className="font-display text-4xl md:text-5xl text-corp-grey mb-8">{t('nonqm.feat.title')}</h2>
                            <p className="text-slate-500 font-light text-lg leading-relaxed mb-8">
                                {t('nonqm.feat.desc')}
                            </p>
                            <ul className="space-y-5 text-slate-600 font-light text-lg">
                                <li className="flex items-start gap-4 p-4 bg-slate-50 border-l-4 border-grc-blue">
                                    <span className="material-symbols-outlined text-grc-blue mt-1">account_balance</span>
                                    <div>
                                        <span className="font-bold text-corp-grey block mb-1">{t('nonqm.feat.1.title')}</span>
                                        <span className="text-sm">{t('nonqm.feat.1.desc')}</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 bg-slate-50 border-l-4 border-grc-blue">
                                    <span className="material-symbols-outlined text-grc-blue mt-1">receipt_long</span>
                                    <div>
                                        <span className="font-bold text-corp-grey block mb-1">{t('nonqm.feat.2.title')}</span>
                                        <span className="text-sm">{t('nonqm.feat.2.desc')}</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 bg-slate-50 border-l-4 border-grc-blue">
                                    <span className="material-symbols-outlined text-grc-blue mt-1">language</span>
                                    <div>
                                        <span className="font-bold text-corp-grey block mb-1">{t('nonqm.feat.3.title')}</span>
                                        <span className="text-sm">{t('nonqm.feat.3.desc')}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative order-first lg:order-last">
                            <div className="absolute inset-0 bg-grc-blue/5 transform translate-x-4 -translate-y-4"></div>
                            <img
                                src="/Images/freepik__real-estate-professional-walking-through-beautiful__31258.png"
                                alt="Real estate agent closing a deal with a client"
                                className="relative z-10 w-full object-cover shadow-2xl h-[600px]"
                            />
                        </div>
                    </div>

                    {/* Data Visualization Grid */}
                    <div className="grid lg:grid-cols-2 gap-16 mb-24">
                        {/* Details Boxes */}
                        <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
                            <div className="bg-light-grey p-8 border-l-4 border-corp-grey hover:shadow-lg transition-shadow">
                                <h3 className="font-display text-2xl text-corp-grey mb-3">{t('nonqm.data.1.title')}</h3>
                                <p className="text-slate-500 font-light leading-relaxed">
                                    {t('nonqm.data.1.desc')}
                                </p>
                            </div>
                            <div className="bg-light-grey p-8 border-l-4 border-grc-blue hover:shadow-lg transition-shadow">
                                <h3 className="font-display text-2xl text-corp-grey mb-3">{t('nonqm.data.2.title')}</h3>
                                <p className="text-slate-500 font-light leading-relaxed">
                                    {t('nonqm.data.2.desc')}
                                </p>
                            </div>
                        </div>

                        {/* CSS Graph: Tax Return vs Bank Statement */}
                        <div className="p-10 border border-slate-100 shadow-sm bg-corp-grey text-white order-1 lg:order-2">
                            <h3 className="font-display text-3xl mb-2">{t('nonqm.graph.title')}</h3>
                            <p className="text-slate-300 text-sm font-light mb-8">{t('nonqm.graph.desc')}</p>

                            <div className="space-y-8">
                                {/* Tax Returns */}
                                <div>
                                    <div className="flex justify-between text-sm font-bold mb-2">
                                        <span>{t('nonqm.graph.l1')}</span>
                                        <span className="text-red-400">{t('nonqm.graph.l2')}</span>
                                    </div>
                                    <div className="w-full bg-white/10 h-6 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '25%' }}
                                            transition={{ duration: 1.2, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                            className="bg-red-400 h-full"
                                        />
                                    </div>
                                </div>
                                {/* 12 Months Bank Statements */}
                                <div>
                                    <div className="flex justify-between text-sm font-bold mb-2">
                                        <span>{t('nonqm.graph.l3')}</span>
                                        <span className="text-growth-green">{t('nonqm.graph.l4')}</span>
                                    </div>
                                    <div className="w-full bg-white/10 h-6 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '85%' }}
                                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                                            viewport={{ once: true }}
                                            className="bg-growth-green h-full"
                                        />
                                    </div>
                                    <p className="text-xs text-slate-400 mt-2 text-right">{t('nonqm.graph.l5')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Section */}
                    <div className="bg-light-grey relative overflow-hidden py-16 px-8 lg:px-16 flex flex-col items-center text-center border-y border-slate-200">
                        <h2 className="font-display text-3xl md:text-5xl text-corp-grey mb-6">{t('nonqm.cta.title')}</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto font-light text-lg mb-10">
                            {t('nonqm.cta.desc')}
                        </p>

                        <Link to="/contact?type=non-qm" className="group relative inline-flex items-center justify-center bg-grc-blue text-white px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-500">
                            <span className="relative z-10">{t('nonqm.cta.btn')}</span>
                            <div className="absolute inset-0 bg-corp-grey transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
