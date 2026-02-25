import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
    const { t } = useLanguage();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');
    const [interest, setInterest] = useState(t('contact.form.interest.opt1'));

    useEffect(() => {
        if (type === 'va') setInterest(t('contact.form.interest.opt4'));
        else if (type === 'fha') setInterest(t('contact.form.interest.opt5'));
        else if (type === 'conventional') setInterest(t('contact.form.interest.opt6'));
    }, [type, t]);

    const contactMethods = [
        {
            icon: 'call',
            title: t('contact.methods.call.title'),
            description: t('contact.methods.call.desc'),
            value: '(305) 201-0472',
            color: 'text-growth-green',
            bgColor: 'bg-growth-green/10',
            action: 'tel:+13052010472'
        },
        {
            icon: 'mail',
            title: t('contact.methods.email.title'),
            description: t('contact.methods.email.desc'),
            value: 'info@grclending.com',
            color: 'text-grc-blue',
            bgColor: 'bg-grc-blue/10',
            action: 'mailto:info@grclending.com'
        },
        {
            icon: 'chat',
            title: t('contact.methods.chat.title'),
            description: t('contact.methods.chat.desc'),
            value: t('contact.methods.chat.val'),
            color: 'text-grc-red',
            bgColor: 'bg-grc-red/10',
            action: '#'
        }
    ];

    const officeHours = [
        { day: t('contact.side.hours.mf'), hours: t('contact.side.hours.mf.val') },
        { day: t('contact.side.hours.sat'), hours: t('contact.side.hours.sat.val') },
        { day: t('contact.side.hours.sun'), hours: t('contact.side.hours.sun.val') }
    ];

    const faqs = [
        {
            question: t('contact.faq.q1'),
            answer: t('contact.faq.a1')
        },
        {
            question: t('contact.faq.q2'),
            answer: t('contact.faq.a2')
        },
        {
            question: t('contact.faq.q3'),
            answer: t('contact.faq.a3')
        }
    ];

    return (
        <div className="bg-light-grey min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Images/freepik__modern-oceanfront-luxury-home-in-miami-beach-infin__31252.png"
                        alt="Contact GRC Lending"
                        className="w-full h-full object-cover filter grayscale-[20%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-corp-grey/95 via-corp-grey/80 to-corp-grey/40"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full z-10 text-center mt-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display text-white mb-4 sm:mb-6">
                            {t('contact.hero.title1')}<span className="text-grc-blue italic font-light">{t('contact.hero.title2')}</span>
                        </h1>
                        <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light px-2">
                            {t('contact.hero.desc')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Methods Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 sm:-mt-8 relative z-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {contactMethods.map((method, index) => (
                        <motion.a
                            href={method.action}
                            key={method.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-300 group border border-slate-100"
                        >
                            <div className="flex sm:block items-center gap-4 sm:gap-0">
                                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${method.bgColor} rounded-xl flex items-center justify-center sm:mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                                    <span className={`material-symbols-outlined ${method.color} text-xl sm:text-2xl`}>{method.icon}</span>
                                </div>
                                <div className="flex-1 sm:flex-none">
                                    <h3 className="font-bold text-corp-grey text-base sm:text-lg mb-0.5 sm:mb-1">{method.title}</h3>
                                    <p className="text-slate-500 text-xs sm:text-sm mb-1 sm:mb-2 hidden sm:block">{method.description}</p>
                                    <p className={`font-semibold text-sm sm:text-base ${method.color}`}>{method.value}</p>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Main Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
                    {/* Contact Form - Takes 3 columns */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-5 sm:p-8 lg:p-12 border border-slate-100 order-2 lg:order-1"
                    >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-3 mb-6 sm:mb-8">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-grc-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="material-symbols-outlined text-grc-blue text-lg sm:text-xl">edit_note</span>
                            </div>
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold text-corp-grey">{t('contact.form.title')}</h2>
                                <p className="text-slate-500 text-xs sm:text-sm">{t('contact.form.subtitle')}</p>
                            </div>
                        </div>

                        <form className="space-y-4 sm:space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 sm:mb-2">{t('contact.form.firstName')}</label>
                                    <input type="text" id="firstName" className="w-full p-3 sm:p-4 bg-light-grey border border-slate-200 rounded-lg focus:ring-2 focus:ring-grc-blue focus:border-grc-blue outline-none transition-all placeholder:text-slate-400 text-base" placeholder={t('contact.form.firstName.placeholder') || "John"} />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 sm:mb-2">{t('contact.form.lastName')}</label>
                                    <input type="text" id="lastName" className="w-full p-3 sm:p-4 bg-light-grey border border-slate-200 rounded-lg focus:ring-2 focus:ring-grc-blue focus:border-grc-blue outline-none transition-all placeholder:text-slate-400 text-base" placeholder={t('contact.form.lastName.placeholder') || "Doe"} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 sm:mb-2">{t('contact.form.email')}</label>
                                    <input type="email" id="email" className="w-full p-3 sm:p-4 bg-light-grey border border-slate-200 rounded-lg focus:ring-2 focus:ring-grc-blue focus:border-grc-blue outline-none transition-all placeholder:text-slate-400 text-base" placeholder={t('contact.form.email.placeholder') || "john@example.com"} />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 sm:mb-2">{t('contact.form.phone')}</label>
                                    <input type="tel" id="phone" className="w-full p-3 sm:p-4 bg-light-grey border border-slate-200 rounded-lg focus:ring-2 focus:ring-grc-blue focus:border-grc-blue outline-none transition-all placeholder:text-slate-400 text-base" placeholder={t('contact.form.phone.placeholder') || "(305) 555-0000"} />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="interest" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 sm:mb-2">{t('contact.form.interest')}</label>
                                <select
                                    id="interest"
                                    value={interest}
                                    onChange={(e) => setInterest(e.target.value)}
                                    className="w-full p-3 sm:p-4 bg-light-grey border border-slate-200 rounded-lg focus:ring-2 focus:ring-grc-blue focus:border-grc-blue outline-none transition-all text-corp-grey text-base"
                                >
                                    <option>{t('contact.form.interest.opt1')}</option>
                                    <option>{t('contact.form.interest.opt2')}</option>
                                    <option>{t('contact.form.interest.opt3')}</option>
                                    <option>{t('contact.form.interest.opt4')}</option>
                                    <option>{t('contact.form.interest.opt5')}</option>
                                    <option>{t('contact.form.interest.opt6')}</option>
                                    <option>{t('contact.form.interest.opt7')}</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 sm:mb-2">{t('contact.form.message')}</label>
                                <textarea id="message" rows={4} className="w-full p-3 sm:p-4 bg-light-grey border border-slate-200 rounded-lg focus:ring-2 focus:ring-grc-blue focus:border-grc-blue outline-none transition-all placeholder:text-slate-400 resize-none text-base" placeholder={t('contact.form.message.placeholder') || "Tell us about your lending needs..."}></textarea>
                            </div>

                            <button type="button" className="group relative w-full inline-flex items-center justify-center bg-grc-blue text-white px-6 sm:px-10 py-3.5 sm:py-4 text-sm font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] overflow-hidden transition-all duration-300 rounded-lg hover:bg-corp-grey active:scale-[0.98]">
                                <span className="relative z-10 flex items-center gap-2">
                                    <span>{t('contact.form.submit')}</span>
                                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </span>
                            </button>
                            <p className="text-center text-xs text-slate-400 mt-3 sm:mt-4 leading-relaxed">
                                {t('contact.form.disclaimer')}
                            </p>
                        </form>
                    </motion.div>

                    {/* Sidebar Info - Takes 2 columns */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2 space-y-4 sm:space-y-6 order-1 lg:order-2"
                    >
                        {/* Mobile Quick Contact - Only visible on mobile */}
                        <div className="lg:hidden bg-gradient-to-r from-grc-blue to-corp-grey rounded-2xl p-4 text-white">
                            <p className="text-sm text-blue-100 mb-2">{t('contact.side.quick')}</p>
                            <a href="tel:+13052010472" className="inline-flex items-center gap-2 font-bold text-lg">
                                <span className="material-symbols-outlined">call</span>
                                <span>(305) 201-0472</span>
                            </a>
                        </div>

                        {/* Office Location Card */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
                            <div className="bg-corp-grey p-4 sm:p-6">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-grc-blue text-xl sm:text-2xl">location_on</span>
                                    <h3 className="text-lg sm:text-xl font-bold text-white">{t('contact.side.office')}</h3>
                                </div>
                            </div>
                            <div className="p-4 sm:p-6">
                                <p className="text-corp-grey font-semibold mb-1 text-sm sm:text-base">{t('contact.side.office.name')}</p>
                                <p className="text-slate-500 mb-3 sm:mb-4 text-sm sm:text-base">{t('contact.side.office.address1')}<br />{t('contact.side.office.address2')}</p>
                                <a href="https://www.google.com/maps/search/?api=1&query=11401+SW+40th+St+Suite+206+Miami+FL+33165" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-grc-blue font-semibold text-sm hover:underline active:opacity-70">
                                    <span>{t('contact.side.office.directions')}</span>
                                    <span className="material-symbols-outlined text-lg">open_in_new</span>
                                </a>
                            </div>
                        </div>

                        {/* Business Hours Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-slate-100">
                            <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                <span className="material-symbols-outlined text-growth-green text-xl sm:text-2xl">schedule</span>
                                <h3 className="text-lg sm:text-xl font-bold text-corp-grey">{t('contact.side.hours')}</h3>
                            </div>
                            <div className="space-y-2 sm:space-y-3">
                                {officeHours.map((schedule) => (
                                    <div key={schedule.day} className="flex justify-between items-center py-1.5 sm:py-2 border-b border-slate-100 last:border-0">
                                        <span className="text-slate-600 text-sm sm:text-base">{schedule.day}</span>
                                        <span className={`font-semibold text-sm sm:text-base ${schedule.hours === t('contact.side.hours.sun.val') ? 'text-grc-red' : 'text-corp-grey'}`}>{schedule.hours}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Response Time Card */}
                        <div className="bg-gradient-to-br from-grc-blue to-corp-grey rounded-2xl shadow-lg p-4 sm:p-6 text-white">
                            <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                <span className="material-symbols-outlined text-xl sm:text-2xl">bolt</span>
                                <h3 className="text-lg sm:text-xl font-bold">{t('contact.side.response')}</h3>
                            </div>
                            <p className="text-blue-100 mb-3 sm:mb-4 text-sm sm:text-base">{t('contact.side.response.desc')}</p>
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                <div className="bg-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm text-center">
                                    <p className="text-2xl sm:text-3xl font-bold mb-0.5 sm:mb-1">24h</p>
                                    <p className="text-xs text-blue-100">{t('contact.side.response.h24')}</p>
                                </div>
                                <div className="bg-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm text-center">
                                    <p className="text-2xl sm:text-3xl font-bold mb-0.5 sm:mb-1">48h</p>
                                    <p className="text-xs text-blue-100">{t('contact.side.response.h48')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Map Section */}
            <div className="bg-white py-10 sm:py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-6 sm:mb-8 md:mb-10"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-corp-grey mb-3 sm:mb-4">{t('contact.map.title1')}<span className="text-grc-blue">{t('contact.map.title2')}</span></h2>
                        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base px-2">{t('contact.map.desc')}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-slate-200"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.5!2d-80.3341!3d25.7337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b8a7f5c8d9e7%3A0x1234567890abcdef!2s11401%20SW%2040th%20St%2C%20Miami%2C%20FL%2033165!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="GRC Lending Office Location"
                            className="w-full h-[250px] sm:h-[300px] md:h-[400px]"
                        ></iframe>
                    </motion.div>

                    {/* Office Features */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8">
                        {[
                            { icon: 'local_parking', text: t('contact.map.f1') },
                            { icon: 'accessible', text: t('contact.map.f2') },
                            { icon: 'wifi', text: t('contact.map.f3') },
                            { icon: 'coffee', text: t('contact.map.f4') }
                        ].map((feature) => (
                            <div key={feature.text} className="flex items-center gap-2 sm:gap-3 bg-light-grey rounded-lg sm:rounded-xl p-3 sm:p-4">
                                <span className="material-symbols-outlined text-grc-blue text-lg sm:text-xl">{feature.icon}</span>
                                <span className="text-corp-grey font-medium text-xs sm:text-sm">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-light-grey py-10 sm:py-12 md:py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-6 sm:mb-8 md:mb-10"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-corp-grey mb-2 sm:mb-4">{t('contact.faq.title1')}<span className="text-grc-blue">{t('contact.faq.title2')}</span></h2>
                        <p className="text-slate-500 text-sm sm:text-base">{t('contact.faq.desc')}</p>
                    </motion.div>

                    <div className="space-y-3 sm:space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-slate-100"
                            >
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <span className="material-symbols-outlined text-grc-blue mt-0.5 text-lg sm:text-xl flex-shrink-0">help</span>
                                    <div>
                                        <h4 className="font-bold text-corp-grey mb-1.5 sm:mb-2 text-sm sm:text-base">{faq.question}</h4>
                                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-corp-grey py-10 sm:py-12 md:py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="material-symbols-outlined text-grc-blue text-4xl sm:text-5xl mb-4 sm:mb-6">support_agent</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white mb-3 sm:mb-4">{t('contact.cta.title')}</h2>
                        <p className="text-slate-300 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base px-2">{t('contact.cta.desc')}</p>
                        <a href="tel:+13052010472" className="inline-flex items-center gap-2 sm:gap-3 bg-grc-blue text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-bold uppercase tracking-wide sm:tracking-wider hover:bg-growth-green active:scale-[0.98] transition-all duration-300 text-sm sm:text-base">
                            <span className="material-symbols-outlined text-lg sm:text-xl">call</span>
                            <span>{t('contact.cta.btn')}</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
