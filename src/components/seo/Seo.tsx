import { useEffect } from 'react';
import { site } from '../../data/site';
import {
  defaultSeo,
  getAbsoluteAssetUrl,
  getCanonicalUrl,
  type SeoMeta,
} from '../../utils/seo';

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }

  element.href = href;
}

function Seo({
  title,
  description,
  path,
  imagePath = defaultSeo.imagePath,
  type = 'website',
  noindex = false,
}: SeoMeta) {
  useEffect(() => {
    const canonicalUrl = getCanonicalUrl(path);
    const imageUrl = getAbsoluteAssetUrl(imagePath ?? site.defaultImagePath);
    const robots = noindex ? 'noindex, nofollow' : 'index, follow';

    document.documentElement.lang = site.language;
    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'author', site.author);
    upsertMeta('name', 'robots', robots);
    upsertMeta('property', 'og:site_name', site.shortName);
    upsertMeta('property', 'og:locale', site.locale);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', imageUrl);
    upsertMeta('property', 'og:image:alt', `${site.shortName} social preview image`);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', imageUrl);
    upsertLink('canonical', canonicalUrl);
  }, [description, imagePath, noindex, path, title, type]);

  return null;
}

export default Seo;
