import React, { useState } from 'react';
import { referenceProjects } from '../data/ethiopiaData';
import { ReferenceProject } from '../types/data';
import { Layers, CheckCircle, Clock, AlertCircle, ExternalLink } from 'lucide-react';

export const ProjectsPortfolioSection: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<'all' | 'GRP' | 'Ductile Iron' | 'Pending'>('all');

  const filtered = selectedMaterial === 'all'
    ? referenceProjects
    : referenceProjects.filter(p => p.material === selectedMaterial);

  return (
    <section id="reference-projects" className="py-16 lg:py-24 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-cyan-400 mb-2">
              شواهد فنی بازار و مراجع اجرایی
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              پروژه‌های شاخص انتقال آب و آبیاری در اتیوپی
            </h2>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              سوابق مستند نشان می‌دهند لوله‌های کامپوزیت GRP در اتیوپی سابقه اجرایی موفق داشته‌اند (نظیر Welkayit با ۶۵ کیلومتر و Chelchel)، و خطوط انتقال مسافت طولانی نظیر Harar رقابت سنگین با چدن نشکن را بازتاب می‌دهند:
            </p>
          </div>

          {/* Filter Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs shrink-0">
            <button
              onClick={() => setSelectedMaterial('all')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                selectedMaterial === 'all' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              همه پروژه‌ها
            </button>
            <button
              onClick={() => setSelectedMaterial('GRP')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                selectedMaterial === 'GRP' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              سوابق GRP
            </button>
            <button
              onClick={() => setSelectedMaterial('Ductile Iron')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                selectedMaterial === 'Ductile Iron' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              چدن نشکن (DI)
            </button>
            <button
              onClick={() => setSelectedMaterial('Pending')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                selectedMaterial === 'Pending' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              طراحی مهندسی (Design)
            </button>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-semibold text-slate-400">
                    {proj.englishName}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
                    proj.status === 'اجرا شده'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                  }`}>
                    {proj.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {proj.name}
                </h3>
                <div className="text-xs text-slate-400 mt-1">
                  نوع کاربرد: {proj.type}
                </div>

                {/* Specs Pill-less Table */}
                <div className="mt-5 grid grid-cols-2 gap-3 text-xs p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div>
                    <span className="text-slate-400 block text-[10px]">متریال لوله:</span>
                    <span className={`font-bold ${proj.material === 'GRP' ? 'text-cyan-400' : 'text-slate-200'}`}>
                      {proj.material}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">محدوده قطر (DN):</span>
                    <span className="font-bold text-white tabular-nums">{proj.diameter}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">فشار اسمی (PN):</span>
                    <span className="font-bold text-white tabular-nums">{proj.pressure}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">طول خط لوله:</span>
                    <span className="font-bold text-white tabular-nums">{proj.length}</span>
                  </div>
                </div>

                {/* Contractors / Joint Venture */}
                <div className="mt-4 text-xs text-slate-400">
                  <span className="font-medium text-slate-300">کنسرسیوم و تأمین‌کننده: </span>
                  <span className="text-white font-semibold">{proj.contractors}</span>
                </div>

              </div>

              {/* Key Takeaway */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-300 bg-slate-950/40 p-3.5 rounded-lg">
                <span className="font-bold text-cyan-400 block mb-1">درس‌آموخته استراتژیک برای گرندپایپ:</span>
                {proj.keyTakeaway}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
