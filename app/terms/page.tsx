import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'ข้อกำหนดการใช้งาน',
  description: 'ข้อกำหนดและเงื่อนไขการใช้งาน Claude Skills Bundle โดย aiflowlab',
}

export default function TermsPage() {
  return (
    <Section id="terms" eyebrow="Legal" title="ข้อกำหนดการใช้งาน" align="left">
      <div className="max-w-3xl mx-auto space-y-6 text-text-secondary leading-relaxed text-sm">
        <p className="text-text-muted text-xs">อัปเดตล่าสุด: มกราคม 2569 | กฎหมายที่บังคับใช้: กฎหมายแห่งประเทศไทย</p>

        <h3 className="text-lg font-bold text-text-primary">1. การยอมรับข้อกำหนด</h3>
        <p>
          การซื้อหรือใช้งาน Claude Skills Bundle (&ldquo;ผลิตภัณฑ์&rdquo;) ถือว่าคุณยอมรับข้อกำหนดเหล่านี้
          หากไม่เห็นด้วย กรุณาอย่าซื้อหรือใช้ผลิตภัณฑ์
        </p>

        <h3 className="text-lg font-bold text-text-primary">2. ใบอนุญาตการใช้งาน</h3>
        <p>
          เมื่อซื้อ Bundle คุณได้รับใบอนุญาตส่วนบุคคล (personal license) สำหรับ 1 คน
          ห้ามแจกจ่าย ขายต่อ หรือแบ่งปันกับบุคคลอื่นโดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร
          สำหรับ team license ติดต่อ{' '}
          <a href="mailto:support@aiflowlab.co" className="text-brand-primary hover:underline">
            support@aiflowlab.co
          </a>
        </p>

        <h3 className="text-lg font-bold text-text-primary">3. นโยบายคืนเงิน</h3>
        <p>
          เราคืนเงิน 100% ภายใน 7 วันหลังการซื้อ โดยไม่ถามเหตุผล
          ส่งอีเมลมาที่{' '}
          <a href="mailto:refund@aiflowlab.co" className="text-brand-primary hover:underline">
            refund@aiflowlab.co
          </a>{' '}
          พร้อมอีเมลที่ใช้ซื้อ เราจะดำเนินการคืนเงินภายใน 5-7 วันทำการ
        </p>

        <h3 className="text-lg font-bold text-text-primary">4. ทรัพย์สินทางปัญญา</h3>
        <p>
          เนื้อหาทั้งหมดใน Bundle รวมถึง skill files, documentation, และ templates
          เป็นทรัพย์สินของ aiflowlab และได้รับการคุ้มครองตามกฎหมายลิขสิทธิ์
          ห้ามคัดลอก ดัดแปลง หรือนำไปจำหน่ายต่อ
        </p>

        <h3 className="text-lg font-bold text-text-primary">5. ข้อจำกัดความรับผิด</h3>
        <p>
          ผลิตภัณฑ์จัดหาให้ &ldquo;ตามสภาพที่เป็น&rdquo; aiflowlab ไม่รับประกันผลลัพธ์ทางธุรกิจที่เฉพาะเจาะจง
          ความรับผิดสูงสุดของเราจำกัดอยู่ที่ราคาที่คุณชำระ
        </p>

        <h3 className="text-lg font-bold text-text-primary">6. การเปลี่ยนแปลงข้อกำหนด</h3>
        <p>
          เราอาจปรับปรุงข้อกำหนดเหล่านี้เป็นครั้งคราว การแจ้งเตือนจะส่งผ่านอีเมลที่ลงทะเบียนไว้
          การใช้งานต่อเนื่องหลังการเปลี่ยนแปลงถือว่ายอมรับข้อกำหนดใหม่
        </p>

        <h3 className="text-lg font-bold text-text-primary">7. กฎหมายที่บังคับใช้</h3>
        <p>
          ข้อกำหนดเหล่านี้อยู่ภายใต้กฎหมายแห่งประเทศไทย
          ข้อพิพาทที่เกิดขึ้นจะนำส่งศาลที่มีเขตอำนาจในประเทศไทย
        </p>

        <p className="text-text-muted text-xs italic mt-8">
          *เอกสารนี้เป็น boilerplate เบื้องต้น ควรตรวจสอบโดยนักกฎหมายก่อนนำไปใช้จริง
        </p>
      </div>
    </Section>
  )
}
