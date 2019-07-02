import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

const headingStyles = css`
  margin-bottom: 0.3em;
  color: #A1CFCA; /* TODO - make this a variable */
`;

const BlogPostHeader = ({ link, title }) => (
  <header>
    <h2 css={headingStyles}>
      {link ? (
        <Link to={link}>{title}</Link>
      ) : (
        title
      )}
    </h2>
  </header>
);

BlogPostHeader.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
};

BlogPostHeader.defaultProps = {
  link: '',
};

export default BlogPostHeader;
