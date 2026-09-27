import React, { useState } from 'react';
import { documentEmbeddedImages, DocumentImageDoc } from '../data/documentImages';
import { Image as ImageIcon, ZoomIn, X } from 'lucide-react';

export const DocumentImageGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<DocumentImageDoc | null>(null);

  return (
    <section id="document-gallery" className="py-16 bg-slate-900/50 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header without category filter buttons */}
        <div className="mb-10 text-right">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
            <ImageIcon className="w-4 h-4" />
            <span>مستندات تصویری گزارش مدیریت</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            گالری مستندات تصویری و شواهد میدانی درج‌شده در گزارش
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            تصاویر مستندسازی‌شده جلسات رسمی با دولت اتیوپی، کنگره بین‌المللی سرمایه‌گذاری، شهرک صنعتی آداما، مسیر خط لوله GERED و فناوری تولید GRP به صورت پیوسته:
          </p>
        </div>

        {/* Gallery Grid - Sequential images without filtering */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentEmbeddedImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img)}
              className="group cursor-pointer rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition-all overflow-hidden flex flex-col justify-between shadow-lg"
            >
              <div className="relative overflow-hidden h-52 sm:h-56 bg-slate-900">
                <img
                  src={img.imageSrc}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                <div className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold text-cyan-400 border border-slate-800">
                  {img.chapter}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/30">
                  <div className="p-2.5 rounded-full bg-cyan-500 text-slate-950 shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] text-cyan-400 font-semibold mb-1">
                    {img.section}
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {img.title}
                  </h4>
                  <div className="text-xs font-medium text-slate-400 mt-1">
                    {img.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 mt-2.5 line-clamp-3 leading-relaxed">
                    {img.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-slate-400">کلیک جهت مشاهده سایز اصلی</span>
                  <span className="text-cyan-400 font-medium">سند تصویری شماره {img.id.replace('img-', '')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 left-4 z-10 p-2 rounded-full bg-slate-950/80 text-slate-400 hover:text-white border border-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[60vh] overflow-hidden bg-black">
                <img
                  src={activeImage.imageSrc}
                  alt={activeImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 text-right">
                <div className="text-xs font-bold text-cyan-400 mb-1">
                  {activeImage.section}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {activeImage.title}
                </h3>
                <p className="text-xs font-semibold text-slate-400 mt-0.5">
                  {activeImage.subtitle}
                </p>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  {activeImage.caption}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
