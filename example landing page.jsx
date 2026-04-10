import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Menu, 
  ArrowRight, 
  Cpu, 
  Zap, 
  Globe, 
  PieChart, 
  ChevronRight, 
  ShoppingBag, 
  Layout, 
  CheckCircle2, 
  Filter, 
  ChevronDown 
} from 'lucide-react';

const App = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group transition-transform active:scale-95">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                <BarChart3 className="text-white w-6 h-6" />
              </div>
              <span className="font-extrabold text-xl tracking-tight uppercase">
                Optimum <span className="text-blue-600">Client Solutions</span>
              </span>
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm font-semibold hover:text-blue-600 transition">SERVICES</a>
              <a href="#about" className="text-sm font-semibold hover:text-blue-600 transition">ABOUT US</a>
              <a href="#faq" className="text-sm font-semibold hover:text-blue-600 transition">FAQ</a>
              <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                CONTACT US
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-950 text-white overflow-hidden" style={{ background: 'radial-gradient(circle at top right, #1e3a8a 0%, #0f172a 100%)' }}>
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
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-blue-500 transition-all flex items-center justify-center gap-2">
                  Book a Strategy Session
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-center hover:bg-white/20 transition-all">
                  View Services
                </button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl">
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
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]"></div>
      </section>

      {/* Analytics Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold mb-4">Leveraging AI & Big Data</h2>
            <p className="text-slate-600">We don't just provide data; we provide clarity. We compare your results against big data market giants to generate actionable growth strategies.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap />, title: "AI Task Automation", text: "Handle day-to-day tasks that would usually take your team days to complete in just seconds using our proprietary AI workflows." },
              { icon: <Globe />, title: "Big Data Benchmarking", text: "We tap into global market datasets to compare your results against the competition, identifying missed opportunities for scale." },
              { icon: <PieChart />, title: "Strategic Generation", text: "Automated generation of detailed digital marketing strategies tailored specifically to your niche and customer behavior data." }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {React.cloneElement(feature.icon, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold mb-4">Core E-commerce Services</h2>
              <p className="text-slate-600">Comprehensive management and development support for the world's leading sales platforms.</p>
            </div>
            <button className="text-blue-600 font-bold hover:underline flex items-center gap-1">
              Explore All SERVICES
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Shopify */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-6">
                <ShoppingBag className="text-green-600 w-8 h-8" />
                <h3 className="text-2xl font-bold uppercase tracking-wide">Shopify</h3>
              </div>
              <ul className="space-y-4 mb-8 text-slate-600 flex-1">
                {["Custom storefront development & Liquid optimization", "Inventory & fulfillment AI automation", "Conversion Rate Optimization (CRO) analytics"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-6 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition">Get Shopify Support</button>
            </div>

            {/* WooCommerce */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-6">
                <Layout className="text-purple-600 w-8 h-8" />
                <h3 className="text-2xl font-bold uppercase tracking-wide">WooCommerce</h3>
              </div>
              <ul className="space-y-4 mb-8 text-slate-600 flex-1">
                {["Enterprise-grade WordPress hosting & management", "Plugin performance tuning & security audits", "Advanced data tracking & pixel integration"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-6 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition">Get WooCommerce Support</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
              <h2 className="text-4xl font-extrabold mb-8 uppercase tracking-tight">ABOUT US</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>At <strong>Optimum Client Solutions</strong>, we stand for the growth and sustainability of start-ups and SMEs. We believe that technology shouldn't be a barrier, but a catalyst.</p>
                <p>With OCS, we support start-ups by helping them get a clearer view of what is ahead. We understand that data can be overwhelming, which is why our mission is to filter out the noise, focusing only on what is technically practical and commercially valuable.</p>
              </div>
              <div className="mt-10">
                <button className="inline-flex items-center gap-2 font-bold text-blue-600 hover:gap-4 transition-all">
                  Learn more about our mission
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold mb-4 uppercase">FAQ</h2>
            <p className="text-slate-600">Quick answers to common questions about our OCS approach.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "How does the AI automation work for day-to-day tasks?", a: "We deploy custom LLM and automation scripts that integrate with your CRM and sales platforms to handle inventory management, customer support ticketing, and data entry automatically." },
              { q: "What kind of \"Big Data\" companies do you compare results with?", a: "We utilize industry-leading market intelligence tools and public data registries to benchmark your store's performance against historical and real-time market averages in your specific niche." },
              { q: "Do you only work with new start-ups?", a: "While we specialize in helping start-ups find their footing, we also partner with established SMEs looking to modernize their tech stack and implement AI for higher operational efficiency." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden cursor-pointer shadow-sm">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${activeFaq === idx ? 'max-h-40 border-t border-slate-100' : 'max-h-0'}`}
                >
                  <div className="p-6 text-slate-600">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-12 text-white text-center relative overflow-hidden shadow-2xl shadow-blue-300">
            <div className="relative z-10">
              <h2 className="text-4xl font-extrabold mb-6 uppercase tracking-tight">CONTACT US</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Ready to filter the noise and start growing? Book an appointment or send us your questions today.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-extrabold text-lg hover:bg-blue-50 transition-all w-full sm:w-auto">
                  Book an Appointment
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-extrabold text-lg hover:bg-white/10 transition-all w-full sm:w-auto">
                  Visit Contact Page
                </button>
              </div>
            </div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 text-white mb-6">
                <BarChart3 className="w-6 h-6 text-blue-400" />
                <span className="font-extrabold text-xl tracking-tight uppercase">
                  Optimum <span className="text-blue-400">Client Solutions</span>
                </span>
              </div>
              <p className="max-w-sm">Data-driven e-commerce growth strategies for the next generation of business leaders.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-white transition">SERVICES</a></li>
                <li><a href="#about" className="hover:text-white transition">ABOUT US</a></li>
                <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Platforms</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Shopify Support</a></li>
                <li><a href="#" className="hover:text-white transition">WooCommerce Support</a></li>
                <li><a href="#" className="hover:text-white transition">AI Automation</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between gap-4">
            <p>&copy; 2024 Optimum Client Solutions. All rights reserved.</p>
            <div className="flex gap-6 justify-center">
              <button className="hover:text-white transition">Privacy Policy</button>
              <button className="hover:text-white transition">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;