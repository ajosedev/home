import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

const styles = css`
  max-width: 60ch;
  margin: 0 auto;
  padding: 1em; /* TODO - put this higher up as its in index as well, make a layout? */

  > h1,
  > h2 {
    margin-bottom: 0.4em;
  }
  h1 {
    color: #5bc0b5; /* TODO - make this a variable */
  }
  h2 a {
    color: #a1cfca; /* TODO - make this a variable */
  }
  .gatsby-resp-image-link {
    margin: 1rem;
  }
`;

const headerStyles = css`
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  /* border-bottom: 1px solid #fff; */
`;

// TODO - make a layout folder?
const TILLayout = ({ children, root, title }) => (
  <div css={styles}>
    <header css={headerStyles}>
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
