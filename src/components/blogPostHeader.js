import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
// import { css } from '@emotion/core';

const BlogPostHeader = props => (
  <header>
    <h2>
      {props.link ? (
        <Link to={props.link}>{props.title}</Link>
      ) : (
        props.title
      )}
    </h2>
    <p>{props.date}</p>
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
