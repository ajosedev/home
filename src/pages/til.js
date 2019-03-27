import React from 'react';
import { graphql } from 'gatsby';

import BlogExcerpt from '../components/blogExcerpt';
import BlogLayout from '../components/blogLayout';
import SEO from '../components/seo';

class TIL extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    return (
      <BlogLayout location={this.props.location} title="Today I Learned">
        <SEO
          title="TIL"
          keywords={[`blog`, `javascript`, `react`, `webdev`]}
        />
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
  }
}

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
