import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-850 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-900">
          
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-white font-bold text-sm">
                GP
              </div>
              <span className="text-sm font-bold text-white">
                گرندپایپ | گروه صنعتی فراسان (Grand Pipe / Farassan Group)
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs max-w-md">
              پیشگام مهندسی و تولید لوله‌های کامپوزیت پلیمری GRP و اجرای خطوط انتقال آب و آبیاری تحت فشار در مقیاس‌های کلان در خاورمیانه و آفریقا.
            </p>
            <div className="text-[11px] text-slate-500 pt-1">
              گزارش راهبردی مدیریت ارشد · نسخه نهایی شهریور ۱۴۰۵ (سپتامبر ۲۰۲۶)
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white mb-3">فهرست فصول و مستندات</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#full-document-text" className="hover:text-cyan-400 text-cyan-300 font-semibold transition-colors">متن کامل بدون حذفیات ورد</a></li>
              <li><a href="#document-gallery" className="hover:text-cyan-400 transition-colors">گالری تصاویر و اسناد میدانی</a></li>
              <li><a href="#macro-environment" className="hover:text-cyan-400 transition-colors">فصل ۱: محیط کلان و ژئوپلیتیک</a></li>
              <li><a href="#macro-environment" className="hover:text-cyan-400 transition-colors">فصل ۲: اقدامات توسعه بازار</a></li>
              <li><a href="#reference-projects" className="hover:text-cyan-400 transition-colors">فصل ۳: ارزیابی فنی و مراجع GRP</a></li>
              <li><a href="#gered-project" className="hover:text-cyan-400 transition-colors">فصل ۴: مدل ورود و GERED</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white mb-3">محورهای تصمیم‌گیری</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#gered-project" className="hover:text-cyan-400 transition-colors">پایلوت ۱۰۰M$ پروژه GERED</a></li>
              <li><a href="#entry-models" className="hover:text-cyan-400 transition-colors">مدل همکاری با Prime Contractor</a></li>
              <li><a href="#entry-models" className="hover:text-cyan-400 transition-colors">کریدور جیبوتی به منطقه آزاد Adama</a></li>
              <li><a href="#board-resolutions" className="hover:text-cyan-400 transition-colors">۶ مصوبه رسمی هیئت‌مدیره</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            کلیه حقوق این سند راهبردی محفوظ و متعلق به گرندپایپ و گروه صنعتی فراسان می‌باشد © ۲۰۲۶
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>بازگشت به بالای صفحه</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
