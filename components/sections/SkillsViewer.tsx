'use client'

import { useMemo, useState } from 'react'
import { Lock } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { SKILL_CATEGORIES, MODULES } from '@/lib/data'

type Tab = 'claude' | 'n8n'

// Build a quick lookup: categoryId → module tags (preview skills)
const categorySkillsMap: Record<string, string[]> = {}
MODULES.forEach((mod) => {
  const cats = SKILL_CATEGORIES.filter((c) => c.moduleId === mod.id)
  cats.forEach((cat) => {
    // Use module tags as preview skill names
    categorySkillsMap[cat.id] = mod.tags.map((t) => t)
  })
})

export function SkillsViewer() {
  const [tab, setTab] = useState<Tab>('claude')
  const [categoryId, setCategoryId] = useState('core-prompting')

  const filteredCategories = useMemo(
    () => SKILL_CATEGORIES.filter((c) => c.tab === tab),
    [tab],
  )

  // Ensure selected category is in current tab
  const activeCategory = filteredCategories.find((c) => c.id === categoryId)
    ?? filteredCategories[0]

  const previewSkills = categorySkillsMap[activeCategory?.id ?? ''] ?? []

  return (
    <Section
      id="skills"
      eyebrow="รับชมเนื้อหาก่อนตัดสินใจ"
      align="center"
    >
      <div className="-mt-8 mb-10 text-center">
        <h2 className="text-3xl font-bold leading-tight text-text-primary md:text-4xl lg:text-5xl">
          ดูตัวอย่าง{' '}
          <em className="text-brand-primary not-italic">500+ Skills</em>
          {' '}ก่อนซื้อ
        </h2>
      </div>

      {/* Tab switcher */}
      <div className="flex justify-center gap-2 mb-8">
        {([['claude', '📚 Claude Skills'], ['n8n', '⚡ n8n Workflows']] as const).map(([t, label]) => (
          <button
            key={t}
            onClick={() => {
              setTab(t)
              const first = SKILL_CATEGORIES.find((c) => c.tab === t)
              if (first) setCategoryId(first.id)
            }}
            className={[
              'px-5 py-2.5 rounded-[8px] text-sm font-semibold transition-colors duration-150',
              tab === t
                ? 'bg-brand-primary text-bg-base'
                : 'bg-bg-card border border-border-subtle text-text-secondary hover:bg-bg-card-hover',
            ].join(' ')}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 text-left">
        {/* Sidebar — list on desktop, select on mobile */}
        <div>
          {/* Mobile dropdown */}
          <select
            className="w-full md:hidden bg-bg-card border border-border-subtle text-text-primary rounded-[8px] px-3 py-2 text-sm mb-4"
            value={activeCategory?.id}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            {filteredCategories.map((c) => (
              <option key={c.id} value={c.id}>{c.label}</option>
            ))}
          </select>

          {/* Desktop list */}
          <nav className="hidden md:flex flex-col gap-1">
            {filteredCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryId(cat.id)}
                className={[
                  'text-left px-4 py-2.5 rounded-[8px] text-sm transition-colors duration-150',
                  activeCategory?.id === cat.id
                    ? 'bg-brand-primary/15 text-brand-primary font-semibold border border-brand-primary/30'
                    : 'text-text-secondary hover:bg-bg-card',
                ].join(' ')}
              >
                {cat.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Main skill list */}
        <div className="relative">
          <div className="bg-bg-card border border-border-subtle rounded-[12px] overflow-hidden">
            <div className="p-4 border-b border-border-subtle">
              <h3 className="font-semibold text-text-primary">
                {activeCategory?.label}
              </h3>
            </div>
            <ul className="divide-y divide-border-subtle">
              {previewSkills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center justify-between px-4 py-3 text-sm"
                >
                  <span className="text-text-primary font-mono">{skill}</span>
                  <span className="text-[10px] bg-brand-primary/10 text-brand-primary px-2 py-0.5 rounded-full font-semibold uppercase">
                    skill
                  </span>
                </li>
              ))}
              {/* Locked placeholder rows */}
              {Array.from({ length: 8 }, (_, i) => (
                <li
                  key={`locked-${i}`}
                  className="flex items-center justify-between px-4 py-3 text-sm blur-[3px] select-none"
                >
                  <span className="text-text-muted font-mono">{'█'.repeat(12 + (i % 8))}</span>
                </li>
              ))}
            </ul>

            {/* Locked overlay */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-bg-card via-bg-card/95 to-transparent p-8 pt-24 text-center backdrop-blur-sm">
              <Lock size={28} className="mx-auto mb-3 text-text-muted" />
              <p className="text-text-secondary text-sm font-semibold">
                ไฟล์ SKILL.md ปลดล็อกหลังเข้ากลุ่ม Skool
              </p>
              <p className="text-text-muted text-xs mt-1">
                ซื้อ Bundle เพื่อเข้าถึง skills ทั้งหมด 500+ ตัว
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default SkillsViewer
