/**
 * lib/data.ts — Single source of truth for all static content
 *
 * Price validation (assert in build):
 *   MODULES prices:  4990+3990+3990+3500+2990+2033+2500 = 23993 ✅
 *   BONUSES prices:  1490+2990+1490+2520                = 8490  ✅
 *   MODULES skillCount: 90+85+80+75+65+60+55            = 510   ≥ 500 ✅
 */

// ─── Constants ────────────────────────────────────────────────────────────────

export const BUNDLE_PRICE = 997
export const ORIGINAL_VALUE = 23993
export const BONUS_VALUE = 8490

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Module {
  id: string
  title: string
  description: string
  price: number
  skillCount: number
  icon: string        // Lucide icon name
  tags: [string, string, string, string, string]  // exactly 5 kebab-case tags
  category: string
}

export interface Problem {
  id: string
  icon: string
  title: string
  description: string
}

export interface Step {
  number: '01' | '02' | '03'
  title: string
  description: string
  icon: string
}

export interface Persona {
  id: string
  emoji: string
  title: string
  subtitle: string
  painPoint: string
  gain: string
}

export interface Stat {
  value: string
  unit: string
  label: string
  icon: string
}

export interface SkillCategory {
  id: string
  label: string
  tab: 'claude' | 'n8n'
  moduleId: string
}

export interface ShortTestimonial {
  id: string
  name: string
  role: string
  metric: string
  quote: string
  initials: string
  color: string   // Tailwind bg class สำหรับ avatar
}

export interface Platform {
  id: string
  icon: string
  name: string
  subtitle: string
  description: string
  badge?: string
}

export interface CaseStudy {
  id: string
  persona: string
  business: string
  before: string
  after: string
  metric: string
  metricLabel: string
  quote: string
}

export interface Bonus {
  id: string
  icon: string
  title: string
  description: string
  value: number   // original price (satang = 100x baht)
}

export interface Review {
  id: string
  name: string
  role: string
  date: string    // format: "12 มี.ค. 2569"
  rating: 5
  quote: string
  initials: string
  color: string   // Tailwind bg class
}

export interface Faq {
  id: string
  question: string
  answer: string
}

export interface ComparisonRow {
  feature: string
  aiflowlab: boolean | string
  youtube: boolean | string
  course: boolean | string
  freelance: boolean | string
  diy: boolean | string
}

// ─── MODULES (7 modules) ────────────────────────────────────────────────────
// Sum of prices: 4990+3990+3990+3500+2990+2033+2500 = 23993

export const MODULES: Module[] = [
  {
    id: 'claude-core',
    title: 'Claude Core Mastery',
    description:
      'ทักษะพื้นฐานถึงขั้นสูงในการสื่อสารกับ Claude ให้ได้ผลลัพธ์ที่แม่นยำ ลด iteration รอบ และสร้าง workflow ที่ทำซ้ำได้เสมอ',
    price: 4990,
    skillCount: 90,
    icon: 'Brain',
    tags: ['role-prompting', 'chain-of-thought', 'context-window', 'output-format', 'few-shot'],
    category: 'Claude Core',
  },
  {
    id: 'content-copy',
    title: 'Content & Copywriting Engine',
    description:
      'สร้างคอนเทนต์ขายดีและ copy ที่แปลง visitor เป็นลูกค้า ตั้งแต่โพสต์ Facebook ไปถึงหน้า sales page เต็มรูปแบบ',
    price: 3990,
    skillCount: 85,
    icon: 'PenTool',
    tags: ['sales-copy', 'social-post', 'email-sequence', 'storytelling', 'hook-writing'],
    category: 'Content & Copy',
  },
  {
    id: 'sales-crm',
    title: 'Sales & Customer Journey',
    description:
      'ออกแบบ funnel ขาย ตอบ DM อัตโนมัติ ติดตาม lead และปิดการขายด้วย script ที่ Claude ช่วยปรับแบบ real-time',
    price: 3990,
    skillCount: 80,
    icon: 'TrendingUp',
    tags: ['dm-script', 'follow-up', 'objection-handling', 'lead-qualify', 'close-script'],
    category: 'Sales & CRM',
  },
  {
    id: 'n8n-automation',
    title: 'n8n Workflow Automation',
    description:
      'เชื่อมต่อ Claude กับ apps กว่า 400 ตัวผ่าน n8n สร้าง workflow อัตโนมัติที่ทำงานแทนคุณ 24/7 โดยไม่ต้องเขียนโค้ด',
    price: 3500,
    skillCount: 75,
    icon: 'Workflow',
    tags: ['trigger-setup', 'api-connect', 'data-transform', 'error-handle', 'schedule-flow'],
    category: 'n8n Automation',
  },
  {
    id: 'data-research',
    title: 'Data & Research Intelligence',
    description:
      'วิเคราะห์ข้อมูล สรุปรายงาน และทำ competitive research ที่ใช้เวลาหลายวันให้เสร็จในชั่วโมงเดียว',
    price: 2990,
    skillCount: 65,
    icon: 'BarChart2',
    tags: ['data-summary', 'market-research', 'competitor-audit', 'insight-extract', 'report-gen'],
    category: 'Data & Research',
  },
  {
    id: 'visual-direction',
    title: 'Visual & Creative Direction',
    description:
      'เขียน prompt สำหรับ Midjourney, DALL-E และ Adobe Firefly ให้ได้ภาพที่ตรงแบรนด์ และสร้าง creative brief ที่ทีมทำตามได้ทันที',
    price: 2033,
    skillCount: 60,
    icon: 'Palette',
    tags: ['image-prompt', 'brand-guide', 'creative-brief', 'style-transfer', 'mood-board'],
    category: 'Visual & Creative',
  },
  {
    id: 'biz-strategy',
    title: 'Business Strategy & Planning',
    description:
      'ใช้ Claude เป็น strategic advisor วางแผนธุรกิจ สร้าง SOP และตัดสินใจด้วยข้อมูลแทนความรู้สึก',
    price: 2500,
    skillCount: 55,
    icon: 'Target',
    tags: ['sop-design', 'goal-breakdown', 'risk-assess', 'kpi-tracking', 'decision-framework'],
    category: 'Business Strategy',
  },
]

// ─── PROBLEMS (5 pain points) ────────────────────────────────────────────────

export const PROBLEMS: Problem[] = [
  {
    id: 'caption-overload',
    icon: 'Clock',
    title: 'เสียเวลาเขียน caption ทุกวัน',
    description:
      'ใช้เวลา 2-3 ชั่วโมงต่อวันแค่เขียนโพสต์ โดยที่ engagement ก็ยังไม่ดีขึ้น รู้สึกวนซ้ำแต่ไม่รู้จะเริ่มจากไหน',
  },
  {
    id: 'dm-drain',
    icon: 'MessageCircle',
    title: 'ตอบ DM ไม่ทัน ลูกค้าหายไปเอง',
    description:
      'Inbox เต็มตลอด แต่ตอบไม่ทันเพราะทำคนเดียว พอตอบช้า ลูกค้าก็ไปซื้อกับคู่แข่งแล้ว',
  },
  {
    id: 'freelance-cost',
    icon: 'DollarSign',
    title: 'จ้าง freelance แพงและไม่ต่อเนื่อง',
    description:
      'จ้าง copywriter ทีละชิ้นราคาหลักพัน ได้งานช้า revision หลายรอบ แต่คุณภาพก็ยังไม่ตรงใจ',
  },
  {
    id: 'bad-prompt',
    icon: 'AlertCircle',
    title: 'ใช้ AI แล้วได้คำตอบห่วย',
    description:
      'ลองใช้ ChatGPT หรือ Claude แล้วได้ผลลัพธ์ที่ฟังดูทั่วไป ไม่ตรงธุรกิจ ต้องแก้เองจนเหนื่อย',
  },
  {
    id: 'team-cost',
    icon: 'Users',
    title: 'จ้างทีมแพง แต่งานยังติดขัด',
    description:
      'จ้างพนักงานเพิ่มเพื่อรับมือกับงาน แต่ค่าใช้จ่ายพุ่ง ส่วนงานก็ยังไม่ได้เร็วขึ้นอย่างที่หวัง',
  },
]

// ─── STEPS (3 steps) ─────────────────────────────────────────────────────────

export const STEPS: Step[] = [
  {
    number: '01',
    title: 'ดาวน์โหลด Skills Bundle',
    description:
      'รับไฟล์ skill ทั้งหมดทันทีหลังชำระเงิน ไม่ต้องรอ ไม่มีขั้นตอนยุ่งยาก',
    icon: 'Download',
  },
  {
    number: '02',
    title: 'วางลงในโฟลเดอร์โปรเจกต์',
    description:
      'จัดเก็บ skill ในโฟลเดอร์ที่คุณทำงานอยู่ จัดระเบียบตามหมวดหรือโปรเจกต์ได้ตามใจ',
    icon: 'FolderOpen',
  },
  {
    number: '03',
    title: 'เรียกใช้ด้วยคำสั่งเดียว',
    description:
      'บอก Claude ว่าต้องการใช้ skill ไหน แล้วทำงานได้เลย — ไม่ต้องพิมพ์ prompt ยาวๆ ซ้ำอีกต่อไป',
    icon: 'Zap',
  },
]

// ─── PERSONAS (5 personas) ───────────────────────────────────────────────────

export const PERSONAS: Persona[] = [
  {
    id: 'solo-biz',
    emoji: '🏪',
    title: 'เจ้าของธุรกิจคนเดียว',
    subtitle: 'ทำทุกอย่างคนเดียว ตั้งแต่ขายถึงบัญชี',
    painPoint: 'ไม่มีเวลาสร้าง content และตอบลูกค้าพร้อมกัน',
    gain: 'มี AI คอยช่วยงาน เหมือนมีทีมงานพาร์ทไทม์ตลอด 24 ชม.',
  },
  {
    id: 'freelancer',
    emoji: '💻',
    title: 'ฟรีแลนซ์และที่ปรึกษา',
    subtitle: 'รับงานหลายชิ้นพร้อมกัน',
    painPoint: 'ใช้เวลาส่วนใหญ่ทำงาน admin แทนที่จะ deliver ผลลัพธ์',
    gain: 'ส่งงานได้เร็วขึ้น 3 เท่า รับลูกค้าได้มากขึ้นโดยไม่ burnout',
  },
  {
    id: 'agency',
    emoji: '🏢',
    title: 'เจ้าของเอเจนซี่',
    subtitle: 'ดูแลทีมและลูกค้าหลายราย',
    painPoint: 'ควบคุม quality ยาก ทำ brief และ report ไม่ทัน',
    gain: 'มาตรฐาน output สม่ำเสมอ ทีมทำงานได้เร็วและถูกต้องขึ้น',
  },
  {
    id: 'creator',
    emoji: '🎬',
    title: 'คอนเทนต์ครีเอเตอร์',
    subtitle: 'สร้าง content บน YouTube, TikTok, IG',
    painPoint: 'ไอเดียหมด เขียน caption ช้า ทำคลิปไม่ทัน algorithm',
    gain: 'ผลิต content ได้มากขึ้น 5 เท่าโดยไม่เสียเอกลักษณ์ของตัวเอง',
  },
  {
    id: 'ecommerce',
    emoji: '🛒',
    title: 'ผู้ขายออนไลน์',
    subtitle: 'ขายของบน Shopee, Lazada, Facebook',
    painPoint: 'เขียน product description ช้า รีวิวเยอะเกินจะตอบหมด',
    gain: 'เขียน listing สินค้าพร้อมตอบรีวิวอัตโนมัติ ยอดขายเพิ่มจากคำบรรยายที่ดีขึ้น',
  },
]

// ─── STATS (4 stats) ─────────────────────────────────────────────────────────

export const STATS: Stat[] = [
  {
    value: '1,000',
    unit: '+',
    label: 'ลูกค้าที่ใช้งานแล้ว',
    icon: 'Users',
  },
  {
    value: '500',
    unit: '+',
    label: 'Skills พร้อมใช้',
    icon: 'Zap',
  },
  {
    value: '16',
    unit: '',
    label: 'หมวดหมู่ทักษะ',
    icon: 'Grid',
  },
  {
    value: '2',
    unit: ' นาที',
    label: 'ติดตั้งเสร็จ เริ่มใช้ได้เลย',
    icon: 'Timer',
  },
]

// ─── SKILL_CATEGORIES (16 categories) ───────────────────────────────────────

export const SKILL_CATEGORIES: SkillCategory[] = [
  { id: 'core-prompting',    label: 'Core Prompting',        tab: 'claude', moduleId: 'claude-core' },
  { id: 'output-control',   label: 'Output Control',         tab: 'claude', moduleId: 'claude-core' },
  { id: 'sales-copy',       label: 'Sales Copy',             tab: 'claude', moduleId: 'content-copy' },
  { id: 'social-content',   label: 'Social Content',         tab: 'claude', moduleId: 'content-copy' },
  { id: 'email-marketing',  label: 'Email Marketing',        tab: 'claude', moduleId: 'content-copy' },
  { id: 'dm-sales',         label: 'DM & Sales Script',      tab: 'claude', moduleId: 'sales-crm' },
  { id: 'customer-service', label: 'Customer Service',       tab: 'claude', moduleId: 'sales-crm' },
  { id: 'data-analysis',    label: 'Data Analysis',          tab: 'claude', moduleId: 'data-research' },
  { id: 'research',         label: 'Market Research',        tab: 'claude', moduleId: 'data-research' },
  { id: 'visual-prompt',    label: 'Visual Prompting',       tab: 'claude', moduleId: 'visual-direction' },
  { id: 'biz-planning',     label: 'Business Planning',      tab: 'claude', moduleId: 'biz-strategy' },
  { id: 'sop-docs',         label: 'SOP & Documentation',    tab: 'claude', moduleId: 'biz-strategy' },
  { id: 'trigger-flow',     label: 'Trigger & Scheduler',    tab: 'n8n',    moduleId: 'n8n-automation' },
  { id: 'app-connect',      label: 'App Integrations',       tab: 'n8n',    moduleId: 'n8n-automation' },
  { id: 'data-pipeline',    label: 'Data Pipeline',          tab: 'n8n',    moduleId: 'n8n-automation' },
  { id: 'error-recovery',   label: 'Error & Recovery',       tab: 'n8n',    moduleId: 'n8n-automation' },
]

// ─── SHORT_TESTIMONIALS (3 cards) ────────────────────────────────────────────

export const SHORT_TESTIMONIALS: ShortTestimonial[] = [
  {
    id: 'st-1',
    name: 'คุณพิชญา ว.',
    role: 'เจ้าของธุรกิจ coaching',
    metric: 'ประหยัด 20 ชม./สัปดาห์',
    quote:
      'แค่ตั้งค่า skill ครั้งเดียว งาน content ที่เคยกินเวลาทั้งวัน ตอนนี้เสร็จก่อนเที่ยง',
    initials: 'พว',
    color: 'bg-brand-primary',
  },
  {
    id: 'st-2',
    name: 'คุณธนพล ส.',
    role: 'ฟรีแลนซ์ copywriter',
    metric: 'รายได้เพิ่ม ฿80k/เดือน',
    quote:
      'รับลูกค้าได้มากขึ้น 3 เท่า เพราะส่งงานเร็วขึ้น ราคาก็ขึ้นได้เพราะคุณภาพสม่ำเสมอ',
    initials: 'ธส',
    color: 'bg-brand-accent',
  },
  {
    id: 'st-3',
    name: 'คุณสุภาพร ก.',
    role: 'Course creator',
    metric: 'Launch ได้ ฿340k รอบแรก',
    quote:
      'ใช้ skills ช่วยสร้าง sales page และ email sequence ทั้งหมด — launch ครั้งแรกเกินเป้าไปมาก',
    initials: 'สก',
    color: 'bg-success',
  },
]

// ─── PLATFORMS (3 platforms) ─────────────────────────────────────────────────

export const PLATFORMS: Platform[] = [
  {
    id: 'claude-web',
    icon: 'Globe',
    name: 'Claude.ai Web',
    subtitle: 'ใช้ได้เลยบน browser',
    description:
      'เปิด Claude.ai แล้ว paste skill เข้า Project Instructions — ทำงานได้ทันที ไม่ต้องติดตั้งอะไรเพิ่ม',
    badge: 'ง่ายที่สุด',
  },
  {
    id: 'claude-code',
    icon: 'Terminal',
    name: 'Claude Code CLI',
    subtitle: 'สำหรับนักพัฒนาและ power user',
    description:
      'วาง skill file ในโปรเจกต์แล้วเรียกใช้จาก terminal ทำงานร่วมกับ codebase และ automation script ได้โดยตรง',
  },
  {
    id: 'cowork',
    icon: 'Bot',
    name: 'Cowork Auto-trigger',
    subtitle: 'เปิดปิดอัตโนมัติตาม context',
    description:
      'ระบบเลือก skill ที่ใช่ให้อัตโนมัติตามงานที่คุณกำลังทำ ไม่ต้องจำว่าจะใช้ตัวไหน',
    badge: 'ฉลาดที่สุด',
  },
]

// ─── CASE_STUDIES (3 detailed) ───────────────────────────────────────────────

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-bakery',
    persona: 'เจ้าของร้านขนม',
    business: 'ร้านเบเกอรี่ออนไลน์ (Facebook + Shopee)',
    before:
      'เขียน caption เองทุกโพสต์ ใช้เวลา 2 ชม./วัน ยอดขายคงที่มา 6 เดือน',
    after:
      'ใช้ Content skill สร้างโพสต์ได้ 5 ชิ้น/ชม. พร้อม A/B test copy อัตโนมัติ',
    metric: '+47%',
    metricLabel: 'ยอดขายเพิ่มใน 60 วัน',
    quote: 'ตอนแรกคิดว่าต้องเขียนเองถึงจะมีความรู้สึก แต่ตอนนี้ลูกค้าบอกว่า content ดีขึ้นกว่าเดิมอีก',
  },
  {
    id: 'cs-agency',
    persona: 'เจ้าของ Digital Agency',
    business: 'เอเจนซี่รับทำ social media (ลูกค้า 8 ราย)',
    before:
      'ทีม 3 คนทำงาน content ไม่ทัน revision เยอะ ส่งงานช้า ลูกค้าไม่พอใจ',
    after:
      'ใช้ skill ชุด Content + Sales เป็น template ให้ทีม quality สม่ำเสมอ รับลูกค้าเพิ่มได้',
    metric: '3x',
    metricLabel: 'output ต่อคน ต่อสัปดาห์',
    quote: 'ปัญหา briefing ทีมหายไปเลย เพราะ skill บอกชัดเจนว่าต้องการอะไร ผิดพลาดน้อยลงมาก',
  },
  {
    id: 'cs-creator',
    persona: 'Course Creator',
    business: 'สอนออนไลน์ด้าน Personal Finance',
    before:
      'Launch course ได้ปีละ 1 ครั้ง เพราะสร้าง sales page และ email sequence เองนาน',
    after:
      'ใช้ skills ร่น content ทั้งหมดก่อน launch ใน 2 สัปดาห์ แทนที่จะ 2 เดือน',
    metric: '6x/year',
    metricLabel: 'เพิ่มรอบ launch ได้ 6 เท่า',
    quote: 'รายได้จาก course เพิ่มเพราะ launch บ่อยขึ้น ไม่ใช่เพราะขึ้นราคา',
  },
]

// ─── BONUSES (4 bonuses) ─────────────────────────────────────────────────────
// Sum: 1490+2990+1490+2520 = 8490

export const BONUSES: Bonus[] = [
  {
    id: 'cheat-sheet',
    icon: 'FileText',
    title: 'Claude Prompt Cheat Sheet',
    description:
      'สรุป pattern การเขียน prompt ที่ได้ผลดีที่สุด 50+ แบบ พิมพ์แปะข้างจอได้เลย',
    value: 1490,
  },
  {
    id: 'qa-session',
    icon: 'MessageSquare',
    title: 'Q&A Live Session (60 นาที)',
    description:
      'ถามตรงได้ทุกอย่างเกี่ยวกับการใช้งาน skill กับธุรกิจของคุณโดยเฉพาะ',
    value: 2990,
  },
  {
    id: 'community',
    icon: 'Users',
    title: 'Private Community Access',
    description:
      'เข้า group ส่วนตัวของผู้ใช้งาน แชร์ไอเดีย ถามคำถาม และรับ skill ใหม่จาก community',
    value: 1490,
  },
  {
    id: 'lifetime-update',
    icon: 'RefreshCw',
    title: 'Lifetime Skill Updates',
    description:
      'รับ skill ใหม่ที่จะเพิ่มเข้ามาตลอดชีวิต ไม่มีค่าใช้จ่ายเพิ่ม แม้ Claude จะอัปเดต API',
    value: 2520,
  },
]

// ─── REVIEWS (8 cards, ★★★★★) ───────────────────────────────────────────────

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'ณัฐพร วงศ์สวัสดิ์',
    role: 'เจ้าของร้านเสื้อผ้าออนไลน์',
    date: '12 มี.ค. 2569',
    rating: 5,
    quote:
      'ใช้ skill เขียน caption ขายสินค้าได้ทุกวัน โดยที่ไม่ต้องคิดเองเลย ยอด engagement เพิ่มมากเลย',
    initials: 'ณว',
    color: 'bg-brand-primary',
  },
  {
    id: 'r2',
    name: 'กิตติพัฒน์ ชาญวิทย์',
    role: 'Digital Marketer',
    date: '28 ก.พ. 2569',
    rating: 5,
    quote:
      'ลองใช้ skill ทำ email campaign ให้ลูกค้า ผลตอบรับดีกว่าที่เขียนเองมาก ลูกค้าถามว่าจ้างทีมใหม่มาไหม',
    initials: 'กช',
    color: 'bg-brand-accent',
  },
  {
    id: 'r3',
    name: 'สิรินทรา พัฒนาการ',
    role: 'Freelance Graphic Designer',
    date: '15 ก.พ. 2569',
    rating: 5,
    quote:
      'พาร์ท visual prompting เปลี่ยนชีวิตเลย ตอนนี้ได้ภาพ Midjourney ตรงแบรนด์ลูกค้าในไม่กี่ครั้ง',
    initials: 'สพ',
    color: 'bg-success',
  },
  {
    id: 'r4',
    name: 'ภาณุวัฒน์ ธรรมสุข',
    role: 'Startup Founder',
    date: '3 ก.พ. 2569',
    rating: 5,
    quote:
      'เอา n8n skill ไปต่อกับ CRM ได้เลยโดยไม่ต้องเขียน code เอง ประหยัดค่า developer ไปเยอะมาก',
    initials: 'ภธ',
    color: 'bg-warning',
  },
  {
    id: 'r5',
    name: 'อัจฉรา โชคดีมีสุข',
    role: 'HR Manager',
    date: '25 ม.ค. 2569',
    rating: 5,
    quote:
      'ใช้ skill เขียน JD และสรุป resume ให้เร็วขึ้นมาก สัมภาษณ์คนได้มากขึ้นโดยใช้เวลาเท่าเดิม',
    initials: 'อช',
    color: 'bg-brand-primary-dark',
  },
  {
    id: 'r6',
    name: 'วิชัย รัตนประเสริฐ',
    role: 'Real Estate Agent',
    date: '18 ม.ค. 2569',
    rating: 5,
    quote:
      'เขียน listing บ้านได้เร็วขึ้น 10 เท่า แต่ละชิ้นก็ดูมืออาชีพมากขึ้น ลูกค้า inquiry เพิ่มขึ้นเห็นชัด',
    initials: 'วร',
    color: 'bg-danger',
  },
  {
    id: 'r7',
    name: 'ปิยะมาศ สุขสมบัติ',
    role: 'Line OA Business Owner',
    date: '10 ม.ค. 2569',
    rating: 5,
    quote:
      'ตั้ง skill ช่วยตอบ DM แล้วปิดการขายได้ง่ายขึ้นมาก ลูกค้าไม่รู้สึกว่าคุยกับบอทด้วยซ้ำ',
    initials: 'ปส',
    color: 'bg-success',
  },
  {
    id: 'r8',
    name: 'ชาญณรงค์ เจริญรุ่งเรือง',
    role: 'Agency Creative Director',
    date: '2 ม.ค. 2569',
    rating: 5,
    quote:
      'ทีมใช้ร่วมกันผ่าน Project Instructions ได้เลย ไม่ต้องสอนซ้ำ output ออกมาสม่ำเสมอทุกคน',
    initials: 'ชจ',
    color: 'bg-brand-accent',
  },
]

// ─── FAQS (10 questions) ─────────────────────────────────────────────────────

export const FAQS: Faq[] = [
  {
    id: 'faq-1',
    question: 'Claude Skills คืออะไร แตกต่างจาก prompt ทั่วไปยังไง?',
    answer:
      'Claude Skills คือชุด instruction ที่ออกแบบมาเฉพาะงาน ไม่ใช่แค่ prompt สั้นๆ แต่เป็น system ที่บอก Claude ถึง role, context, output format และ constraints ชัดเจน ทำให้ได้ผลลัพธ์สม่ำเสมอทุกครั้ง โดยไม่ต้องพิมพ์ instructions ใหม่ทุกรอบ',
  },
  {
    id: 'faq-2',
    question: 'ต้องมีความรู้ด้าน AI หรือโปรแกรมมิ่งไหมถึงจะใช้ได้?',
    answer:
      'ไม่จำเป็นเลย Skills ออกแบบมาให้ใช้งานได้ผ่าน Claude.ai บน browser ธรรมดา แค่ copy วาง แล้วพิมพ์คำสั่ง ถ้าต้องการใช้งานระดับ advanced กับ Claude Code หรือ n8n ก็มี guide step-by-step ให้ด้วย',
  },
  {
    id: 'faq-3',
    question: 'ซื้อแล้วได้รับไฟล์อะไรบ้าง รับวิธีไหน?',
    answer:
      'หลังชำระเงินจะได้รับอีเมลพร้อม link ดาวน์โหลดทันที ภายใน 5 นาที ในไฟล์จะมี skill ทั้งหมดแยกตามหมวด เอกสาร how-to-use และ cheat sheet bonus พร้อม invite เข้า private community',
  },
  {
    id: 'faq-4',
    question: 'Skills ใช้งานกับ Claude รุ่นไหนได้บ้าง?',
    answer:
      'ใช้งานได้กับ Claude 3.5 Sonnet, Claude 3.7 Sonnet และ Claude 4 ทุกรุ่น รวมถึง Claude Code CLI และ API ด้วย เมื่อ Anthropic ออก Claude รุ่นใหม่ skills จะได้รับการอัปเดตให้รองรับโดยอัตโนมัติ (ผู้ซื้อได้รับ lifetime update ฟรี)',
  },
  {
    id: 'faq-5',
    question: 'ซื้อไปแล้วแชร์กับทีมได้ไหม?',
    answer:
      'Skills ออกแบบมาให้ใช้งานส่วนตัว 1 คน/ใบอนุญาต แต่ถ้าต้องการใช้กับทีม สามารถติดต่อเพื่อขอ team license ได้ที่ contact page — มีราคาพิเศษสำหรับทีม 3+ คน',
  },
  {
    id: 'faq-6',
    question: 'n8n คืออะไร ต้องจ่ายค่า n8n เพิ่มไหม?',
    answer:
      'n8n คือ workflow automation tool ที่เชื่อมต่อ apps ต่างๆ โดยไม่ต้องเขียน code มี free tier สำหรับใช้งาน self-host และ cloud plan เริ่มต้น $20/เดือน Skills ใน Bundle นี้ใช้กับ n8n ทั้ง free และ paid plan ได้ทั้งหมด',
  },
  {
    id: 'faq-7',
    question: 'มีการรับประกันคืนเงินไหม?',
    answer:
      'รับประกัน 7 วัน หากคุณซื้อไปแล้วรู้สึกว่า skills ไม่ตอบโจทย์ธุรกิจของคุณ ส่ง email มาภายใน 7 วัน จะคืนเงินเต็มจำนวนโดยไม่ถามเหตุผล',
  },
  {
    id: 'faq-8',
    question: 'ราคา ฿997 รวมทุกอย่างแล้วใช่ไหม มีค่าใช้จ่ายซ่อนอยู่ไหม?',
    answer:
      'ใช่ ฿997 รวมทุกอย่าง: skills ทั้ง 7 module, bonus ทั้ง 4 อย่าง, lifetime update และ community access ไม่มีค่า subscription รายเดือน ไม่มีค่าต่ออายุ จ่ายครั้งเดียวใช้ได้ตลอด',
  },
  {
    id: 'faq-9',
    question: 'Skills ต่างจาก course ออนไลน์ทั่วไปยังไง?',
    answer:
      'Course สอนให้รู้จักแนวคิด แต่ Skills คือเครื่องมือที่หยิบมาใช้งานได้ทันที เปรียบเหมือนซื้อ template ที่ผ่านการทดสอบมาแล้วแทนที่จะเรียนออกแบบ template เอง คุณประหยัดเวลาและข้ามขั้นตอน trial-and-error ไปได้เลย',
  },
  {
    id: 'faq-10',
    question: 'สั่งซื้อแล้วติดต่อ support ได้ช่องทางไหน?',
    answer:
      'ติดต่อได้ผ่าน email ที่ support@aiflowlab.co หรือใน private community ตอบภายใน 24 ชม. ในวันทำการ นอกจากนั้นยังมี Q&A session รายเดือนสำหรับสมาชิกด้วย',
  },
]

// ─── COMPARISON TABLE ────────────────────────────────────────────────────────

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: 'ใช้งานได้ทันทีไม่ต้องเรียนก่อน',
    aiflowlab: true,
    youtube: false,
    course: false,
    freelance: true,
    diy: false,
  },
  {
    feature: 'ราคาครั้งเดียว ไม่มี subscription',
    aiflowlab: true,
    youtube: true,
    course: 'บางที่',
    freelance: false,
    diy: true,
  },
  {
    feature: 'ปรับแต่งตามธุรกิจตัวเองได้',
    aiflowlab: true,
    youtube: false,
    course: false,
    freelance: true,
    diy: true,
  },
  {
    feature: 'ได้ผลลัพธ์สม่ำเสมอทุกครั้ง',
    aiflowlab: true,
    youtube: false,
    course: false,
    freelance: 'แล้วแต่คน',
    diy: false,
  },
  {
    feature: 'รองรับทีมและ enterprise',
    aiflowlab: true,
    youtube: false,
    course: false,
    freelance: true,
    diy: false,
  },
  {
    feature: 'Lifetime update เมื่อ Claude อัปเดต',
    aiflowlab: true,
    youtube: false,
    course: false,
    freelance: false,
    diy: false,
  },
  {
    feature: 'รับประกันคืนเงิน 7 วัน',
    aiflowlab: true,
    youtube: false,
    course: 'บางที่',
    freelance: false,
    diy: false,
  },
]
