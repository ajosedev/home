import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import BlogPostHeader from './BlogPostHeader';

const BlogExcerpt = ({ content, link, title }) => (
  <article
    css={css`
      margin-bottom: 3.5em;
    `}
  >
    <BlogPostHeader link={link} title={title} />
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  </article>
);

BlogExcerpt.propTypes = {
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BlogExcerpt;
