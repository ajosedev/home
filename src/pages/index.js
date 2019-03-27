import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import styles from '../styles/index.modules.css';

class Index extends React.Component {
  render() {
    return (
      <div>
        <SEO
          keywords={[`ajosedev`, `Andrew Jose`, `javascript`, `react`, `webdev`]}
        />
        <main style={styles.main}>
          <div className="grid">
            <header>
              <h1>Andrew Jose</h1>
              <ul className="links">
                <li><a href="https://github.com/ajosedev">GitHub</a></li>
                <li><a href="https://codepen.io/ajosedev/">CodePen</a></li>
                <li><a href="https://www.linkedin.com/in/ajosedev/">LinkedIn</a></li>
                <li><Link to={`/til`}>TIL</Link></li>
              </ul>
            </header>
            <ul className="types">
              <li>Web</li>
              <li>Software</li>
              <li>Games</li>
            </ul>
            <p className="developer">Developer</p>
          </div>
        </main>
      </div>
    );
  }
}

export default Index;
