export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  github_url: string | null
  live_url: string | null
  image_url: string | null
  start_date: string | null
  end_date: string | null
  is_featured: boolean
  created_at: string
  updated_at: string
}

export interface Skill {
  id: number
  name: string
  category: string
  proficiency: number
}

export interface Experience {
  id: number
  company: string
  role: string
  description: string
  start_date: string | null
  end_date: string | null
  is_current: boolean
}

export interface ContactPayload {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactResult {
  status: string
  message: string
}
