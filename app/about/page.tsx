import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'เกี่ยวกับเรา',
  description: 'ทำไม aiflowlab ถึงสร้าง Claude Skills Bundle และทีมเบื้องหลัง',
}

export default function AboutPage() {
  return (
    <Section id="about" eyebrow="เกี่ยวกับเรา" title="ทำไมเราถึงสร้าง aiflowlab" align="left">
      <div className="max-w-3xl mx-auto space-y-6 text-text-secondary leading-relaxed">
        <h3 className="text-xl font-bold text-text-primary">Mission</h3>
        <p>
          aiflowlab ก่อตั้งขึ้นเพื่อทำให้เจ้าของธุรกิจและคนทำงานชาวไทยสามารถใช้งาน AI
          ในระดับมืออาชีพได้โดยไม่ต้องมีพื้นฐานด้านเทคนิค เราเชื่อว่า AI ควรเป็นเครื่องมือ
          ที่ทุกคนเข้าถึงได้ ไม่ใช่เฉพาะ developer
        </p>

        <h3 className="text-xl font-bold text-text-primary">Team</h3>
        <p>
          ทีมของเราประกอบด้วยผู้เชี่ยวชาญด้าน AI, copywriting, และการตลาดออนไลน์
          ที่ผ่านประสบการณ์จริงในการสร้างธุรกิจและช่วยลูกค้ากว่า 1,000 รายให้ใช้งาน
          Claude ได้อย่างมีประสิทธิภาพ
        </p>

        <h3 className="text-xl font-bold text-text-primary">Our Story</h3>
        <p>
          เราเริ่มต้นจากความหงุดหน่ายส่วนตัว — ใช้ Claude ทุกวันแต่ได้ผลลัพธ์ที่ไม่สม่ำเสมอ
          ต้องพิมพ์ prompt ยาวซ้ำๆ และยังไม่มั่นใจว่า output จะออกมาดีหรือเปล่า
        </p>
        <p>
          หลังจากทดสอบกว่า 500 ชั่วโมงกับธุรกิจจริง เราพัฒนาระบบ Skill
          ที่ทำให้ Claude ทำงานได้เหมือนทีมงานมืออาชีพ — สม่ำเสมอ รวดเร็ว และพร้อมใช้ทันที
        </p>
        <p>
          วันนี้ Claude Skills Bundle ถูกใช้งานโดยลูกค้ากว่า 1,000 ราย
          ตั้งแต่เจ้าของธุรกิจขนาดเล็กไปถึงเอเจนซี่โฆษณา — และเราพัฒนาต่อเนื่องทุกวัน
        </p>

        <p className="font-semibold text-text-primary">— ทีม aiflowlab</p>
      </div>
    </Section>
  )
}
