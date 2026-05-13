import { CheckCircle2, XCircle } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { COMPARISON_ROWS } from '@/lib/data'

const COLUMNS: { key: ColKey; label: string; highlight?: boolean }[] = [
  { key: 'aiflowlab',  label: 'Skills Bundle', highlight: true },
  { key: 'youtube',   label: 'YouTube / Free' },
  { key: 'course',    label: 'Course ออนไลน์' },
  { key: 'freelance', label: 'Freelance' },
  { key: 'diy',       label: 'ทำเอง (DIY)' },
]

type ColKey = 'aiflowlab' | 'youtube' | 'course' | 'freelance' | 'diy'

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <CheckCircle2 size={20} className="text-success mx-auto" />
  if (value === false) return <XCircle size={20} className="text-danger mx-auto" />
  return <span className="text-text-muted text-xs">{value}</span>
}

export function ComparisonTable() {
  return (
    <Section
      id="comparison"
      eyebrow="เปรียบเทียบ"
      title="Claude Skills Bundle vs ทางเลือกอื่น"
      align="center"
    >
      <p className="text-sm text-text-muted md:hidden text-center mb-3">← ปัดซ้ายขวา →</p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="text-left py-4 px-4 text-text-muted font-semibold border-b border-border-subtle sticky left-0 bg-bg-base z-10 min-w-[200px]">
                Feature
              </th>
              {COLUMNS.map((col) => (
                <th
                  key={col.key}
                  className={[
                    'py-4 px-3 text-center font-semibold border-b border-border-subtle whitespace-nowrap',
                    col.highlight
                      ? 'bg-brand-primary/5 text-brand-primary border-x-2 border-brand-primary'
                      : 'text-text-secondary',
                  ].join(' ')}
                >
                  {col.label}
                  {col.highlight && (
                    <span className="block text-[10px] font-normal text-brand-primary/70 mt-0.5">
                      ← แนะนำ
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row, i) => (
              <tr
                key={i}
                className="border-b border-border-subtle hover:bg-bg-card/50 transition-colors"
              >
                <td className="py-3 px-4 text-text-primary sticky left-0 bg-bg-base z-10">
                  {row.feature}
                </td>
                {COLUMNS.map((col) => (
                  <td
                    key={col.key}
                    className={[
                      'py-3 px-3 text-center',
                      col.highlight ? 'bg-brand-primary/5' : '',
                    ].join(' ')}
                  >
                    <CellValue value={row[col.key as ColKey]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}

export default ComparisonTable
