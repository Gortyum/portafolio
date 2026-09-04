import { useEffect, useState } from 'react'
import { skills } from '../data/skills'
import type { Skill } from '../types'
import { SectionHeading } from './SectionHeading'

const CATEGORY_JAP: Record<string, string> = {
  'Backend & APIs': '基盤',
  Frontend: '界面',
  'DevOps & Data': '運用とデータ',
  'Data & Pipelines': 'データ',
  'Cloud & DevOps': '雲',
  Craft: '技',
}

function SkillBar({ skill }: { skill: Skill }) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = document.getElementById(`skill-${skill.id}`)
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [skill.id])

  return (
    <div className="skill" id={`skill-${skill.id}`}>
      <div className="skill-top">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-pct">{skill.proficiency}%</span>
      </div>
      <div className="skill-bar">
        <span
          className={inView ? 'in' : ''}
          style={{ width: `${skill.proficiency}%`, transitionDelay: '0.08s' }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  const groups = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    ;(acc[skill.category] ??= []).push(skill)
    return acc
  }, {})

  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading index="03" title="Technical Skills" jap="技術" />
        <div className="skills-grid">
          {Object.entries(groups).map(([category, catSkills]) => (
            <div key={category}>
              <h3 className="skill-cat-title">
                {category}
                <span className="jap-inline">{CATEGORY_JAP[category] ?? ''}</span>
              </h3>
              {catSkills.map((skill) => (
                <SkillBar key={skill.id} skill={skill} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
