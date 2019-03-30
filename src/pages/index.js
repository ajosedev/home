import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import SEO from '../components/seo';

const styles = css`
.links {
  text-align: center;
}
.types li {
  font-size: 1.6rem;
}
@media (min-width: 25rem) {
  .links {
    text-align: right;
  }
  .types li {
    grid-column: 1;
    padding-right: .4rem;
    text-align: right;
  }
}
@media (max-width: 25rem) {
  .types {
    display: none;
  }
}`;

const stylesMain = css`
  padding: 1rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
`;

const stylesGrid = css`
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-template-rows: 1fr max-content;
  align-items: start;
  margin: auto;
  font-weight: 600;
  text-transform: uppercase;

  @media (max-width: 25rem) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const stylesHeader = css`
  display: inline-block;
  border-bottom: .15rem solid #1b1d1d;
  padding-right: .4rem;
  padding-bottom: .3rem;

  h1 {
    color: #CDA34F;
    font-size: 2.8rem;
    padding-bottom: .2rem;
    text-align: center;
    margin: 0;
  }
  @media (min-width: 25rem) {
    h1 {
      text-align: right;
    }

  @media (max-width: 25rem) {
    h1 {
      font-size: calc(1.5rem + 2vw);
    }
  }
`;

const stylesDeveloper = css`
  font-size: 2.4rem;

  @media (min-width: 25rem) {
    grid-column: 2;
    grid-row: 1 / -1;
    padding-left: .4rem;
    writing-mode: vertical-lr;
    border-left: .15rem solid #1b1d1d;
  }
  @media (max-width: 25rem) {
    font-size: calc(1.6rem + 2vw);
    writing-mode: initial;
    padding-top: .4rem;
  }
`;

const List = styled.li`
  display: inline-block;

  & + & {
    margin-left: 1em;
  }
`;

// TODO - improve font scaling
class Index extends React.Component {
  render() {
    return (
      <div css={styles}>
        <SEO
          keywords={[
            `ajosedev`,
            `Andrew Jose`,
            `javascript`,
            `react`,
            `webdev`,
          ]}
        />
        <main css={stylesMain}>
          <div css={stylesGrid}>
            <header css={stylesHeader}>
              <h1>Andrew Jose</h1>
              <ul className="links">
                <List>
                  <a href="https://github.com/ajosedev">GitHub</a>
                </List>
                <List>
                  <a href="https://codepen.io/ajosedev/">CodePen</a>
                </List>
                <List>
                  <a href="https://www.linkedin.com/in/ajosedev/">LinkedIn</a>
                </List>
                <List>
                  <Link to={`/til`}>TIL</Link>
                </List>
              </ul>
            </header>
            <ul className="types">
              <li>Web</li>
              <li>Software</li>
              <li>Games</li>
            </ul>
            <p css={stylesDeveloper}>Developer</p>
          </div>
        </main>
      </div>
    );
  }
}

export default Index;
