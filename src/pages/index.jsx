import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import SEO from '../components/SEO';

// TODO - better fallbacks for blend-mode
// TODO - get smaller image
// TODO - icons for links
// TODO - fix loading white screen
const mainStyles = css`
  // TODO - make colour vars
  background-color: #29385c; // fallback
  background:
    linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    ),
    url('/bg.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  font-family: 'News Cycle', sans-serif;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    min-width: 0;
  }
`;

const headerStyles = css`
  @keyframes colourFade {
    0% {
      color: #bbb;
    }
    100% {
      color: #000;
    }
  }

  animation: 2s colourFade forwards;
  mix-blend-mode: screen;
  display: inline-block;
  border-radius: 2px;
  background-color: white;
  padding: 0.2em 0.2em;
  --fluid-type-min-size: 2.1;
  --fluid-type-max-size: 4;

  h1 {
    margin: 0;
    font-weight: 800;
  }
`;

const roleStyles = css`
  margin: 2em 0 1.5em;
  font-weight: 800;
  --fluid-type-min-size: 1.8;
  --fluid-type-max-size: 2.5;

  p:last-child {
    font-size: 1.5em;
  }
`;

const navStyles = css`
  ul {
    display: grid;
    grid-gap: 0.2em 2em;
    grid-template-columns: repeat(auto-fit, minmax(100px, max-content));
    text-transform: initial;
    --fluid-type-min-size: 1.6;
    --fluid-type-max-size: 2;
  }
  li {

  }
  a {
    color: #fff;
  }
  a:hover {
    color: #ddd;
    mix-blend-mode: overlay;
  }
`;

const Index = () => (
  <div>
    <SEO
      keywords={[
        'ajosedev',
        'Andrew Jose',
        'javascript',
        'react',
        'webdev',
      ]}
    />
    <main css={mainStyles}>
      <div>
        <header className="fluid-type" css={headerStyles}>
          <h1>Andrew</h1>
          <h1>Jose</h1>
        </header>
        <div className="fluid-type" css={roleStyles}>
          <p>Full Stack</p>
          <p>Developer</p>
        </div>
        <nav css={navStyles}>
          <ul className="fluid-type">
            <li>
              <a href="https://github.com/ajosedev">GitHub</a>
            </li>
            <li>
              <a href="https://codepen.io/ajosedev/">CodePen</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ajosedev/">LinkedIn</a>
            </li>
            <li>
              <Link to="/til">TIL</Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  </div>
);

export default Index;
