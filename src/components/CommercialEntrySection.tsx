import React, { useState } from 'react';
import { geredProjectDetails, entryModelsComparison } from '../data/ethiopiaData';
import { TrendingUp, ShieldCheck, CheckCircle2, XCircle, ArrowLeft, Lock, FileSpreadsheet, AlertTriangle, Layers, DollarSign, Cpu } from 'lucide-react';

export const CommercialEntrySection: React.FC = () => {
  const [selectedModelId, setSelectedModelId] = useState<string>('strategic_partner');
  const selectedModel = entryModelsComparison.find(m => m.id === selectedModelId) || entryModelsComparison[3];

  return (
    <section id="gered-project" className="py-16 lg:py-24 bg-slate-900/40 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-2">
            <span>محتوای تخصصی فایل دوم</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>خلاصه مدیریتی، فصل ۴ و طرح عملیاتی ورود</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            طرح عملیاتی ورود، پروژه محوری GERED و معماری تجاری Asset-Light
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            بررسی دقیق فاز پایلوت ۱۰۰ میلیون دلاری پروژه GERED، مقایسه راهبردی ۴ مدل ورود به بازار، معماری تضامین بانکی، تضمین امنیت وصول مطالبات و نقشه راه مرحله‌ای انتقال فناوری.
          </p>
        </div>

        {/* 1. Project GERED Deep Dive (Anchor Project) */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border border-blue-500/30 shadow-2xl">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
                پروژه لنگرگاه و نقطه عطف ورود به بازار (Anchor Project)
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {geredProjectDetails.name}
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                {geredProjectDetails.englishName}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs">
              <div className="px-4 py-2 rounded-lg bg-slate-950 border border-slate-800 text-right">
                <span className="text-slate-400 block text-[10px]">ارزش پروژه اصلی:</span>
                <span className="text-base font-extrabold text-white tabular-nums">حدود ۱ میلیارد دلار</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/40 text-right">
                <span className="text-blue-300 block text-[10px]">فاز پایلوت مصوب دولت:</span>
                <span className="text-base font-extrabold text-blue-200 tabular-nums">۱۰۰ میلیون دلار</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-right">
                <span className="text-emerald-300 block text-[10px]">پیش‌پرداخت اولیه (Advance):</span>
                <span className="text-base font-extrabold text-emerald-200 tabular-nums">۹ میلیون دلار</span>
              </div>
            </div>
          </div>

          {/* Pilot Budget Breakdown */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>سهم فاز اول پایلوت</span>
                  <span className="font-bold text-cyan-400">۴۰٪ کل پایلوت</span>
                </div>
                <div className="text-2xl font-black text-cyan-300 tabular-nums">
                  ۴۰ میلیون دلار
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  مهندسی و طراحی (Engineering & Design)
                </div>
                <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                  طراحی هیدرولیک، محاسبات تنش خطوط لوله دفنی، تعریف مشخصات متریال (Material Selection) و تثبیت لوله‌های GRP در اسناد رسمی پروژه.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-cyan-400 font-semibold">
                امکان ایجاد اولین جریان درآمد نقدی زودهنگام
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>سهم فاز اول پایلوت</span>
                  <span className="font-bold text-blue-400">۶۰٪ کل پایلوت</span>
                </div>
                <div className="text-2xl font-black text-blue-300 tabular-nums">
                  ۶۰ میلیون دلار
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  تأمین و احداث (Supply & Construction)
                </div>
                <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                  تأمین لوله و اتصالات GRP از ظرفیت کارخانه‌های فعال گروه در ایران یا ترکیه و اجرای عملیات سیویل و نصب از طریق پیمانکار ارشد محلی.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-blue-400 font-semibold">
                بدون نیاز به سرمایه‌گذاری اولیه در احداث کارخانه
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>پیش‌پرداخت اولیه (APG)</span>
                  <span className="font-bold text-emerald-400">تسهیم در آغاز</span>
                </div>
                <div className="text-2xl font-black text-emerald-300 tabular-nums">
                  ۹ میلیون دلار
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  پیش‌پرداخت پروژه (Advance Payment)
                </div>
                <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                  پوشش سرمایه در گردش خرید رزین، الیاف شیشه، اتصالات و فرآیند تولید لوله‌ها؛ منوط به صدور ضمانت‌نامه APG از طریق شریک محلی.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-emerald-400 font-semibold">
                حفاظت شده با حساب امانی نظارت‌شده (Controlled Escrow)
              </div>
            </div>

          </div>

          {/* Technical Scope Breakdown */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <h4 className="text-sm font-bold text-white mb-4">
              مشخصات فنی و انطباق سایزهای خطوط پروژه GERED با توانمندی گرندپایپ:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30">
                <span className="text-[10px] text-cyan-400 font-bold block mb-1">
                  محدوده طلایی گرندپایپ
                </span>
                <div className="text-sm font-bold text-white">
                  {geredProjectDetails.technicalSpecs.mainLine.title}
                </div>
                <div className="mt-2 text-slate-300 space-y-1">
                  <div>قطر لوله: <span className="text-white font-bold">{geredProjectDetails.technicalSpecs.mainLine.diameter}</span></div>
                  <div>فشار کاری: <span className="text-white font-bold">{geredProjectDetails.technicalSpecs.mainLine.pressure}</span></div>
                  <div>طول تقریبی: <span className="text-white font-bold">{geredProjectDetails.technicalSpecs.mainLine.length}</span></div>
                </div>
                <div className="mt-2.5 text-[11px] text-cyan-300 font-medium">
                  {geredProjectDetails.technicalSpecs.mainLine.materialFit}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block mb-1">
                  خطوط شریانی ثانویه
                </span>
                <div className="text-sm font-bold text-white">
                  {geredProjectDetails.technicalSpecs.subLines.title}
                </div>
                <div className="mt-2 text-slate-300 space-y-1">
                  <div>قطر لوله: <span className="text-white font-bold">{geredProjectDetails.technicalSpecs.subLines.diameter}</span></div>
                  <div>فشار کاری: <span className="text-white font-bold">{geredProjectDetails.technicalSpecs.subLines.pressure}</span></div>
                  <div>طول تقریبی: <span className="text-white font-bold">{geredProjectDetails.technicalSpecs.subLines.length}</span></div>
                </div>
                <div className="mt-2.5 text-[11px] text-slate-400 font-medium">
                  {geredProjectDetails.technicalSpecs.subLines.materialFit}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block mb-1">
                  شبکه توزیع محلی
                </span>
                <div className="text-sm font-bold text-white">
                  {geredProjectDetails.technicalSpecs.distributionNetwork.title}
                </div>
                <div className="mt-2 text-slate-300 space-y-1">
                  <div>قطر لوله: <span className="text-white font-bold">{geredProjectDetails.technicalSpecs.distributionNetwork.diameter}</span></div>
                  <div>فشار کاری: <span className="text-white font-bold">{geredProjectDetails.technicalSpecs.distributionNetwork.pressure}</span></div>
                  <div>طول تقریبی: <span className="text-white font-bold">{geredProjectDetails.technicalSpecs.distributionNetwork.length}</span></div>
                </div>
                <div className="mt-2.5 text-[11px] text-slate-400 font-medium">
                  {geredProjectDetails.technicalSpecs.distributionNetwork.materialFit}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 2. Evaluation of the 4 Entry Models */}
        <div id="entry-models" className="mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-semibold text-blue-400 mb-1">
              ماتریس تصمیم‌گیری تحلیلی فصل چهارم
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              ارزیابی مقایسه‌ای ۴ مدل ورود به بازار اتیوپی
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              با توجه به محدودیت ساختار بانکی ایران و ترکیه در صدور مستقیم ضمانت‌نامه‌های مناقصه (Bid Bond) و پیش‌پرداخت (APG) برای پروژه‌های بزرگ اتیوپی، مدل بهینه شناسایی شده است:
            </p>
          </div>

          {/* Model Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {entryModelsComparison.map((model) => (
              <button
                key={model.id}
                onClick={() => setSelectedModelId(model.id)}
                className={`p-4 rounded-xl text-right transition-all border cursor-pointer ${
                  selectedModelId === model.id
                    ? model.recommended
                      ? 'bg-emerald-950/30 border-emerald-500 ring-2 ring-emerald-500/20 text-white'
                      : 'bg-slate-900 border-blue-500 ring-2 ring-blue-500/20 text-white'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    model.recommended ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {model.verdict}
                  </span>
                  {model.recommended && (
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  )}
                </div>
                <div className="text-xs font-bold leading-snug line-clamp-2">
                  {model.name}
                </div>
              </button>
            ))}
          </div>

          {/* Selected Model Detailed Card */}
          <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
            selectedModel.recommended
              ? 'bg-gradient-to-br from-slate-900 via-slate-900/90 to-emerald-950/30 border-emerald-500/40'
              : 'bg-slate-900/70 border-slate-800'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold text-slate-400 block mb-1">
                  {selectedModel.englishTitle}
                </span>
                <h4 className="text-xl font-black text-white">
                  {selectedModel.name}
                </h4>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px]">نیاز به سرمایه‌گذاری (CAPEX):</span>
                  <span className="font-bold text-white">{selectedModel.capexRequired}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">انطباق بانکی و تضامین:</span>
                  <span className="font-bold text-cyan-400">{selectedModel.bankabilityFit}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">نتیجه ارزیابی:</span>
                  <span className={`font-bold ${selectedModel.recommended ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {selectedModel.verdict}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pros */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-emerald-500/20">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                  مزایای راهبردی و عملیاتی:
                </span>
                <ul className="space-y-2 text-xs text-slate-300">
                  {selectedModel.pros.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons / Watch-outs */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-amber-500/20">
                <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5 mb-3">
                  <AlertTriangle className="w-4 h-4" />
                  ریسک‌ها و شروط کنترلی:
                </span>
                <ul className="space-y-2 text-xs text-slate-300">
                  {selectedModel.cons.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">!</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {selectedModel.recommended && (
              <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 leading-relaxed">
                <span className="font-bold text-white block mb-1">
                  فرمول همکاری با شریک محلی اتیوپیایی (Prime Contractor):
                </span>
                شریک محلی مسئول Contracting، رتبه‌بندی محلی، تأمین تضامین بانکی (Bid/Performance/APG) و عملیات سیویل خواهد بود؛ گرندپایپ مسئول طراحی هیدرولیک، دانش فنی GRP، تأمین لوله از کارخانه‌های ایران/ترکیه و نظارت کیفی خواهد بود. ریسک قراردادی به شریک محلی، ریسک فنی به گرندپایپ و منافع تجاری مشترک خواهد بود.
              </div>
            )}
          </div>
        </div>

        {/* 3. Financial Engineering, Payment Security & Back-to-Back Liabilities */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card A: Security of Receivables */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-cyan-400 mb-1 flex items-center gap-1.5">
                <Lock className="w-4 h-4" />
                <span>امنیت وصول مطالبات گرندپایپ (Grand Pipe Payment Bankability)</span>
              </div>
              <h4 className="text-lg font-bold text-white">
                تفکیک اعتبار پروژه از اعتبار دریافت وجه گرندپایپ
              </h4>
              <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                اگر تمام وجوه به حساب Prime Contractor اتیوپیایی واریز شود و پرداخت به گرندپایپ صرفاً متکی به اراده او باشد، ریسک تضامین بانکی با ریسک سنگین نکول پیمانکار (Counterparty Risk) جایگزین می‌شود. برای خنثی‌سازی این ریسک، سه سازوکار الزامی است:
              </p>

              <div className="mt-4 space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="font-bold text-white block mb-0.5">۱. پرداخت مستقیم توسط کارفرما (Direct Payment):</span>
                  پرداخت مستقیم سهم ارزی تأمین لوله و مهندسی توسط کارفرما به حساب خارجی گرندپایپ.
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="font-bold text-white block mb-0.5">۲. گشایش اعتبار اسنادی غیرقابل‌برگشت (Irrevocable LC):</span>
                  تضمین پرداخت از طریق بانک بین‌المللی معتبر پیش از بارگیری لوله‌ها.
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="font-bold text-white block mb-0.5">۳. حساب امانی نظارت‌شده (Controlled Escrow Account):</span>
                  آزادسازی وجوه بر اساس Milestoneهای تأیید نقشه، خرید مواد خام، تولید، بازرسی و ارسال بار.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-bold text-rose-300">
              اصل طلایی: No Major Production Commitment Without Acceptable Payment Security!
            </div>
          </div>

          {/* Card B: Back-to-Back Liabilities Rule */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-blue-400 mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>قاعده حقوقی قرارداد: ریسک تابع مسئولیت (Risk Follows Responsibility)</span>
              </div>
              <h4 className="text-lg font-bold text-white">
                مدیریت تعهدات متناظر (Back-to-Back) با پیمانکار اصلی
              </h4>
              <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                قرارداد گرندپایپ با پیمانکار اصلی باید متناظر با قرارداد اصلی کارفرما باشد، اما این تناظر به هیچ وجه نباید به معنی تحمیل تمام ریسک‌های پروژه کارفرما به گرندپایپ باشد:
              </p>

              <div className="mt-4 space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="font-bold text-emerald-400 block mb-0.5">ریسک‌های قابل پذیرش Back-to-Back:</span>
                  تأخیر در تولید لوله، عدم انطباق کیفی لوله و اتصالات، خطای طراحی مهندسی تحت قرارداد گرندپایپ.
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="font-bold text-rose-400 block mb-0.5">ریسک‌های غیرقابل پذیرش:</span>
                  تأخیرات عملیات خاکی و سیویل، عدم اخذ مجوزهای دولتی، تأخیر در ترخیص کالا توسط شریک محلی، یا ادعاهای متفرقه خارج از کنترل فنی گرندپایپ.
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="font-bold text-cyan-300 block mb-0.5">حضور مستقیم سازمانی در آدیس‌آبابا:</span>
                  مدل سرمایه‌گذاری سبک (Asset-Light) به معنای حضور ضعیف نیست؛ حفظ ارتباط مستقیم با وزارتخانه‌ها و مشاوران جهت نظارت بر شریک محلی ضروری است.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-bold text-slate-400">
              هدف: انتقال صفر درصدی خسارت‌های ناشی از کم‌کاری شریک محلی به گرندپایپ.
            </div>
          </div>

        </div>

        {/* 4. Industrial Roadmap & Adama Free Zone Option */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-emerald-400 mb-1">
              نقشه راه مرحله‌ای و آینده‌نگرانه
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              گذار از تأمین پروژه‌ای به تولید محلی در منطقه آزاد Adama
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              سرمایه‌گذاری صنعتی در کارخانه احداثی نتیجه پیروزی تجاری در بازار است، نه شرط آغازین آن! در این گزارش هیچ عدد قطعی برای CAPEX کارخانه در نظر گرفته نشده است؛ این هزینه باید پس از ایجاد سابقه و شکل‌گیری سبد سفارشات چندساله (Pipeline) محاسبه شود:
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[11px] font-bold text-cyan-400 block mb-1">گام اول (اکنون):</span>
              <div className="text-sm font-bold text-white mb-1">درآمدزایی بدون CAPEX</div>
              <p className="text-slate-400">
                کسب درآمد از محل مهندسی پایلوت GERED و تأمین لوله از کارخانه‌های ایران/ترکیه.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[11px] font-bold text-blue-400 block mb-1">گام دوم:</span>
              <div className="text-sm font-bold text-white mb-1">تثبیت سبد پروژه‌ها</div>
              <p className="text-slate-400">
                تکرار موفقیت در ۲ تا ۳ پروژه بزرگ دیگر و ایجاد Reference ملی و گردش مالی اثبات‌شده.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30">
              <span className="text-[11px] font-bold text-emerald-400 block mb-1">گام سوم (آینده):</span>
              <div className="text-sm font-bold text-white mb-1">تولید محلی در Adama SEZ</div>
              <p className="text-slate-400">
                انجام مطالعه امکان‌سنجی مستقل، ورود احتمالی به JV با سهم اقلیت و انتقال دانش فنی GRP.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
