import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

const BlogPostHeader = ({ link, title }) => {
  const Heading = link ? 'h2' : 'h1';

  return (
    <header>
      <Heading
        css={css`
          margin-bottom: 0.3em;
        `}
      >
        {link ? <Link to={link}>{title}</Link> : title}
      </Heading>
    </header>
  );
};

BlogPostHeader.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
};

BlogPostHeader.defaultProps = {
  link: '',
};

export default BlogPostHeader;
