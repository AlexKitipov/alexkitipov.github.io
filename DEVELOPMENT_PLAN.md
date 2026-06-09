# Professional Portfolio Transformation Plan

## 0. Executive Summary

This repository is currently a lightweight GitHub Pages site built from static HTML files, inline CSS, one shared background image, and several screenshot assets. It already contains useful personal and project signals: Aleksandar Kitipov, Plovdiv/Bulgaria background, bilingual Bulgarian/English presentation, the `kitipov.net` custom domain, and the creative project concept **“Алгоритъмът на деня | Algorithm of the Day.”**

The recommended transformation is to rebuild the site as a modern, accessible, maintainable portfolio application using:

- **React + TypeScript + Vite** for a typed component-driven frontend.
- **Tailwind CSS** for consistent responsive styling.
- **React Router** for page routing.
- **Content data files** for projects, skills, socials, biography, and posts.
- **Vitest + React Testing Library** for component and utility tests.
- **ESLint + Prettier** for code quality.
- **Static generation-friendly deployment** that works on GitHub Pages, Render, Vercel, and Netlify.

The first production objective should be a polished static portfolio MVP with no backend dependency. Contact forms, CMS, analytics, and blog automation can be added later.

---

## 1. Repository Audit

### 1.1 Current File Inventory

| File                                | Current purpose                                                                                                             | Useful for new portfolio                                                                        | Recommendation                                                                                                                                               |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `index.html`                        | Static homepage for “Algorithm of the Day” with inline styling, navigation, contact details, and a JavaScript alert button. | Provides title, project concept, bilingual tone, contact references, and original visual style. | Replace with Vite root HTML. Move reusable text into structured data. Remove inline CSS and demo button.                                                     |
| `about.html`                        | Static about page with biography, role, project philosophy, episode format, archive concept, and links.                     | Most valuable content source. Contains biography and project narrative.                         | Reuse and rewrite into professional portfolio sections. Move project details into `projects` or blog/category data.                                          |
| `contacts.html`                     | Static contact page with emails, phone, full street address, Facebook, GitHub, Colab, Copilot links.                        | Contains contact channels and social/project links.                                             | Reuse only approved public channels. Do **not** publish full street address by default. Consider replacing phone with optional contact CTA.                  |
| `links.html`                        | Static links page with project links, emails, Facebook, Copilot, GitHub, Colab, Notepad++, Python.                          | Useful as social/resource inventory.                                                            | Replace with curated `/links` or merge into footer/contact/project sections. Remove unrelated Copilot WhatsApp reference unless intentionally part of brand. |
| `README.md`                         | Mixed Bulgarian/English repo description, screenshot embeds, GitHub Pages instructions, and demo-template disclaimers.      | Contains domain, purpose, verification token, and current site description.                     | Rewrite after implementation to describe the actual portfolio, setup, scripts, deployment, and content editing workflow.                                     |
| `CNAME`                             | GitHub Pages custom domain: `kitipov.net`.                                                                                  | Required for GitHub Pages custom domain.                                                        | Preserve in `public/CNAME` or root deployment output.                                                                                                        |
| `LICENSE`                           | MIT License, copyright Aleksandar Kitipov 2025.                                                                             | Useful legal baseline.                                                                          | Preserve. Consider updating year range if desired.                                                                                                           |
| `background.png`                    | 1024×1024 PNG background used by all HTML pages.                                                                            | Could be reused as an initial brand texture or archive asset.                                   | Optimize/compress, rename to semantic path, or replace with modern gradient/illustration.                                                                    |
| `Screenshot_28-11-2025_17016_.jpeg` | Screenshot asset referenced by README.                                                                                      | Useful only as “legacy site” documentation.                                                     | Move to `docs/legacy/` or remove after redesign.                                                                                                             |
| `Screenshot_28-11-2025_17148_.jpeg` | Screenshot asset referenced by README.                                                                                      | Useful only as “legacy site” documentation.                                                     | Move to `docs/legacy/` or remove after redesign.                                                                                                             |
| `Screenshot_28-11-2025_17355_.jpeg` | Screenshot asset referenced by README.                                                                                      | Useful only as “legacy site” documentation.                                                     | Move to `docs/legacy/` or remove after redesign.                                                                                                             |
| `Screenshot_28-11-2025_17523_.jpeg` | Screenshot asset referenced by README.                                                                                      | Useful only as “legacy site” documentation.                                                     | Move to `docs/legacy/` or remove after redesign.                                                                                                             |

### 1.2 Existing Structure Assessment

Current structure:

```text
.
├── CNAME
├── LICENSE
├── README.md
├── about.html
├── background.png
├── contacts.html
├── index.html
├── links.html
├── Screenshot_28-11-2025_17016_.jpeg
├── Screenshot_28-11-2025_17148_.jpeg
├── Screenshot_28-11-2025_17355_.jpeg
└── Screenshot_28-11-2025_17523_.jpeg
```

Strengths:

- Very small and easy to deploy.
- Already works with GitHub Pages and custom domain.
- Clear navigation concept: Home, About, Contacts, Links.
- Strong bilingual identity.
- Clear flagship project: **Algorithm of the Day**.
- Simple content that can be converted into structured portfolio data.

Weaknesses:

- Inline CSS duplicated across pages.
- No component reuse.
- No build system.
- No TypeScript or linting.
- No automated tests.
- No SEO metadata beyond basic titles.
- No Open Graph/Twitter card metadata.
- No sitemap or robots file.
- No accessible landmarks beyond basic HTML structure.
- Navigation is fixed but not optimized for mobile.
- Personal contact information is too exposed for a professional public site.
- README contains conflicting messaging: official personal site plus invalid demo-template disclaimer.
- Current UI reads as an educational prototype, not a professional portfolio.

### 1.3 Content and Personal Information Extracted

> Privacy note: the current repository includes highly sensitive public personal information, including phone numbers and a street address. The new portfolio should not publish these by default unless explicitly confirmed.

Reusable identity information:

- Name: **Aleksandar Kitipov** / **Александър Китипов**.
- Location: **Plovdiv, Bulgaria**.
- Birth year currently stated: **1976**. Use only if intentionally public; otherwise omit.
- Languages/content style: Bulgarian and English.
- Domain: **kitipov.net**.
- GitHub username/reference: **AlexKitipov**.
- Facebook page/name: **Aleksandar Kitipov**.

Reusable project references:

- **Algorithm of the Day / Алгоритъмът на деня**.
- GitHub project URL: `https://github.com/AlexKitipov/-Algorithm-of-the-Day-`.
- Google Colab notebook URL: `https://colab.research.google.com/drive/1QFMujrV8aajNQTwUCzmd_V74PKa_2e4L#scrollTo=eba04bcd`.

Reusable skills and strengths inferred from repository content:

- Static web publishing with GitHub Pages.
- HTML and basic CSS.
- JavaScript basics.
- GitHub workflow and repository hosting.
- Google Colab usage.
- Python learning interest/reference.
- Notepad++ workflow.
- Concept development and creative direction.
- Project architecture and ritual/episode-format design.
- Bilingual Bulgarian/English communication.
- AI-assisted collaboration with tools such as Copilot and Gemini.
- Community/media concept development.

Potentially useful narrative elements:

- “Digital business card, contact hub, and learning prototype.”
- “Director and architect” of the project.
- “A living stage where algorithms and people create a new type of media.”
- Episode format: Prologue, Fact, Metaphor, Ritual, Music, Community question.
- Archive concept: episodes, audio, journal, community, assets.

Content to replace or remove:

- The “Натисни ме” alert button on the homepage.
- The “Coming soon” official site text, because the domain is already configured.
- Full street address from public contact page.
- Copilot WhatsApp phone number, unless intentionally documented as an external resource.
- Generic demo-template README sections once the site becomes a real portfolio.
- Duplicated inline CSS across HTML files.
- Screenshot assets from README unless preserved as legacy documentation.

---

## 2. Technical Architecture Proposal

### 2.1 Recommended Stack

Confirmed stack:

| Area       | Recommendation                  | Reason                                                              |
| ---------- | ------------------------------- | ------------------------------------------------------------------- |
| Framework  | React                           | Excellent component ecosystem and portfolio maintainability.        |
| Language   | TypeScript                      | Safer content models, props, routing data, and utility functions.   |
| Build tool | Vite                            | Fast local development and static build output.                     |
| Styling    | Tailwind CSS                    | Fast responsive design with consistent tokens.                      |
| Routing    | React Router                    | Supports static portfolio routes and future detail pages.           |
| Icons      | `lucide-react` or `react-icons` | Lightweight visual system. Prefer `lucide-react` for consistency.   |
| Animation  | Framer Motion or CSS-only       | Use CSS/Tailwind first; add Framer Motion only where it adds value. |
| Testing    | Vitest + React Testing Library  | Native Vite-compatible testing.                                     |
| Linting    | ESLint                          | TypeScript/React quality rules.                                     |
| Formatting | Prettier                        | Consistent code style.                                              |
| Deployment | Static hosting                  | Works on GitHub Pages, Render, Vercel, Netlify.                     |

Adjustment from original proposal:

- Use **React 19 or current stable React** if Vite scaffolding provides it; React 18 remains acceptable. Avoid pinning to outdated versions in the plan.
- Use **CSS variables + Tailwind theme tokens** rather than hard-coding colors across components.
- Defer Zustand unless state grows beyond theme/navigation/form state. Context and local state are enough for MVP.
- Defer backend contact form until privacy and provider are confirmed.
- Prefer static Markdown/MDX or typed data files before adopting a CMS.

### 2.2 Target Folder Structure

```text
.
├── .github/
│   └── workflows/
│       ├── deploy-github-pages.yml
│       └── quality.yml
├── public/
│   ├── CNAME
│   ├── favicon.svg
│   ├── og-image.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── vite-env.d.ts
│   ├── assets/
│   │   ├── images/
│   │   │   ├── background.png
│   │   │   ├── legacy/
│   │   │   └── profile-placeholder.svg
│   │   └── icons/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── ExternalLink.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   └── SkipLink.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── MainLayout.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   └── Navigation.tsx
│   │   ├── portfolio/
│   │   │   ├── ContactCard.tsx
│   │   │   ├── ExperienceTimeline.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectFilters.tsx
│   │   │   ├── SkillGroup.tsx
│   │   │   └── SocialLinks.tsx
│   │   └── seo/
│   │       └── Seo.tsx
│   ├── data/
│   │   ├── algorithmOfTheDay.ts
│   │   ├── biography.ts
│   │   ├── navigation.ts
│   │   ├── projects.ts
│   │   ├── site.ts
│   │   ├── skills.ts
│   │   └── socialLinks.ts
│   ├── hooks/
│   │   ├── useActiveSection.ts
│   │   ├── usePrefersReducedMotion.ts
│   │   └── useTheme.ts
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── BlogPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── LinksPage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── ProjectDetailPage.tsx
│   │   ├── ProjectsPage.tsx
│   │   └── SkillsPage.tsx
│   ├── styles/
│   │   ├── globals.css
│   │   └── theme.css
│   ├── types/
│   │   ├── blog.ts
│   │   ├── contact.ts
│   │   ├── navigation.ts
│   │   ├── project.ts
│   │   └── skill.ts
│   └── utils/
│       ├── analytics.ts
│       ├── formatDate.ts
│       ├── routes.ts
│       └── seo.ts
├── tests/
│   ├── components/
│   ├── pages/
│   └── utils/
├── .env.example
├── .eslintrc.cjs
├── .prettierrc
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### 2.3 Routing Structure

| Route             | Page component      | Purpose                                                                                     |
| ----------------- | ------------------- | ------------------------------------------------------------------------------------------- |
| `/`               | `HomePage`          | Hero, positioning statement, featured project, featured skills, CTA.                        |
| `/about`          | `AboutPage`         | Biography, journey, philosophy, language background, collaboration style.                   |
| `/projects`       | `ProjectsPage`      | Filterable project grid.                                                                    |
| `/projects/:slug` | `ProjectDetailPage` | Detail view for Algorithm of the Day and future projects.                                   |
| `/skills`         | `SkillsPage`        | Technical, creative, communication, and tooling skills.                                     |
| `/blog`           | `BlogPage`          | Insights, Algorithm of the Day episodes, notes. Initial version can be static placeholders. |
| `/contact`        | `ContactPage`       | Safe public contact methods and social links.                                               |
| `/links`          | `LinksPage`         | Curated external links, project resources, GitHub/Colab.                                    |
| `*`               | `NotFoundPage`      | Friendly 404 page with navigation back to key sections.                                     |

GitHub Pages SPA note:

- Either add a `404.html` redirect strategy for React Router, or use hash routing if avoiding server rewrites.
- Preferred: use `BrowserRouter` plus a GitHub Pages-compatible `404.html` fallback generated/copied during build.

### 2.4 Data Models

Project model:

```ts
export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  category: 'portfolio' | 'media' | 'education' | 'tooling' | 'experiment';
  status: 'concept' | 'in-progress' | 'launched' | 'archived';
  technologies: string[];
  highlights: string[];
  links: Array<{
    label: string;
    href: string;
    type: 'github' | 'demo' | 'notebook' | 'article' | 'external';
  }>;
  image?: string;
  featured?: boolean;
}
```

Skill model:

```ts
export interface Skill {
  name: string;
  group: 'frontend' | 'programming' | 'tools' | 'ai' | 'creative' | 'communication';
  level: 'learning' | 'working' | 'strong' | 'expert';
  evidence?: string;
}
```

Blog/post model:

```ts
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'algorithm-of-the-day' | 'technical-note' | 'case-study' | 'learning-log';
  date: string;
  tags: string[];
  draft?: boolean;
}
```

Social link model:

```ts
export interface SocialLink {
  label: string;
  href: string;
  platform:
    | 'github'
    | 'facebook'
    | 'email'
    | 'colab'
    | 'website'
    | 'linkedin'
    | 'other';
  public: boolean;
}
```

### 2.5 Component Architecture

Core layout components:

- `MainLayout`: wraps header, main landmark, footer.
- `Header`: sticky top navigation, brand, theme toggle.
- `Navigation`: desktop nav links with active state.
- `MobileNav`: accessible menu button and collapsible nav.
- `Footer`: copyright, domain, social links, sitemap-style nav.
- `SkipLink`: keyboard shortcut to main content.

Common UI components:

- `Container`: consistent max-width and horizontal padding.
- `SectionHeading`: eyebrow, title, subtitle pattern.
- `Button`: primary, secondary, ghost, external variants.
- `Badge`: technology/category/status labels.
- `ExternalLink`: adds `target`, `rel`, accessible labels.

Portfolio components:

- `ProjectCard`: project preview with status, tech tags, links.
- `ProjectFilters`: category/status/technology filtering.
- `SkillGroup`: grouped skill cards with evidence.
- `ExperienceTimeline`: educational/professional timeline placeholders.
- `ContactCard`: email/social CTA without exposing sensitive data.
- `SocialLinks`: reusable list of icons and labels.

SEO components:

- `Seo`: route-level title, description, canonical URL, Open Graph metadata.

### 2.6 Styling Strategy

Design tokens:

- Primary: `#0066CC`.
- Secondary: `#00AA66`.
- Dark background: `#0A0E27`.
- Dark surface: `#1A1F3A`.
- Text primary: `#FFFFFF`.
- Text secondary: `#B0B8D4`.
- Accent: `#FFD966`.
- Warning/error: `#FF6B6B`.

Recommended strategy:

- Define CSS variables in `src/styles/theme.css`.
- Map variables into `tailwind.config.ts`.
- Support dark theme as default because current brand is dark and atmospheric.
- Add light theme in Phase 2 via `data-theme="light"` or Tailwind class strategy.
- Use responsive breakpoints: mobile-first, then `sm`, `md`, `lg`, `xl`.
- Use accessible focus rings globally.
- Use `prefers-reduced-motion` to disable heavy animations.
- Prefer subtle animations: fade-in, card hover, nav underline, hero gradient movement.

---

## 3. Detailed Implementation Plan Grouped by Pull Requests

### PR 1 — Scaffold Vite React TypeScript Application

**Title:** Scaffold modern React TypeScript portfolio app

**Description:**
Replace the static HTML-only site foundation with a Vite-powered React TypeScript app while preserving domain support and legacy files for reference.

**Files to create:**

- `package.json`
- `index.html`
- `vite.config.ts`
- `tsconfig.json`
- `tsconfig.node.json`
- `src/main.tsx`
- `src/App.tsx`
- `src/vite-env.d.ts`
- `src/styles/globals.css`
- `public/CNAME`
- `.env.example`

**Files to modify:**

- `README.md`

**Files to move/archive:**

- Move old `index.html`, `about.html`, `contacts.html`, `links.html` to `docs/legacy/` or preserve excerpts in documentation before replacement.
- Move screenshots to `docs/legacy/screenshots/` if retained.
- Move `background.png` to `src/assets/images/background.png` or `public/assets/background.png`.

**Acceptance criteria:**

- `npm install` completes.
- `npm run dev` starts the app locally.
- `npm run build` produces a static `dist/` directory.
- `CNAME` is included in final GitHub Pages deployment output.
- Initial React app renders without console errors.

**Reviewer notes:**

- This PR intentionally focuses on project foundation, not final design.
- Confirm whether legacy static files should be archived or removed.

---

### PR 2 — Add Code Quality Tooling

**Title:** Add linting, formatting, and baseline quality scripts

**Description:**
Introduce ESLint, Prettier, TypeScript checking, and package scripts to enforce consistency before building features.

**Files to create:**

- `.eslintrc.cjs` or `eslint.config.js`
- `.prettierrc`
- `.prettierignore`
- `.eslintignore` if using legacy ESLint config

**Files to modify:**

- `package.json`
- `README.md`

**Acceptance criteria:**

- `npm run lint` runs successfully.
- `npm run format:check` runs successfully.
- `npm run typecheck` runs successfully.
- Scripts are documented in README.

**Reviewer notes:**

- Keep rules strict enough to catch errors but not so strict that early content work is blocked.

---

### PR 3 — Establish Design System and Layout

**Title:** Build responsive layout and design system foundation

**Description:**
Add the global theme, Tailwind configuration, reusable layout components, and accessible navigation.

**Files to create:**

- `tailwind.config.ts`
- `postcss.config.js`
- `src/styles/theme.css`
- `src/components/layout/MainLayout.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/Navigation.tsx`
- `src/components/layout/MobileNav.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/common/Container.tsx`
- `src/components/common/Button.tsx`
- `src/components/common/Badge.tsx`
- `src/components/common/SectionHeading.tsx`
- `src/components/common/SkipLink.tsx`
- `src/data/navigation.ts`
- `src/data/site.ts`
- `src/types/navigation.ts`

**Files to modify:**

- `src/App.tsx`
- `src/main.tsx`
- `src/styles/globals.css`

**Acceptance criteria:**

- Header and footer render across all pages.
- Desktop navigation and mobile navigation are keyboard accessible.
- Skip link appears on focus and moves to main content.
- Layout is responsive from 320px to desktop widths.
- Brand colors are implemented as theme tokens.

**Reviewer notes:**

- Verify color contrast for text, nav links, buttons, and focus states.

---

### PR 4 — Add Routing and Page Shells

**Title:** Add portfolio routes and page shells

**Description:**
Implement React Router and create initial page shells for the core portfolio sections.

**Files to create:**

- `src/pages/HomePage.tsx`
- `src/pages/AboutPage.tsx`
- `src/pages/ProjectsPage.tsx`
- `src/pages/ProjectDetailPage.tsx`
- `src/pages/SkillsPage.tsx`
- `src/pages/BlogPage.tsx`
- `src/pages/ContactPage.tsx`
- `src/pages/LinksPage.tsx`
- `src/pages/NotFoundPage.tsx`
- `src/utils/routes.ts`

**Files to modify:**

- `src/App.tsx`
- `src/data/navigation.ts`

**Acceptance criteria:**

- Every route renders a unique page title and content shell.
- Unknown routes render `NotFoundPage`.
- Active navigation state works.
- Direct navigation and browser back/forward work locally.

**Reviewer notes:**

- Confirm GitHub Pages fallback approach before production deployment.

---

### PR 5 — Build Structured Content Data Layer

**Title:** Convert legacy portfolio content into typed data

**Description:**
Extract reusable repository content into typed data modules for biography, skills, projects, social links, and Algorithm of the Day.

**Files to create:**

- `src/types/project.ts`
- `src/types/skill.ts`
- `src/types/contact.ts`
- `src/types/blog.ts`
- `src/data/biography.ts`
- `src/data/projects.ts`
- `src/data/skills.ts`
- `src/data/socialLinks.ts`
- `src/data/algorithmOfTheDay.ts`

**Files to modify:**

- `src/pages/HomePage.tsx`
- `src/pages/AboutPage.tsx`
- `src/pages/ProjectsPage.tsx`
- `src/pages/SkillsPage.tsx`
- `src/pages/ContactPage.tsx`
- `src/pages/LinksPage.tsx`

**Acceptance criteria:**

- Legacy content is represented as typed reusable data.
- Sensitive address information is excluded or marked private and not rendered.
- Contact channels use safe public defaults.
- Algorithm of the Day exists as a featured project.

**Reviewer notes:**

- Review all personal information before publishing.
- Confirm preferred public email and whether phone should be shown.

---

### PR 6 — Implement Home and About Pages

**Title:** Implement polished Home and About pages

**Description:**
Create professional homepage and about page content using the new design system and typed data.

**Files to create:**

- `src/components/portfolio/Hero.tsx`
- `src/components/portfolio/FeaturedProjects.tsx`
- `src/components/portfolio/SkillsPreview.tsx`
- `src/components/portfolio/AboutNarrative.tsx`

**Files to modify:**

- `src/pages/HomePage.tsx`
- `src/pages/AboutPage.tsx`
- `src/data/biography.ts`
- `src/data/projects.ts`
- `src/data/skills.ts`

**Acceptance criteria:**

- Homepage includes hero, short bio, featured project, skills preview, and contact CTA.
- About page includes biography, background, philosophy, collaboration style, and current focus.
- Content is available in Bulgarian/English style or clearly bilingual sections.
- No layout shift or broken responsive behavior.

**Reviewer notes:**

- Biography should sound professional and concise; keep poetic phrasing as a brand element, not the entire page voice.

---

### PR 7 — Implement Projects and Algorithm of the Day Detail

**Title:** Add projects showcase and Algorithm of the Day case study

**Description:**
Build project cards, filter controls, and a detailed case study for Algorithm of the Day.

**Files to create:**

- `src/components/portfolio/ProjectCard.tsx`
- `src/components/portfolio/ProjectFilters.tsx`
- `src/components/portfolio/ProjectLinks.tsx`
- `src/components/portfolio/ProjectHero.tsx`
- `src/components/portfolio/ProjectHighlights.tsx`

**Files to modify:**

- `src/pages/ProjectsPage.tsx`
- `src/pages/ProjectDetailPage.tsx`
- `src/data/projects.ts`
- `src/data/algorithmOfTheDay.ts`

**Acceptance criteria:**

- `/projects` shows at least one featured project and placeholders for future projects.
- `/projects/algorithm-of-the-day` renders a detailed case study.
- GitHub and Colab links open correctly.
- Project statuses and technologies are visible.
- Filtering works or is hidden until enough projects exist.

**Reviewer notes:**

- Avoid overstating project maturity; label concept/in-progress accurately.

---

### PR 8 — Implement Skills, Links, and Contact Pages

**Title:** Add skills matrix, curated links, and safe contact page

**Description:**
Implement supporting portfolio pages with grouped skills, curated external resources, and privacy-aware contact options.

**Files to create:**

- `src/components/portfolio/SkillGroup.tsx`
- `src/components/portfolio/SocialLinks.tsx`
- `src/components/portfolio/ContactCard.tsx`
- `src/components/portfolio/ResourceList.tsx`

**Files to modify:**

- `src/pages/SkillsPage.tsx`
- `src/pages/LinksPage.tsx`
- `src/pages/ContactPage.tsx`
- `src/data/skills.ts`
- `src/data/socialLinks.ts`

**Acceptance criteria:**

- Skills are grouped by frontend, programming, tools, AI collaboration, creative direction, and communication.
- Links page includes GitHub project, Colab notebook, GitHub, Python, and other curated resources.
- Contact page avoids full street address.
- Contact links use accessible labels and safe `mailto:` usage.

**Reviewer notes:**

- Confirm final public email selection.
- Add LinkedIn only if an official profile is available.

---

### PR 9 — Add Blog/Insights Foundation

**Title:** Add blog foundation for Algorithm of the Day and learning notes

**Description:**
Create a blog/insights area that can host Algorithm of the Day episodes, technical notes, case studies, and learning logs.

**Files to create:**

- `src/components/portfolio/BlogCard.tsx`
- `src/components/portfolio/BlogCategoryTabs.tsx`
- `src/data/blogPosts.ts`
- Optional: `src/content/posts/algorithm-of-the-day-introduction.md`

**Files to modify:**

- `src/pages/BlogPage.tsx`
- `src/types/blog.ts`
- `src/data/navigation.ts`

**Acceptance criteria:**

- `/blog` lists post previews grouped by category.
- Algorithm of the Day is represented as a blog category.
- Initial posts may be placeholders but must be clearly labeled.
- Future Markdown/MDX support is documented.

**Reviewer notes:**

- Decide whether blog content should be plain TypeScript data, Markdown, or MDX in later phases.

---

### PR 10 — SEO, Metadata, Sitemap, and Social Sharing

**Title:** Add SEO metadata and static discovery files

**Description:**
Improve discoverability with route-level SEO, robots.txt, sitemap, canonical URLs, and Open Graph metadata.

**Files to create:**

- `src/components/seo/Seo.tsx`
- `src/utils/seo.ts`
- `public/robots.txt`
- `public/sitemap.xml`
- `public/og-image.png` or `public/og-image.svg`
- `public/favicon.svg`

**Files to modify:**

- `src/pages/*.tsx`
- `src/data/site.ts`
- `index.html`

**Acceptance criteria:**

- Each page has a meaningful title and description.
- Canonical URLs use `https://kitipov.net`.
- Social previews render title, description, and image.
- `robots.txt` points to sitemap.
- Sitemap includes all public routes.

**Reviewer notes:**

- Verify domain choice between `kitipov.net` and any GitHub Pages URL before generating final canonical links.

---

### PR 11 — Testing and Accessibility Coverage

**Title:** Add testing and accessibility checks

**Description:**
Introduce unit/component tests, route smoke tests, and accessibility checks for key components.

**Files to create:**

- `vitest.config.ts` or test config in `vite.config.ts`
- `tests/setup.ts`
- `tests/components/Header.test.tsx`
- `tests/components/ProjectCard.test.tsx`
- `tests/pages/HomePage.test.tsx`
- `tests/utils/seo.test.ts`

**Files to modify:**

- `package.json`
- `README.md`

**Acceptance criteria:**

- `npm run test` passes.
- `npm run test:coverage` produces a report.
- Header/navigation tests cover keyboard-accessible behavior.
- Project cards render external links safely.
- Basic accessibility assertions pass.

**Reviewer notes:**

- Add Playwright later for full browser testing if desired.

---

### PR 12 — Deployment Workflows for Multi-Platform Hosting

**Title:** Add deployment configuration for GitHub Pages, Render, Vercel, and Netlify

**Description:**
Document and configure static deployment across the requested hosting providers.

**Files to create:**

- `.github/workflows/deploy-github-pages.yml`
- `.github/workflows/quality.yml`
- `render.yaml`
- `netlify.toml`
- `vercel.json`

**Files to modify:**

- `README.md`
- `vite.config.ts`
- `package.json`

**Acceptance criteria:**

- GitHub Actions can build and deploy to GitHub Pages.
- Render static site config points to `dist`.
- Vercel config supports SPA fallback.
- Netlify config supports SPA fallback.
- README includes deployment steps for every platform.

**Reviewer notes:**

- Only one production host should own canonical DNS at a time.
- GitHub Pages requires `CNAME`; Vercel/Netlify require DNS configuration in provider dashboard.

---

### PR 13 — Performance, Image Optimization, and Final Polish

**Title:** Optimize performance and polish production portfolio

**Description:**
Optimize assets, refine animations, finalize responsive behavior, and add production polish.

**Files to create:**

- Optimized images under `src/assets/images/` or `public/assets/`
- Optional `scripts/generate-sitemap.ts`

**Files to modify:**

- `src/components/**/*`
- `src/pages/**/*`
- `src/styles/**/*`
- `README.md`

**Acceptance criteria:**

- Images are compressed and sized appropriately.
- Lighthouse targets: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+.
- No large unused dependencies.
- Animations respect `prefers-reduced-motion`.
- Mobile navigation and content spacing are polished.

**Reviewer notes:**

- Validate final production build locally and on the selected hosting provider.

---

## 4. Content Integration Plan

### 4.1 Content to Reuse

Reuse directly, with professional editing:

- Site name/project title: **Algorithm of the Day / Алгоритъмът на деня**.
- Bilingual identity: Bulgarian and English headings or content summaries.
- About-page biography: born and educated in Plovdiv, Bulgaria, if owner approves public use.
- Role framing: architect/director of the Algorithm of the Day project.
- Project philosophy: people and algorithms creating a new media format together.
- Episode structure: Prologue, Fact, Metaphor, Ritual, Music, Community Question.
- Archive structure idea: episodes, audio, journal, community, assets.
- GitHub project link and Google Colab notebook link.
- Domain: `kitipov.net`.

Reuse carefully or only after confirmation:

- Email addresses.
- Phone numbers.
- Birth year.
- Facebook identity.

Do not reuse by default:

- Full street address.
- Copilot WhatsApp number.
- “Invalid demo template” README disclaimer in the public site.
- Screenshots as portfolio imagery, unless used on a legacy/archive page.

### 4.2 Missing Content to Create

Required for MVP:

- Professional headline, for example: “Creative technologist and digital media project architect.”
- Short hero bio in Bulgarian and/or English.
- One preferred public contact email.
- GitHub profile URL.
- LinkedIn URL, if available.
- Project status and timeline for Algorithm of the Day.
- A short list of technical skills with realistic proficiency levels.
- Profile image or polished avatar placeholder.
- Open Graph image.

Recommended for Phase 2:

- CV/resume PDF.
- Additional project entries beyond Algorithm of the Day.
- Case study metrics: goals, audience, technologies, outcomes.
- Blog/episode entries.
- Testimonials or collaborator quotes.
- Education/certification details.
- High-quality screenshots, diagrams, or visuals.

### 4.3 Suggested Placeholder Copy

Hero placeholder:

> I am Aleksandar Kitipov, a Plovdiv-based creative technologist building bilingual digital experiences, learning systems, and AI-assisted media concepts. My flagship project, Algorithm of the Day, explores how people and algorithms can turn facts, music, and community rituals into a new form of online media.

Short Bulgarian hero placeholder:

> Аз съм Александър Китипов — творчески технолог от Пловдив, който създава дигитални преживявания, учебни прототипи и AI‑асистирани медийни концепции.

Skills placeholders:

- Frontend: HTML, CSS, JavaScript, React, TypeScript.
- Styling: responsive design, Tailwind CSS, accessibility basics.
- Tools: GitHub Pages, Git, Google Colab, Notepad++.
- Programming/learning: Python fundamentals, JavaScript fundamentals.
- AI collaboration: Copilot, Gemini, prompt-guided ideation.
- Creative direction: media formats, episode structure, narrative design.
- Communication: Bulgarian and English.

Project placeholder for Algorithm of the Day:

- Title: Algorithm of the Day.
- Category: AI-assisted media / learning experiment.
- Status: In progress.
- Description: A bilingual media concept where current facts, metaphors, music, and community prompts are shaped into short ritual-like episodes.
- Technologies: HTML, CSS, JavaScript, GitHub Pages, Google Colab, Python learning, AI collaboration.
- Links: GitHub repository, Colab notebook.

Image placeholders:

- `profile-placeholder.svg`: initials or abstract portrait.
- `og-image.png`: dark gradient card with “Aleksandar Kitipov — Algorithm of the Day.”
- `project-algorithm-of-the-day.png`: diagram of episode format.

### 4.4 Algorithm of the Day Integration

Use Algorithm of the Day in three places:

1. **Featured Project** on the homepage.
   - Short summary.
   - “View case study” CTA.
   - GitHub/Colab links.

2. **Detailed Project Page** at `/projects/algorithm-of-the-day`.
   - Problem/opportunity.
   - Concept.
   - Role.
   - Episode format.
   - Archive model.
   - Tools used.
   - Current status and next milestones.

3. **Blog Category** at `/blog?category=algorithm-of-the-day` or visible category tabs.
   - Episode notes.
   - Scripts.
   - Reflections.
   - Community questions.
   - Learning logs.

Future content folder option:

```text
src/content/
└── algorithm-of-the-day/
    ├── 001-introduction.md
    ├── 002-fact-metaphor-ritual.md
    └── 003-community-format.md
```

---

## 5. Deployment Strategy

### 5.1 Build Output

All platforms should use the same commands:

```bash
npm install
npm run build
```

Static output directory:

```text
dist
```

Recommended scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "format": "prettier . --write",
    "format:check": "prettier . --check",
    "typecheck": "tsc -b --noEmit",
    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage"
  }
}
```

### 5.2 Environment Configuration

`.env.example`:

```bash
VITE_SITE_URL=https://kitipov.net
VITE_SITE_NAME="Aleksandar Kitipov"
VITE_CONTACT_EMAIL=example@example.com
VITE_ANALYTICS_PROVIDER=
VITE_PLAUSIBLE_DOMAIN=kitipov.net
VITE_GA_MEASUREMENT_ID=
```

Rules:

- Only expose values prefixed with `VITE_` because they are available in the browser bundle.
- Do not put secrets in frontend environment variables.
- Contact form backend keys must live in provider-side environment variables, not Vite variables.

### 5.3 GitHub Pages

Recommended approach:

- Use GitHub Actions to build and publish `dist/`.
- Keep `public/CNAME` with `kitipov.net`.
- Use `base: '/'` in Vite for custom domain root deployment.

GitHub Actions notes:

- Trigger on push to `main`.
- Run install, lint, typecheck, tests, build.
- Upload `dist` as Pages artifact.
- Deploy with `actions/deploy-pages`.

SPA fallback:

- Add a generated `404.html` copy of `index.html`, or implement GitHub Pages SPA redirect script.

### 5.4 Render

Render Static Site settings:

- Build command: `npm install && npm run build`.
- Publish directory: `dist`.
- Environment variables: copy public `VITE_*` values from `.env.example`.
- Redirect rule: `/*` to `/index.html` with status `200` for SPA fallback.

Optional `render.yaml`:

```yaml
services:
  - type: web
    name: kitipov-portfolio
    runtime: static
    buildCommand: npm install && npm run build
    staticPublishPath: dist
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
```

### 5.5 Vercel

Vercel settings:

- Framework preset: Vite.
- Build command: `npm run build`.
- Output directory: `dist`.
- Install command: `npm install`.

`vercel.json` SPA fallback:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### 5.6 Netlify

Netlify settings:

- Build command: `npm run build`.
- Publish directory: `dist`.

`netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 5.7 DNS and Canonical Hosting Notes

- Pick one canonical production host.
- If GitHub Pages remains canonical, keep `kitipov.net` pointed to GitHub Pages.
- Vercel/Netlify/Render can be used as previews or alternate deployments.
- SEO canonical URLs should always point to the chosen canonical domain.

---

## 6. Quality and Optimization Plan

### 6.1 ESLint Configuration

Recommended packages:

- `eslint`
- `typescript-eslint`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `eslint-plugin-jsx-a11y`
- `eslint-config-prettier`

Recommended rules:

- Enforce hooks rules.
- Warn on missing accessibility attributes.
- Disallow unused variables except intentionally prefixed `_` variables.
- Prefer explicit component prop types.
- Prevent React refresh-incompatible exports in component files.

### 6.2 Prettier Configuration

Suggested `.prettierrc`:

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100
}
```

### 6.3 Testing Strategy

Unit tests:

- `formatDate` utilities.
- SEO helper utilities.
- Route config helpers.

Component tests:

- Header navigation.
- Mobile navigation open/close behavior.
- Project cards.
- Skill groups.
- Contact links.

Page smoke tests:

- Home page renders hero and CTA.
- Projects page renders Algorithm of the Day.
- Contact page does not render private address.
- 404 page renders helpful navigation.

Accessibility tests:

- Use React Testing Library queries by role/name.
- Add `jest-axe` or `vitest-axe` in Phase 2.
- Check keyboard focus order manually during review.

Future end-to-end tests:

- Add Playwright for navigation, responsive menu, and route rendering.

### 6.4 Performance Optimizations

- Compress `background.png` or replace with CSS gradient/SVG.
- Use SVG icons instead of heavy icon bundles where possible.
- Lazy-load non-critical images.
- Avoid adding Framer Motion until necessary.
- Use route-level code splitting only if bundle grows significantly.
- Keep content data static and tree-shakeable.
- Use responsive `srcset` for profile/project images.
- Set explicit image dimensions to avoid layout shift.
- Avoid large third-party analytics scripts where possible.

### 6.5 SEO Improvements

- Unique title and meta description per route.
- Canonical URL per route.
- Open Graph image and metadata.
- Twitter card metadata.
- `robots.txt` and `sitemap.xml`.
- Semantic headings: one `h1` per page.
- JSON-LD structured data:
  - `Person` for Aleksandar Kitipov.
  - `WebSite` for kitipov.net.
  - `CreativeWork` or `Project`-style schema for Algorithm of the Day.
- Descriptive alt text for images.
- Human-readable URLs such as `/projects/algorithm-of-the-day`.

### 6.6 Accessibility Improvements

- Add skip-to-content link.
- Use semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Ensure keyboard navigation for mobile menu.
- Use visible focus styles.
- Ensure color contrast meets WCAG AA.
- Respect `prefers-reduced-motion`.
- Avoid text embedded inside images.
- Use accessible names for social links.
- Make external links explicit to screen readers if opening a new tab.
- Keep touch targets at least 44×44px.

### 6.7 Analytics Integration

Preferred privacy-friendly option:

- Plausible Analytics.
- Environment variable: `VITE_PLAUSIBLE_DOMAIN=kitipov.net`.
- Load script only in production.

Alternative:

- Google Analytics 4.
- Environment variable: `VITE_GA_MEASUREMENT_ID=G-...`.

Implementation notes:

- Analytics should be optional.
- Do not block rendering if analytics is not configured.
- Consider cookie/privacy implications if using GA.

---

## 7. Roadmap

### Phase 1 — Foundation and MVP Portfolio

Goal: Launch a professional static portfolio that replaces the prototype.

PRs:

1. Scaffold Vite React TypeScript application.
2. Add code quality tooling.
3. Establish design system and layout.
4. Add routing and page shells.
5. Build structured content data layer.
6. Implement Home and About pages.
7. Implement Projects and Algorithm of the Day detail.
8. Implement Skills, Links, and Contact pages.
9. Add SEO metadata and static discovery files.
10. Add deployment workflows.

Deliverables:

- Modern React portfolio.
- Static deployment-ready build.
- Safe public contact page.
- Featured Algorithm of the Day case study.
- SEO basics.
- GitHub Pages production deployment.

### Phase 2 — Content Depth and Quality

Goal: Add richer content, tests, accessibility coverage, and polish.

PRs:

9. Add blog/insights foundation.
10. Add testing and accessibility coverage.
11. Optimize performance and polish production portfolio.

Deliverables:

- Blog/insights section.
- Initial Algorithm of the Day posts.
- Better test coverage.
- Accessibility checks.
- Optimized assets.
- Lighthouse improvements.

### Phase 3 — Advanced Professional Features

Goal: Add optional interactive and operational features.

Potential PRs:

- Add resume/CV download and timeline.
- Add multilingual routing or language toggle.
- Add CMS or Markdown/MDX content pipeline.
- Add contact form with provider backend.
- Add newsletter signup.
- Add project screenshots and video demos.
- Add Playwright end-to-end tests.
- Add Lighthouse CI.
- Add preview deployments per PR.

Deliverables:

- Scalable content publishing workflow.
- Professional case studies.
- Optional backend integrations.
- Stronger CI/CD and monitoring.

---

## 8. Immediate Next Steps

1. Confirm public contact information:
   - Preferred email.
   - Whether phone should be visible.
   - Whether any physical location should be shown beyond “Plovdiv, Bulgaria.”

2. Confirm content direction:
   - Bulgarian-first, English-first, or bilingual side-by-side.
   - Professional tone vs. poetic/creative tone balance.

3. Confirm deployment priority:
   - GitHub Pages as canonical production host.
   - Vercel/Netlify/Render as preview/alternate hosts.

4. Execute PR 1:
   - Scaffold Vite React TypeScript.
   - Preserve `CNAME`.
   - Archive legacy static files.
   - Add initial scripts.

5. Execute PR 2 and PR 3 before adding substantial content:
   - Lock in tooling.
   - Build reusable design system and layout.

---

## 9. Production Readiness Checklist

Before final launch:

- [ ] No private street address is publicly rendered.
- [ ] Contact details are owner-approved.
- [ ] `npm run lint` passes.
- [ ] `npm run typecheck` passes.
- [ ] `npm run test:run` passes.
- [ ] `npm run build` passes.
- [ ] Routes work after direct refresh on chosen host.
- [ ] `CNAME` is included in deployment output for GitHub Pages.
- [ ] Sitemap and robots files are correct.
- [ ] Open Graph preview is verified.
- [ ] Lighthouse scores meet agreed targets.
- [ ] Mobile navigation is keyboard and touch accessible.
- [ ] All external links have safe `rel="noreferrer"` behavior.
- [ ] README describes the real project and setup workflow.
