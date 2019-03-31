import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import BlogPostHeader from './BlogPostHeader';

const styles = css`
  margin-bottom: 3em;
`;

const BlogExcerpt = ({
  content,
  date,
  link,
  title,
}) => (
  <article css={styles}>
    <BlogPostHeader
      date={date}
      link={link}
      title={title}
    />
    <p
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  </article>
);

BlogExcerpt.propTypes = {
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BlogExcerpt;
