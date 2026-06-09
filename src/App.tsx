import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { navigationItems } from './data/navigation';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import LinksPage from './pages/LinksPage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import { routes } from './utils/routes';

function App() {
  return (
    <BrowserRouter>
      <main className="app-shell">
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

        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.about} element={<AboutPage />} />
          <Route path={routes.projects} element={<ProjectsPage />} />
          <Route path={routes.projectDetail} element={<ProjectDetailPage />} />
          <Route path={routes.skills} element={<SkillsPage />} />
          <Route path={routes.blog} element={<BlogPage />} />
          <Route path={routes.contact} element={<ContactPage />} />
          <Route path={routes.links} element={<LinksPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
