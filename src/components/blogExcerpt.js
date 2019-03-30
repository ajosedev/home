import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

const styles = css`
  h2 a {
    color: #325F8A;
    font-weight: bold;
  }
`;

const BlogExcerpt = props => (
  <article css={styles}>
    <header>
      <h2>
        <Link to={props.link}>{props.title}</Link>
      </h2>
    </header>
    <small>{props.date}</small>
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
