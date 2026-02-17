import { TrendingUp, Search, Target, Package, CheckCircle2 } from 'lucide-react';

const iconMap = {
  TrendingUp,
  Search,
  Target,
  Package
};

const colorMap = {
  cyan: 'from-cyan-500/10 to-cyan-600/5 border-cyan-500/30 group-hover:border-cyan-500/50',
  indigo: 'from-indigo-500/10 to-indigo-600/5 border-indigo-500/30 group-hover:border-indigo-500/50',
  purple: 'from-purple-500/10 to-purple-600/5 border-purple-500/30 group-hover:border-purple-500/50',
  green: 'from-green-500/10 to-green-600/5 border-green-500/30 group-hover:border-green-500/50'
};

const iconColorMap = {
  cyan: 'text-cyan-400',
  indigo: 'text-indigo-400',
  purple: 'text-purple-400',
  green: 'text-green-400'
};

export default function ReportPreviewCard({ reportType }) {
  const Icon = iconMap[reportType.icon];
  const gradientClass = colorMap[reportType.color] || colorMap.cyan;
  const iconColor = iconColorMap[reportType.color] || iconColorMap.cyan;

  return (
    <div className={`group p-6 bg-gradient-to-br ${gradientClass} border rounded-2xl transition-all duration-300 hover:scale-105`}>
      {/* Icon */}
      <div className="mb-4">
        <div className={`w-12 h-12 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-center ${iconColor}`}>
          {Icon && <Icon size={24} />}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-2">{reportType.title}</h3>

      {/* Description */}
      <p className="text-slate-400 text-sm mb-4">{reportType.description}</p>

      {/* Data Outputs */}
      <div className="space-y-2">
        {reportType.dataOutputs.map((output, index) => (
          <div key={index} className="flex items-start space-x-2">
            <CheckCircle2 size={14} className={`${iconColor} flex-shrink-0 mt-0.5`} />
            <span className="text-xs text-slate-300 leading-relaxed">{output}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
