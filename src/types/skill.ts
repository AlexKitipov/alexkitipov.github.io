export type SkillLevel = 'learning' | 'practicing' | 'building';

export type SkillCategory =
  | 'frontend'
  | 'programming'
  | 'tools'
  | 'ai-collaboration'
  | 'creative-direction'
  | 'communication';

export type Skill = {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  summary: string;
};

export type SkillGroup = {
  id: SkillCategory;
  title: string;
  categoryLabel: string;
  description: string;
  skills: readonly Skill[];
};
