import React from 'react';
import { riskMatrixData } from '../data/ethiopiaData';
import { ShieldAlert, ShieldCheck, AlertTriangle } from 'lucide-react';

export const RiskMitigationSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-amber-400 mb-2 flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4" />
            <span>مدیریت ریسک تجاری و ژئوپلیتیک</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            تحلیل ماتریس ریسک کشور اتیوپی و پروتکل‌های خنثی‌سازی
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            اتیوپی یک بازار کم‌ریسک نیست، بلکه یک «بازار پرپتانسیل، در حال اصلاح، و شدیداً حساس به کیفیت اجرا» (High-Potential / Reforming / Execution-Sensitive) است:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {riskMatrixData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                    {item.risk}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400">شدت اثر:</span>
                    <span className="text-[11px] font-bold text-rose-400">{item.impact}</span>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-slate-950/70 border border-emerald-500/20 text-xs">
                  <span className="font-bold text-emerald-400 block mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    راهکار خنثی‌سازی و مهار ریسک (Mitigation Strategy):
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {item.mitigation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
