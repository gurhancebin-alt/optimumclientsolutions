import { Globe, Zap, Target, Users } from 'lucide-react';

const iconMap = {
  Zap,
  Target,
  Users
};

export default function CaseGrid({ cases, selectedCase, onSelectCase, className = '' }) {
  // Filter out the selected case from the grid
  const displayCases = selectedCase 
    ? cases.filter(c => c.id !== selectedCase.id)
    : cases;
  
  const getStatusColor = (color) => {
    const colors = {
      green: 'bg-green-500/20 border-green-400/30 text-green-400',
      yellow: 'bg-yellow-500/20 border-yellow-400/30 text-yellow-400',
      cyan: 'bg-cyan-500/20 border-cyan-400/30 text-cyan-400'
    };
    return colors[color] || colors.cyan;
  };

  const getUspColor = (color) => {
    const colors = {
      cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
      indigo: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
      green: 'bg-green-500/10 border-green-500/30 text-green-400'
    };
    return colors[color] || colors.cyan;
  };

  const UspIcon = ({ iconName }) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon size={14} /> : null;
  };

  return (
    <div className={`${className} transition-all duration-500`}>
      {/* Desktop: Vertical Stack (when case selected) or Horizontal Grid (default) */}
      <div className={`hidden md:flex gap-4 ${
        selectedCase 
          ? 'flex-col overflow-y-auto max-h-[70vh] pr-2' 
          : 'overflow-x-auto pb-4'
      } scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-slate-700`}>
        {displayCases.map((caseData) => (
          <button
            key={caseData.id}
            onClick={() => onSelectCase(caseData)}
            className={`flex-shrink-0 ${
              selectedCase ? 'w-full' : 'w-80'
            } group relative overflow-hidden rounded-2xl border transition-all duration-300 border-slate-800 hover:border-cyan-500/50 ${
              caseData.hasBackgroundImage ? '' : `bg-gradient-to-br ${caseData.backgroundGradient}`
            }`}
          >
            {/* Background Image */}
            {caseData.hasBackgroundImage && (
              <div 
                className="absolute inset-0 bg-white"
                style={{
                  backgroundImage: `url(${caseData.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/95 group-hover:from-slate-900/90 group-hover:via-slate-900/85 group-hover:to-slate-800/90 transition-all duration-300" />
            
            {/* Status Badge */}
            <div className="absolute top-3 right-3 z-10">
              <span className={`px-2.5 py-1 ${getStatusColor(caseData.statusColor)} border rounded-full text-xs font-semibold`}>
                {caseData.status}
              </span>
            </div>
            
            {/* Content */}
            <div className="relative p-5 flex flex-col min-h-[280px]">
              {/* Logo */}
              <div className="mb-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${caseData.logoGradient} flex items-center justify-center text-white font-bold text-sm`}>
                  {caseData.logo}
                </div>
              </div>
              
              {/* Company Info */}
              <div className="flex-grow space-y-2">
                <div>
                  <h3 className="text-lg font-bold text-white mb-0.5">{caseData.name}</h3>
                  <p className="text-slate-400 text-xs">{caseData.tagline}</p>
                </div>
                
                {/* Region & Industry */}
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 bg-slate-800/80 border border-slate-700 text-slate-300 text-xs rounded-md flex items-center space-x-1">
                    <Globe size={10} />
                    <span>{caseData.region}</span>
                  </span>
                  <span className="px-2 py-0.5 bg-slate-800/80 border border-slate-700 text-slate-300 text-xs rounded-md">
                    {caseData.industry}
                  </span>
                </div>
                
                {/* USP */}
                <div className={`inline-flex items-center space-x-1.5 px-2.5 py-1 ${getUspColor(caseData.uspColor)} border rounded-lg`}>
                  <UspIcon iconName={caseData.uspIcon} />
                  <span className="text-xs font-semibold">{caseData.usp}</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Mobile: Carousel with Indicators */}
      <div className="md:hidden">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide">
          {displayCases.map((caseData) => (
            <button
              key={caseData.id}
              onClick={() => onSelectCase(caseData)}
              className={`flex-shrink-0 w-full snap-center group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                selectedCase?.id === caseData.id
                  ? 'border-cyan-500'
                  : 'border-slate-800'
              } ${caseData.hasBackgroundImage ? '' : `bg-gradient-to-br ${caseData.backgroundGradient}`}`}
            >
              {/* Background Image */}
              {caseData.hasBackgroundImage && (
                <div 
                  className="absolute inset-0 bg-white"
                  style={{
                    backgroundImage: `url(${caseData.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/95" />
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-3 py-1.5 ${getStatusColor(caseData.statusColor)} border rounded-full text-xs font-semibold`}>
                  {caseData.status}
                </span>
              </div>
              
              {/* Content */}
              <div className="relative p-6 flex flex-col min-h-[320px]">
                {/* Logo */}
                <div className="mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${caseData.logoGradient} flex items-center justify-center text-white font-bold text-lg`}>
                    {caseData.logo}
                  </div>
                </div>
                
                {/* Company Info */}
                <div className="flex-grow space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{caseData.name}</h3>
                    <p className="text-slate-400 text-sm">{caseData.tagline}</p>
                  </div>
                  
                  {/* Region & Industry */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700 text-slate-300 text-xs rounded-lg flex items-center space-x-1.5">
                      <Globe size={12} />
                      <span>{caseData.region}</span>
                    </span>
                    <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700 text-slate-300 text-xs rounded-lg">
                      {caseData.industry}
                    </span>
                  </div>
                  
                  {/* USP */}
                  <div className={`inline-flex items-center space-x-2 px-3 py-1.5 ${getUspColor(caseData.uspColor)} border rounded-lg`}>
                    <UspIcon iconName={caseData.uspIcon} />
                    <span className="text-xs font-semibold">{caseData.usp}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
        
        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 mt-4">
          {displayCases.map((caseData) => (
            <button
              key={caseData.id}
              onClick={() => onSelectCase(caseData)}
              className={`w-2 h-2 rounded-full transition-all ${
                selectedCase?.id === caseData.id
                  ? 'bg-cyan-400 w-8'
                  : 'bg-slate-700'
              }`}
              aria-label={`View ${caseData.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
