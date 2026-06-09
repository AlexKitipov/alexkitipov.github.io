import { site } from '../../src/data/site';
import { projects } from '../../src/data/projects';
import {
  defaultSeo,
  getAbsoluteAssetUrl,
  getCanonicalUrl,
  getProjectSeo,
  routeSeo,
} from '../../src/utils/seo';
import { expect, test } from '../setup';

test('canonical URLs normalize relative and absolute route paths', () => {
  expect(getCanonicalUrl('/about')).toBe(`${site.origin}/about`);
  expect(getCanonicalUrl('projects')).toBe(`${site.origin}/projects`);
});

test('absolute asset URLs resolve against the configured site origin', () => {
  expect(getAbsoluteAssetUrl(defaultSeo.imagePath ?? '')).toBe(
    `${site.origin}${site.defaultImagePath}`,
  );
});

test('project SEO returns a project-specific title and fallback not-found metadata', () => {
  const project = projects[0];
  const seo = getProjectSeo(project.id);

  expect(seo.title).toContain(project.title);
  expect(seo.description).toBe(project.summary);
  expect(getProjectSeo('missing-project')).toEqual(routeSeo.notFound);
});
