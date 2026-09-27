import React from 'react';
import { DocumentMode } from '../types/data';
import { documentProfiles } from '../data/ethiopiaData';
import { FileText, TrendingUp, Layers, ArrowLeft, Check, Sparkles, Building2, ShieldCheck, Globe, Factory } from 'lucide-react';

interface DocumentSelectorProps {
  activeDoc: DocumentMode;
  setActiveDoc: (mode: DocumentMode) => void;
}

export const DocumentSelector: React.FC<DocumentSelectorProps> = ({ activeDoc, setActiveDoc }) => {
  return (
    <section id="document-selector" className="py-12 bg-slate-900/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>سامانه تحلیل اسناد مدیریتی گرندپایپ و گروه صنعتی فراسان</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            انتخاب گزارش راهبردی جهت مطالعه و بررسی تحلیلی
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            لطفاً یکی از دو فایل گزارش مدیریتی را انتخاب نمایید تا لندینگ جامع، نمودارهای اختصاصی، تحلیل‌های فنی و جداول مقایسه‌ای متناظر به نمایش درآید:
          </p>
        </div>

        {/* The Two Main Document Choice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Document 1 */}
          <div
            onClick={() => setActiveDoc('doc1')}
            className={`cursor-pointer rounded-2xl p-7 transition-all duration-300 relative border flex flex-col justify-between group ${
              activeDoc === 'doc1'
                ? 'bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/40 border-cyan-500 ring-2 ring-cyan-500/20 shadow-2xl shadow-cyan-950/50'
                : 'bg-slate-900/40 hover:bg-slate-900/80 border-slate-800 hover:border-slate-700'
            }`}
          >
            {activeDoc === 'doc1' && (
              <div className="absolute top-4 left-4 bg-cyan-500 text-slate-950 p-1 rounded-full shadow">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
            )}
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-slate-400">
                  {documentProfiles.doc1.code} · {documentProfiles.doc1.badge}
                </span>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                {documentProfiles.doc1.title}
              </h3>
              <p className="mt-2 text-xs font-semibold text-cyan-400/90">
                {documentProfiles.doc1.subtitle}
              </p>

              <p className="mt-4 text-xs text-slate-300 leading-relaxed">
                {documentProfiles.doc1.summary}
              </p>

              {/* Key topics included */}
              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <span className="text-[11px] font-semibold text-slate-400 block mb-2.5">
                  بخش‌های کلیدی فصل اول و دوم (ارزیابی کلان و اقدامات میدانی):
                </span>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>بازار ۱۳۵ میلیونی، رشد اقتصادی ۹.۲٪ و دسترسی به بازار ۲۱ کشور پیمان COMESA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>اصلاحات ارزی FX، برنامه ۳.۴B$ صندوق پول و ۲.۵B$ بانک جهانی</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Factory className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>کریدور ترانزیت جیبوتی-مودجو و بررسی منطقه آزاد صنعتی Adama جهت تولید احتمالی آینده</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>گزارش میدانی سفر مدیریت ارشد و کنگره سرمایه‌گذاری خارجی (قراردادهای ۱۳B$)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 flex items-center justify-between">
              <span className={`text-xs font-bold flex items-center gap-1.5 transition-colors ${
                activeDoc === 'doc1' ? 'text-cyan-400' : 'text-slate-400 group-hover:text-white'
              }`}>
                {activeDoc === 'doc1' ? 'در حال نمایش این گزارش' : 'مشاهده لندینگ اختصاصی فایل اول'}
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </span>
              <span className="text-[11px] text-slate-400">۳ فصل مطالعاتی</span>
            </div>
          </div>

          {/* Card 2: Document 2 */}
          <div
            onClick={() => setActiveDoc('doc2')}
            className={`cursor-pointer rounded-2xl p-7 transition-all duration-300 relative border flex flex-col justify-between group ${
              activeDoc === 'doc2'
                ? 'bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border-blue-500 ring-2 ring-blue-500/20 shadow-2xl shadow-blue-950/50'
                : 'bg-slate-900/40 hover:bg-slate-900/80 border-slate-800 hover:border-slate-700'
            }`}
          >
            {activeDoc === 'doc2' && (
              <div className="absolute top-4 left-4 bg-blue-500 text-slate-950 p-1 rounded-full shadow">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-slate-400">
                  {documentProfiles.doc2.code} · {documentProfiles.doc2.badge}
                </span>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                {documentProfiles.doc2.title}
              </h3>
              <p className="mt-2 text-xs font-semibold text-blue-400/90">
                {documentProfiles.doc2.subtitle}
              </p>

              <p className="mt-4 text-xs text-slate-300 leading-relaxed">
                {documentProfiles.doc2.summary}
              </p>

              {/* Key topics included */}
              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <span className="text-[11px] font-semibold text-slate-400 block mb-2.5">
                  محورهای کلیدی محتوای فایل ۲:
                </span>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>اصل راهبردی: «پروژه محرک سرمایه‌گذاری باشد، نه سرمایه‌گذاری پیش‌شرط پروژه»</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>پروژه محوری GERED: پایلوت ۱۰۰M$ (۴۰M$ مهندسی + ۶۰M$ تأمین + ۹M$ پیش‌پرداخت)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>مدل ۴گانه ورود و انتخاب شراکت پروژه‌ای با Prime Contractor محلی</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>بسته ۶ مصوبه رسمی هیئت‌مدیره همراه با پروتکل‌های تضامین و امنیت پرداخت</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 flex items-center justify-between">
              <span className={`text-xs font-bold flex items-center gap-1.5 transition-colors ${
                activeDoc === 'doc2' ? 'text-blue-400' : 'text-slate-400 group-hover:text-white'
              }`}>
                {activeDoc === 'doc2' ? 'در حال نمایش این گزارش' : 'مشاهده لندینگ اختصاصی فایل دوم'}
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </span>
              <span className="text-[11px] text-slate-400">خلاصه مدیریتی + فصل ۴ + مصوبات</span>
            </div>
          </div>

        </div>

        {/* Third Consolidated Toggle Bar */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-right">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                حالت گزارش جامع و تلفیقی (Consolidated Management Dossier)
              </h4>
              <p className="text-xs text-slate-400">
                مشاهده هم‌زمان تمام تحلیل‌های هر دو فایل ورد در یک نمای یکپارچه به همراه ابزارهای مقایسه‌ای
              </p>
            </div>
          </div>

          <button
            onClick={() => setActiveDoc('both')}
            className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeDoc === 'both'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-950/60 ring-2 ring-emerald-400/40'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
            }`}
          >
            <span>نمایش گزارش جامع تلفیقی</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
