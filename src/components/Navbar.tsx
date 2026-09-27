import React from 'react';
import { DocumentMode } from '../types/data';
import { FileText, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  activeDoc: DocumentMode;
  setActiveDoc: (mode: DocumentMode) => void;
  onOpenSummaryModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeDoc, setActiveDoc, onOpenSummaryModal }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-900/30">
            GP
          </div>
          <div className="flex flex-col text-right">
            <span className="text-base font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              گرندپایپ | گروه صنعتی فراسان
            </span>
            <span className="text-[11px] text-slate-400">
              طرح جامع راهبردی ورود به بازار اتیوپی
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs xl:text-sm font-medium text-slate-300">
          <a href="#document-selector" className="hover:text-cyan-400 transition-colors">
            انتخاب گزارش
          </a>
          <a href="#full-document-text" className="hover:text-cyan-400 text-cyan-300 font-semibold transition-colors flex items-center gap-1">
            <span>متن کامل فصول</span>
          </a>
          <a href="#document-gallery" className="hover:text-cyan-400 transition-colors">
            گالری تصاویر ورد
          </a>
          <a href="#gered-project" className="hover:text-cyan-400 transition-colors">
            پروژه GERED
          </a>
          <a href="#entry-models" className="hover:text-cyan-400 transition-colors">
            مدل‌های ورود
          </a>
          <a href="#board-resolutions" className="hover:text-cyan-400 transition-colors">
            مصوبات هیئت‌مدیره
          </a>
        </nav>

        {/* Zone 3: Document Switcher Quick Actions & CTA */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-slate-900/90 p-1 rounded-lg border border-slate-800 text-xs">
            <button
              onClick={() => setActiveDoc('doc1')}
              className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeDoc === 'doc1'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="فایل اول: ارزیابی محیط کلان و فنی بازار"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>فایل ۱</span>
            </button>
            <button
              onClick={() => setActiveDoc('doc2')}
              className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeDoc === 'doc2'
                  ? 'bg-blue-500/20 text-blue-300 font-semibold border border-blue-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="فایل دوم: طرح عملیاتی ورود و مصوبات هیئت‌مدیره"
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>فایل ۲</span>
            </button>
            <button
              onClick={() => setActiveDoc('both')}
              className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeDoc === 'both'
                  ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="نمای تلفیقی هر دو سند"
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">گزارش تلفیقی</span>
            </button>
          </div>

          {onOpenSummaryModal && (
            <button
              onClick={onOpenSummaryModal}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg shadow-md shadow-cyan-950/50 transition-all cursor-pointer whitespace-nowrap"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>بسته مصوبات هیئت‌مدیره</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
