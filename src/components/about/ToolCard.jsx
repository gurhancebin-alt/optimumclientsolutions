import { Search, TrendingUp, Package, BarChart3, ShoppingBag, Store, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Search,
  TrendingUp,
  Package,
  BarChart3,
  ShoppingBag,
  Store
};

const colorMap = {
  cyan: 'text-cyan-400',
  indigo: 'text-indigo-400',
  purple: 'text-purple-400',
  green: 'text-green-400',
  amber: 'text-amber-400'
};

export default function ToolCard({ tool }) {
  const Icon = iconMap[tool.icon] || Package;
  const colorClass = colorMap[tool.color] || colorMap.cyan;

  return (
    <div className="glass rounded-xl p-6 hover-lift group">
      {/* Icon */}
      <div className="mb-4">
        <div className={`w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center ${colorClass} group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={24} />
        </div>
      </div>

      {/* Tool Name */}
      <h3 className="text-xl font-bold text-white mb-2">
        {tool.name}
      </h3>

      {/* Purpose */}
      <p className="text-sm text-slate-400 mb-4 leading-relaxed">
        {tool.purpose}
      </p>

      {/* Metrics List */}
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
          Key Metrics
        </h4>
        <ul className="space-y-2">
          {tool.metrics.map((metric, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
              <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>{metric}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Strategic Value */}
      <div className="pt-4 border-t border-white/10">
        <p className="text-xs text-slate-500 leading-relaxed">
          <span className="font-semibold text-cyan-400">Strategic Value: </span>
          {tool.value}
        </p>
      </div>
    </div>
  );
}
