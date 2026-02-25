import React from 'react';

function Header() {
  return (
    <header className="sticky top-0 z-50 glass-header border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="bg-deep-green p-2 rounded-lg">
              <svg className="w-6 h-6 text-accent-gold" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-deep-green uppercase">GRC Lending</span>
              <span className="text-[10px] font-medium text-accent-gold tracking-[0.2em] uppercase -mt-1">Luxury Estates</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-10">
            <a className="text-sm font-semibold text-deep-green hover:text-primary transition-colors" href="#">Home</a>
            <a className="text-sm font-semibold text-deep-green hover:text-primary transition-colors" href="#about">About</a>
            <a className="text-sm font-semibold text-deep-green hover:text-primary transition-colors" href="#services">Services</a>
            <a className="text-sm font-semibold text-deep-green hover:text-primary transition-colors" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden lg:flex items-center gap-2 px-4 py-2 text-deep-green font-bold text-sm border-2 border-deep-green rounded-lg hover:bg-deep-green hover:text-white transition-all">
              <span className="material-symbols-outlined text-lg">phone_in_talk</span>
              Call Now
            </button>
            <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:bg-blue-700 transition-all">
              Request Quote
            </button>
            <button className="flex items-center text-xs font-bold text-slate-500 hover:text-deep-green uppercase tracking-widest ml-2">
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient" data-alt="Aerial view of luxury South Florida waterfront mansion"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-gold/20 border border-accent-gold/30 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"></span>
            <span className="text-xs font-bold text-accent-gold uppercase tracking-widest">Premium Mortgage Solutions</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
            Your South Florida <br/>
            <span className="italic text-accent-gold">Mortgage Experts</span>
          </h1>
          <p className="text-lg text-slate-200 mb-10 leading-relaxed font-light">
            Tailored financial solutions for luxury coastal living and high-end estates in Miami, Palm Beach, and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-2xl shadow-primary/30 transition-all transform hover:-translate-y-0.5">
              Get Started Today
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all">
              View Rates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative z-10 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-slate-900 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl shadow-deep-green/10">
        <div className="p-8 text-center group">
          <p className="text-accent-gold font-bold text-sm uppercase tracking-[0.2em] mb-2">Experience</p>
          <p className="text-4xl font-extrabold text-deep-green group-hover:text-primary transition-colors">15+ Years</p>
          <p className="text-slate-500 text-sm mt-2">South Florida Market Experts</p>
        </div>
        <div className="p-8 text-center group">
          <p className="text-accent-gold font-bold text-sm uppercase tracking-[0.2em] mb-2">Funded</p>
          <p className="text-4xl font-extrabold text-deep-green group-hover:text-primary transition-colors">1,200+</p>
          <p className="text-slate-500 text-sm mt-2">Families in Dream Homes</p>
        </div>
        <div className="p-8 text-center group">
          <p className="text-accent-gold font-bold text-sm uppercase tracking-[0.2em] mb-2">Closed Loans</p>
          <p className="text-4xl font-extrabold text-deep-green group-hover:text-primary transition-colors">$500M+</p>
          <p className="text-slate-500 text-sm mt-2">In High-End Real Estate</p>
        </div>
      </div>
    </section>
  );
}

function ServicesIntro() {
  return (
    <section className="bg-deep-green py-24 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-6">CURATED FINANCIAL PORTFOLIO</p>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
          Our Premium Services | <span className="text-slate-300 font-normal">Nuestros Servicios</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
          Experience mortgage lending as it should be: personal, professional, and perfectly aligned with your architectural dreams.
        </p>
      </div>
    </section>
  );
}

function ServicesList() {
  const services = [
    {
      num: "01",
      title: "Home Loans",
      subtitle: "Préstamos Hipotecarios",
      descEn: "Purchase your dream home with flexible terms tailored to your high-net-worth profile.",
      descEs: "Compre la casa de sus sueños con términos flexibles diseñados para su perfil financiero."
    },
    {
      num: "02",
      title: "Refinancing",
      subtitle: "Tipos de Refinanciación",
      descEn: "Lower your monthly payments and optimize your capital with our efficient refinancing structures.",
      descEs: "Reduzca sus pagos mensuales y optimice su capital con nuestras estructuras de refinanciamiento."
    },
    {
      num: "03",
      title: "Rate Analysis",
      subtitle: "Comparación de Tarifas",
      descEn: "Comprehensive market insights to secure the most competitive rates available in the luxury sector.",
      descEs: "Análisis exhaustivo del mercado para asegurar las tasas más competitivas en el sector de lujo."
    },
    {
      num: "04",
      title: "Fast Financing",
      subtitle: "Financiación Rápida",
      descEn: "Expedited approval processes designed for time-sensitive acquisitions and high-value opportunities.",
      descEs: "Procesos de aprobación rápidos diseñados para adquisiciones urgentes y oportunidades de alto valor."
    },
    {
      num: "05",
      title: "Asset Valuation",
      subtitle: "Evalúe Su Propiedad",
      descEn: "Expert appraisal coordination to determine the true market worth of your signature property.",
      descEs: "Coordinación experta de tasaciones para determinar el valor real de su propiedad emblemática."
    },
    {
      num: "06",
      title: "Equity Liquidity",
      subtitle: "Refinanciamiento en Efectivo",
      descEn: "Strategic cash-out options to unlock liquidity from your real estate portfolio for further investments.",
      descEs: "Opciones estratégicas para desbloquear la liquidez de su cartera inmobiliaria para futuras inversiones."
    }
  ];

  return (
    <section className="py-32 bg-white dark:bg-background-dark overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-24">
          <h2 className="text-accent-gold font-bold text-xs uppercase tracking-[0.5em] mb-4">The Selection</h2>
          <h3 className="font-serif text-4xl md:text-6xl text-deep-green dark:text-white">Boutique Lending Solutions</h3>
          <div className="h-[1px] w-24 bg-accent-gold/40 mx-auto mt-12"></div>
        </div>
        <div className="space-y-0">
          {services.map((service, idx) => (
            <div key={service.num} className={`group border-t ${idx === services.length - 1 ? 'border-b' : ''} border-slate-200 dark:border-slate-800 py-16 md:py-24`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
                <div className="flex items-baseline gap-8">
                  <span className="font-serif text-6xl md:text-8xl text-slate-100 dark:text-slate-800/50 leading-none">{service.num}</span>
                  <div>
                    <h4 className="font-serif text-3xl md:text-5xl text-deep-green dark:text-white leading-tight mb-2">{service.title}</h4>
                    <p className="text-[10px] font-bold text-accent-gold uppercase tracking-[0.3em]">{service.subtitle}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center h-full pt-4 md:pt-0">
                  <p className="font-display text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {service.descEn}
                  </p>
                  <p className="font-serif italic text-slate-400 dark:text-slate-500 text-base">
                    {service.descEs}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 bg-background-light dark:bg-slate-900" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent-gold/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <img alt="South Florida Cityscape" className="relative rounded-xl shadow-2xl w-full h-[500px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgwmdupenTTYywrQ25vRVMrr1NYU5dK7TcsqhcNlQYrByAtdCaFsCE8im4Ylh520P17idvByv-byUdRwFmg0BeyyjfW-t3adFTUyRFPAeZc2jMt4h4pp6ck9vEHNhbGKUgNK2BB4anknZL2PVdZEEo2uc1K9oHypfW8Ail9-cDP6HaDZll7NxGvz3d8Q3BHBxB3MERtjB35B-CAvkOhRL_kZYQHXefCpwd3gLgEZQkD3OWuRFeek0k-UbkqjIC1lg_3d7Sv0rjucs"/>
              <div className="absolute bottom-6 right-6 bg-white dark:bg-deep-green p-6 rounded-lg shadow-xl max-w-xs">
                <p className="font-serif italic text-deep-green dark:text-accent-gold text-lg mb-2">"The South Florida market requires specialized local knowledge that typical national lenders simply lack."</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">— GRC Lending Team</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-accent-gold font-bold text-sm uppercase tracking-[0.3em] mb-4">Local Expertise</h2>
            <h3 className="font-serif text-4xl text-deep-green dark:text-white mb-6">Florida's Luxury Market Specialists</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              Based in the heart of South Florida, GRC Lending understands the unique nuances of local real estate. From waterfront condominiums in Miami Beach to equestrian estates in Wellington, our team possesses the deep-rooted connections and market data necessary to navigate complex high-value transactions.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-1 rounded">
                  <span className="material-symbols-outlined text-primary text-xl">verified</span>
                </div>
                <div>
                  <h5 className="font-bold text-deep-green dark:text-white">Miami &amp; The Beaches</h5>
                  <p className="text-sm text-slate-500">Dedicated specialists for the metropolitan Miami area.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-1 rounded">
                  <span className="material-symbols-outlined text-primary text-xl">verified</span>
                </div>
                <div>
                  <h5 className="font-bold text-deep-green dark:text-white">Palm Beach &amp; Boca Raton</h5>
                  <p className="text-sm text-slate-500">Experts in private community and luxury estate financing.</p>
                </div>
              </div>
            </div>
            <button className="bg-deep-green text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-all flex items-center gap-3">
              Talk to a Local Expert
              <span className="material-symbols-outlined">north_east</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-deep-green text-white py-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-8 h-8 text-accent-gold" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
              </svg>
              <span className="text-2xl font-extrabold tracking-tight uppercase">GRC Lending</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Providing bespoke mortgage and financial solutions for South Florida's most discerning homeowners since 2008.
            </p>
            <div className="flex gap-4">
              <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-sm">mail</span>
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-accent-gold font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h5>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a className="hover:text-white transition-colors" href="#">Home</a></li>
              <li><a className="hover:text-white transition-colors" href="#">About Our Firm</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Mortgage Services</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Client Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-accent-gold font-bold uppercase tracking-widest text-xs mb-6">Contact Us</h5>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>1000 Brickell Ave, Suite 400<br/>Miami, FL 33131</span>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-primary">call</span>
                (305) 555-0123
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-primary">mail</span>
                concierge@grclending.com
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-accent-gold font-bold uppercase tracking-widest text-xs mb-6">Newsletter</h5>
            <p className="text-sm text-slate-400 mb-4">Stay updated with the latest market rates and South Florida real estate news.</p>
            <form className="flex gap-2">
              <input className="bg-white/5 border border-white/10 rounded-lg text-sm w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" placeholder="Email Address" type="email"/>
              <button className="bg-primary p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500">© 2024 GRC Lending. All Rights Reserved. NMLS #1234567. Equal Housing Opportunity.</p>
          <div className="flex gap-6 text-xs text-slate-500 uppercase tracking-widest font-bold">
            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-white transition-colors" href="#">Licensing</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <ServicesIntro />
      <ServicesList />
      <About />
      <Footer />
    </div>
  );
}
