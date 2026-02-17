import { useState } from 'react';
import { Search, BarChart3, Package, Share2, FileText, ChevronDown } from 'lucide-react';

const iconMap = {
  Search,
  BarChart3,
  Package,
  Share2,
  FileText
};

const colorMap = {
  cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
  indigo: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
  purple: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
  green: 'bg-green-500/10 border-green-500/30 text-green-400',
  amber: 'bg-amber-500/10 border-amber-500/30 text-amber-400'
};

const progressColorMap = {
  cyan: 'from-cyan-500 to-indigo-500',
  indigo: 'from-indigo-500 to-purple-500',
  purple: 'from-purple-500 to-green-500',
  green: 'from-green-500 to-amber-500',
  amber: 'from-amber-500 to-cyan-500'
};

export default function FrameworkAccordion({ steps }) {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="space-y-4">
      {steps.map((step, index) => {
        const Icon = iconMap[step.icon] || Search;
        const colorClass = colorMap[step.color] || colorMap.cyan;
        const isActive = activeStep === step.id;
        const isCompleted = step.id < activeStep;

        return (
          <div key={step.id} className="relative">
            {/* Connecting Line for Mobile */}
            {index < steps.length - 1 && (
              <div className="md:hidden absolute left-8 top-20 w-0.5 h-12 bg-slate-800">
                <div 
                  className={`w-full bg-gradient-to-b ${progressColorMap[step.color]} transition-all duration-500`}
                  style={{ height: isCompleted || isActive ? '100%' : '0%' }}
                />
              </div>
            )}

            {/* Step Card */}
            <button
              onClick={() => setActiveStep(step.id)}
              className={`w-full text-left transition-all duration-300 ${
                isActive 
                  ? 'scale-[1.01]' 
                  : ''
              }`}
            >
              <div className={`p-6 rounded-xl border transition-all duration-300 ${
                isActive 
                  ? 'glass border-cyan-500/50 shadow-lg shadow-cyan-500/20' 
                  : 'glass border-white/10 hover:border-white/20'
              }`}>
                <div className="flex items-start gap-4">
                  {/* Step Icon & Number */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center ${colorClass} transition-all duration-300`}>
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">
                          Step {step.id}
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white">
                          {step.step}
                        </h3>
                      </div>
                      <ChevronDown 
                        size={20} 
                        className={`text-slate-400 transition-transform duration-300 flex-shrink-0 ml-2 ${
                          isActive ? 'rotate-180' : ''
                        }`}
                      />
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-3">
                      {step.description}
                    </p>

                    {/* Expandable Details */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}>
                      <div className={`pt-4 border-t ${isActive ? 'border-white/10' : 'border-transparent'}`}>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
                          Key Activities
                        </h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                              <span className="text-cyan-400 mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        );
      })}

      {/* Visual Steps Progress Indicator (Desktop) */}
      <div className="hidden md:flex items-center justify-between mt-8 pt-8 border-t border-slate-800">
        {steps.map((step, index) => {
          const isCompleted = step.id < activeStep;
          const isActive = step.id === activeStep;
          
          return (
            <div key={step.id} className="flex items-center flex-1">
              {/* Step Circle */}
              <button
                onClick={() => setActiveStep(step.id)}
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  isActive || isCompleted
                    ? 'bg-cyan-500 border-cyan-400 text-white scale-110'
                    : 'bg-slate-900 border-slate-700 text-slate-500 hover:border-slate-600'
                }`}
              >
                {step.id}
              </button>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 bg-slate-800 mx-2">
                  <div 
                    className={`h-full bg-gradient-to-r ${progressColorMap[step.color]} transition-all duration-500`}
                    style={{ width: isCompleted || isActive ? '100%' : '0%' }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
