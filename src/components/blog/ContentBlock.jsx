import { Link } from 'react-router-dom';
import { Lightbulb, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const iconMap = {
  lightbulb: Lightbulb,
  alert: AlertCircle,
  check: CheckCircle2
};

export default function ContentBlock({ block, index }) {
  // Generate anchor ID from heading
  const anchorId = block.heading 
    ? block.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    : `section-${index}`;

  switch (block.type) {
    case 'text':
      return (
        <section className="mb-8" id={anchorId}>
          {block.heading && (
            <h2 className="text-2xl font-bold text-white mb-4">{block.heading}</h2>
          )}
          <p className="text-slate-300 leading-relaxed">{block.content}</p>
        </section>
      );

    case 'list':
      return (
        <section className="mb-8" id={anchorId}>
          {block.heading && (
            <h2 className="text-2xl font-bold text-white mb-4">{block.heading}</h2>
          )}
          <ul className="space-y-3">
            {block.items.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      );

    case 'table':
      return (
        <section className="mb-8" id={anchorId}>
          {block.heading && (
            <h2 className="text-2xl font-bold text-white mb-4">{block.heading}</h2>
          )}
          <div className="overflow-x-auto">
            <table className="blog-table w-full border border-slate-700 rounded-lg overflow-hidden">
              <thead className="bg-slate-800/50">
                <tr>
                  {block.data.headers.map((header, idx) => (
                    <th key={idx} className="px-4 py-3 text-left text-sm font-semibold text-white border-b border-slate-700">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.data.rows.map((row, rowIdx) => (
                  <tr key={rowIdx} className="border-b border-slate-800 last:border-0 hover:bg-white/5 transition-colors">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="px-4 py-3 text-sm text-slate-300">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      );

    case 'callout':
      const CalloutIcon = iconMap[block.icon] || Lightbulb;
      const calloutColors = {
        lightbulb: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-100',
        alert: 'bg-amber-500/10 border-amber-500/30 text-amber-100',
        check: 'bg-green-500/10 border-green-500/30 text-green-100'
      };
      const colorClass = calloutColors[block.icon] || calloutColors.lightbulb;

      return (
        <div className={`blog-callout p-6 border-l-4 rounded-r-lg mb-8 ${colorClass}`} id={anchorId}>
          <div className="flex items-start space-x-3">
            <CalloutIcon size={24} className="flex-shrink-0 mt-0.5" />
            <p className="text-sm leading-relaxed font-medium">{block.content}</p>
          </div>
        </div>
      );

    case 'cta':
      return (
        <div className="p-6 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-xl mb-8" id={anchorId}>
          {block.heading && (
            <h3 className="text-xl font-bold text-white mb-2">{block.heading}</h3>
          )}
          {block.content && (
            <p className="text-slate-300 mb-4">{block.content}</p>
          )}
          {block.link && (
            <Link 
              to={block.link.url}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-500 transition-colors"
            >
              <span>{block.link.text}</span>
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
      );

    case 'chart':
      // Placeholder for chart integration
      return (
        <section className="mb-8" id={anchorId}>
          {block.heading && (
            <h2 className="text-2xl font-bold text-white mb-4">{block.heading}</h2>
          )}
          <div className="p-8 glass rounded-xl text-center">
            <p className="text-slate-400">Chart visualization placeholder</p>
            <p className="text-sm text-slate-500 mt-2">Integration with ResearchChart component</p>
          </div>
        </section>
      );

    default:
      return null;
  }
}
