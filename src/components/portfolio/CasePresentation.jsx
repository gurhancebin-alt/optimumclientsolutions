import { useState } from 'react';
import { X, ChevronRight, Globe, Zap, Target, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getNextCase } from '../../data/portfolioCases';

const iconMap = {
  Zap,
  Target,
  Users
};

export default function CasePresentation({ caseData, onClose, onNext, isTransitioning }) {
  const [showPreview, setShowPreview] = useState(false);
  const nextCase = getNextCase(caseData.id);

  const getStatusColor = (color) => {
    const colors = {
      green: 'bg-green-500/20 border-green-400/30 text-green-400',
      yellow: 'bg-yellow-500/20 border-yellow-400/30 text-yellow-400',
      cyan: 'bg-cyan-500/20 border-cyan-400/30 text-cyan-400'
    };
    return colors[color] || colors.cyan;
  };

  const getCategoryColor = (color) => {
    const colors = {
      cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
      pink: 'bg-pink-500/10 border-pink-500/30 text-pink-400',
      green: 'bg-green-500/10 border-green-500/30 text-green-400',
      indigo: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
      blue: 'bg-blue-500/10 border-blue-500/30 text-blue-400'
    };
    return colors[color] || colors.cyan;
  };

  const UspIcon = ({ iconName }) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon size={16} /> : null;
  };

  return (
    <div className={`relative overflow-hidden rounded-3xl border border-slate-800 transition-all duration-500 ${
      isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
    }`}>
      {/* Background */}
      {caseData.hasBackgroundImage ? (
        <div 
          className="absolute inset-0 bg-white"
          style={{
            backgroundImage: `url(${caseData.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${caseData.backgroundGradient}`} />
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-950/90 to-slate-900/95" />
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 p-3 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-full text-white transition-all"
        aria-label="Close case study"
      >
        <X size={20} />
      </button>
      
      {/* Next Button with Preview */}
      <div className="absolute top-1/2 -translate-y-1/2 right-6 z-20">
        <button
          onClick={onNext}
          onMouseEnter={() => setShowPreview(true)}
          onMouseLeave={() => setShowPreview(false)}
          className="p-3 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 rounded-full text-cyan-400 transition-all hover:scale-110"
          aria-label="Next case"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Preview Thumbnail on Hover */}
        {showPreview && (
          <div className="absolute right-16 top-1/2 -translate-y-1/2 w-48 bg-slate-900 border border-slate-700 rounded-xl p-3 shadow-2xl animate-fadeIn">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${nextCase.logoGradient} flex items-center justify-center text-white font-bold text-sm mb-2`}>
              {nextCase.logo}
            </div>
            <h4 className="text-white font-bold text-sm mb-1">{nextCase.name}</h4>
            <p className="text-slate-400 text-xs">{nextCase.tagline}</p>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-8 md:p-12 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-slate-700">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-start space-x-4">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${caseData.logoGradient} flex items-center justify-center text-white font-bold text-2xl flex-shrink-0`}>
              {caseData.logo}
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{caseData.name}</h2>
              <p className="text-slate-400 text-lg mb-3">{caseData.tagline}</p>
              <div className="flex flex-wrap gap-2">
                <span className={`px-3 py-1.5 ${getStatusColor(caseData.statusColor)} border rounded-full text-xs font-semibold`}>
                  {caseData.status}
                </span>
                <span className="px-3 py-1.5 bg-slate-800/80 border border-slate-700 text-slate-300 text-xs rounded-full flex items-center space-x-1.5">
                  <Globe size={12} />
                  <span>{caseData.region}</span>
                </span>
                <span className="px-3 py-1.5 bg-slate-800/80 border border-slate-700 text-slate-300 text-xs rounded-full">
                  {caseData.industry}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Project Overview</h3>
              <p className="text-slate-300 leading-relaxed">{caseData.overview.client}</p>
            </div>
            
            {/* USP Highlight */}
            <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/30 rounded-xl`}>
              <UspIcon iconName={caseData.uspIcon} />
              <span className="text-cyan-400 font-semibold">{caseData.usp}</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Duration</p>
              <p className="text-white font-semibold">{caseData.overview.duration}</p>
            </div>
            <div>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Timeline</p>
              <p className="text-white font-semibold">{caseData.overview.timeline}</p>
            </div>
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-4">The Challenge</h3>
          <ul className="space-y-2">
            {caseData.overview.challenges.map((challenge, i) => (
              <li key={i} className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-slate-300 text-sm">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Solution */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Our Solution</h3>
          <p className="text-slate-300 leading-relaxed mb-4">{caseData.solution.approach}</p>
          
          <div className="mb-4">
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Technologies Used</p>
            <div className="flex flex-wrap gap-2">
              {caseData.solution.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-slate-800/80 border border-slate-700 text-slate-300 text-sm rounded-lg">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">Key Features Implemented</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {caseData.solution.features.map((feature, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Results & Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {caseData.results.metrics.map((metric, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">{metric.value}</div>
                <div className="text-white text-sm font-semibold mb-1">{metric.label}</div>
                <div className="text-slate-400 text-xs">{metric.description}</div>
              </div>
            ))}
          </div>
          
          {caseData.results.testimonial && (
            <div className="bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 border border-cyan-500/30 rounded-2xl p-6">
              <p className="text-slate-300 italic mb-4">"{caseData.results.testimonial.quote}"</p>
              <div>
                <p className="text-white font-semibold">{caseData.results.testimonial.author}</p>
                <p className="text-slate-400 text-sm">{caseData.results.testimonial.role}</p>
              </div>
            </div>
          )}
        </div>

        {/* Services Delivered */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Services Delivered</h3>
          <div className="space-y-3">
            <div>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Service Categories</p>
              <div className="flex flex-wrap gap-2">
                {caseData.categoryServices.map((service, i) => (
                  <Link
                    key={i}
                    to={service.url}
                    className={`px-3 py-1.5 ${getCategoryColor(service.color)} border rounded-lg text-xs font-semibold hover:opacity-80 transition-opacity`}
                  >
                    {service.category}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Specific Services</p>
              <div className="flex flex-wrap gap-2">
                {caseData.specificServices.map((service, i) => (
                  <Link
                    key={i}
                    to={service.url}
                    className="px-3 py-1.5 bg-slate-700/50 border border-slate-600/50 text-slate-300 text-xs rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
