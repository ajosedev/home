import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';

import BlogLayout from '../components/blogLayout';
import BlogPostHeader from '../components/blogPostHeader';
import SEO from '../components/seo';

const styles = css`
  footer ul {
    display: flex;
    justify-content: space-between;
  }
`;

// TODO - why is this in /templates and not /pages?
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    // const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <BlogLayout title="ajosedev | TIL">
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article css={styles}>
          <BlogPostHeader
            date={post.frontmatter.date}
            title={post.frontmatter.title}
          />

          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />

          <footer>
            <ul>
              {previous && (
                <li>
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}
              {next && (
                <li>
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </li>
              )}
            </ul>
          </footer>
        </article>
      </BlogLayout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        # description
      }
    }
  }
`;
