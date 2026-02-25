import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Refinance() {
    const { t } = useLanguage();

    return (
        <div className="antialiased font-serif bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-20 text-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Images/freepik__modern-oceanfront-luxury-home-in-miami-beach-infin__31252.png"
                        alt="Mortgage Refinance South Florida Rate Term Cash Out"
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
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-pulse"></span>
                            {t('refi.hero.tag')}
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl text-white mb-6 leading-[1.1] tracking-tight">
                            <span dangerouslySetInnerHTML={{ __html: t('refi.hero.title1') }} /> <span className="text-grc-blue italic">{t('refi.hero.title2')}</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl text-center mx-auto font-light leading-relaxed">
                            {t('refi.hero.desc')}
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
                            <h2 className="font-display text-4xl md:text-5xl text-corp-grey mb-8">{t('refi.feat.title')}</h2>
                            <p className="text-slate-500 font-light text-lg leading-relaxed mb-8">
                                {t('refi.feat.desc')}
                            </p>

                            <div className="space-y-6">
                                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-grc-blue">
                                    <h3 className="font-display text-2xl text-corp-grey mb-2">{t('refi.feat.1.title')}</h3>
                                    <p className="text-slate-600 font-light text-sm">
                                        {t('refi.feat.1.desc')}
                                    </p>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-growth-green">
                                    <h3 className="font-display text-2xl text-corp-grey mb-2">{t('refi.feat.2.title')}</h3>
                                    <p className="text-slate-600 font-light text-sm">
                                        {t('refi.feat.2.desc')}
                                    </p>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-corp-grey">
                                    <h3 className="font-display text-2xl text-corp-grey mb-2">{t('refi.feat.3.title')}</h3>
                                    <p className="text-slate-600 font-light text-sm">
                                        {t('refi.feat.3.desc')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-grc-blue/5 transform translate-x-4 translate-y-4"></div>
                            <img
                                src="/Images/freepik__closeup-of-tablet-screen-showing-mortgage-rate-dro__31266.png"
                                alt="Mortgage rate drop analysis on tablet"
                                className="relative z-10 w-full object-cover shadow-2xl h-[600px]"
                            />
                        </div>
                    </div>

                    {/* Data Visualization Grid */}
                    <div className="grid lg:grid-cols-2 gap-16 mb-24">
                        {/* CSS Graph: Rate Drop Impact */}
                        <div className="p-10 border border-slate-100 shadow-sm bg-white">
                            <h3 className="font-display text-3xl text-corp-grey mb-2">{t('refi.graph.title')}</h3>
                            <p className="text-slate-500 text-sm font-light mb-8">{t('refi.graph.desc')}</p>

                            <div className="space-y-8">
                                {/* Current Rate */}
                                <div>
                                    <div className="flex justify-between text-sm font-bold text-corp-grey mb-2">
                                        <span>{t('refi.graph.l1')}</span>
                                        <span className="text-slate-400">{t('refi.graph.v1')}</span>
                                    </div>
                                    <div className="w-full bg-slate-100 h-6">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            transition={{ duration: 1.2, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                            className="bg-slate-300 h-full"
                                        />
                                    </div>
                                </div>
                                {/* New Rate */}
                                <div>
                                    <div className="flex justify-between text-sm font-bold text-corp-grey mb-2">
                                        <span>{t('refi.graph.l2')}</span>
                                        <span className="text-growth-green">{t('refi.graph.v2')}</span>
                                    </div>
                                    <div className="w-full bg-slate-100 h-6">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '85%' }}
                                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                                            viewport={{ once: true }}
                                            className="bg-growth-green h-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <div className="text-center">
                                    <span className="block text-4xl font-display text-growth-green mb-1">-$398</span>
                                    <span className="text-sm font-bold text-corp-grey uppercase tracking-wider">{t('refi.graph.savings')}</span>
                                </div>
                                <p className="text-center text-xs text-slate-400 mt-2 font-light">
                                    {t('refi.graph.disclaimer')}
                                </p>
                            </div>
                        </div>

                        {/* Details Boxes */}
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="bg-light-grey p-8 border-l-4 border-grc-blue hover:shadow-lg transition-shadow">
                                <h3 className="font-display text-2xl text-corp-grey mb-3 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-grc-blue">calculate</span>
                                    {t('refi.data.1.title')}
                                </h3>
                                <p className="text-slate-500 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: t('refi.data.1.desc') }} />
                            </div>
                            <div className="bg-light-grey p-8 border-l-4 border-corp-grey hover:shadow-lg transition-shadow">
                                <h3 className="font-display text-2xl text-corp-grey mb-3 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-corp-grey">trending_down</span>
                                    {t('refi.data.2.title')}
                                </h3>
                                <p className="text-slate-500 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: t('refi.data.2.desc') }} />
                            </div>
                        </div>
                    </div>

                    {/* Action Section */}
                    <div className="bg-corp-grey relative overflow-hidden py-16 px-8 lg:px-16 flex flex-col items-center text-center">
                        <div className="absolute inset-0 opacity-10">
                            <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                        </div>

                        <h2 className="font-display text-3xl md:text-5xl text-white mb-6 relative z-10">{t('refi.cta.title')}</h2>
                        <p className="text-slate-300 max-w-2xl mx-auto font-light text-lg mb-10 relative z-10">
                            {t('refi.cta.desc')}
                        </p>

                        <div className="relative z-10">
                            <Link to="/contact?type=refinance" className="group relative inline-flex items-center justify-center bg-white text-corp-grey px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-500">
                                <span className="relative z-10 group-hover:text-white transition-colors duration-500">{t('refi.cta.btn')}</span>
                                <div className="absolute inset-0 bg-growth-green transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
