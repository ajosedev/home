import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';

import BlogLayout from '../components/BlogLayout';
import BlogPostHeader from '../components/BlogPostHeader';
import SEO from '../components/SEO';

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
  padding-top: 0.5em;
  border-top: 1px solid #1b1d1d
`;

// TODO - why is this in /templates and not /components?
const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  // const siteTitle = this.props.data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <BlogLayout title="ajosedev | TIL">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <BlogPostHeader
          date={post.frontmatter.date}
          title={post.frontmatter.title}
        />

        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <Footer>
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
        </Footer>
      </article>
    </BlogLayout>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  pageContext: PropTypes.objectOf(PropTypes.any).isRequired,
};

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
