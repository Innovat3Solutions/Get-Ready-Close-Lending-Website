import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Calculator() {
    const { t } = useLanguage();
    const [program, setProgram] = useState('Conventional');
    const [homePrice, setHomePrice] = useState(500000);
    const [downPaymentPct, setDownPaymentPct] = useState(20);
    const [loanTerm, setLoanTerm] = useState(30);
    const [interestRate, setInterestRate] = useState(6.5);
    const [hoa, setHoa] = useState(0);

    const [principalAndInterest, setPrincipalAndInterest] = useState(0);
    const [propertyTax, setPropertyTax] = useState(0);
    const [homeInsurance, setHomeInsurance] = useState(0);
    const [totalMonthly, setTotalMonthly] = useState(0);

    // Smart defaults based on loan program selection
    const handleProgramChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newProgram = e.target.value;
        setProgram(newProgram);
        if (newProgram === 'FHA') setDownPaymentPct(3.5);
        else if (newProgram === 'VA' || newProgram === 'USDA') setDownPaymentPct(0);
        else if (newProgram === 'Conventional') setDownPaymentPct(20);
    };

    useEffect(() => {
        const downPaymentAmount = homePrice * (downPaymentPct / 100);
        const principal = homePrice - downPaymentAmount;

        // 1. Calculate P&I
        const r = (interestRate / 100) / 12;
        const n = loanTerm * 12;
        let pi = 0;
        if (r === 0) {
            pi = principal / n;
        } else {
            pi = principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        }
        if (isNaN(pi) || !isFinite(pi)) pi = 0;

        // 2. Estimate Property Taxes (Rule of thumb: ~1.2% annually in FL)
        const monthlyTaxes = (homePrice * 0.012) / 12;

        // 3. Estimate Home Insurance (Rule of thumb: ~0.5% annually)
        const monthlyInsurance = (homePrice * 0.005) / 12;

        setPrincipalAndInterest(pi);
        setPropertyTax(monthlyTaxes);
        setHomeInsurance(monthlyInsurance);
        setTotalMonthly(pi + monthlyTaxes + monthlyInsurance + hoa);
    }, [homePrice, downPaymentPct, loanTerm, interestRate, hoa]);

    const downPaymentAmount = homePrice * (downPaymentPct / 100);
    const loanAmount = homePrice - downPaymentAmount;

    return (
        <div className="bg-slate-50 min-h-screen font-serif pb-24">

            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden mb-16">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Images/freepik__confident-couple-standing-inside-their-new-miami-h__31257.png"
                        alt="Mortgage Calculator"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-corp-grey/95 via-corp-grey/70 to-corp-grey/40 backdrop-blur-[1px]"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-display text-4xl md:text-6xl text-white mb-4 tracking-tight">
                            {t('calc.hero.title1')}<span className="text-grc-blue italic">{t('calc.hero.title2')}</span>
                        </h1>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                            {t('calc.hero.desc')}
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Inputs Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-7 space-y-8"
                    >
                        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-slate-100">
                            <h2 className="text-2xl font-display text-corp-grey mb-8 flex items-center gap-3">
                                <span className="material-symbols-outlined text-grc-blue">tune</span>
                                {t('calc.details.title')}
                            </h2>

                            <div className="space-y-8">
                                {/* Program Selection */}
                                <div>
                                    <label className="block text-sm font-bold text-corp-grey mb-2 uppercase tracking-wide">
                                        {t('calc.details.program')}
                                    </label>
                                    <select
                                        value={program}
                                        onChange={handleProgramChange}
                                        className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-grc-blue outline-none bg-slate-50 text-corp-grey font-medium appearance-none"
                                    >
                                        <option value="Conventional">{t('calc.details.program.conv')}</option>
                                        <option value="FHA">{t('calc.details.program.fha')}</option>
                                        <option value="VA">{t('calc.details.program.va')}</option>
                                        <option value="USDA">{t('calc.details.program.usda')}</option>
                                        <option value="Jumbo">{t('calc.details.program.jumbo')}</option>
                                    </select>
                                    <p className="mt-2 text-sm text-slate-500 font-light flex gap-2 items-start">
                                        <span className="material-symbols-outlined text-[16px] text-grc-blue mt-0.5">info</span>
                                        {program === 'Conventional' && t('calc.details.program.info.conv')}
                                        {program === 'FHA' && t('calc.details.program.info.fha')}
                                        {program === 'VA' && t('calc.details.program.info.va')}
                                        {program === 'USDA' && t('calc.details.program.info.usda')}
                                        {program === 'Jumbo' && t('calc.details.program.info.jumbo')}
                                    </p>
                                </div>

                                {/* Home Price */}
                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <label className="block text-sm font-bold text-corp-grey uppercase tracking-wide">
                                            {t('calc.details.price')}
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                            <input
                                                type="number"
                                                value={homePrice}
                                                onChange={(e) => setHomePrice(Number(e.target.value))}
                                                className="w-32 p-2 pl-7 border border-slate-200 rounded-lg text-right font-bold text-corp-grey outline-none focus:border-grc-blue"
                                            />
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min="100000"
                                        max="5000000"
                                        step="10000"
                                        value={homePrice}
                                        onChange={(e) => setHomePrice(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-grc-blue mt-4"
                                    />
                                </div>

                                {/* Down Payment */}
                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <label className="block text-sm font-bold text-corp-grey uppercase tracking-wide">
                                            {t('calc.details.down')}
                                        </label>
                                        <div className="flex gap-4">
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    value={downPaymentPct}
                                                    onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                                                    className="w-20 p-2 border border-slate-200 rounded-lg text-right font-bold text-corp-grey outline-none focus:border-grc-blue"
                                                />
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">%</span>
                                            </div>
                                            <div className="relative hidden sm:block">
                                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                                <input
                                                    type="number"
                                                    value={Math.round(downPaymentAmount)}
                                                    readOnly
                                                    className="w-32 p-2 pl-7 bg-slate-50 border border-slate-200 rounded-lg text-right font-bold text-slate-500 outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        step="1"
                                        value={downPaymentPct}
                                        onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-growth-green mt-4"
                                    />
                                    <p className="mt-2 text-sm text-slate-500 font-light flex gap-2 items-start">
                                        <span className="material-symbols-outlined text-[16px] text-grc-blue mt-0.5">info</span>
                                        {t('calc.details.down.info')}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Interest Rate */}
                                    <div>
                                        <label className="block text-sm font-bold text-corp-grey mb-2 uppercase tracking-wide">
                                            {t('calc.details.rate')}
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                min="1"
                                                max="15"
                                                step="0.125"
                                                value={interestRate}
                                                onChange={(e) => setInterestRate(Number(e.target.value))}
                                                className="w-full p-4 border border-slate-200 rounded-xl font-bold text-corp-grey outline-none focus:ring-2 focus:ring-grc-blue bg-white"
                                            />
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">%</span>
                                        </div>
                                    </div>

                                    {/* Loan Term */}
                                    <div>
                                        <label className="block text-sm font-bold text-corp-grey mb-2 uppercase tracking-wide">
                                            {t('calc.details.term')}
                                        </label>
                                        <select
                                            value={loanTerm}
                                            onChange={(e) => setLoanTerm(Number(e.target.value))}
                                            className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-grc-blue outline-none bg-white text-corp-grey font-medium appearance-none"
                                        >
                                            <option value={10}>{t('calc.details.term.opt10')}</option>
                                            <option value={15}>{t('calc.details.term.opt15')}</option>
                                            <option value={20}>{t('calc.details.term.opt20')}</option>
                                            <option value={30}>{t('calc.details.term.opt30')}</option>
                                        </select>
                                    </div>
                                </div>

                                {/* HOA Fees */}
                                <div>
                                    <label className="block text-sm font-bold text-corp-grey mb-2 uppercase tracking-wide">
                                        {t('calc.details.hoa')}
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                        <input
                                            type="number"
                                            value={hoa}
                                            onChange={(e) => setHoa(Number(e.target.value))}
                                            className="w-full p-4 pl-8 border border-slate-200 rounded-xl font-bold text-corp-grey outline-none focus:ring-2 focus:ring-grc-blue bg-white"
                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-slate-500 font-light flex gap-2 items-start">
                                        <span className="material-symbols-outlined text-[16px] text-grc-blue mt-0.5">info</span>
                                        {t('calc.details.hoa.info')}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </motion.div>

                    {/* Results Breakdown Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="bg-corp-grey rounded-3xl shadow-2xl p-8 lg:p-10 text-white sticky top-32 overflow-hidden">
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-grc-blue/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">{t('calc.results.title')}</h3>
                            <div className="text-5xl lg:text-6xl font-display text-white mb-2 flex items-start">
                                <span className="text-3xl mt-2 mr-1 opacity-60">$</span>
                                {Math.round(totalMonthly).toLocaleString()}
                            </div>
                            <p className="text-slate-400 text-sm font-light mb-10">
                                {t('calc.results.desc')}
                            </p>

                            {/* Breakdown */}
                            <div className="space-y-6 relative z-10">
                                <div className="flex justify-between items-center text-sm pb-4 border-b border-white/10">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-grc-blue"></div>
                                        <span className="text-slate-300 font-light text-base">{t('calc.results.pi')}</span>
                                    </div>
                                    <span className="font-bold text-lg">${Math.round(principalAndInterest).toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm pb-4 border-b border-white/10">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-growth-green"></div>
                                        <span className="text-slate-300 font-light text-base">{t('calc.results.tax')}</span>
                                    </div>
                                    <span className="font-bold text-lg">${Math.round(propertyTax).toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm pb-4 border-b border-white/10">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <span className="text-slate-300 font-light text-base">{t('calc.results.ins')}</span>
                                    </div>
                                    <span className="font-bold text-lg">${Math.round(homeInsurance).toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm pb-4 border-b border-white/10">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                                        <span className="text-slate-300 font-light text-base">{t('calc.results.hoa')}</span>
                                    </div>
                                    <span className="font-bold text-lg">${Math.round(hoa).toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="mt-8 bg-white/5 p-4 rounded-xl border border-white/10">
                                <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">{t('calc.results.totalLoan')}</span>
                                <span className="text-xl font-bold">${Math.round(loanAmount).toLocaleString()}</span>
                            </div>

                            {/* Mortgage Insurance Note */}
                            {((program === 'Conventional' && downPaymentPct < 20) || program === 'FHA' || program === 'USDA') && (
                                <div className="mt-6 flex gap-3 text-sm text-yellow-100/80 items-start bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20">
                                    <span className="material-symbols-outlined text-[20px] text-yellow-500/80">error</span>
                                    <p dangerouslySetInnerHTML={{ __html: t('calc.results.pmiMsg') }}></p>
                                </div>
                            )}

                            <button className="mt-10 w-full group relative overflow-hidden bg-white text-corp-grey font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-xl">
                                <div className="absolute inset-0 w-0 bg-grc-blue transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                <span className="relative group-hover:text-white transition-colors uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                                    {t('calc.results.btn')} <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
