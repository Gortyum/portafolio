import type { Experience } from '../types'

export interface ExperienceWithHighlights extends Experience {
  highlights?: string[]
  location?: string
  kind?: 'Work' | 'Education'
}

export const experiences: ExperienceWithHighlights[] = [
  {
    id: 1,
    company: 'Befx Inversiones — XManager Trading Dashboard',
    role: 'Full Stack Developer',
    location: 'Santiago, Chile',
    kind: 'Work',
    description:
      'Desarrollo de plataforma de trading y analítica de datos financieros en tiempo real, procesando flujos masivos de mercado.',
    highlights: [
      'Reduje el tráfico de datos en streaming en un 70 % mediante un motor de detección de cambios configurable (SHA-256 → CRC32 → diff por campos → umbrales numéricos) que transmite solo cuando los datos cambian realmente, eliminando la transmisión por intervalo fijo.',
      'Habilité el monitoreo en vivo de 100+ cuentas simultáneas mediante multithreading, connection pooling y batch processing en Flask/eventlet, con ingesta por lotes fragmentados (chunking) que evitó timeouts en fuentes externas.',
      'Construí una interfaz reactiva con React 19 + Vite + Socket.IO-client, implementando 4 estrategias de detección de cambios seleccionables que actualizan dinámicamente gráficos de Chart.js con métricas de P&L y volumen sin rerenderizados completos.',
    ],
    start_date: '2025-01-01',
    end_date: '2025-12-01',
    is_current: true,
  },
  {
    id: 2,
    company: 'INACAP – Sede Santiago Centro',
    role: 'Ingeniería en Informática',
    location: 'Santiago, Chile',
    kind: 'Education',
    description:
      'Formación universitaria avanzada en arquitectura de software, ingeniería de datos, optimización de sistemas y gestión tecnológica.',
    highlights: ['Actualmente cursando la carrera profesional para profundizar en arquitectura distribuida e ingeniería avanzada.'],
    start_date: '2025-03-01',
    end_date: null,
    is_current: true,
  },
  {
    id: 3,
    company: 'INACAP – Sede Santiago Centro',
    role: 'Analista Programador',
    location: 'Santiago, Chile',
    kind: 'Education',
    description:
      'Carrera profesional enfocada en el ciclo completo de vida del software: análisis de requerimientos, diseño estructurado de bases de datos relacionales, implementación de APIs y buenas prácticas de ingeniería.',
    highlights: ['Título Obtenido con excelencia académica.'],
    start_date: '2022-03-01',
    end_date: '2025-03-01',
    is_current: false,
  },
]
