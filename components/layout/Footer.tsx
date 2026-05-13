import { BUNDLE_PRICE } from '@/lib/data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle bg-bg-elevated text-text-muted text-sm">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8 lg:px-16 py-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Brand */}
        <div className="space-y-3">
          <p className="text-base font-bold text-brand-primary">aiflowlab</p>
          <p className="leading-relaxed">
            แพลตฟอร์มสอนทักษะ AI สำหรับคนทำงานยุคใหม่ เรียนรู้ Claude &amp; n8n
            แบบลงมือทำ ไม่มีพื้นฐานก็เรียนได้
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          <p className="text-text-secondary font-semibold">ลิงก์ด่วน</p>
          <nav aria-label="ลิงก์หลัก" className="flex flex-col gap-2">
            {[
              { label: 'หลักสูตร', href: '#modules' },
              { label: 'รีวิวจากนักเรียน', href: '#reviews' },
              { label: 'ราคา', href: '#pricing' },
              { label: 'คำถามที่พบบ่อย', href: '#faq' },
              { label: 'เกี่ยวกับเรา', href: '/about' },
              { label: 'ติดต่อ', href: '/contact' },
              { label: 'นโยบายความเป็นส่วนตัว', href: '/privacy' },
              { label: 'ข้อกำหนดการใช้งาน', href: '/terms' },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="hover:text-text-primary transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Pricing summary */}
        <div className="space-y-3">
          <p className="text-text-secondary font-semibold">ข้อมูลสำคัญ</p>
          <ul className="space-y-1.5">
            <li>ราคาปกติ: <span className="line-through text-text-muted">฿23,993</span></li>
            <li>
              ราคาพิเศษวันนี้:{' '}
              <span className="text-brand-primary font-bold">฿{BUNDLE_PRICE.toLocaleString()}</span>
            </li>
            <li>เข้าถึงได้ตลอดชีพ (Lifetime Access)</li>
            <li>อัปเดตคอร์สฟรี</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border-subtle py-4 text-center text-xs text-text-muted">
        © {year} aiflowlab. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
