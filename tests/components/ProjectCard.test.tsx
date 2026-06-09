import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ProjectCard from '../../src/components/portfolio/ProjectCard';
import { projects } from '../../src/data/projects';
import {
  assertNoBasicA11yViolations,
  expect,
  getAnchors,
  renderMarkup,
  test,
} from '../setup';

const publicLinkProject = projects.find((project) =>
  project.links.some((link) => link.isPublic),
);

test('project cards render title, metadata, and detail link', () => {
  if (!publicLinkProject) {
    throw new Error('Expected at least one project with a public link.');
  }

  const markup = renderMarkup(
    <MemoryRouter>
      <ProjectCard project={publicLinkProject} />
    </MemoryRouter>,
  );

  expect(markup).toContain(publicLinkProject.title);
  expect(markup).toContain(`${publicLinkProject.title} metadata`);
  expect(markup).toContain(`/projects/${publicLinkProject.id}`);
  assertNoBasicA11yViolations(markup);
});

test('project cards render public external links with safe new-tab attributes', () => {
  if (!publicLinkProject) {
    throw new Error('Expected at least one project with a public link.');
  }

  const markup = renderMarkup(
    <MemoryRouter>
      <ProjectCard project={publicLinkProject} />
    </MemoryRouter>,
  );
  const anchors = getAnchors(markup);
  const externalAnchors = anchors.filter((anchor) => anchor.attrs.target === '_blank');

  expect(externalAnchors.length).toBeGreaterThan(0);
  for (const anchor of externalAnchors) {
    expect(anchor.attrs.href).toMatch(/^https:\/\//);
    expect(anchor.attrs.rel).toContain('noreferrer');
    expect(anchor.text).toContain('Opens in a new tab');
  }
});
