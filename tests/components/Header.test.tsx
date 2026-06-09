import React from 'react';
import { MemoryRouter, NavLink } from 'react-router-dom';
import { navigationItems } from '../../src/data/navigation';
import {
  assertNoBasicA11yViolations,
  expect,
  getAnchors,
  getLandmark,
  renderMarkup,
  test,
} from '../setup';

function renderHeaderNavigation(initialEntry = '/') {
  return renderMarkup(
    <MemoryRouter initialEntries={[initialEntry]}>
      <nav className="top-nav" aria-label="Primary portfolio navigation">
        {navigationItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </MemoryRouter>,
  );
}

test('header navigation renders as a labeled primary nav landmark', () => {
  const markup = renderHeaderNavigation();
  const nav = getLandmark(markup, 'nav');

  expect(nav?.attrs['aria-label']).toBe('Primary portfolio navigation');
  expect(nav?.text ?? '').toContain('Home');
  assertNoBasicA11yViolations(markup);
});

test('header navigation exposes keyboard-focusable links in route order', () => {
  const markup = renderHeaderNavigation('/projects');
  const nav = getLandmark(markup, 'nav');
  const anchors = getAnchors(nav?.innerHtml ?? '');

  expect(anchors.map((anchor) => anchor.text)).toEqual(
    navigationItems.map((item) => item.label),
  );
  expect(anchors.map((anchor) => anchor.attrs.href)).toEqual(
    navigationItems.map((item) => item.to),
  );
  expect(anchors.filter((anchor) => anchor.attrs.tabindex === '-1').length).toBe(0);
  expect(anchors.find((anchor) => anchor.text === 'Projects')?.attrs.class).toBe(
    'active',
  );
  expect(anchors.length).toBeGreaterThan(0);
});
