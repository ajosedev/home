import React from 'react';
import { graphql } from 'gatsby';

// import Bio from '../components/bio';
// import Layout from '../components/layout';
import SEO from '../components/seo';
// import { rhythm } from '../utils/typography';

class Index extends React.Component {
  render() {
    return (
      <div>
        <SEO
          title=""
          keywords={[`ajosedev`, `Andrew Jose`, `javascript`, `react`, `webdev`]}
        />
        <main>
          <div className="grid">
            <header>
              <h1>Andrew Jose</h1>
              <div className="links">
                <a href="https://github.com/ajosedev">GitHub</a>
                <a href="https://codepen.io/ajosedev/">CodePen</a>
                <a href="https://www.linkedin.com/in/ajosedev/">LinkedIn</a>
              </div>
            </header>
            <p>Web</p>
            <p>Software</p>
            <p>Games</p>
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
