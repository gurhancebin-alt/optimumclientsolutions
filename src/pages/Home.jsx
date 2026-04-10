import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, CheckCircle2, Globe, Zap, PieChart, Filter, ShoppingBag, Layout, Cpu, ChevronDown
} from 'lucide-react';
import FAQAccordion from '../components/ui/FAQAccordion';
import { homeFAQ } from '../data/faq';

export default function Home() {
  const { t } = useTranslation('home');
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Optimum Client Solutions | Scale Your E-commerce with AI & Data</title>
        <meta name="description" content="We leverage advanced data analytics and AI-powered automation to handle massive workloads in seconds, creating winning digital market strategies for your growing business." />
      </Helmet>
    
      {/* Hero Section */}
      <section className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 bg-slate-950 overflow-hidden relative">
        {/* Background Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10">
          {/* Announcement Badge */}
          <a href="#services" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-slate-400 bg-slate-900 rounded-full hover:bg-slate-800 transition-colors">
            <span className="text-xs bg-cyan-500 rounded-full text-white px-4 py-1.5 mr-3">NEW</span>
            <span className="text-sm font-medium">Scale with AI-powered automation</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>

          {/* Main Headline */}
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Scale Your E-commerce with <span className="text-cyan-400">AI Precision</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-lg font-normal text-slate-400 lg:text-xl sm:px-16 xl:px-48">
            We leverage advanced data analytics and AI-powered automation to handle massive workloads in seconds, creating winning digital market strategies for your growing business.
          </p>

          {/* Dual CTA Buttons */}
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="inline-flex justify-center items-center py-3 px-6 text-base font-bold text-center text-slate-950 rounded-xl bg-white hover:bg-cyan-400 transition-all">
              Book a Strategy Session
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/services" className="inline-flex justify-center items-center py-3 px-6 text-base font-bold text-center text-white rounded-xl border-2 border-cyan-400/30 hover:bg-white/10 transition-all">
              View Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          {/* Client Logos Section */}
          <div className="mt-20 pt-12">
            <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-10">Powered by & Integrated with</p>
            <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8">
              <div className="w-36 h-36 lg:w-44 lg:h-44 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                <img src="/images/logos/shopify_logo_darkbg.svg" alt="Shopify" className="h-12 lg:h-15" />
              </div>
              <div className="w-36 h-36 lg:w-44 lg:h-44 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                <img src="/images/logos/Woo_logo_color.svg" alt="WooCommerce" className="h-12 lg:h-15" />
              </div>
              <div className="w-36 h-36 lg:w-44 lg:h-44 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                <img src="/images/logos/OpenAI-white-monoblossom.svg" alt="OpenAI" className="h-12 lg:h-15" />
              </div>
              <div className="w-36 h-36 lg:w-44 lg:h-44 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                <img src="/images/logos/squarespace-logo-horizontal-white.svg" alt="Squarespace" className="h-12 lg:h-15" />
              </div>
              <div className="w-36 h-36 lg:w-44 lg:h-44 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                <img src="/images/logos/TIKTOK_PRIMARY_LOGO_WHITE.svg" alt="TikTok" className="h-12 lg:h-15" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leveraging AI & Big Data Section */}
      <section className="py-24 bg-slate-900/50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-3 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full mb-4 font-semibold uppercase">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">Leveraging AI & Big Data</h2>
            <p className="text-slate-400 text-lg">We don't just provide data; we provide clarity. We compare your results against big data market giants to generate actionable growth strategies.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-cyan-500/20 text-cyan-400 rounded-lg">
                  <Zap className="w-7 h-7" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">AI Task Automation</h3>
              <p className="text-slate-400 mb-6 flex-grow">Handle day-to-day tasks that would usually take your team days to complete in just seconds using our proprietary AI workflows.</p>
              <Link to="/services" className="text-cyan-400 font-semibold hover:text-cyan-300 flex items-center gap-2 transition-colors">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-col">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-cyan-500/20 text-cyan-400 rounded-lg">
                  <Globe className="w-7 h-7" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Big Data Benchmarking</h3>
              <p className="text-slate-400 mb-6 flex-grow">We tap into global market datasets to compare your results against the competition, identifying missed opportunities for scale.</p>
              <Link to="/services" className="text-cyan-400 font-semibold hover:text-cyan-300 flex items-center gap-2 transition-colors">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-col">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-cyan-500/20 text-cyan-400 rounded-lg">
                  <PieChart className="w-7 h-7" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Strategic Generation</h3>
              <p className="text-slate-400 mb-6 flex-grow">Automated generation of detailed digital marketing strategies tailored specifically to your niche and customer behavior data.</p>
              <Link to="/services" className="text-cyan-400 font-semibold hover:text-cyan-300 flex items-center gap-2 transition-colors">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/services" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-cyan-500 rounded-xl hover:bg-cyan-600 transition-all">
              Explore All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full mb-4 font-semibold uppercase">What We Do</span>
            <h2 className="text-3xl font-extrabold mb-4 text-white">Core E-commerce Services</h2>
            <p className="text-slate-400">Comprehensive management and development support for the world's leading sales platforms.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Shopify */}
            <div className="bg-white/5 backdrop-blur p-10 rounded-3xl border border-cyan-400/20 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-6">
                <ShoppingBag className="text-cyan-400 w-8 h-8" />
                <h3 className="text-2xl font-bold uppercase tracking-wide text-white">Shopify</h3>
              </div>
              <ul className="space-y-4 mb-8 text-slate-400 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  Custom storefront development & Liquid optimization
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  Inventory & fulfillment AI automation
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  Conversion Rate Optimization (CRO) analytics
                </li>
              </ul>
              <Link to="/shopify" className="w-full py-3 px-6 bg-white text-slate-950 rounded-xl font-bold hover:bg-cyan-400 transition text-center">Get Shopify Support</Link>
            </div>

            {/* WooCommerce */}
            <div className="bg-white/5 backdrop-blur p-10 rounded-3xl border border-cyan-400/20 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-6">
                <Layout className="text-cyan-400 w-8 h-8" />
                <h3 className="text-2xl font-bold uppercase tracking-wide text-white">WooCommerce</h3>
              </div>
              <ul className="space-y-4 mb-8 text-slate-400 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  Enterprise-grade WordPress hosting & management
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  Plugin performance tuning & security audits
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  Advanced data tracking & pixel integration
                </li>
              </ul>
              <Link to="/woocommerce" className="w-full py-3 px-6 bg-white text-slate-950 rounded-xl font-bold hover:bg-cyan-400 transition text-center">Get WooCommerce Support</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-slate-900/50 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full mb-4 font-semibold uppercase">Our Mission</span>
            <h2 className="text-4xl font-extrabold mb-8 uppercase tracking-tight text-white">About Us</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="w-full aspect-square bg-cyan-500/10 rounded-3xl flex items-center justify-center">
                <Filter className="w-48 h-48 text-cyan-400/30" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-400/20 p-8 rounded-2xl text-white shadow-xl max-w-xs">
                <p className="text-lg italic">"We filter the noise from technical practicality and complex data."</p>
              </div>
            </div>
            <div>
              <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                <p>At <strong className="text-white">Optimum Client Solutions</strong>, we stand for the growth and sustainability of start-ups and SMEs. We believe that technology shouldn't be a barrier, but a catalyst.</p>
                <p>With OCS, we support start-ups by helping them get a clearer view of what is ahead. We understand that data can be overwhelming, which is why our mission is to filter out the noise, focusing only on what is technically practical and commercially valuable.</p>
                <p>We bridge the gap between complex big-data analytics and the daily operational needs of an E-commerce business.</p>
              </div>
              <div className="mt-10">
                <Link to="/about" className="inline-flex items-center gap-2 font-bold text-cyan-400 hover:text-cyan-300 transition-all">
                  Learn more about our mission
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion
            faqs={showAllFaqs ? homeFAQ : homeFAQ.slice(0, 4)}
            title={t('faq.title')}
            subtitle={t('faq.subtitle')}
            sectionId="faq"
          />
          
          {homeFAQ.length > 4 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAllFaqs(!showAllFaqs)}
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {showAllFaqs ? 'Show Less' : 'Show More'}
                <ChevronDown 
                  className={`w-5 h-5 transition-transform ${showAllFaqs ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-24 bg-slate-900/50 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 border border-cyan-500/20 rounded-[3rem] p-12 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-4xl font-extrabold mb-6 uppercase tracking-tight">CONTACT US</h2>
              <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">Ready to filter the noise and start growing? Book an appointment or send us your questions today.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact" className="bg-white text-slate-950 px-8 py-4 rounded-xl font-extrabold text-lg hover:bg-cyan-400 transition-all w-full sm:w-auto">
                  Book an Appointment
                </Link>
                <Link to="/contact" className="border-2 border-cyan-400/30 text-white px-8 py-4 rounded-xl font-extrabold text-lg hover:bg-white/10 transition-all w-full sm:w-auto">
                  Visit Contact Page
                </Link>
              </div>
            </div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          </div>
        </div>
      </section>
    </>
  );
}
