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

        {/* Zone 2: Clean and Minimal Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-xs sm:text-sm font-medium text-slate-300">
          <a href="#full-document-text" className="hover:text-cyan-400 transition-colors">
            متن فصول
          </a>
          <a href="#document-gallery" className="hover:text-cyan-400 transition-colors">
            تصاویر و اسناد
          </a>
          <a href="#gered-project" className="hover:text-cyan-400 transition-colors">
            پروژه GERED
          </a>
          <a href="#board-resolutions" className="hover:text-cyan-400 transition-colors">
            مصوبات هیئت‌مدیره
          </a>
        </nav>

        {/* Zone 3: Compact CTA Button */}
        <div className="flex items-center gap-3">
          {onOpenSummaryModal && (
            <button
              onClick={onOpenSummaryModal}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>خلاصه مصوبات</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
