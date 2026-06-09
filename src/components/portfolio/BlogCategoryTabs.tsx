import type { BlogCategory, BlogCategoryId } from '../../types/blog';

export type BlogCategoryFilter = 'all' | BlogCategoryId;

type BlogCategoryTabsProps = {
  activeCategory: BlogCategoryFilter;
  categories: readonly BlogCategory[];
  postCounts: Readonly<Record<BlogCategoryId, number>>;
  onCategoryChange: (category: BlogCategoryFilter) => void;
};

function BlogCategoryTabs({
  activeCategory,
  categories,
  postCounts,
  onCategoryChange,
}: BlogCategoryTabsProps) {
  const totalPostCount = categories.reduce(
    (total, category) => total + postCounts[category.id],
    0,
  );

  return (
    <div className="blog-category-tabs" aria-label="Blog categories">
      <button
        type="button"
        aria-pressed={activeCategory === 'all'}
        onClick={() => onCategoryChange('all')}
      >
        All categories <span>{totalPostCount}</span>
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          aria-pressed={activeCategory === category.id}
          onClick={() => onCategoryChange(category.id)}
        >
          {category.label} <span>{postCounts[category.id]}</span>
        </button>
      ))}
    </div>
  );
}

export default BlogCategoryTabs;
