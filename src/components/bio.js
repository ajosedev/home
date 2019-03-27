import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata;
        return (
          <div>
            <p>
              Written by <strong>{author}</strong>.
            </p>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default Bio;
