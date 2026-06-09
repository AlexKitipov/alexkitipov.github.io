import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

type TestResult = Promise<{ name: string; status: 'passed' | 'failed'; error?: Error }>;
type TestRegistry = TestResult[];

declare global {
  var __PORTFOLIO_TEST_RESULTS__: TestRegistry | undefined;
}

function getRegistry() {
  globalThis.__PORTFOLIO_TEST_RESULTS__ ??= [];
  return globalThis.__PORTFOLIO_TEST_RESULTS__;
}

export function test(name: string, fn: () => void | Promise<void>) {
  getRegistry().push(
    Promise.resolve()
      .then(fn)
      .then(() => ({ name, status: 'passed' as const }))
      .catch((error: Error) => ({ name, status: 'failed' as const, error })),
  );
}

function formatValue(value: unknown) {
  return typeof value === 'string' ? value : JSON.stringify(value, null, 2);
}

function fail(message: string): never {
  throw new Error(message);
}

export function expect<T>(received: T) {
  return {
    toBe(expected: T) {
      if (received !== expected) {
        fail(`Expected ${formatValue(received)} to be ${formatValue(expected)}`);
      }
    },
    toEqual(expected: T) {
      if (JSON.stringify(received) !== JSON.stringify(expected)) {
        fail(`Expected ${formatValue(received)} to equal ${formatValue(expected)}`);
      }
    },
    toContain(expected: string) {
      if (!String(received).includes(expected)) {
        fail(`Expected ${formatValue(received)} to contain ${expected}`);
      }
    },
    toMatch(expected: RegExp) {
      if (!expected.test(String(received))) {
        fail(`Expected ${formatValue(received)} to match ${expected}`);
      }
    },
    toBeTruthy() {
      if (!received) {
        fail(`Expected ${formatValue(received)} to be truthy`);
      }
    },
    toBeGreaterThan(expected: number) {
      if (Number(received) <= expected) {
        fail(`Expected ${formatValue(received)} to be greater than ${expected}`);
      }
    },
  };
}

export function renderMarkup(ui: React.ReactNode) {
  return renderToStaticMarkup(React.createElement(React.Fragment, null, ui));
}

type AnchorInfo = {
  attrs: Record<string, string>;
  text: string;
};

function parseAttributes(attributeSource: string) {
  const attrs: Record<string, string> = {};
  const attributePattern = /([\w:-]+)(?:="([^"]*)")?/g;
  for (const match of attributeSource.matchAll(attributePattern)) {
    attrs[match[1]] = match[2] ?? '';
  }
  return attrs;
}

function textContent(html: string) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function getAnchors(markup: string): AnchorInfo[] {
  return [...markup.matchAll(/<a\b([^>]*)>(.*?)<\/a>/gs)].map((match) => ({
    attrs: parseAttributes(match[1]),
    text: textContent(match[2]),
  }));
}

export function getLandmark(markup: string, tagName: string) {
  const pattern = new RegExp(`<${tagName}\\b([^>]*)>(.*?)<\\/${tagName}>`, 's');
  const match = markup.match(pattern);
  return match
    ? {
        attrs: parseAttributes(match[1]),
        innerHtml: match[2],
        text: textContent(match[2]),
      }
    : null;
}

export function assertNoBasicA11yViolations(markup: string) {
  const imagesWithoutAlt = [...markup.matchAll(/<img\b(?![^>]*\balt=)[^>]*>/g)];
  if (imagesWithoutAlt.length > 0) {
    fail(`Expected every image to have alt text, found ${imagesWithoutAlt.length}`);
  }

  const unlabeledNavs = [...markup.matchAll(/<nav\b(?![^>]*\baria-label=)[^>]*>/g)];
  if (unlabeledNavs.length > 0) {
    fail(
      `Expected every nav landmark to have an aria-label, found ${unlabeledNavs.length}`,
    );
  }

  const unsafeBlankTargets = getAnchors(markup).filter((anchor) => {
    if (anchor.attrs.target !== '_blank') {
      return false;
    }

    const relTokens = new Set((anchor.attrs.rel ?? '').split(/\s+/).filter(Boolean));
    return !relTokens.has('noreferrer') && !relTokens.has('noopener');
  });

  if (unsafeBlankTargets.length > 0) {
    fail(
      `Expected target=_blank links to include rel=noreferrer or rel=noopener, found ${unsafeBlankTargets.length}`,
    );
  }
}
