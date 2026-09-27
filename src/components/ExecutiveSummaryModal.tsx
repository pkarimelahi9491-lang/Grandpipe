import React, { useState } from 'react';
import { X, Copy, Check, Printer, FileText } from 'lucide-react';
import { boardResolutions, geredProjectDetails } from '../data/ethiopiaData';

interface ExecutiveSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveSummaryModal: React.FC<ExecutiveSummaryModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = () => {
    const textToCopy = `خلاصه گزارش مدیریتی و بسته مصوبات ورود به بازار اتیوپی (گروه صنعتی فراسان / گرندپایپ)
سپتامبر ۲۰۲۶

اصل راهبردی: «پروژه محرک سرمایه‌گذاری باشد، نه سرمایه‌گذاری پیش‌شرط دستیابی به پروژه!»

۱. پروژه محوری GERED:
- ارزش کل: ۱ میلیارد دلار
- پایلوت مصوب: ۱۰۰ میلیون دلار (۴۰M$ مهندسی، ۶۰M$ تأمین، ۹M$ پیش‌پرداخت)
- مشخصات خط اصلی: DN1200-1600، فشار PN16-25، طول ۸۰-۱۲۰ کیلومتر

۲. مدل ورود پیشنهادی:
ورود پروژه‌محور و کم‌سرمایه (Asset-Light) از طریق شراکت با پیمانکار ارشد اتیوپیایی (Prime Contractor) جهت تأمین ضمانت‌نامه‌ها و رتبه‌بندی محلی، و مسئولیت گرندپایپ در مهندسی و تأمین لوله از کارخانه‌های ایران/ترکیه.

۳. مصوبات ۶گانه هیئت‌مدیره:
${boardResolutions.map(r => `${r.id}. ${r.title}\n   ${r.summary}`).join('\n\n')}
`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                خلاصه اجرایی ویژه اعضای محترم هیئت‌مدیره
              </h3>
              <p className="text-xs text-slate-400">
                چکیده تصمیمات و ارقام محوری طرح ورود به بازار اتیوپی (سپتامبر ۲۰۲۶)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-300 leading-relaxed text-right">
          
          <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/20">
            <span className="text-[11px] font-bold text-cyan-400 block mb-1">
              اصل راهبردی مدیریت:
            </span>
            <p className="text-sm font-bold text-white">
              «پروژه محرک سرمایه‌گذاری باشد، نه سرمایه‌گذاری پیش‌شرط دستیابی به پروژه!»
            </p>
            <p className="text-slate-300 mt-1">
              ورود با حداقل ریسک سرمایه‌ای از طریق مهندسی پروژه و تأمین لوله از ظرفیت کارخانه‌های موجود در ایران یا ترکیه، و بررسی احداث کارخانه محلی در منطقه آزاد Adama تنها پس از تثبیت جریان نقدینگی و سبد پروژه‌ها.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2 text-sm">
              ۱. پروژه محوری GERED (Anchor Opportunity)
            </h4>
            <ul className="space-y-1.5 list-disc list-inside text-slate-300">
              <li>ارزش پروژه اصلی: ۱ میلیارد دلار | فاز پایلوت: ۱۰۰ میلیون دلار</li>
              <li>تفکیک پایلوت: ۴۰ میلیون دلار مهندسی/طراحی، ۶۰ میلیون دلار تأمین/ساخت، ۹ میلیون دلار پیش‌پرداخت</li>
              <li>خط اصلی: DN1200 تا DN1600، رده فشاری PN16 تا PN25، به طول ۸۰ تا ۱۲۰ کیلومتر</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2 text-sm">
              ۲. مدل ورود منتخب
            </h4>
            <p>
              به دلیل محدودیت‌های بانکی در صدور مستقیم ضمانت‌نامه‌ها (Bid Bond و APG) از ساختار ایران/ترکیه، مدل بهینه همکاری با یک Prime Contractor معتبر اتیوپیایی است؛ صدور تضامین و عملیات سیویل با شریک محلی، و مهندسی، دانش فنی GRP و تأمین لوله با گرندپایپ خواهد بود. مطالبات گرندپایپ از طریق حساب امانی نظارت‌شده (Controlled Escrow) یا LC تایید شده پوشش داده می‌شود.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2 text-sm">
              ۳. مصوبات ۶گانه پیشنهادی هیئت‌مدیره
            </h4>
            <div className="space-y-2">
              {boardResolutions.map(res => (
                <div key={res.id} className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                  <span className="font-bold text-cyan-300">{res.id}. {res.title}</span>
                  <p className="text-slate-400 mt-0.5">{res.summary}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'متن کپی شد' : 'کپی خلاصه مدیریتی'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-slate-300" />
              <span>چاپ رسمی (Print)</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            بستن
          </button>
        </div>

      </div>
    </div>
  );
};
