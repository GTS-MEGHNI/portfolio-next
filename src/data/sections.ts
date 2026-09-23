import { experience } from '@/data/experience'
import { packages, shipped } from '@/data/projects'

export type Role = 'employment' | 'oss' | 'client' | 'freelance' | 'none'

export interface PageSection {
  /** DOM id and deep-link anchor. */
  id: string
  label: string
  role: Role
  /** The section's one numeric reading, shown in its header. */
  reading: string
}

export const ROLE_LABEL: Record<Role, string> = {
  employment: 'Employment',
  oss: 'Open source',
  client: 'Client work',
  freelance: 'Freelance & research',
  none: 'Reference',
}

export const ROLE_BG: Record<Role, string> = {
  employment: 'bg-role-employment',
  oss: 'bg-role-oss',
  client: 'bg-role-client',
  freelance: 'bg-role-freelance',
  none: 'bg-role-none',
}

export const ROLE_TEXT: Record<Role, string> = {
  employment: 'text-role-employment',
  oss: 'text-role-oss',
  client: 'text-role-client',
  freelance: 'text-role-freelance',
  none: 'text-muted',
}

/** In page order. Profile is the hero and stays out of the navigation. */
export const sections: PageSection[] = [
  { id: 'profile', label: 'Profile', role: 'none', reading: '5+ yrs' },
  { id: 'experience', label: 'Experience', role: 'employment', reading: `${experience.length} engagements` },
  { id: 'watchtower', label: 'Watchtower', role: 'employment', reading: '3 stores' },
  { id: 'infrastructure', label: 'Infrastructure', role: 'employment', reading: 'Linux VPS' },
  { id: 'open-source', label: 'Open source', role: 'oss', reading: `${packages.length} packages` },
  { id: 'projects', label: 'Projects', role: 'client', reading: `${shipped.length} systems` },
  { id: 'stack', label: 'Stack', role: 'none', reading: '3 tiers' },
  { id: 'contact', label: 'Contact', role: 'none', reading: '3 languages' },
]
