import { Download, FileText, CheckCircle2 } from 'lucide-react';

export default function ReportMockup({ reportData }) {
  return (
    <div className="relative">
      {/* PDF Viewer Header */}
      <div className="mb-6 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg mb-3">
          <FileText size={16} className="text-cyan-400" />
          <span className="text-sm font-semibold text-white">{reportData.title}</span>
        </div>
        <p className="text-sm text-slate-400">{reportData.subtitle}</p>
      </div>

      {/* Report Pages Preview */}
      <div className="grid md:grid-cols-3 gap-6">
        {reportData.pages.map((page, index) => (
          <div key={page.id} className="relative group">
            {/* Page Card */}
            <div className="relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
              {/* Page Number Badge */}
              <div className="absolute top-3 left-3 z-10 px-2 py-1 bg-slate-950/80 border border-slate-700 rounded-md">
                <span className="text-xs font-semibold text-slate-300">Page {page.id}</span>
              </div>

              {/* Blurred Preview Image Placeholder */}
              <div className="aspect-[8.5/11] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
                {/* Mock Document Content */}
                <div className="absolute inset-0 p-8 space-y-3 opacity-30">
                  <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-700 rounded w-full"></div>
                  <div className="h-4 bg-slate-700 rounded w-5/6"></div>
                  <div className="mt-6 h-32 bg-slate-700 rounded"></div>
                  <div className="h-3 bg-slate-700 rounded w-2/3"></div>
                  <div className="h-3 bg-slate-700 rounded w-4/5"></div>
                </div>

                {/* Blur Overlay */}
                <div className="absolute inset-0 backdrop-blur-md bg-slate-900/40"></div>

                {/* Center Lock Icon (on first page only) */}
                {index === 1 && (
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                      <FileText size={28} className="text-cyan-400" />
                    </div>
                    <p className="text-sm font-semibold text-white">Preview Blurred</p>
                  </div>
                )}
              </div>

              {/* Page Title */}
              <div className="p-4 border-t border-slate-800">
                <h4 className="text-sm font-semibold text-white mb-3">{page.title}</h4>
                
                {/* Highlights */}
                <div className="space-y-1.5">
                  {page.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 size={12} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-400">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Download CTA */}
      <div className="mt-8 text-center">
        <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-indigo-400 transition-all duration-300 shadow-lg shadow-cyan-500/20">
          <Download size={18} />
          <span>Download Sample Report</span>
        </button>
        <p className="mt-3 text-xs text-slate-500">
          Full access requires email registration
        </p>
      </div>
    </div>
  );
}
