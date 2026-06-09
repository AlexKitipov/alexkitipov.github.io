export type BlogPostStatus = 'draft' | 'planned' | 'published';

export type BlogCategoryId =
  | 'algorithm-of-the-day'
  | 'technical-notes'
  | 'case-studies'
  | 'learning-log';

export type BlogCategory = {
  id: BlogCategoryId;
  label: string;
  description: string;
};

export type BlogContentSource =
  | 'typescript-data'
  | 'markdown-placeholder'
  | 'future-mdx';

export type BlogPost = {
  id: string;
  title: string;
  summary: string;
  category: BlogCategoryId;
  status: BlogPostStatus;
  source: BlogContentSource;
  dateLabel: string;
  readingTime: string;
  tags: readonly string[];
  placeholder?: boolean;
  contentPath?: string;
  relatedProjectId?: string;
};

export type EpisodeFormatStep = {
  title: string;
  description: string;
};
