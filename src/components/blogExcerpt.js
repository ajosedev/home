import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import BlogPostHeader from '../components/blogPostHeader';

const styles = css`
  margin-bottom: 3em;
`;

const BlogExcerpt = props => (
  <article css={styles}>
    <BlogPostHeader
      date={props.date}
      link={props.link}
      title={props.title}
    />
    <p
      dangerouslySetInnerHTML={{
        __html: props.content,
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
