import React, { useState } from 'react';
import { fullDocumentChapters } from '../data/fullDocumentChapters';
import { documentEmbeddedImages } from '../data/documentImages';
import { DocumentMode } from '../types/data';
import { BookOpen, Check, Layers, Sparkles, ChevronDown, ChevronUp, Image as ImageIcon, ShieldCheck } from 'lucide-react';

interface FullDocumentViewerProps {
  activeDoc: DocumentMode;
}

export const FullDocumentViewer: React.FC<FullDocumentViewerProps> = ({ activeDoc }) => {
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({
    'chap-summary': true,
    'chap-1': true,
    'chap-2': true,
    'chap-3': true,
    'chap-4': true,
  });

  const toggleChapter = (id: string) => {
    setExpandedChapters(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    setExpandedChapters({
      'chap-summary': true,
      'chap-1': true,
      'chap-2': true,
      'chap-3': true,
      'chap-4': true,
    });
  };

  const collapseAll = () => {
    setExpandedChapters({
      'chap-summary': false,
      'chap-1': false,
      'chap-2': false,
      'chap-3': false,
      'chap-4': false,
    });
  };

  // Filter chapters based on active document selection
  const visibleChapters = fullDocumentChapters.filter(chap => {
    if (activeDoc === 'both') return true;
    if (activeDoc === 'doc1') return chap.docSource === 'doc1';
    if (activeDoc === 'doc2') return chap.docSource === 'doc2';
    return true;
  });

  return (
    <section id="full-document-text" className="py-16 lg:py-24 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
              <BookOpen className="w-4 h-4" />
              <span>متن کامل و بدون حذفیات گزارش‌های مدیریتی (Complete Document Dossier)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              مطالعه جامع متن فصول همراه با تصاویر و مستندات میدانی ورد
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              تمام بندها، جداول، آمار و تصاویر مربوط به هر دو فایل ورد بدون هیچ‌گونه تلخیص در این بخش درج شده‌اند تا بتوانید گزارش را بندبه‌بند با کلیه ارجاعات تصویری مرور فرمایید:
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={expandAll}
              className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
            >
              گسترش همه فصول
            </button>
            <button
              onClick={collapseAll}
              className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
            >
              جمع کردن همه
            </button>
          </div>
        </div>

        {/* Chapters Accordion / Display */}
        <div className="space-y-8">
          {visibleChapters.map((chap) => {
            const isExpanded = expandedChapters[chap.id] ?? true;

            return (
              <div
                key={chap.id}
                className="rounded-2xl bg-slate-900/70 border border-slate-800 overflow-hidden shadow-xl"
              >
                {/* Chapter Banner / Header */}
                <div
                  onClick={() => toggleChapter(chap.id)}
                  className="p-6 sm:p-7 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-850 transition-colors border-b border-slate-800"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold shrink-0">
                      {chap.chapterNumber}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                        {chap.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        {chap.englishTitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className="text-xs text-slate-400 hidden sm:inline">
                      {chap.subsections.length} زیربخش تخصصی
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Chapter Body */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 space-y-8 divide-y divide-slate-800/80">
                    
                    {/* Chapter Intro */}
                    {chap.intro && (
                      <div className="text-xs sm:text-sm font-medium text-slate-300 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 leading-relaxed">
                        {chap.intro}
                      </div>
                    )}

                    {/* Subsections */}
                    {chap.subsections.map((sub, sIdx) => {
                      // Check if there is an image ref attached
                      const imageObj = sub.imageRef
                        ? documentEmbeddedImages.find(img => img.id === sub.imageRef)
                        : null;

                      return (
                        <div key={sIdx} className="pt-6 first:pt-0">
                          
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-bold text-cyan-400 font-mono">
                              {sub.number}
                            </span>
                            <h4 className="text-base sm:text-lg font-bold text-white">
                              {sub.title}
                            </h4>
                          </div>

                          {/* Paragraphs */}
                          <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            {sub.content.map((p, pIdx) => (
                              <p key={pIdx}>
                                {p}
                              </p>
                            ))}
                          </div>

                          {/* Callout Highlight if exists */}
                          {sub.highlight && (
                            <div className="mt-4 p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-cyan-200 font-medium">
                              <span className="font-bold text-white block mb-0.5">نکته کلیدی مدیریت:</span>
                              {sub.highlight}
                            </div>
                          )}

                          {/* Embedded Document Image */}
                          {imageObj && (
                            <div className="mt-6 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/80 shadow-2xl">
                              <div className="relative">
                                <img
                                  src={imageObj.imageSrc}
                                  alt={imageObj.title}
                                  referrerPolicy="no-referrer"
                                  className="w-full h-64 sm:h-80 lg:h-96 object-cover object-center"
                                />
                                <div className="absolute top-4 right-4 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-[11px] font-semibold text-cyan-300 flex items-center gap-1.5">
                                  <ImageIcon className="w-3.5 h-3.5" />
                                  <span>مستند تصویری درج‌شده در ورد: {imageObj.section}</span>
                                </div>
                              </div>
                              <div className="p-4 sm:p-5">
                                <div className="text-sm font-bold text-white">
                                  {imageObj.title}
                                </div>
                                <div className="text-xs font-semibold text-slate-400 mt-0.5">
                                  {imageObj.subtitle}
                                </div>
                                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                                  {imageObj.caption}
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {imageObj.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                                      #{tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                        </div>
                      );
                    })}

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
