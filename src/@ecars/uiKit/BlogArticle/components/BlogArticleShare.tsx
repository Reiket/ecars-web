import type {FC} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {ButtonCopy, LinkWithIcon} from 'ecars-web-lib';
import {blogArticleSocialConfig} from '@ecars/uiKit/BlogArticle/constants';

export const BlogArticleShare: FC<ElementProps> = ({block}) => {
  const currentUrl = window.location.href;
  return (
    <div className="blog-article__share">
      <p className="blog-article__share-text">Share:</p>
      <ul className="blog-article__socials">
        {blogArticleSocialConfig.map(({name, icon, getBaseHref}) => (
          <li
            key={name}
            className="blog-article__social"
          >
            <LinkWithIcon
              color="gray"
              href={getBaseHref(currentUrl)}
              LeftIcon={icon}
            >
              {name}
            </LinkWithIcon>
          </li>
        ))}

        <li className="blog-article__social">
          <ButtonCopy
            block={block}
            text="Copy link"
            copyHref={currentUrl}
          />
        </li>
      </ul>
    </div>
  );
};
