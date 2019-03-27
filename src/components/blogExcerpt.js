import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const BlogExcerpt = (props) => (
  <article>
    <h3><Link to={props.link}>{props.title}</Link></h3>
    <small>{props.date}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: props.content
      }}
    />
  </article>
);

BlogExcerpt.propTypes = {
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default BlogExcerpt;
