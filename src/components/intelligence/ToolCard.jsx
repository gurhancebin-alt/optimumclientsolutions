export default function ToolCard({ tool }) {
  return (
    <div className="group relative p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-700 transition-all duration-300">
      {/* Logo */}
      <div className="flex items-center justify-center mb-4 h-16">
        <img 
          src={tool.logo} 
          alt={tool.name}
          className="h-8 max-w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
          onError={(e) => {
            // Fallback if image doesn't load
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="hidden text-white font-bold text-sm">{tool.name}</div>
      </div>

      {/* Tool Name (always visible) */}
      <h4 className="text-white font-semibold text-sm text-center mb-2">{tool.name}</h4>

      {/* Category Badge */}
      <div className="flex justify-center mb-3">
        <span className="px-2 py-0.5 bg-slate-800/50 border border-slate-700 text-slate-400 text-xs rounded-md">
          {tool.category}
        </span>
      </div>

      {/* Hover Overlay - Usage Description */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-slate-800/95 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
        <p className="text-slate-300 text-xs text-center leading-relaxed">
          {tool.usage}
        </p>
      </div>
    </div>
  );
}
