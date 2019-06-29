import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import TILLayout from '../layouts/TIL';
import BlogExcerpt from '../components/BlogExcerpt';
import SEO from '../components/SEO';

const TIL = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <TILLayout title="ajosedev | TIL" root>
      <SEO title="TIL" keywords={['blog', 'today i learned', 'til']} />
      {posts.map(({ node }) => (
        <BlogExcerpt
          key={node.fields.slug}
          content={node.frontmatter.description || node.excerpt}
          link={node.fields.slug}
          title={node.frontmatter.title || node.fields.slug}
        />
      ))}
    </TILLayout>
  );
};

TIL.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TIL;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(format: HTML)
          fields {
            slug
          }
          frontmatter {
            # date(formatString: "MMMM DD, YYYY")
            title
            # description
          }
        }
      }
    }
  }
`;
