import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const H2 = styled.h2`
  margin-bottom: 0.3em;
`;

const Date = styled.p`
  font-size: 0.8rem;
  margin-bottom: 1em;
`;

const BlogPostHeader = ({ date, link, title }) => (
  <header>
    <H2>
      {link ? (
        <Link to={link}>{title}</Link>
      ) : (
        title
      )}
    </H2>
    <Date>{date}</Date>
  </header>
);

BlogPostHeader.propTypes = {
  date: PropTypes.string.isRequired,
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
};

BlogPostHeader.defaultProps = {
  link: '',
};

export default BlogPostHeader;
