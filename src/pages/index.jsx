import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import SEO from '../components/SEO';
import * as styles from '../styles/index.styles';

const ListItem = ({ children, href, to }) => (
  <li>
    {href ? <a href={href}>{children}</a> : <Link to={to}>{children}</Link>}
  </li>
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

const links = [
  {
    title: 'Garden',
    href: 'https://garden.ajose.dev',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/ajosedev',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ajosedev',
  },
  {
    title: 'CodePen',
    href: 'https://codepen.io/ajosedev',
  },
];

// TODO - tests
const Index = () => (
  <main css={styles.main}>
    <SEO />
    <span css={[styles.stripe, styles.topStripe]} aria-hidden="true" />
    <span css={[styles.stripe, styles.bottomStripe]} aria-hidden="true" />
    <header className="fluid-type" css={styles.header}>
      <div>
        <h1 data-text="Andrew">Andrew</h1>
        <h1 data-text="Jose">Jose</h1>
      </div>
    </header>
    <div className="fluid-type" css={styles.role}>
      <p>Full Stack</p>
      <p>Engineer</p>
    </div>
    <nav css={styles.nav}>
      <ul className="fluid-type">
        {links.map((link) => (
          <ListItem href={link.href} to={link.to}>
            {link.title}
          </ListItem>
        ))}
      </ul>
    </nav>
  </main>
);

export default Index;
