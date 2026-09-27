import React, { useState } from 'react';
import { documentEmbeddedImages, DocumentImageDoc } from '../data/documentImages';
import { Image as ImageIcon, ZoomIn, X, Tag } from 'lucide-react';

export const DocumentImageGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<DocumentImageDoc | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const allTags = ['all', ...Array.from(new Set(documentEmbeddedImages.flatMap(img => img.tags)))];

  const filteredImages = selectedTag === 'all'
    ? documentEmbeddedImages
    : documentEmbeddedImages.filter(img => img.tags.includes(selectedTag));

  return (
    <section id="document-gallery" className="py-16 bg-slate-900/50 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
              <ImageIcon className="w-4 h-4" />
              <span>مستندات تصویری گزارش مدیریت</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              گالری مستندات تصویری و شواهد میدانی درج‌شده در گزارش
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              تصاویر مستندسازی‌شده جلسات رسمی با دولت اتیوپی، کنگره بین‌المللی سرمایه‌گذاری، شهرک صنعتی آداما، مسیر خط لوله GERED و فناوری تولید GRP:
            </p>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs shrink-0">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tag === 'all' ? 'همه تصاویر' : `#${tag}`}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img)}
              className="group cursor-pointer rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition-all overflow-hidden flex flex-col justify-between shadow-lg"
            >
              <div className="relative overflow-hidden h-48 sm:h-52 bg-slate-900">
                <img
                  src={img.imageSrc}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-bold text-cyan-400 border border-slate-800">
                  {img.chapter}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/30">
                  <div className="p-2 rounded-full bg-cyan-500 text-slate-950 shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 font-semibold mb-1">
                    {img.section}
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {img.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {img.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {img.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      #{t}
                    </span>
                  ))}
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
                <div className="mt-4 flex flex-wrap gap-2">
                  {activeImage.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
