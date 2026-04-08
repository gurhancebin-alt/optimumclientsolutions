import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, CheckCircle2, Globe, Zap, PieChart, Filter, ShoppingBag, Layout, Cpu
} from 'lucide-react';
import FAQAccordion from '../components/ui/FAQAccordion';
import { homeFAQ } from '../data/faq';

export default function Home() {
  const { t } = useTranslation('home');
  const [activeFaq, setActiveFaq] = useState(null);

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
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-indigo-900 to-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                <span className="text-blue-200 text-xs font-bold tracking-widest uppercase">Empowering Start-ups & SMEs</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
                Scale Your E-commerce with <span className="text-blue-400">AI Precision</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
                We leverage advanced data analytics and AI-powered automation to handle massive workloads in seconds, creating winning digital market strategies for your growing business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-blue-500 transition-all flex items-center justify-center gap-2">
                  Book a Strategy Session
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-center hover:bg-white/20 transition-all">
                  View Services
                </Link>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10">
                <div className="flex items-center justify-between mb-8">
                  <div className="space-y-1">
                    <div className="h-2 w-24 bg-blue-400/30 rounded"></div>
                    <div className="h-2 w-32 bg-blue-400/50 rounded"></div>
                  </div>
                  <Cpu className="text-blue-400 w-8 h-8" />
                </div>
                <div className="space-y-4">
                  <div className="h-32 bg-slate-800/50 rounded-xl flex items-end p-4 gap-2">
                    <div className="flex-1 bg-blue-500 h-[40%] rounded-t-sm"></div>
                    <div className="flex-1 bg-blue-400 h-[70%] rounded-t-sm"></div>
                    <div className="flex-1 bg-blue-600 h-[55%] rounded-t-sm"></div>
                    <div className="flex-1 bg-blue-300 h-[90%] rounded-t-sm"></div>
                    <div className="flex-1 bg-blue-500 h-[65%] rounded-t-sm"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 h-20 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xs text-slate-400 uppercase font-bold">Data Filtered</div>
                        <div className="text-xl font-bold">99.9%</div>
                      </div>
                    </div>
                    <div className="bg-slate-800/50 h-20 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xs text-slate-400 uppercase font-bold">AI Efficiency</div>
                        <div className="text-xl font-bold">+450%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]"></div>
      </section>

      {/* Leveraging AI & Big Data Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold mb-4 text-slate-900">Leveraging AI & Big Data</h2>
            <p className="text-slate-600">We don't just provide data; we provide clarity. We compare your results against big data market giants to generate actionable growth strategies.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">AI Task Automation</h3>
              <p className="text-slate-600">Handle day-to-day tasks that would usually take your team days to complete in just seconds using our proprietary AI workflows.</p>
            </div>
            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Big Data Benchmarking</h3>
              <p className="text-slate-600">We tap into global market datasets to compare your results against the competition, identifying missed opportunities for scale.</p>
            </div>
            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <PieChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Strategic Generation</h3>
              <p className="text-slate-600">Automated generation of detailed digital marketing strategies tailored specifically to your niche and customer behavior data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold mb-4 text-slate-900">Core E-commerce Services</h2>
              <p className="text-slate-600">Comprehensive management and development support for the world's leading sales platforms.</p>
            </div>
            <Link to="/services" className="text-blue-600 font-bold hover:underline flex items-center gap-1">
              Explore All SERVICES
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Shopify */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-6">
                <ShoppingBag className="text-green-600 w-8 h-8" />
                <h3 className="text-2xl font-bold uppercase tracking-wide text-slate-900">Shopify</h3>
              </div>
              <ul className="space-y-4 mb-8 text-slate-600 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  Custom storefront development & Liquid optimization
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  Inventory & fulfillment AI automation
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  Conversion Rate Optimization (CRO) analytics
                </li>
              </ul>
              <Link to="/shopify" className="w-full py-3 px-6 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition text-center">Get Shopify Support</Link>
            </div>

            {/* WooCommerce */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-6">
                <Layout className="text-purple-600 w-8 h-8" />
                <h3 className="text-2xl font-bold uppercase tracking-wide text-slate-900">WooCommerce</h3>
              </div>
              <ul className="space-y-4 mb-8 text-slate-600 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  Enterprise-grade WordPress hosting & management
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  Plugin performance tuning & security audits
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  Advanced data tracking & pixel integration
                </li>
              </ul>
              <Link to="/woocommerce" className="w-full py-3 px-6 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition text-center">Get WooCommerce Support</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="w-full aspect-square bg-blue-100 rounded-3xl flex items-center justify-center">
                <Filter className="w-48 h-48 text-blue-200" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 p-8 rounded-2xl text-white shadow-xl max-w-xs">
                <p className="text-lg italic">"We filter the noise from technical practicality and complex data."</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-extrabold mb-8 uppercase tracking-tight text-slate-900">ABOUT US</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>At <strong>Optimum Client Solutions</strong>, we stand for the growth and sustainability of start-ups and SMEs. We believe that technology shouldn't be a barrier, but a catalyst.</p>
                <p>With OCS, we support start-ups by helping them get a clearer view of what is ahead. We understand that data can be overwhelming, which is why our mission is to filter out the noise, focusing only on what is technically practical and commercially valuable.</p>
                <p>We bridge the gap between complex big-data analytics and the daily operational needs of an E-commerce business.</p>
              </div>
              <div className="mt-10">
                <Link to="/about" className="inline-flex items-center gap-2 font-bold text-blue-600 hover:gap-4 transition-all">
                  Learn more about our mission
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion
        faqs={homeFAQ}
        title={t('faq.title')}
        subtitle={t('faq.subtitle')}
        sectionId="faq"
        className="bg-slate-50"
      />

      {/* Contact Us Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-12 text-white text-center relative overflow-hidden shadow-2xl shadow-blue-300">
            <div className="relative z-10">
              <h2 className="text-4xl font-extrabold mb-6 uppercase tracking-tight">CONTACT US</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Ready to filter the noise and start growing? Book an appointment or send us your questions today.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-extrabold text-lg hover:bg-blue-50 transition-all w-full sm:w-auto">
                  Book an Appointment
                </Link>
                <Link to="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-extrabold text-lg hover:bg-white/10 transition-all w-full sm:w-auto">
                  Visit Contact Page
                </Link>
              </div>
            </div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          </div>
        </div>
      </section>
    </>
  );
}
