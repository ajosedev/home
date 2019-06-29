import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const H2 = styled.h2`
  margin-bottom: 0.3em;
`;

const BlogPostHeader = ({ link, title }) => (
  <header>
    <H2>
      {link ? (
        <Link to={link}>{title}</Link>
      ) : (
        title
      )}
    </H2>
  </header>
);

BlogPostHeader.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
};

BlogPostHeader.defaultProps = {
  link: '',
};

export default BlogPostHeader;
