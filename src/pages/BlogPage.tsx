import { useMemo, useState } from 'react';
import BlogCard from '../components/portfolio/BlogCard';
import Seo from '../components/seo/Seo';
import BlogCategoryTabs, {
  type BlogCategoryFilter,
} from '../components/portfolio/BlogCategoryTabs';
import { blogCategories, blogPosts, markdownSupportNotes } from '../data/blogPosts';
import type { BlogCategoryId } from '../types/blog';
import { routeSeo } from '../utils/seo';

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategoryFilter>('all');

  const postCounts = useMemo(
    () =>
      blogCategories.reduce(
        (counts, category) => ({
          ...counts,
          [category.id]: blogPosts.filter((post) => post.category === category.id)
            .length,
        }),
        {} as Record<BlogCategoryId, number>,
      ),
    [],
  );

  const visibleCategories = blogCategories.filter(
    (category) => activeCategory === 'all' || activeCategory === category.id,
  );

  return (
    <section className="page-card blog-page" aria-labelledby="page-title">
      <Seo {...routeSeo.blog} />
      <p className="eyebrow">Blog / Insights</p>
      <h1 id="page-title">Algorithm Episodes, Notes, and Learning Logs</h1>
      <p className="intro">
        A foundation for Algorithm of the Day episodes, technical notes, project case
        studies, and transparent learning logs.
      </p>
      <p className="page-note">
        Initial entries are clearly labeled placeholders. The route currently renders
        typed TypeScript previews while the Markdown/MDX publishing model is decided in
        a later phase.
      </p>

      <BlogCategoryTabs
        activeCategory={activeCategory}
        categories={blogCategories}
        postCounts={postCounts}
        onCategoryChange={setActiveCategory}
      />

      <div className="blog-category-stack">
        {visibleCategories.map((category) => {
          const posts = blogPosts.filter((post) => post.category === category.id);

          return (
            <section
              key={category.id}
              className="blog-category-section"
              aria-labelledby={category.id}
            >
              <div className="section-heading">
                <p className="eyebrow">{category.label}</p>
                <h2 id={category.id}>{category.label}</h2>
                <p>{category.description}</p>
              </div>

              <div
                className="card-grid blog-grid"
                aria-label={`${category.label} post previews`}
              >
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <aside
        className="info-panel markdown-roadmap"
        aria-labelledby="markdown-roadmap-title"
      >
        <h2 id="markdown-roadmap-title">Future Markdown/MDX support</h2>
        <ul>
          {markdownSupportNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </aside>
    </section>
  );
}

export default BlogPage;
