import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

const styles = css`
  max-width: 60ch;
  margin: 0 auto;

  h1 {
    font-family: 'News Cycle', sans-serif;
    font-weight: bold;
    margin-bottom: 0.4em;
  }
`;

const headerStyles = css`
  margin-bottom: 3em;
`;

// TODO - make a layout folder?
const TILLayout = ({ children, root, title }) => (
  <div css={styles}>
    <header css={headerStyles}>
      <h1>
        <Link to={root ? '/' : '/til'}>{title}</Link>
      </h1>
      <p>Small bites of learning that may help you, or future me.</p>
    </header>
    <main>{children}</main>
  </div>
);

TILLayout.propTypes = {
  children: PropTypes.node.isRequired,
  root: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

TILLayout.defaultProps = {
  root: false,
};

export default TILLayout;
