import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/SEO';
import * as styles from './index.styles';

// TODO - icons for links (mobile only?)
// TODO - make colour vars
// TODO - tests
// TODO - fade everything in at same time as text fades in? or do some stagger
// TODO - better TIL/rest of page styling
const Index = () => (
  <main css={styles.main}>
    <SEO />
    <div>
      <header className="fluid-type" css={styles.header}>
        <h1>Andrew</h1>
        <h1>Jose</h1>
      </header>
      <div className="fluid-type" css={styles.role}>
        <p>Full Stack</p>
        <p>Developer</p>
      </div>
      <nav css={styles.nav}>
        <ul className="fluid-type">
          {/* TODO - component this */}
          <li>
            <a href="https://github.com/ajosedev">GitHub</a>
          </li>
          <li>
            <a href="https://codepen.io/ajosedev/">CodePen</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ajosedev/">LinkedIn</a>
          </li>
          <li>
            <Link to="/til">TIL</Link>
          </li>
        </ul>
      </nav>
    </div>
  </main>
);

export default Index;
