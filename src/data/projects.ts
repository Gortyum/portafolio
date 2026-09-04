import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sourcing Platform — Multi-tenant B2B',
    description:
      'Plataforma B2B multi-tenant integral. Aseguré 5 módulos REST (auth, suppliers, clients, projects, interactions) con routers FastAPI, autenticación JWT, hashing bcrypt y validación estricta con Pydantic. Migraciones con Alembic para evolución segura de esquemas y SPA con enrutamiento del lado del cliente mediante fallback unificado en FastAPI.',
    technologies: ['FastAPI', 'SQLAlchemy', 'Alembic', 'JWT', 'bcrypt', 'React', 'TypeScript', 'Pydantic'],
    github_url: 'https://github.com/rafael-lopez-zamora',
    live_url: null,
    image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    start_date: '2026-01-01',
    end_date: null,
    is_featured: true,
    created_at: '2026-01-01T00:00:00Z',
    updated_at: '2026-01-01T00:00:00Z',
  },
  {
    id: 2,
    title: 'Risk Management Platform — API de Riesgo Institucional',
    description:
      'Motor de análisis cuantitativo y cálculo de riesgo financiero. Computa 9 métricas clave por activo (Sharpe Ratio, VaR, Max Drawdown, Beta, etc.) con pandas y numpy sobre series históricas de 5 años. Resiliencia total con estrategia multi-proveedor (Alpha Vantage → Yahoo fallback → stale-cache) con circuit breaker de 6h y caching en Redis.',
    technologies: ['FastAPI', 'Redis', 'pandas', 'numpy', 'React', 'Python', 'Chart.js', 'REST APIs'],
    github_url: 'https://github.com/Gortyum/risk_platform',
    live_url: null,
    image_url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    start_date: '2025-01-01',
    end_date: '2025-12-01',
    is_featured: true,
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-12-01T00:00:00Z',
  },
  {
    id: 3,
    title: 'Broker Portal — Gestión de Cuentas & Referidos',
    description:
      'Portal de automatización de operaciones y onboarding financiero. Automatización completa de la creación de cuentas de broker integrando XManager API. Sistema de adquisición y crecimiento mediante referidos (referral_code → referrer_id) y seguridad de credenciales con hashing bcrypt (passlib) y templates reactivos.',
    technologies: ['FastAPI', 'SQLAlchemy', 'Jinja2', 'bcrypt', 'XManager API', 'PostgreSQL', 'Python'],
    github_url: 'https://github.com/rafael-lopez-zamora',
    live_url: null,
    image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    start_date: '2025-01-01',
    end_date: '2025-12-01',
    is_featured: true,
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-12-01T00:00:00Z',
  },
  {
    id: 4,
    title: 'Construction Management System',
    description:
      'Plataforma empresarial de gestión de proyectos y cuadrillas. Servicios ETL y agregación en background que calculan el progreso de obra y generan reportes CSV automatizados. Optimización de cuellos de botella N+1 con prefetch_related/select_related y control de acceso basado en roles (RBAC).',
    technologies: ['Django', 'MySQL', 'ETL', 'REST APIs', 'RBAC', 'Python'],
    github_url: 'https://github.com/Gortyum/iconstruction',
    live_url: null,
    image_url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    start_date: '2025-01-01',
    end_date: null,
    is_featured: true,
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z',
  },
]
