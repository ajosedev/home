import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

const styles = css`
  max-width: 60ch;
  margin: 0 auto;

  header {
    margin-bottom: 2em;
  }
  h1 a {
    color: #CDA34F;
  }
`;

const BlogLayout = ({ children, root, title }) => (
  <div css={styles}>
    <header>
      <h1>
        <Link to={root ? '/' : '/til'}>{title}</Link>
      </h1>
      <p>A bunch of short bites of information that may help you (or me).</p>
    </header>
    <main>{children}</main>
  </div>
);

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
  root: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

BlogLayout.defaultProps = {
  root: false,
};

export default BlogLayout;
