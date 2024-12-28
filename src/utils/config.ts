export const APP_BLOG = {
  isEnabled: true,
  isRelatedPostsEnabled: true,
  postsPerPage: 6,
  post: {
    isEnabled: true,
    permalink: 'blog/%slug%',
    robots: {
      index: true,
      follow: true,
    },
  },
  list: {
    isEnabled: true,
    pathname: 'blog',
    robots: {
      index: true,
      follow: true,
    },
  },
  category: {
    isEnabled: true,
    pathname: 'category',
    robots: {
      index: true,
      follow: true,
    },
  },
  tag: {
    isEnabled: true,
    pathname: 'tag',
    robots: {
      index: true,
      follow: true,
    },
  },
};

export const SITE = {
  name: 'Your Site',
  title: 'Your Site Title',
  description: 'Your site description',
  language: 'en',
  textDirection: 'ltr',
};

export const METADATA = {
  title: {
    default: SITE.title,
    template: '%s — ' + SITE.name,
  },
  description: SITE.description,
};

export default {
  SITE,
  METADATA,
  APP_BLOG,
}; 