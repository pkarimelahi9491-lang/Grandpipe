import React, { useState } from 'react';
import { macroIndicators, tenYearPlanTargets, materialComparisonData, timelineMilestones } from '../data/ethiopiaData';
import { Globe, TrendingUp, ShieldAlert, Truck, Droplets, CheckCircle2, Milestone, ArrowLeft } from 'lucide-react';

export const MacroAssessmentSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'economy' | 'reform' | 'market'>('all');

  const filteredIndicators = selectedCategory === 'all'
    ? macroIndicators
    : macroIndicators.filter(item => item.category === selectedCategory || (selectedCategory === 'reform' && item.category === 'international'));

  return (
    <section id="macro-environment" className="py-16 lg:py-24 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
            <span>محتوای تخصصی فایل اول</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>فصول ۱ الی ۳ گزارش مدیریتی</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            ارزیابی محیط کلان، ژئوپلیتیک و پتانسیل ساختاری بازار اتیوپی
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            بررسی شاخص‌های اقتصادی، رشد ۹.۲ درصدی تولید ناخالص داخلی، عضویت در پیمان تجاری منطقه‌ای COMESA، اصلاحات پولی-ارزی، بسته‌های حمایتی IMF و بانک جهانی، و کریدور لجستیکی بندر جیبوتی به بندر خشک مودجو و منطقه آزاد آداما.
          </p>
        </div>

        {/* 1. Macro Indicators Grid */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-cyan-400" />
              <span>شاخص‌های کلیدی اقتصاد کلان و ظرفیت‌های منطقه‌ای</span>
            </h3>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  selectedCategory === 'all' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                همه شاخص‌ها
              </button>
              <button
                onClick={() => setSelectedCategory('economy')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  selectedCategory === 'economy' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                رشد و بازار
              </button>
              <button
                onClick={() => setSelectedCategory('reform')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  selectedCategory === 'reform' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                اصلاحات پولی و FX
              </button>
              <button
                onClick={() => setSelectedCategory('market')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  selectedCategory === 'market' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                لجستیک و COMESA
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIndicators.map((ind) => (
              <div
                key={ind.id}
                className="bg-slate-900/60 rounded-xl p-6 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>{ind.title}</span>
                    <span className="text-[11px] text-slate-500">{ind.source}</span>
                  </div>
                  <div className="text-2xl font-black text-white tabular-nums tracking-tight">
                    {ind.value}
                  </div>
                  {ind.change && (
                    <div className="text-xs font-semibold text-cyan-400 mt-1">
                      {ind.change}
                    </div>
                  )}
                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Ten-Year National Development Plan 2021-2030 */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-semibold text-sky-400 mb-1">
              سند بالادستی و استراتژی ملی اتیوپی
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              اهداف سند ده‌ساله توسعه اتیوپی (2021–2030) در حوزه آب و آبیاری
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              این ارقام اثبات می‌کنند که توسعه انتقال آب و شبکه‌های آبیاری تحت فشار در اتیوپی نه یک برنامه مقطعی، بلکه محور بنیادین توسعه ملی این کشور است:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tenYearPlanTargets.map((target) => (
              <div
                key={target.id}
                className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-emerald-400 tabular-nums">
                      {target.growth} رشد
                    </span>
                    <span className="text-[11px] text-slate-500">۲۰۲۱ → ۲۰۳۰</span>
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {target.metric}
                  </h4>
                  <div className="mt-4 flex items-center justify-between text-xs pt-3 border-t border-slate-800">
                    <div>
                      <span className="text-slate-400 block text-[10px]">مبنای آغازین:</span>
                      <span className="font-semibold text-slate-300 tabular-nums">{target.baseline}</span>
                    </div>
                    <ArrowLeft className="w-3.5 h-3.5 text-slate-500" />
                    <div className="text-left">
                      <span className="text-slate-400 block text-[10px]">هدف ۲۰۳۰:</span>
                      <span className="font-bold text-cyan-300 tabular-nums">{target.target2030}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400">
                  <span className="font-medium text-slate-300">ارتباط با گرندپایپ: </span>
                  {target.relevance}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Strategic Logistics Corridor & Adama SEZ */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <div className="text-xs font-semibold text-cyan-400">
              زنجیره تأمین، حمل و مزیت لجستیکی
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              کریدور استراتژیک جیبوتی — مودجو — منطقه آزاد Adama
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              اتیوپی محصور در خشکی است، اما زنجیره تثبیت‌شده <span className="text-cyan-300 font-semibold">بندر — کریدور بزرگراهی — راه‌آهن — بندر خشک مودجو (Modjo Dry Port)</span> سالانه ۱۶.۵ میلیون تن بار و بیش از ۹۵ درصد واردات کشور را جابه‌جا می‌کند.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <span className="font-bold text-white block mb-1">موقعیت ژئوپلیتیک شهرک صنعتی آداما (Adama IPDC):</span>
                در فاصله ۳۰ کیلومتری آدیس‌آبابا، در محور اصلی بزرگراه و راه‌آهن جیبوتی واقع شده و نزدیک‌ترین شهرک صنعتی به بندر خشک Modjo است.
              </div>
              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <span className="font-bold text-white block mb-1">مزیت تولید لوله‌های قطور GRP:</span>
                لوله GRP قطر بالا محصولی حجیم است؛ در حجم سفارش بالا، حمل مواد اولیه متراکم (رزین و الیاف شیشه) از جیبوتی به آداما و تولید محلی بسیار اقتصادی‌تر از حمل لوله هوادار از کارخانه‌های خارجی خواهد بود.
              </div>
              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <span className="font-bold text-white block mb-1">دسترسی به بازار ۲۱ کشور عضو COMESA:</span>
                اتصال مستقیم به کریدور بزرگراهی کنیا و تعرفه‌های ترجیحی برای صادرات به کشورهای شاخ و شرق آفریقا.
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <img
                src="/src/assets/images/strategic_infrastructure_corridor_1790501161497.jpg"
                alt="کریدور زیرساختی و لجستیکی اتیوپی جیبوتی آداما"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end">
                <div className="text-xs text-cyan-400 font-semibold mb-1">کریدور ترانزیت شرق آفریقا</div>
                <div className="text-base font-bold text-white">مسیر ترخیص بندر مودجو به قطعه زمین پیشنهادی Adama</div>
                <div className="text-xs text-slate-300 mt-1">تسهیل ورود مواد خام پلیمری و ماشین‌آلات پیوسته الیاف‌پیچی</div>
              </div>
            </div>
          </div>

        </div>

        {/* 4. Technical Benchmark: GRP vs Alternative Materials */}
        <div className="mb-16">
          <div className="max-w-3xl mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Droplets className="w-5 h-5 text-cyan-400" />
              <span>مقایسه فنی-اقتصادی لوله‌های GRP با چدن نشکن (Ductile Iron) و فولاد</span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              در پروژه‌های خطوط انتقال قطر بالا (DN800 تا DN1600+)، لوله‌های کامپوزیت پلیمری GRP به دلیل مزیت مطلق در هزینه‌های دوره عمر و مقاومت در برابر محیط‌های خورنده، گزینه برتر فنی هستند:
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-right text-xs">
              <thead className="bg-slate-900/90 text-slate-300 font-bold border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-4">مشخصه فنی / اقتصادی</th>
                  <th className="py-3.5 px-4 text-cyan-400 bg-cyan-950/20">لوله GRP (فراسان / گرندپایپ)</th>
                  <th className="py-3.5 px-4">چدن نشکن (Ductile Iron)</th>
                  <th className="py-3.5 px-4">فولاد کربنی (Carbon Steel)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {materialComparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3 px-4 font-semibold text-white whitespace-nowrap">{row.property}</td>
                    <td className="py-3 px-4 font-bold text-cyan-300 bg-cyan-950/10 whitespace-nowrap">{row.grp}</td>
                    <td className="py-3 px-4 whitespace-nowrap">{row.ductile}</td>
                    <td className="py-3 px-4 whitespace-nowrap">{row.steel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. Chronological Timeline of Grand Pipe / Farassan Market Actions */}
        <div>
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-semibold text-cyan-400 mb-1">
              سابقه اقدامات و دستاوردهای میدانی
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Milestone className="w-5 h-5 text-cyan-400" />
              <span>گاه‌شمار یک سال فعالیت توسعه بازار گرندپایپ و حضور میدانی در اتیوپی</span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              فرآیند ورود به اتیوپی از شناخت اولیه عبور کرده و به سطح جلسات وزارتی، حضور میدانی ۱.۵ ماهه و شناسایی دقیق کارفرمایان و شرکای محلی رسیده است:
            </p>
          </div>

          <div className="relative border-r-2 border-slate-800 mr-4 sm:mr-6 pr-6 sm:pr-8 space-y-8">
            {timelineMilestones.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -right-[31px] sm:-right-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 transition-transform" />
                <span className="text-xs font-bold text-cyan-400 block mb-1">
                  {item.date}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {item.title}
                </h4>
                <p className="mt-1.5 text-xs text-slate-300 leading-relaxed max-w-3xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
