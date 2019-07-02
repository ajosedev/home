import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import SEO from '../components/SEO';
import * as styles from '../styles/index.styles';

const ListItem = ({ children, href, to }) => (
  href ? (
    <a href={href}>{children}</a>
  ) : (
    <Link to={to}>{children}</Link>
  )
);

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
};

ListItem.defaultProps = {
  href: '',
  to: '',
};

const links = [{
  title: 'GitHub',
  href: 'https://github.com/ajosedev',
}, {
  title: 'CodePen',
  href: 'https://codepen.io/ajosedev',
}, {
  title: 'LinkedIn',
  href: 'https://www.linkedin.com/in/ajosedev',
}, {
  title: 'TIL',
  to: '/til',
}];

// TODO - improve first paint?
// TODO - icons for links (mobile only?)
// TODO - make colour vars
// TODO - tests
// TODO - fade everything in at same time as text fades in? or do some stagger
// TODO - better TIL/rest of page styling
const Index = () => (
  <main css={styles.main}>
    <SEO />
    <div>
      <header className="fluid-type" css={styles.header}>
        <h1>Andrew</h1>
        <h1>Jose</h1>
      </header>
      <div className="fluid-type" css={styles.role}>
        <p>Full Stack</p>
        <p>Developer</p>
      </div>
      <nav css={styles.nav}>
        <ul className="fluid-type">
          {links.map(link => (
            <ListItem href={link.href} to={link.to}>{link.title}</ListItem>
          ))}
        </ul>
      </nav>
    </div>
  </main>
);

export default Index;
