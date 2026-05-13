import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Mail, MessageCircle, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ติดต่อเรา',
  description: 'ติดต่อทีม aiflowlab ผ่านอีเมลหรือ LINE OA',
}

export default function ContactPage() {
  return (
    <Section id="contact" eyebrow="ติดต่อ" title="พูดคุยกับเรา" align="center">
      <div className="max-w-2xl mx-auto space-y-8">
        <p className="text-text-secondary text-center leading-relaxed">
          มีคำถามเกี่ยวกับ Bundle หรือต้องการความช่วยเหลือ? ทีมเราพร้อมตอบกลับภายใน 24 ชม. (วันทำการ)
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email */}
          <div className="bg-bg-card border border-border-subtle rounded-[12px] p-6 flex flex-col gap-3">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-full grid place-items-center">
              <Mail size={24} className="text-brand-primary" />
            </div>
            <h3 className="font-bold text-text-primary">อีเมล Support</h3>
            <a
              href="mailto:support@aiflowlab.co"
              className="text-brand-primary hover:underline text-sm"
            >
              support@aiflowlab.co
            </a>
            <p className="text-text-muted text-xs">ตอบกลับภายใน 24 ชม. (วันทำการ)</p>
          </div>

          {/* LINE OA */}
          <div className="bg-bg-card border border-border-subtle rounded-[12px] p-6 flex flex-col gap-3">
            <div className="w-12 h-12 bg-success/10 rounded-full grid place-items-center">
              <MessageCircle size={24} className="text-success" />
            </div>
            <h3 className="font-bold text-text-primary">LINE Official Account</h3>
            <a
              href="https://line.me/R/ti/p/@aiflowlab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-success hover:underline text-sm"
            >
              @aiflowlab
            </a>
            <p className="text-text-muted text-xs">รวดเร็วกว่า — ตอบกลับในชั่วโมงทำการ</p>
          </div>
        </div>

        {/* Hours */}
        <div className="bg-bg-elevated border border-border-subtle rounded-[12px] p-4 flex items-center gap-3">
          <Clock size={18} className="text-text-muted shrink-0" />
          <p className="text-text-secondary text-sm">
            ชั่วโมงทำการ: จันทร์–ศุกร์ 9:00–18:00 น. (GMT+7)
          </p>
        </div>

        {/* Contact form placeholder */}
        <div className="bg-bg-card border border-border-subtle rounded-[12px] p-6">
          <h3 className="font-bold text-text-primary mb-4">ส่งข้อความหาเรา</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-text-secondary text-sm mb-1.5">ชื่อ</label>
              <div className="w-full h-10 bg-bg-elevated border border-border-subtle rounded-[8px]" aria-label="Name field placeholder" />
            </div>
            <div>
              <label className="block text-text-secondary text-sm mb-1.5">อีเมล</label>
              <div className="w-full h-10 bg-bg-elevated border border-border-subtle rounded-[8px]" aria-label="Email field placeholder" />
            </div>
            <div>
              <label className="block text-text-secondary text-sm mb-1.5">ข้อความ</label>
              <div className="w-full h-24 bg-bg-elevated border border-border-subtle rounded-[8px]" aria-label="Message field placeholder" />
            </div>
            <p className="text-text-muted text-xs italic">
              * ฟอร์มนี้กำลังพัฒนา — กรุณาติดต่อผ่านอีเมลหรือ LINE ก่อน
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
