export default function HeroSection({ title, subtitle, children }) {
  return (
    <section className="relative pt-12 pb-20 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-8">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}
