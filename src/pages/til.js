import React from 'react';
import { Link, graphql } from 'gatsby';

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
        {/* <Bio /> */}
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <h3>
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          );
        })}
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
