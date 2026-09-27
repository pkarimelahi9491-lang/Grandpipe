import React from 'react';
import { DocumentMode } from '../types/data';
import { ArrowDown, CheckCircle, FileText, TrendingUp, Layers } from 'lucide-react';

interface HeroBannerProps {
  activeDoc: DocumentMode;
  onExploreClick: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ activeDoc, onExploreClick }) => {
  return (
    <section id="hero" className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden border-b border-slate-800">
      
      {/* Background Image with Measured Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_water_pipeline_1790501140717.jpg"
          alt="اجرای خطوط انتقال آب قطر بالا GRP گرندپایپ فراسان در اتیوپی"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.12),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        
        {/* Unboxed Metadata Header Line (Zero-Pill Rule) */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-semibold text-cyan-400 mb-6 flex-wrap">
          <span>گروه صنعتی فراسان</span>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span>شرکت گرندپایپ (Grand Pipe)</span>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span>گزارش جامع راهبردی مدیریت ارشد</span>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span className="text-slate-400">سپتامبر ۲۰۲۶ (شهریور ۱۴۰۵)</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-5xl mx-auto leading-tight sm:leading-tight lg:leading-tight">
          ارزیابی راهبردی بازار اتیوپی و طرح ورود به پروژه‌های خطوط انتقال آب و زیرساخت <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 via-sky-300 to-blue-500">GRP</span>
        </h1>

        {/* Subtitle / Value Proposition */}
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          ورود پروژه‌محور و کم‌سرمایه (<span className="text-cyan-300 font-semibold">Asset-Light</span>) با تمرکز اولیه بر فاز پایلوت ۱۰۰ میلیون دلاری پروژه <span className="text-cyan-300 font-semibold">GERED</span>، درآمدزایی زودهنگام از مهندسی و تأمین لوله از کارخانه‌های ایران/ترکیه، و موکول نمودن سرمایه‌گذاری کارخانه‌ای به اثبات بازار.
        </p>

        {/* Governing Principle Callout Box */}
        <div className="mt-8 max-w-2xl mx-auto p-4 rounded-xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-sm shadow-xl shadow-cyan-950/30">
          <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider mb-1">
            اصل راهبردی حاکم بر تصمیم‌گیری مدیریت
          </div>
          <p className="text-sm sm:text-base font-bold text-white leading-normal">
            «پروژه محرک سرمایه‌گذاری باشد، نه سرمایه‌گذاری پیش‌شرط دستیابی به پروژه!»
          </p>
        </div>

        {/* Unboxed Key Statistics Bar (Zero-Pill Compliance) */}
        <div className="mt-10 pt-8 border-t border-slate-800/80 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-right">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
              ۱۳۵M+
            </div>
            <div className="text-xs text-slate-400 mt-1">جمعیت و بازار مصرف</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 tabular-nums">
              ۹.۲٪ - ۹.۳٪
            </div>
            <div className="text-xs text-slate-400 mt-1">رشد سالانه GDP اتیوپی</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 tabular-nums">
              ۱۰۰M$
            </div>
            <div className="text-xs text-slate-400 mt-1">پایلوت پروژه GERED</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tabular-nums">
              DN1200 - 1600
            </div>
            <div className="text-xs text-slate-400 mt-1">محدوده خط اصلی هدف</div>
          </div>
        </div>

        {/* Active Mode Notice and Direct CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onExploreClick}
            className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-950/50 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>بررسی عمیق گزارش</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>

          <a
            href="#gered-project"
            className="px-5 py-3 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 transition-colors flex items-center gap-2"
          >
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span>جزئیات پروژه GERED</span>
          </a>

          <a
            href="#board-resolutions"
            className="px-5 py-3 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 transition-colors flex items-center gap-2"
          >
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>۶ مصوبه رسمی هیئت‌مدیره</span>
          </a>
        </div>

        {/* Active Document Indicator Badge Bar */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
          <span>در حال مطالعه:</span>
          {activeDoc === 'doc1' && (
            <span className="text-cyan-400 font-bold flex items-center gap-1">
              <FileText className="w-3.5 h-3.5" />
              فایل اول (ارزیابی کلان، بازار و زیرساخت فنی)
            </span>
          )}
          {activeDoc === 'doc2' && (
            <span className="text-blue-400 font-bold flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              فایل دوم (طرح عملیاتی ورود، پروژه GERED و مصوبات)
            </span>
          )}
          {activeDoc === 'both' && (
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              نمای جامع تلفیقی هر دو سند
            </span>
          )}
        </div>

      </div>
    </section>
  );
};
