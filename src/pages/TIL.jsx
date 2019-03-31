import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import BlogExcerpt from '../components/BlogExcerpt';
import BlogLayout from '../components/BlogLayout';
import SEO from '../components/SEO';

const TIL = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <BlogLayout title="ajosedev | TIL" root>
      <SEO title="TIL" keywords={['blog', 'javascript', 'react', 'webdev']} />
      {posts.map(({ node }) => (
        <BlogExcerpt
          key={node.fields.slug}
          content={node.frontmatter.description || node.excerpt}
          date={node.frontmatter.date}
          link={node.fields.slug}
          title={node.frontmatter.title || node.fields.slug}
        />
      ))}
    </BlogLayout>
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
            date(formatString: "MMMM DD, YYYY")
            title
            # description
          }
        }
      }
    }
  }
`;
