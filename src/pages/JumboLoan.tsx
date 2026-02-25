import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function JumboLoan() {
    const { t } = useLanguage();

    return (
        <div className="antialiased font-serif bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-20 text-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Images/freepik__luxury-waterfront-mansion-in-coral-gables-large-wi__31262.png"
                        alt="Jumbo Mortgage Loans Miami Luxury Real Estate"
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
                            <span className="w-1.5 h-1.5 rounded-full bg-corp-grey animate-pulse"></span>
                            {t('jumbo.hero.tag')}
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl text-white mb-6 leading-[1.1] tracking-tight" dangerouslySetInnerHTML={{ __html: `${t('jumbo.hero.title1')} <span class="text-grc-blue italic">${t('jumbo.hero.title2')}</span>` }}>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl text-center mx-auto font-light leading-relaxed">
                            {t('jumbo.hero.desc')}
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
                            <h2 className="font-display text-4xl md:text-5xl text-corp-grey mb-8">{t('jumbo.feat.title')}</h2>
                            <p className="text-slate-500 font-light text-lg leading-relaxed mb-8">
                                {t('jumbo.feat.desc')}
                            </p>
                            <ul className="space-y-5 text-slate-600 font-light text-lg">
                                <li className="flex items-start gap-4 p-4 bg-slate-50 border-l-4 border-corp-grey">
                                    <span className="material-symbols-outlined text-corp-grey mt-1">check_circle</span>
                                    <div>
                                        <span className="font-bold text-corp-grey block mb-1">{t('jumbo.feat.1.title')}</span>
                                        <span className="text-sm">{t('jumbo.feat.1.desc')}</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 bg-slate-50 border-l-4 border-corp-grey">
                                    <span className="material-symbols-outlined text-corp-grey mt-1">check_circle</span>
                                    <div>
                                        <span className="font-bold text-corp-grey block mb-1">{t('jumbo.feat.2.title')}</span>
                                        <span className="text-sm">{t('jumbo.feat.2.desc')}</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 bg-slate-50 border-l-4 border-corp-grey">
                                    <span className="material-symbols-outlined text-corp-grey mt-1">check_circle</span>
                                    <div>
                                        <span className="font-bold text-corp-grey block mb-1">{t('jumbo.feat.3.title')}</span>
                                        <span className="text-sm">{t('jumbo.feat.3.desc')}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-corp-grey/5 transform translate-x-4 translate-y-4"></div>
                            <img
                                src="/Images/freepik__wealthy-couple-reviewing-financial-portfolio-with-__31262.png"
                                alt="High net worth clients reviewing financials"
                                className="relative z-10 w-full object-cover shadow-2xl h-[600px]"
                            />
                        </div>
                    </div>

                    {/* Data Visualization Grid */}
                    <div className="grid lg:grid-cols-2 gap-16 mb-24">
                        {/* CSS Graph: Loan Limits */}
                        <div className="p-10 border border-slate-100 shadow-sm bg-white">
                            <h3 className="font-display text-3xl text-corp-grey mb-2">{t('jumbo.graph.title')}</h3>
                            <p className="text-slate-500 text-sm font-light mb-8">{t('jumbo.graph.desc')}</p>

                            <div className="space-y-8">
                                {/* Conforming */}
                                <div>
                                    <div className="flex justify-between text-sm font-bold text-corp-grey mb-2">
                                        <span>{t('jumbo.graph.l1')}</span>
                                        <span className="text-slate-400">$766,550</span>
                                    </div>
                                    <div className="w-full bg-slate-100 h-6">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '40%' }}
                                            transition={{ duration: 1.2, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                            className="bg-slate-300 h-full"
                                        />
                                    </div>
                                </div>
                                {/* Jumbo Mid */}
                                <div>
                                    <div className="flex justify-between text-sm font-bold text-corp-grey mb-2">
                                        <span>{t('jumbo.graph.l2')}</span>
                                        <span className="text-grc-blue">$1.5M - $3M</span>
                                    </div>
                                    <div className="w-full bg-slate-100 h-6">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '70%' }}
                                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                                            viewport={{ once: true }}
                                            className="bg-grc-blue h-full"
                                        />
                                    </div>
                                </div>
                                {/* Super Jumbo */}
                                <div>
                                    <div className="flex justify-between text-sm font-bold text-corp-grey mb-2">
                                        <span>{t('jumbo.graph.l3')}</span>
                                        <span className="text-corp-grey">$3M - $10M+</span>
                                    </div>
                                    <div className="w-full bg-slate-100 h-6 relative overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                                            viewport={{ once: true }}
                                            className="bg-corp-grey h-full"
                                        />
                                        {/* Gradient fade to show infinity */}
                                        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-100 to-transparent z-10 pointer-events-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Details Boxes */}
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="bg-light-grey p-8 border-l-4 border-corp-grey hover:shadow-lg transition-shadow">
                                <h3 className="font-display text-2xl text-corp-grey mb-3">{t('jumbo.data.1.title')}</h3>
                                <p className="text-slate-500 font-light leading-relaxed">
                                    {t('jumbo.data.1.desc')}
                                </p>
                            </div>
                            <div className="bg-light-grey p-8 border-l-4 border-grc-blue hover:shadow-lg transition-shadow">
                                <h3 className="font-display text-2xl text-corp-grey mb-3">{t('jumbo.data.2.title')}</h3>
                                <p className="text-slate-500 font-light leading-relaxed">
                                    {t('jumbo.data.2.desc')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Section */}
                    <div className="bg-corp-grey relative overflow-hidden py-16 px-8 lg:px-16 flex flex-col items-center text-center">
                        <div className="absolute inset-0 opacity-20">
                            {/* Decorative angled lines */}
                            <div className="absolute -left-1/4 -top-1/4 w-full h-full border-[1px] border-white/10 rotate-12"></div>
                            <div className="absolute -right-1/4 top-1/4 w-full h-full border-[1px] border-white/10 rotate-12"></div>
                        </div>

                        <h2 className="font-display text-3xl md:text-5xl text-white mb-6 relative z-10">{t('jumbo.cta.title')}</h2>
                        <p className="text-slate-300 max-w-2xl mx-auto font-light text-lg mb-10 relative z-10">
                            {t('jumbo.cta.desc')}
                        </p>

                        <div className="flex justify-center relative z-10">
                            <Link to="/contact?type=jumbo" className="group relative inline-flex items-center justify-center bg-white text-corp-grey px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-500">
                                <span className="relative z-10">{t('jumbo.cta.btn')}</span>
                                <div className="absolute inset-0 bg-slate-100 transform scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
