import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { TextReveal } from '../components/ui/text-reveal';

export default function Home() {
    const { t } = useLanguage();
    const [activeProgram, setActiveProgram] = useState(0);

    const programs = [
        {
            id: 'conventional',
            title: t('home.programs.item1.title') || 'Conventional & Jumbo',
            description: t('home.programs.item1.desc') || 'Competitive rates and flexible terms for buyers with strong credit seeking premium properties or luxury estates.',
            image: '/Images/freepik__modern-oceanfront-luxury-home-in-miami-beach-infin__31252.png',
            icon: 'account_balance',
            link: '/mortgages/conventional'
        },
        {
            id: 'fha',
            title: t('home.programs.item2.title') || 'First-Time & FHA',
            description: t('home.programs.item2.desc') || 'Accessible pathways to homeownership with lower down payments and flexible credit requirements.',
            image: '/Images/freepik__confident-couple-standing-inside-their-new-miami-h__31257.png',
            icon: 'foundation',
            link: '/mortgages/fha'
        },
        {
            id: 'va',
            title: t('home.programs.item3.title') || 'Veterans & Heroes',
            description: t('home.programs.item3.desc') || 'Exclusive zero-down payment options honoring our military service members with no PMI required.',
            image: '/Images/freepik__real-estate-professional-walking-through-beautiful__31258.png',
            icon: 'workspace_premium',
            link: '/mortgages/va'
        },
        {
            id: 'investor',
            title: t('home.programs.item4.title') || 'Investors & Non-QM',
            description: t('home.programs.item4.desc') || 'Alternative qualification methods utilizing bank statements or property cash flow (DSCR) for real estate investors.',
            image: '/Images/freepik__aerial-drone-shot-of-luxury-south-florida-resident__31249.png',
            icon: 'domain',
            link: '/mortgages/investment'
        }
    ];

    return (
        <div className="antialiased font-serif bg-white">
            {/* Hero Section - Center Aligned & Elegant */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-visible pt-20 text-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Images/freepik__modern-oceanfront-luxury-home-in-miami-beach-infin__31252.png"
                        alt="Luxury Miami Home"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-corp-grey/95 via-corp-grey/70 to-corp-grey/40 backdrop-blur-[1px]"></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10 flex flex-col items-center pb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center"
                    >
                        <div className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-white/5 border border-white/20 backdrop-blur-md rounded-full mb-10 text-white text-[10px] font-bold uppercase tracking-[0.3em]">
                            <span className="w-1.5 h-1.5 rounded-full bg-grc-blue animate-pulse"></span>
                            Your South Florida Mortgage Experts
                        </div>

                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.05] tracking-tight">
                            <span className="sr-only">Your Premiere South Florida Mortgage Lender</span>
                            Ready, Set, <span className="italic font-light text-grc-blue">Close.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed font-light max-w-2xl text-center mx-auto">
                            Elevating the standard of South Florida real estate financing. Whether you're purchasing a luxury home in Miami or an investment property, our decades of expertise guarantee a seamless transaction.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/contact" className="group relative inline-flex items-center justify-center bg-transparent border border-white/40 text-white px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:border-white">
                                <span className="relative z-10 transition-colors duration-500 group-hover:text-corp-grey">Start Application</span>
                                <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100"></div>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Stats Section now contained within Hero */}
                <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 -mb-16 sm:-mb-20 md:-mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl sm:rounded-2xl grid grid-cols-3 divide-x divide-white/10 shadow-2xl overflow-hidden"
                    >
                        <div className="p-3 sm:p-6 md:p-10 text-center group hover:bg-white/10 transition-colors duration-500">
                            <p className="text-grc-blue font-bold text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.3em] mb-1 sm:mb-4">Established</p>
                            <p className="text-2xl sm:text-4xl md:text-5xl font-display text-white mb-0.5 sm:mb-2">25+</p>
                            <p className="text-slate-400 text-[9px] sm:text-xs uppercase tracking-wide sm:tracking-widest hidden sm:block">Years of Expertise</p>
                            <p className="text-slate-400 text-[9px] uppercase tracking-wide sm:hidden">Years</p>
                        </div>
                        <div className="p-3 sm:p-6 md:p-10 text-center group hover:bg-white/10 transition-colors duration-500">
                            <p className="text-growth-green font-bold text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.3em] mb-1 sm:mb-4">Volume</p>
                            <p className="text-2xl sm:text-4xl md:text-5xl font-display text-white mb-0.5 sm:mb-2">1,200+</p>
                            <p className="text-slate-400 text-[9px] sm:text-xs uppercase tracking-wide sm:tracking-widest hidden sm:block">Families Funded</p>
                            <p className="text-slate-400 text-[9px] uppercase tracking-wide sm:hidden">Funded</p>
                        </div>
                        <div className="p-3 sm:p-6 md:p-10 text-center group hover:bg-white/10 transition-colors duration-500">
                            <p className="text-grc-red font-bold text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.3em] mb-1 sm:mb-4">Value</p>
                            <p className="text-2xl sm:text-4xl md:text-5xl font-display text-white mb-0.5 sm:mb-2">$500M+</p>
                            <p className="text-slate-400 text-[9px] sm:text-xs uppercase tracking-wide sm:tracking-widest hidden sm:block">Total Loans Closed</p>
                            <p className="text-slate-400 text-[9px] uppercase tracking-wide sm:hidden">Closed</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Text Reveal Core Philosophy - Shortened */}
            <section className="bg-light-grey pt-36 pb-12 w-full relative z-10">
                <TextReveal className="text-corp-grey w-full text-center">
                    {t('home.philosophy')}
                </TextReveal>
            </section>

            {/* About GRC Section */}
            <section className="py-32 bg-white" id="about">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative z-10 border border-slate-100 bg-white shadow-2xl p-2 rounded-sm transform lg:-rotate-2">
                                <img
                                    alt="Loan Officer Consulting"
                                    className="w-full h-[500px] object-cover grayscale-[20%] contrast-125"
                                    src="/Images/freepik__loan-officer-sitting-with-homeowners-reviewing-det__31259.png"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-[1px] bg-grc-blue"></span>
                                <h2 className="text-grc-blue font-bold text-[10px] uppercase tracking-[0.3em]">Knowledge is Power</h2>
                            </div>
                            <h3 className="font-display text-4xl md:text-5xl lg:text-5xl text-corp-grey mb-8 leading-[1.1] tracking-tight">Meet GRC Lending</h3>
                            <p className="text-slate-500 text-lg mb-8 leading-relaxed font-light">
                                GRC Lending is a premier full-service mortgage company based in Miami, Florida. We specialize in bespoke real estate financing for luxury homes, investment properties, and commercial developments across the state.
                            </p>
                            <p className="text-slate-500 text-lg mb-12 leading-relaxed font-light">
                                "Our ultimate goal is to ensure you fall in love with your home, not stress over how to finance it. We surround you with experts who have been in this field for over 25 years to guarantee a smooth closing."
                            </p>
                            <Link to="/about" className="group relative inline-flex items-center justify-center bg-transparent border border-corp-grey text-corp-grey px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-500">
                                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Read Our Story</span>
                                <div className="absolute inset-0 bg-corp-grey transform scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100"></div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mortgage Programs Section */}
            <section className="py-16 sm:py-24 md:py-32 bg-light-grey">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    {/* Header */}
                    <div className="mb-8 sm:mb-12">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="w-8 sm:w-12 h-[1px] bg-grc-blue"></span>
                            <h2 className="text-grc-blue font-bold text-[10px] uppercase tracking-[0.3em]">{t('home.programs.badge') || "Tailored Financing"}</h2>
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-corp-grey mb-4 sm:mb-6 leading-tight">{t('home.programs.title') || "Programs Offered"}</h2>
                        <p className="text-slate-500 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
                            {t('home.programs.desc') || "Discover the right financing option for your next property. We offer tailored solutions to fit your unique financial situation."}
                        </p>
                    </div>

                    {/* Mobile Carousel */}
                    <div className="lg:hidden">
                        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4 -mx-4 px-4">
                            {programs.map((program) => (
                                <Link
                                    key={program.id}
                                    to={program.link}
                                    className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg active:scale-[0.98] transition-transform"
                                >
                                    <div className="relative h-40 sm:h-48">
                                        <img
                                            src={program.image}
                                            alt={program.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-corp-grey/80 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <span className="material-symbols-outlined text-white text-2xl mb-2">{program.icon}</span>
                                            <h3 className="font-display text-lg text-white">{program.title}</h3>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <p className="text-slate-500 font-light text-sm leading-relaxed line-clamp-3">{program.description}</p>
                                        <div className="mt-4 flex items-center gap-2 text-grc-blue font-bold text-xs uppercase tracking-wider">
                                            <span>Learn More</span>
                                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        {/* Scroll indicator */}
                        <div className="flex justify-center gap-2 mt-4">
                            <span className="text-slate-400 text-xs flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">swipe</span>
                                Swipe to explore
                            </span>
                        </div>
                    </div>

                    {/* Desktop Tabs Layout */}
                    <div className="hidden lg:flex flex-row gap-20 items-stretch">
                        {/* Left Side: Tabs */}
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="flex flex-col gap-4">
                                {programs.map((program, index) => (
                                    <button
                                        key={program.id}
                                        onClick={() => setActiveProgram(index)}
                                        className={`group relative p-6 border text-left transition-all duration-500 overflow-hidden ${activeProgram === index
                                            ? 'bg-corp-grey border-corp-grey text-white shadow-xl scale-[1.02]'
                                            : 'bg-white border-slate-200 text-corp-grey hover:border-grc-blue hover:shadow-md'
                                            }`}
                                    >
                                        <div className="relative z-10 flex items-start gap-6">
                                            <span className={`material-symbols-outlined text-3xl transition-colors duration-500 ${activeProgram === index ? 'text-white' : 'text-grc-blue group-hover:text-grc-blue'
                                                }`}>
                                                {program.icon}
                                            </span>
                                            <div>
                                                <h3 className={`font-display text-xl mb-2 transition-colors duration-500 ${activeProgram === index ? 'text-white' : 'text-corp-grey'
                                                    }`}>
                                                    {program.title}
                                                </h3>
                                                <p className={`font-light text-sm transition-colors duration-500 ${activeProgram === index ? 'text-slate-300' : 'text-slate-500'
                                                    }`}>
                                                    {program.description}
                                                </p>
                                            </div>
                                        </div>
                                        {activeProgram !== index && (
                                            <div className="absolute inset-0 bg-slate-50 transform scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100"></div>
                                        )}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-12">
                                <Link to="/mortgages" className="group relative inline-flex items-center justify-center bg-transparent border border-corp-grey text-corp-grey px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-500">
                                    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">{t('home.programs.btnExplore')}</span>
                                    <div className="absolute inset-0 bg-corp-grey transform scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100"></div>
                                </Link>
                            </div>
                        </div>

                        {/* Right Side: Image Display */}
                        <div className="flex-1 relative min-h-[600px] rounded-lg overflow-hidden shadow-2xl">
                            {programs.map((program, index) => (
                                <motion.div
                                    key={program.id}
                                    initial={false}
                                    animate={{
                                        opacity: activeProgram === index ? 1 : 0,
                                        scale: activeProgram === index ? 1 : 1.05,
                                        zIndex: activeProgram === index ? 10 : 0
                                    }}
                                    transition={{ duration: 0.7, ease: "easeInOut" }}
                                    className="absolute inset-0"
                                >
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-corp-grey/90 via-corp-grey/20 to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                                        <div className="max-w-[70%]">
                                            <p className="text-white/80 font-light text-sm italic">"{program.description.split('.')[0]}."</p>
                                        </div>
                                        <Link to={program.link} className="group/link flex items-center gap-2 text-white bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 hover:bg-white hover:text-corp-grey transition-colors duration-500">
                                            <span className="font-bold text-[10px] uppercase tracking-widest">{t('home.programs.btnLearn')}</span>
                                            <span className="material-symbols-outlined text-sm transform transition-transform duration-300 group-hover/link:translate-x-1">arrow_forward</span>
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile CTA */}
                    <div className="lg:hidden mt-8 text-center">
                        <Link to="/mortgages" className="group relative inline-flex items-center justify-center bg-corp-grey text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] overflow-hidden transition-all duration-300 rounded-lg active:scale-[0.98]">
                            <span>{t('home.programs.btnExplore')}</span>
                            <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 sm:py-24 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-16 gap-6 sm:gap-8">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="w-8 sm:w-12 h-[1px] bg-grc-blue"></span>
                                <h2 className="text-grc-blue font-bold text-[10px] uppercase tracking-[0.3em]">{t('home.testimonials.badge')}</h2>
                            </div>
                            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-corp-grey leading-tight">{t('home.testimonials.title')}</h3>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10">
                            <div className="flex items-center gap-2">
                                <span className="text-yellow-400 text-xl sm:text-2xl tracking-widest">★★★★★</span>
                                <span className="text-slate-500 text-sm font-bold ml-2">{t('home.testimonials.googleStars')}</span>
                            </div>
                            <a href="https://g.page/r/your-google-business-id/review" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex group relative items-center justify-center bg-white border border-slate-200 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:border-grc-blue hover:shadow-lg">
                                <span className="relative z-10 flex items-center gap-2 text-corp-grey group-hover:text-grc-blue transition-colors duration-500">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4" />
                                    {t('home.testimonials.leaveReview')}
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Mobile Carousel */}
                    <div className="md:hidden">
                        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4 -mx-4 px-4">
                            {[
                                { text: "The team at GRC Lending was phenomenal. From application to closing, they kept us informed and secured an incredible rate. True professionals!", author: "Maria G." },
                                { text: "I was nervous as a first-time homebuyer, but Juan and his team explained every step of the FHA process clearly. We closed exactly on time.", author: "David L." },
                                { text: "Flawless experience using my VA loan benefits. They honor veterans and made the financing portion the easiest part of buying our new home.", author: "Robert S." }
                            ].map((review, index) => (
                                <div key={index} className="flex-shrink-0 w-[300px] sm:w-[340px] snap-start border border-slate-200 p-6 bg-light-grey/50 rounded-xl">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex text-yellow-500 text-sm">★★★★★</div>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Review" className="w-5 h-5 opacity-50" />
                                    </div>
                                    <p className="text-slate-600 font-light italic text-sm leading-relaxed mb-4">"{review.text}"</p>
                                    <p className="text-xs font-bold uppercase text-corp-grey tracking-widest">— {review.author}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center gap-2 mt-4">
                            <span className="text-slate-400 text-xs flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">swipe</span>
                                Swipe to read more
                            </span>
                        </div>
                        <div className="mt-6 text-center">
                            <a href="https://g.page/r/your-google-business-id/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-lg text-sm font-semibold text-corp-grey active:scale-[0.98] transition-transform">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4" />
                                {t('home.testimonials.leaveReview')}
                            </a>
                        </div>
                    </div>

                    {/* Desktop Grid */}
                    <div className="hidden md:grid md:grid-cols-3 gap-8">
                        <div className="border border-slate-200 p-8 hover:shadow-lg transition-shadow bg-light-grey/50">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex text-yellow-500 text-sm">★★★★★</div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Review" className="w-5 h-5 opacity-50" />
                            </div>
                            <p className="text-slate-600 font-light italic text-sm leading-relaxed mb-6">
                                "The team at GRC Lending was phenomenal. From application to closing, they kept us informed and secured an incredible rate. True professionals!"
                            </p>
                            <p className="text-xs font-bold uppercase text-corp-grey tracking-widest">— Maria G.</p>
                        </div>

                        <div className="border border-slate-200 p-8 hover:shadow-lg transition-shadow bg-light-grey/50">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex text-yellow-500 text-sm">★★★★★</div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Review" className="w-5 h-5 opacity-50" />
                            </div>
                            <p className="text-slate-600 font-light italic text-sm leading-relaxed mb-6">
                                "I was nervous as a first-time homebuyer, but Juan and his team explained every step of the FHA process clearly. We closed exactly on time."
                            </p>
                            <p className="text-xs font-bold uppercase text-corp-grey tracking-widest">— David L.</p>
                        </div>

                        <div className="border border-slate-200 p-8 hover:shadow-lg transition-shadow bg-light-grey/50">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex text-yellow-500 text-sm">★★★★★</div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Review" className="w-5 h-5 opacity-50" />
                            </div>
                            <p className="text-slate-600 font-light italic text-sm leading-relaxed mb-6">
                                "Flawless experience using my VA loan benefits. They honor veterans and made the financing portion the easiest part of buying our new home."
                            </p>
                            <p className="text-xs font-bold uppercase text-corp-grey tracking-widest">— Robert S.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location & Map Section */}
            <section className="py-24 bg-light-grey border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/3">
                            <h3 className="font-display text-4xl text-corp-grey mb-8">{t('home.location.title')}</h3>
                            <p className="text-slate-500 font-light leading-relaxed mb-8">
                                {t('home.location.desc')}
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-grc-blue bg-white p-3 rounded-xl shadow-sm">location_on</span>
                                    <div>
                                        <p className="font-bold text-corp-grey uppercase tracking-wider text-xs mb-1">{t('home.location.office.label')}</p>
                                        <p className="text-slate-500 text-sm font-light">{t('home.location.office.val1')}<br />{t('home.location.office.val2')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-growth-green bg-white p-3 rounded-xl shadow-sm">call</span>
                                    <div>
                                        <p className="font-bold text-corp-grey uppercase tracking-wider text-xs mb-1">{t('home.location.phone.label')}</p>
                                        <p className="text-slate-500 text-sm font-light">{t('home.location.phone.val')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-grc-red bg-white p-3 rounded-xl shadow-sm">mail</span>
                                    <div>
                                        <p className="font-bold text-corp-grey uppercase tracking-wider text-xs mb-1">{t('home.location.email.label')}</p>
                                        <p className="text-slate-500 text-sm font-light">{t('home.location.email.val')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/3 w-full h-[400px] bg-white p-2 border border-slate-200 shadow-xl relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.316885376045!2d-80.38508928424754!3d25.727027983652875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bf5b1951b72d%3A0x2e194b909ca98b06!2sGet%20Ready%20Close!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full grayscale-[30%] contrast-125"
                                title="GRC Lending Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-corp-grey py-32 text-center text-white border-t border-slate-800">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="font-display text-4xl md:text-5xl mb-6 tracking-tight">{t('home.cta.title')}</h2>
                    <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed font-light max-w-2xl mx-auto">
                        {t('home.cta.desc')}
                    </p>
                    <Link to="/contact" className="group relative inline-flex items-center justify-center bg-white border border-white text-corp-grey px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-white/20">
                        <span className="relative z-10">{t('home.cta.start')}</span>
                        <div className="absolute inset-0 bg-grc-blue transform scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-y-100"></div>
                    </Link>
                </div>
            </section>
        </div>
    );
}
