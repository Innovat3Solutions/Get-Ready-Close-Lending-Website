import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function FHALoan() {
    const { t } = useLanguage();

    return (
        <div className="antialiased font-serif bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-20 text-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Images/freepik__a-happy-multicultural-family-standing-in-front-of-__31265.png"
                        alt="FHA Loans South Florida"
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
                            <span className="w-1.5 h-1.5 rounded-full bg-growth-green animate-pulse"></span>
                            {t('fha.hero.tag')}
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl text-white mb-6 leading-[1.1] tracking-tight">
                            <span dangerouslySetInnerHTML={{ __html: t('fha.hero.title1') }} />
                            <span className="text-grc-blue italic">{t('fha.hero.title2')}</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl text-center mx-auto font-light leading-relaxed">
                            {t('fha.hero.desc')}
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
                            <h2 className="font-display text-4xl md:text-5xl text-corp-grey mb-8">{t('fha.feat.title')}</h2>
                            <p className="text-slate-500 font-light text-lg leading-relaxed mb-8">
                                {t('fha.feat.desc')}
                            </p>
                            <ul className="space-y-5 text-slate-600 font-light text-lg">
                                <li className="flex items-start gap-4 p-4 bg-slate-50 border-l-4 border-growth-green">
                                    <span className="material-symbols-outlined text-growth-green mt-1">check_circle</span>
                                    <div>
                                        <span className="font-bold text-corp-grey block mb-1">{t('fha.feat.1.title')}</span>
                                        <span className="text-sm">{t('fha.feat.1.desc')}</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 bg-slate-50 border-l-4 border-growth-green">
                                    <span className="material-symbols-outlined text-growth-green mt-1">check_circle</span>
                                    <div>
                                        <span className="font-bold text-corp-grey block mb-1">{t('fha.feat.2.title')}</span>
                                        <span className="text-sm">{t('fha.feat.2.desc')}</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 bg-slate-50 border-l-4 border-growth-green">
                                    <span className="material-symbols-outlined text-growth-green mt-1">check_circle</span>
                                    <div>
                                        <span className="font-bold text-corp-grey block mb-1">{t('fha.feat.3.title')}</span>
                                        <span className="text-sm">{t('fha.feat.3.desc')}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-grc-blue/5 transform translate-x-4 translate-y-4"></div>
                            <img
                                src="/Images/freepik__happy-young-couple-standing-in-front-of-a-beautifu__31256.png"
                                alt="Happy couple in front of home"
                                className="relative z-10 w-full object-cover shadow-2xl h-[600px]"
                            />
                        </div>
                    </div>

                    {/* Data Visualization Grid */}
                    <div className="grid lg:grid-cols-2 gap-16 mb-24">
                        {/* CSS Graph: Down Payment Comparison */}
                        <div className="p-10 border border-slate-100 shadow-sm bg-white">
                            <h3 className="font-display text-3xl text-corp-grey mb-2">{t('fha.graph.title')}</h3>
                            <p className="text-slate-500 text-sm font-light mb-8">{t('fha.graph.desc')}</p>

                            <div className="space-y-6">
                                {/* FHA Bar */}
                                <div>
                                    <div className="flex justify-between text-sm font-bold text-corp-grey mb-2">
                                        <span>{t('fha.graph.l1')}</span>
                                        <span className="text-growth-green">3.5%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 h-6">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '17.5%' }} // Visual scale (3.5 * 5)
                                            transition={{ duration: 1.2, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                            className="bg-growth-green h-full"
                                        />
                                    </div>
                                </div>
                                {/* Conventional Bar */}
                                <div>
                                    <div className="flex justify-between text-sm font-bold text-corp-grey mb-2">
                                        <span>{t('fha.graph.l2')}</span>
                                        <span className="text-grc-blue">5.0%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 h-6">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '25%' }} // Visual scale (5.0 * 5)
                                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                                            viewport={{ once: true }}
                                            className="bg-grc-blue h-full"
                                        />
                                    </div>
                                </div>
                                {/* Jumbo Bar */}
                                <div>
                                    <div className="flex justify-between text-sm font-bold text-corp-grey mb-2">
                                        <span>{t('fha.graph.l3')}</span>
                                        <span className="text-slate-400">10-20%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 h-6">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '75%' }} // Visual avg (15 * 5)
                                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                                            viewport={{ once: true }}
                                            className="bg-slate-300 h-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Details Boxes */}
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="bg-light-grey p-8 border-l-4 border-grc-blue hover:shadow-lg transition-shadow">
                                <h3 className="font-display text-2xl text-corp-grey mb-3">{t('fha.data.1.title')}</h3>
                                <p className="text-slate-500 font-light leading-relaxed">
                                    {t('fha.data.1.desc')}
                                </p>
                            </div>
                            <div className="bg-light-grey p-8 border-l-4 border-growth-green hover:shadow-lg transition-shadow">
                                <h3 className="font-display text-2xl text-corp-grey mb-3">{t('fha.data.2.title')}</h3>
                                <p className="text-slate-500 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: t('fha.data.2.desc') }} />
                            </div>
                        </div>
                    </div>

                    {/* Official Gov Resource & Action Section */}
                    <div className="bg-corp-grey relative overflow-hidden py-16 px-8 lg:px-16 flex flex-col items-center text-center">
                        <div className="absolute inset-0 opacity-10">
                            {/* Decorative background grid pattern */}
                            <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                        </div>

                        <h2 className="font-display text-3xl md:text-5xl text-white mb-6 relative z-10">{t('fha.cta.title')}</h2>
                        <p className="text-slate-300 max-w-2xl mx-auto font-light text-lg mb-10 relative z-10">
                            {t('fha.cta.desc')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                            <Link to="/contact?type=fha" className="group relative inline-flex items-center justify-center bg-growth-green text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-500">
                                <span className="relative z-10">{t('fha.cta.btn')}</span>
                                <div className="absolute inset-0 bg-white/20 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
                            </Link>

                            <a href="https://www.hud.gov/buying/loans" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-transparent border border-white/30 text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-corp-grey transition-all duration-300">
                                <span className="material-symbols-outlined text-sm">account_balance</span>
                                {t('fha.cta.link')}
                                <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">open_in_new</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
