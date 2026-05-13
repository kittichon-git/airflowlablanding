import { describe, it, expect } from 'vitest'
import {
  MODULES,
  BONUSES,
  REVIEWS,
  FAQS,
  PROBLEMS,
  STEPS,
  PERSONAS,
  STATS,
  SKILL_CATEGORIES,
  SHORT_TESTIMONIALS,
  PLATFORMS,
  CASE_STUDIES,
  COMPARISON_ROWS,
  ORIGINAL_VALUE,
  BONUS_VALUE,
  FOUNDER_STORY,
  COMPATIBLE_TOOLS,
} from './data'

describe('lib/data.ts — price validation', () => {
  it('MODULES prices sum === ORIGINAL_VALUE (23993)', () => {
    const sum = MODULES.reduce((acc, m) => acc + m.price, 0)
    expect(sum).toBe(ORIGINAL_VALUE)
    expect(sum).toBe(23993)
  })

  it('BONUSES prices sum === BONUS_VALUE (8490)', () => {
    const sum = BONUSES.reduce((acc, b) => acc + b.value, 0)
    expect(sum).toBe(BONUS_VALUE)
    expect(sum).toBe(8490)
  })

  it('MODULES skillCount sum >= 500', () => {
    const total = MODULES.reduce((acc, m) => acc + m.skillCount, 0)
    expect(total).toBeGreaterThanOrEqual(500)
  })
})

describe('lib/data.ts — array lengths', () => {
  it('MODULES.length === 7', () => expect(MODULES).toHaveLength(7))
  it('BONUSES.length === 4', () => expect(BONUSES).toHaveLength(4))
  it('REVIEWS.length === 8', () => expect(REVIEWS).toHaveLength(8))
  it('FAQS.length === 10', () => expect(FAQS).toHaveLength(10))
  it('PROBLEMS.length === 5', () => expect(PROBLEMS).toHaveLength(5))
  it('STEPS.length === 3', () => expect(STEPS).toHaveLength(3))
  it('PERSONAS.length === 5', () => expect(PERSONAS).toHaveLength(5))
  it('STATS.length === 4', () => expect(STATS).toHaveLength(4))
  it('SKILL_CATEGORIES.length === 16', () => expect(SKILL_CATEGORIES).toHaveLength(16))
  it('SHORT_TESTIMONIALS.length === 3', () => expect(SHORT_TESTIMONIALS).toHaveLength(3))
  it('PLATFORMS.length === 3', () => expect(PLATFORMS).toHaveLength(3))
  it('CASE_STUDIES.length === 3', () => expect(CASE_STUDIES).toHaveLength(3))
})

describe('lib/data.ts — data integrity', () => {
  it('every MODULE has exactly 5 tags', () => {
    MODULES.forEach((m) => {
      expect(m.tags).toHaveLength(5)
    })
  })

  it('every MODULE tag is kebab-case', () => {
    const kebabRe = /^[a-z0-9]+(-[a-z0-9]+)*$/
    MODULES.forEach((m) => {
      m.tags.forEach((tag) => {
        expect(tag).toMatch(kebabRe)
      })
    })
  })

  it('every REVIEW has rating === 5', () => {
    REVIEWS.forEach((r) => {
      expect(r.rating).toBe(5)
    })
  })

  it('every REVIEW date matches Thai short month format', () => {
    // e.g. "12 มี.ค. 2569" — digits + space + month abbr + space + 4-digit year
    const thaiMonthRe = /^\d{1,2} \S+ \d{4}$/u
    REVIEWS.forEach((r) => {
      expect(r.date).toMatch(thaiMonthRe)
    })
  })

  it('every SKILL_CATEGORY tab is claude or n8n', () => {
    SKILL_CATEGORIES.forEach((c) => {
      expect(['claude', 'n8n']).toContain(c.tab)
    })
  })

  it('every STEP number is 01, 02, or 03', () => {
    const nums = STEPS.map((s) => s.number)
    expect(nums).toEqual(['01', '02', '03'])
  })

  it('all COMPARISON_ROWS have 5 comparison columns', () => {
    COMPARISON_ROWS.forEach((row) => {
      expect(row).toHaveProperty('aiflowlab')
      expect(row).toHaveProperty('youtube')
      expect(row).toHaveProperty('course')
      expect(row).toHaveProperty('freelance')
      expect(row).toHaveProperty('diy')
    })
  })

  it('FOUNDER_STORY has at least 3 paragraphs', () => {
    expect(FOUNDER_STORY.paragraphs.length).toBeGreaterThanOrEqual(3)
    FOUNDER_STORY.paragraphs.forEach((p) => {
      expect(typeof p).toBe('string')
      expect(p.length).toBeGreaterThan(0)
    })
  })

  it('COMPATIBLE_TOOLS has at least 6 tools with id and name', () => {
    expect(COMPATIBLE_TOOLS.length).toBeGreaterThanOrEqual(6)
    COMPATIBLE_TOOLS.forEach((t) => {
      expect(t).toHaveProperty('id')
      expect(t).toHaveProperty('name')
    })
  })
})
