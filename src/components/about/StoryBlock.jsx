import { ArrowRight } from 'lucide-react';

export default function StoryBlock({ phase, title, content, reverse = false }) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      {/* Text Content */}
      <div className={`${reverse ? 'md:order-2' : 'md:order-1'}`}>
        {/* Phase Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            {phase}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {title}
        </h3>

        {/* Content */}
        <p className="text-slate-300 leading-relaxed text-base md:text-lg">
          {content}
        </p>

        {/* Decorative Arrow (for flow) */}
        <div className="mt-6 flex items-center gap-2 text-cyan-400">
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
          <ArrowRight size={20} />
        </div>
      </div>

      {/* Visual Element */}
      <div className={`${reverse ? 'md:order-1' : 'md:order-2'}`}>
        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden glass">
          {/* Placeholder Visual - Data Visualization Abstract */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="h-full w-full" style={{
                backgroundImage: `
                  linear-gradient(to right, rgb(6 182 212) 1px, transparent 1px),
                  linear-gradient(to bottom, rgb(6 182 212) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }} />
            </div>

            {/* Abstract Data Visualization */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              {phase === 'beginning' && (
                <div className="space-y-2 w-full">
                  <div className="h-2 bg-gradient-to-r from-cyan-500/50 to-transparent rounded w-3/4"></div>
                  <div className="h-2 bg-gradient-to-r from-indigo-500/50 to-transparent rounded w-full"></div>
                  <div className="h-2 bg-gradient-to-r from-purple-500/50 to-transparent rounded w-2/3"></div>
                  <div className="h-2 bg-gradient-to-r from-cyan-500/50 to-transparent rounded w-5/6"></div>
                </div>
              )}

              {phase === 'shift' && (
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute w-32 h-32 rounded-full border-4 border-cyan-500/30 animate-ping"></div>
                  <div className="absolute w-24 h-24 rounded-full border-4 border-indigo-500/50"></div>
                  <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/30 to-indigo-500/30"></div>
                </div>
              )}

              {phase === 'current' && (
                <div className="grid grid-cols-3 gap-2 w-full">
                  {[...Array(9)].map((_, i) => (
                    <div 
                      key={i}
                      className="aspect-square rounded bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/20"
                      style={{ 
                        animationDelay: `${i * 100}ms`,
                        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
