export type DocumentMode = 'doc1' | 'doc2' | 'both';

export interface MacroIndicator {
  id: string;
  title: string;
  value: string;
  change?: string;
  description: string;
  source: string;
  category: 'economy' | 'reform' | 'international' | 'market';
}

export interface TenYearTarget {
  id: string;
  metric: string;
  baseline: string;
  target2030: string;
  growth: string;
  relevance: string;
}

export interface ReferenceProject {
  id: string;
  name: string;
  englishName: string;
  type: string;
  material: 'GRP' | 'Ductile Iron' | 'Pending';
  diameter: string;
  pressure: string;
  length: string;
  contractors: string;
  keyTakeaway: string;
  status: 'اجرا شده' | 'در مرحله طراحی و امکان‌سنجی' | 'پایلوت پیشنهادی دولت';
}

export interface EntryModel {
  id: string;
  name: string;
  englishTitle: string;
  capexRequired: 'بسیار بالا' | 'بالا' | 'پایین' | 'حداقلی (Asset-Light)';
  bankabilityFit: 'ضعیف در پروژه اول' | 'متوسط با ریسک تضامنی' | 'ناکافی' | 'ایده‌آل و عملیاتی';
  controlLevel: string;
  pros: string[];
  cons: string[];
  verdict: 'مردود در مقطع فعلی' | 'ریسک بالای اولیه' | 'ناکافی برای پروژه‌های بزرگ' | 'مدل برگزیده و پیشنهادی';
  recommended: boolean;
}

export interface BoardResolution {
  id: number;
  title: string;
  summary: string;
  rationale: string;
  conditions: string[];
  status: 'پیشنهادی جهت تصویب' | 'تأیید شده' | 'اقدام آتی';
}
