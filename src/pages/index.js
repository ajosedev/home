import React from 'react';
import { graphql } from 'gatsby';

// import Bio from '../components/bio';
// import Layout from '../components/layout';
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
                <li href="https://github.com/ajosedev">GitHub</li>
                <li href="https://codepen.io/ajosedev/">CodePen</li>
                <li href="https://www.linkedin.com/in/ajosedev/">LinkedIn</li>
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

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
