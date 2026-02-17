import { Database, Search, Target, DollarSign, Award, ChevronDown } from 'lucide-react';

const iconMap = {
  Database,
  Search,
  Target,
  DollarSign,
  Award
};

const colorMap = {
  cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
  indigo: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
  purple: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
  green: 'bg-green-500/10 border-green-500/30 text-green-400',
  amber: 'bg-amber-500/10 border-amber-500/30 text-amber-400'
};

export default function FrameworkStep({ step, isActive, isLast, onToggle }) {
  const Icon = iconMap[step.icon];
  const colorClass = colorMap[step.color] || colorMap.cyan;

  return (
    <div className="relative flex-1">
      {/* Connecting Line */}
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-800 z-0">
          <div 
            className={`h-full bg-gradient-to-r ${isActive ? 'from-cyan-500 to-indigo-500' : 'from-slate-700 to-slate-800'} transition-all duration-500`}
            style={{ width: isActive ? '100%' : '0%' }}
          />
        </div>
      )}

      {/* Step Card */}
      <button
        onClick={onToggle}
        className={`relative z-10 w-full p-4 rounded-xl border transition-all duration-300 ${
          isActive 
            ? 'bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-500/20' 
            : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
        }`}
      >
        {/* Step Number & Icon */}
        <div className="flex items-center justify-center mb-3">
          <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center ${colorClass}`}>
            {Icon && <Icon size={24} />}
          </div>
        </div>

        {/* Step Label */}
        <div className="text-center mb-2">
          <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">
            Step {step.id}
          </div>
          <h4 className="text-sm font-bold text-white">{step.step}</h4>
        </div>

        {/* Expand Icon */}
        <div className="flex justify-center">
          <ChevronDown 
            size={16} 
            className={`text-slate-500 transition-transform duration-300 ${
              isActive ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      {/* Expanded Content */}
      <div 
        className={`mt-4 overflow-hidden transition-all duration-300 ${
          isActive ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 bg-slate-900/30 border border-slate-800 rounded-xl">
          <h5 className="text-white font-semibold mb-2">{step.title}</h5>
          <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
        </div>
      </div>
    </div>
  );
}
