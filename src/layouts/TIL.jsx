import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

const styles = css`
  max-width: 60ch;
  margin: 0 auto;
  padding: 1em; /* TODO - put this higher up as its in index as well, make a layout? */

  > h1, > h2 {
    margin-bottom: 0.4em;
  }

  h1 {
    color: #5BC0B5; /* TODO - make this a variable */
  }
  h2 a {
    color: #A1CFCA; /* TODO - make this a variable */
  }
`;

// TODO - make a layout folder?
const TILLayout = ({ children, root, title }) => (
  <div css={styles}>
    <header css={css`margin-bottom: 3em;`}>
      {root ? (
        <h1>
          <Link to="/">{title}</Link>
        </h1>
      ) : (
        <h2>
          <Link to="/til">{title}</Link>
        </h2>
      )}
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
