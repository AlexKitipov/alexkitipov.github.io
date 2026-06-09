import type { BlogPost } from '../../types/blog';

type BlogCardProps = {
  post: BlogPost;
};

const sourceLabels: Record<BlogPost['source'], string> = {
  'typescript-data': 'TypeScript preview',
  'markdown-placeholder': 'Markdown placeholder',
  'future-mdx': 'Future MDX candidate',
};

function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="info-panel blog-card">
      <div className="blog-card-header">
        <p className="status-label">{post.status}</p>
        {post.placeholder ? <span className="featured-pill">Placeholder</span> : null}
      </div>

      <h3>{post.title}</h3>
      <p>{post.summary}</p>

      <dl className="blog-meta" aria-label={`${post.title} metadata`}>
        <div>
          <dt>Date</dt>
          <dd>{post.dateLabel}</dd>
        </div>
        <div>
          <dt>Format</dt>
          <dd>{sourceLabels[post.source]}</dd>
        </div>
        <div>
          <dt>Read</dt>
          <dd>{post.readingTime}</dd>
        </div>
      </dl>

      {post.contentPath ? (
        <p className="blog-path">Future source: {post.contentPath}</p>
      ) : null}

      <div className="tag-list" aria-label={`${post.title} tags`}>
        {post.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}

export default BlogCard;
