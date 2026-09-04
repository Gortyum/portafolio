import type { Skill } from '../types'

export const skills: Skill[] = [
  // Backend & APIs
  { id: 1, name: 'Python', category: 'Backend & APIs', proficiency: 95 },
  { id: 2, name: 'FastAPI', category: 'Backend & APIs', proficiency: 92 },
  { id: 3, name: 'Flask', category: 'Backend & APIs', proficiency: 90 },
  { id: 4, name: 'Django', category: 'Backend & APIs', proficiency: 88 },
  { id: 5, name: 'REST APIs & WebSockets', category: 'Backend & APIs', proficiency: 94 },
  { id: 6, name: 'SQLAlchemy / Alembic', category: 'Backend & APIs', proficiency: 90 },
  { id: 7, name: 'Pydantic & JWT Auth', category: 'Backend & APIs', proficiency: 92 },

  // Frontend
  { id: 8, name: 'React 19', category: 'Frontend', proficiency: 88 },
  { id: 9, name: 'TypeScript', category: 'Frontend', proficiency: 85 },
  { id: 10, name: 'Vite', category: 'Frontend', proficiency: 90 },
  { id: 11, name: 'Socket.IO-client', category: 'Frontend', proficiency: 88 },
  { id: 12, name: 'React Query / Context API', category: 'Frontend', proficiency: 84 },
  { id: 13, name: 'Chart.js & Recharts', category: 'Frontend', proficiency: 86 },

  // DevOps & Data
  { id: 14, name: 'PostgreSQL & MySQL', category: 'DevOps & Data', proficiency: 90 },
  { id: 15, name: 'Redis (Caching & Rate Limiting)', category: 'DevOps & Data', proficiency: 88 },
  { id: 16, name: 'pandas & numpy', category: 'DevOps & Data', proficiency: 86 },
  { id: 17, name: 'ETL / ELT Pipelines & Batching', category: 'DevOps & Data', proficiency: 88 },
  { id: 18, name: 'Docker & Containerization', category: 'DevOps & Data', proficiency: 85 },
  { id: 19, name: 'CI/CD & Git / Render', category: 'DevOps & Data', proficiency: 84 },
]
