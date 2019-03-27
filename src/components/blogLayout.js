import React from 'react';
import { Link } from 'gatsby';

import styles from '../styles/blogLayout.modules.css';

const BlogLayout = ({ children, title }) => (
  <div style={styles}>
    <header>
      <h1>
        <Link to={`/`}>{title}</Link>
      </h1>
    </header>
    <main>{children}</main>
  </div>
);

export default BlogLayout;
