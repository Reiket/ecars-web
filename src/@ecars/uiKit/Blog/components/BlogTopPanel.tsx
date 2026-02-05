import type {FC} from 'react';
import {Icons, LinkWithIcon} from 'ecars-web-lib';
import {PageUrls} from '@ecars/constants/page-urls';

export const BlogTopPanel: FC = () => (
  <div className="blog__top">
    <h2 className="blog__title section-title">Read our blog</h2>
    <LinkWithIcon
      RightIcon={Icons.ArrowNarrowRight}
      to={PageUrls.BLOG_CATALOG}
      color="green"
    >
      All articles
    </LinkWithIcon>
  </div>
);
