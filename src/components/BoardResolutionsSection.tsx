import React, { useState } from 'react';
import { boardResolutions } from '../data/ethiopiaData';
import { BoardResolution } from '../types/data';
import { CheckCircle2, AlertCircle, FileCheck, ThumbsUp, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

export const BoardResolutionsSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const [votedStatus, setVotedStatus] = useState<Record<number, 'approved' | 'pending'>>({
    1: 'approved',
    2: 'approved',
    3: 'approved',
    4: 'approved',
    5: 'approved',
    6: 'approved',
  });

  const toggleVote = (id: number) => {
    setVotedStatus(prev => ({
      ...prev,
      [id]: prev[id] === 'approved' ? 'pending' : 'approved'
    }));
  };

  const approvedCount = Object.values(votedStatus).filter(s => s === 'approved').length;

  return (
    <section id="board-resolutions" className="py-16 lg:py-24 bg-slate-900/60 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-emerald-400 mb-2 flex items-center gap-1.5">
              <FileCheck className="w-4 h-4" />
              <span>پایان گزارش مدیریتی · تصمیمات کلان راهبردی</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              تصمیمات پیشنهادی جهت تصویب هیئت‌مدیره گروه صنعتی فراسان / گرندپایپ
            </h2>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              بر مبنای یافته‌های این گزارش، تصمیم مورد درخواست در این مرحله، تصویب احداث کارخانه در اتیوپی نیست؛ بلکه تصویب یک مسیر کنترل‌شده، مرحله‌ای و کم‌ریسک برای تبدیل موقعیت ایجادشده به پروژه، قرارداد و درآمد است:
            </p>
          </div>

          {/* Voting Simulation Counter */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-4 text-xs shrink-0">
            <div>
              <span className="text-slate-400 block text-[10px]">وضعیت شبیه‌سازی تصویب:</span>
              <span className="font-bold text-emerald-400 text-sm tabular-nums">
                {approvedCount} از ۶ مصوبه مورد تأیید
              </span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Resolutions List */}
        <div className="space-y-4">
          {boardResolutions.map((res) => {
            const isExpanded = expandedId === res.id;
            const isApproved = votedStatus[res.id] === 'approved';

            return (
              <div
                key={res.id}
                className={`rounded-2xl transition-all border ${
                  isApproved
                    ? 'bg-slate-950/80 border-slate-800'
                    : 'bg-slate-950/40 border-slate-800/60 opacity-80'
                }`}
              >
                {/* Header Row */}
                <div
                  className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
                  onClick={() => setExpandedId(isExpanded ? null : res.id)}
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-extrabold text-sm shrink-0">
                      {res.id}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {res.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                        {res.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleVote(res.id);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        isApproved
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-slate-800 text-slate-400 border border-slate-700 hover:text-white'
                      }`}
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{isApproved ? 'مصوب گردید' : 'در انتظار رأی'}</span>
                    </button>

                    <div className="text-slate-400 hover:text-white p-1">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Collapsible Detail Section */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-900 text-xs space-y-4">
                    
                    <div>
                      <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                        متن و شرح اجرایی مصوبه:
                      </span>
                      <p className="text-slate-200 leading-relaxed bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80">
                        {res.summary}
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        منطق و توجیه اقتصادی-راهبردی:
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {res.rationale}
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-2">
                        شروط الزامی و خطوط قرمز تصویب:
                      </span>
                      <ul className="space-y-1.5 text-slate-300">
                        {res.conditions.map((cond, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-amber-400 font-bold">•</span>
                            <span>{cond}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Bottom Bar */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white">
              جمع‌بندی پیام هیئت‌مدیره: تصویب مسیر کنترل‌شده توسعه بازار
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              تعهدات سرمایه‌ای همگام با کاهش ریسک و افزایش جریان نقدی واقعی ارتقا خواهد یافت.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              آماده ابلاغ به معاونت توسعه بازار بین‌الملل
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
