import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

// import styles from '../styles/blogLayout.modules.css';

const styles = css`
  max-width: 60ch;
  margin: 0 auto;
`;

const BlogLayout = ({ children, root, title }) => (
  <div css={styles}>
    <header>
      <h1>
        <Link to={root ? '/' : '/til'}>{title}</Link>
      </h1>
    </header>
    <main>{children}</main>
  </div>
);

export default BlogLayout;
