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

const BlogPostHeader = props => (
  <header>
    <H2>
      {props.link ? (
        <Link to={props.link}>{props.title}</Link>
      ) : (
        props.title
      )}
    </H2>
    <Date>{props.date}</Date>
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
