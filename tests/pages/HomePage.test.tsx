import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../../src/pages/HomePage';
import { biography } from '../../src/data/biography';
import { featuredProject } from '../../src/data/projects';
import {
  assertNoBasicA11yViolations,
  expect,
  getAnchors,
  renderMarkup,
  test,
} from '../setup';

test('home page smoke test renders the hero, featured project, and contact CTA', () => {
  const markup = renderMarkup(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );

  expect(markup).toContain(biography.name);
  expect(markup).toContain(featuredProject.title);
  expect(markup).toContain('Contact Aleksandar');
  assertNoBasicA11yViolations(markup);
});

test('home page route links point to portfolio routes', () => {
  const markup = renderMarkup(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );
  const hrefs = getAnchors(markup).map((anchor) => anchor.attrs.href);

  expect(hrefs).toContain(`/projects/${featuredProject.id}`);
  expect(hrefs).toContain('/about');
  expect(hrefs).toContain('/projects');
});
