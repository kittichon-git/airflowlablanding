import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'นโยบายความเป็นส่วนตัว',
  description: 'นโยบายความเป็นส่วนตัวและการจัดการข้อมูลส่วนบุคคลของ aiflowlab',
}

export default function PrivacyPage() {
  return (
    <Section id="privacy" eyebrow="Legal" title="นโยบายความเป็นส่วนตัว" align="left">
      <div className="max-w-3xl mx-auto space-y-6 text-text-secondary leading-relaxed text-sm">
        <p className="text-text-muted text-xs">อัปเดตล่าสุด: มกราคม 2569 | บังคับใช้ตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA) พ.ศ. 2562</p>

        <h3 className="text-lg font-bold text-text-primary">1. ข้อมูลที่เราเก็บรวบรวม</h3>
        <p>เราเก็บข้อมูลเมื่อคุณ:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>ซื้อสินค้าหรือบริการ (ชื่อ อีเมล ข้อมูลการชำระเงินผ่าน Stripe)</li>
          <li>ลงทะเบียนรับ newsletter หรือ community</li>
          <li>ติดต่อฝ่าย support</li>
          <li>เยี่ยมชมเว็บไซต์ (ข้อมูล analytics เช่น IP, browser, หน้าที่เข้าชม)</li>
        </ul>

        <h3 className="text-lg font-bold text-text-primary">2. วัตถุประสงค์การใช้ข้อมูล</h3>
        <p>เราใช้ข้อมูลของคุณเพื่อ:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>จัดส่งสินค้าและบริการที่คุณสั่งซื้อ</li>
          <li>ส่งอีเมลยืนยันการซื้อและข้อมูลอัปเดต</li>
          <li>ปรับปรุงผลิตภัณฑ์และประสบการณ์การใช้งาน</li>
          <li>วิเคราะห์การใช้งานเว็บไซต์ (aggregate, anonymized)</li>
        </ul>

        <h3 className="text-lg font-bold text-text-primary">3. Cookies และ Tracking</h3>
        <p>
          เว็บไซต์ใช้ cookies เพื่อวิเคราะห์การใช้งาน (Google Analytics) และวัดผลโฆษณา
          (Facebook Pixel) คุณสามารถปิด cookies ในการตั้งค่าเบราว์เซอร์ได้ตลอดเวลา
        </p>

        <h3 className="text-lg font-bold text-text-primary">4. การแบ่งปันข้อมูลกับบุคคลที่สาม</h3>
        <p>เราไม่ขายข้อมูลส่วนบุคคลของคุณ เราแบ่งปันข้อมูลเฉพาะกับ:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Stripe — เพื่อประมวลผลการชำระเงิน</li>
          <li>Google Analytics — เพื่อวิเคราะห์การใช้งาน</li>
          <li>หน่วยงานรัฐ — หากได้รับคำสั่งทางกฎหมาย</li>
        </ul>

        <h3 className="text-lg font-bold text-text-primary">5. สิทธิ์ของคุณตาม PDPA</h3>
        <p>คุณมีสิทธิ์:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>เข้าถึงข้อมูลส่วนบุคคลที่เราเก็บเกี่ยวกับคุณ</li>
          <li>ขอแก้ไขข้อมูลที่ไม่ถูกต้อง</li>
          <li>ขอลบข้อมูล (right to erasure)</li>
          <li>คัดค้านการประมวลผลข้อมูล</li>
          <li>ขอรับข้อมูลในรูปแบบที่โอนย้ายได้</li>
        </ul>

        <h3 className="text-lg font-bold text-text-primary">6. ความปลอดภัยของข้อมูล</h3>
        <p>
          เราใช้มาตรการความปลอดภัยมาตรฐานอุตสาหกรรม รวมถึง SSL/TLS encryption
          และไม่เก็บข้อมูลบัตรเครดิตบนเซิร์ฟเวอร์ของเรา (ประมวลผลทั้งหมดผ่าน Stripe)
        </p>

        <h3 className="text-lg font-bold text-text-primary">7. การติดต่อ</h3>
        <p>
          หากมีคำถามเกี่ยวกับนโยบายนี้หรือต้องการใช้สิทธิ์ของคุณ
          ติดต่อได้ที่:{' '}
          <a href="mailto:privacy@aiflowlab.co" className="text-brand-primary hover:underline">
            privacy@aiflowlab.co
          </a>
        </p>

        <p className="text-text-muted text-xs italic mt-8">
          *เอกสารนี้เป็น boilerplate เบื้องต้น ควรตรวจสอบโดยนักกฎหมายก่อนนำไปใช้จริง
        </p>
      </div>
    </Section>
  )
}
