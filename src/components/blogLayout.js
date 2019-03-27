import React from 'react';
import { Link } from 'gatsby';

import styles from '../styles/blogLayout.modules.css';

class BlogLayout extends React.Component {
  render() {
    const { title, children } = this.props;

    return (
      <div style={styles}>
        <header>
          <h1><Link to={`/`}>{title}</Link></h1>
        </header>
        <main>{children}</main>
      </div>
    );
  }
}

export default BlogLayout;
