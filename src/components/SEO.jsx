import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const defaultKeywords = [
  'ajosedev',
  'Andrew Jose',
  'react',
  'webdev',
  'javascript',
  'full stack',
];

const SEO = ({
  description,
  lang,
  meta,
  keywords,
  title,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const allKeywords = defaultKeywords.concat(keywords.length > 0 ? keywords : []);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || site.siteMetadata.title}
      titleTemplate={title ? `%s | ${site.siteMetadata.title}` : '%s'}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: allKeywords.join(', '),
        },
      ].concat(meta)}
    />
  );
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.any),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

SEO.defaultProps = {
  description: '',
  lang: 'en',
  meta: [],
  keywords: [],
  title: '',
};

export default SEO;
