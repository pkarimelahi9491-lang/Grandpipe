/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DocumentMode } from './types/data';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { DocumentSelector } from './components/DocumentSelector';
import { MacroAssessmentSection } from './components/MacroAssessmentSection';
import { CommercialEntrySection } from './components/CommercialEntrySection';
import { ProjectsPortfolioSection } from './components/ProjectsPortfolioSection';
import { BoardResolutionsSection } from './components/BoardResolutionsSection';
import { RiskMitigationSection } from './components/RiskMitigationSection';
import { FullDocumentViewer } from './components/FullDocumentViewer';
import { DocumentImageGallery } from './components/DocumentImageGallery';
import { ExecutiveSummaryModal } from './components/ExecutiveSummaryModal';
import { Footer } from './components/Footer';
import { FileText, TrendingUp, Layers, ArrowLeft, Sparkles, Building2, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeDoc, setActiveDoc] = useState<DocumentMode>('doc1');
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);

  const handleExploreClick = () => {
    const el = document.getElementById('document-selector');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      
      {/* Top Bar Navigation */}
      <Navbar
        activeDoc={activeDoc}
        setActiveDoc={setActiveDoc}
        onOpenSummaryModal={() => setIsSummaryModalOpen(true)}
      />

      {/* Hero Banner with Cinematic Industrial Image and Core Value Proposition */}
      <HeroBanner
        activeDoc={activeDoc}
        onExploreClick={handleExploreClick}
      />

      {/* Primary Document Selector Switcher (Requested by User) */}
      <DocumentSelector
        activeDoc={activeDoc}
        setActiveDoc={setActiveDoc}
      />

      {/* Contextual Banner Explaining Current View */}
      <div className="bg-slate-900/90 border-b border-slate-800 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">وضعیت نمایش فعلی:</span>
            {activeDoc === 'doc1' && (
              <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                لندینگ اختصاصی فایل اول (ارزیابی محیط کلان، ژئوپلیتیک و مشخصات فنی زیرساخت)
              </span>
            )}
            {activeDoc === 'doc2' && (
              <span className="text-blue-400 font-bold flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                لندینگ اختصاصی فایل دوم (طرح عملیاتی ورود، پروژه پایلوت GERED و مصوبات هیئت‌مدیره)
              </span>
            )}
            {activeDoc === 'both' && (
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                نمای جامع و تلفیقی هر دو فایل ورد (Executive Integrated Dossier)
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {activeDoc === 'doc1' && (
              <button
                onClick={() => setActiveDoc('doc2')}
                className="text-slate-300 hover:text-cyan-400 flex items-center gap-1 font-semibold transition-colors cursor-pointer"
              >
                <span>جابه‌جایی به فایل دوم (پروژه GERED و مصوبات)</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            )}
            {activeDoc === 'doc2' && (
              <button
                onClick={() => setActiveDoc('doc1')}
                className="text-slate-300 hover:text-blue-400 flex items-center gap-1 font-semibold transition-colors cursor-pointer"
              >
                <span>جابه‌جایی به فایل اول (تحلیل کلان بازار)</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            )}
            {activeDoc === 'both' && (
              <span className="text-slate-400">
                شامل تمام ۴ فصل، تحلیل پروژه‌ها و بسته مصوبات
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Dynamic View Area Based on Selected Document */}
      <main className="flex-1">
        
        {/* Render for File 1 or Consolidated */}
        {(activeDoc === 'doc1' || activeDoc === 'both') && (
          <>
            <MacroAssessmentSection />
            <ProjectsPortfolioSection />
          </>
        )}

        {/* Render for File 2 or Consolidated */}
        {(activeDoc === 'doc2' || activeDoc === 'both') && (
          <>
            <CommercialEntrySection />
            <BoardResolutionsSection />
          </>
        )}

        {/* Complete Unabridged Document Text Viewer with In-line Images */}
        <FullDocumentViewer activeDoc={activeDoc} />

        {/* Dedicated Document Images & Field Mission Evidence Gallery */}
        <DocumentImageGallery />

        {/* Risk Mitigation Section (Relevant to Both) */}
        <RiskMitigationSection />

        {/* Inter-document Cross-link Callout if single doc is selected */}
        {activeDoc === 'doc1' && (
          <div className="bg-slate-900 py-12 border-t border-slate-800 text-center">
            <div className="max-w-2xl mx-auto px-4">
              <span className="text-xs font-semibold text-cyan-400 block mb-2">
                ادامه مطالعه گزارش مدیریتی
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                آیا مایل به بررسی طرح عملیاتی ورود و پروژه محوری GERED هستید؟
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                محتوای فایل دوم شامل جزئیات پایلوت ۱۰۰ میلیون دلاری GERED، مقایسه ۴ مدل ورود، سازوکار تضامین بانکی و ۶ مصوبه رسمی هیئت‌مدیره است.
              </p>
              <button
                onClick={() => {
                  setActiveDoc('doc2');
                  window.scrollTo({ top: 350, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>مشاهده لندینگ اختصاصی فایل دوم</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {activeDoc === 'doc2' && (
          <div className="bg-slate-900 py-12 border-t border-slate-800 text-center">
            <div className="max-w-2xl mx-auto px-4">
              <span className="text-xs font-semibold text-blue-400 block mb-2">
                مطالعه پشتوانه‌های تحلیلی
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                بررسی محیط کلان اقتصادی، ژئوپلیتیک و کریدور لجستیک اتیوپی
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                محتوای فایل اول شامل آمار رشد اقتصادی ۹.۲٪، برنامه ده‌ساله توسعه ۲۰۲۱-۲۰۳۰، کریدور ترانزیت جیبوتی-مودجو و سوابق پروژه‌های Welkayit و Chelchel است.
              </p>
              <button
                onClick={() => {
                  setActiveDoc('doc1');
                  window.scrollTo({ top: 350, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>مشاهده لندینگ اختصاصی فایل اول</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Executive Summary & Board Action Modal */}
      <ExecutiveSummaryModal
        isOpen={isSummaryModalOpen}
        onClose={() => setIsSummaryModalOpen(false)}
      />

    </div>
  );
}
