import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
// import styled from '@emotion/styled';

import SEO from '../components/SEO';

const mainStyles = css`
  background-color: #4f576b;
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
  padding: 2em;
  text-transform: uppercase;

  header {
    // TODO - better fallbacks
    color: black;
    background-color: white;
    mix-blend-mode: screen;
    display: inline-block;
    border-radius: 2px;
  }
  h1 {
    margin: 0;
    font-weight: 800;
    font-size: 9rem;
    line-height: 0.9;
    padding: 0.1em 0.2em 0.2em;
    max-width: 8ch;
  }
  .role {
    font-size: 2.4rem;
    margin: 2em 0 1.5em;
    font-weight: 800;
  }
  .role__full-stack {
  }
  .role__developer {
    font-size: 1.5em;
  }

  ul {
    display: grid;
    grid-gap: 0.2em 2em;
    grid-template-columns: repeat(auto-fit, minmax(80px, max-content));
    text-transform: initial;
  }
  li {
    font-size: 1.8rem;
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
      {/* <img src="bg.jpg" alt="background" /> */}
      <header>
        <h1>Andrew Jose</h1>
      </header>
      <div className="role">
        <p className="role__full-stack">Full Stack</p>
        <p className="role__developer">Developer</p>
      </div>
      {/* TODO - icons */}
      <nav>
        <ul>
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
    </main>
  </div>
);

export default Index;
