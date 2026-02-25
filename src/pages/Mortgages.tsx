import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Mortgages() {
    const { t } = useLanguage();
    const programs = [
        {
            title: t('mortgages.prog.conv.title'),
            description: t('mortgages.prog.conv.desc'),
            image: "/Images/freepik__confident-couple-standing-inside-their-new-miami-h__31257.png",
            tag: t('mortgages.prog.conv.tag'),
            link: "/mortgages/conventional"
        },
        {
            title: t('mortgages.prog.jumbo.title'),
            description: t('mortgages.prog.jumbo.desc'),
            image: "/Images/freepik__luxury-waterfront-mansion-in-coral-gables-large-wi__31262.png",
            tag: t('mortgages.prog.jumbo.tag'),
            link: "/mortgages/jumbo"
        },
        {
            title: t('mortgages.prog.fha.title'),
            description: t('mortgages.prog.fha.desc'),
            image: "/Images/freepik__middleclass-family-standing-proudly-in-front-of-a-__31263.png",
            tag: t('mortgages.prog.fha.tag'),
            link: "/mortgages/fha"
        },
        {
            title: t('mortgages.prog.va.title'),
            description: t('mortgages.prog.va.desc'),
            image: "/Images/freepik__happy-young-couple-standing-in-front-of-a-beautifu__31256.png",
            tag: t('mortgages.prog.va.tag'),
            link: "/mortgages/va"
        },
        {
            title: t('mortgages.prog.usda.title'),
            description: t('mortgages.prog.usda.desc'),
            image: "/Images/freepik__luxury-waterfront-mansion-in-coral-gables-miami-wi__31253.png",
            tag: t('mortgages.prog.usda.tag'),
            link: "/mortgages/usda"
        },
        {
            title: t('mortgages.prog.nonqm.title'),
            description: t('mortgages.prog.nonqm.desc'),
            image: "/Images/freepik__real-estate-professional-walking-through-beautiful__31258.png",
            tag: t('mortgages.prog.nonqm.tag'),
            link: "/mortgages/non-qm"
        },
        {
            title: t('mortgages.prog.invest.title'),
            description: t('mortgages.prog.invest.desc'),
            image: "/Images/freepik__ultrarealistic-drone-view-of-brickell-miami-luxury__31254.png",
            tag: t('mortgages.prog.invest.tag'),
            link: "/mortgages/investment"
        },
        {
            title: t('mortgages.prog.first.title'),
            description: t('mortgages.prog.first.desc'),
            image: "/Images/freepik__loan-officer-sitting-with-homeowners-reviewing-det__31259.png",
            tag: t('mortgages.prog.first.tag'),
            link: "/mortgages/first-time-buyer"
        },
        {
            title: t('mortgages.prog.refi.title'),
            description: t('mortgages.prog.refi.desc'),
            image: "/Images/freepik__closeup-of-tablet-screen-showing-mortgage-rate-dro__31266.png",
            tag: t('mortgages.prog.refi.tag'),
            link: "/mortgages/refinance"
        }
    ];

    return (
        <div className="bg-light-grey pb-24">
            {/* Minimalist Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Images/freepik__modern-oceanfront-luxury-home-in-miami-beach-infin__31252.png"
                        alt="Luxury Real Estate"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-corp-grey/80 backdrop-blur-sm"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-display text-4xl md:text-6xl text-white mb-6 tracking-tight">
                            {t('mortgages.hero.title1')}<span className="text-grc-blue italic">{t('mortgages.hero.title2')}</span>
                        </h1>
                        <p className="text-lg text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
                            {t('mortgages.hero.desc')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Clean Grid Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:-mt-16 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 group hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                <div className="absolute bottom-4 left-4">
                                    <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full">
                                        {program.tag}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h2 className="text-2xl font-display text-corp-grey mb-3 group-hover:text-grc-blue transition-colors">
                                    {program.title}
                                </h2>
                                <p className="text-slate-500 text-[15px] leading-relaxed mb-8 flex-1">
                                    {program.description}
                                </p>

                                <Link
                                    to={program.link}
                                    className="mt-auto inline-flex items-center justify-between w-full pb-2 border-b border-slate-200 text-sm font-bold uppercase tracking-widest text-corp-grey hover:text-grc-blue hover:border-grc-blue transition-all"
                                >
                                    {t('mortgages.prog.explore')}
                                    <span className="material-symbols-outlined transform group-hover:translate-x-2 transition-transform">arrow_forward</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Premium CTA Block */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-12">
                <div className="bg-white rounded-3xl p-10 md:p-16 border border-slate-200 shadow-[0_20px_40px_rgba(0,0,0,0.04)] text-center relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-grc-blue/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-corp-grey/5 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-display text-corp-grey mb-6">{t('mortgages.cta.title')}</h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                            {t('mortgages.cta.desc')}
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center bg-[#1a1814] text-white px-10 py-4 rounded-full text-[14px] font-bold uppercase tracking-widest hover:bg-grc-blue transition-colors duration-300 shadow-xl hover:shadow-grc-blue/30"
                        >
                            {t('mortgages.cta.btn')}
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
