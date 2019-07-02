import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';

import TILLayout from '../layouts/TIL';
import BlogPostHeader from './BlogPostHeader';
import SEO from './SEO';

const footerStyles = css`
  margin-top: 2em;
  padding-top: 0.5em;
  border-top: 1px solid #fff;

  > ul {
    display: flex;
  }
  .prev {
    margin-right: auto;
  }
  .next {
    margin-left: auto;
  }
`;

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  // const siteTitle = this.props.data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <TILLayout title="ajosedev | TIL">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <BlogPostHeader
          title={post.frontmatter.title}
        />

        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <footer css={footerStyles}>
          <ul>
            {previous && (
              <li className="prev">
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </li>
            )}
            {next && (
              <li className="next">
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </li>
            )}
          </ul>
        </footer>
      </article>
    </TILLayout>
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
        # date(formatString: "MMMM DD, YYYY")
        # description
      }
    }
  }
`;
