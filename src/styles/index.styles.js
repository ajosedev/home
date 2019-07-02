import { css, keyframes } from '@emotion/core';

const opacityFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const main = css`
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
  width: 100%;
  font-family: 'News Cycle', sans-serif;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;

  > div {
    min-width: 0;
  }

  @media (min-width: 45em) {
    background:
      linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
      ),
      url('/bg-large.jpg');
    background-size: cover;
    background-position: center;
  }
`;

export const header = css`
  @keyframes colourFade {
    0% {
      color: #bbb;
    }
    100% {
      color: #000;
    }
  }

  animation: 1s colourFade forwards;
  mix-blend-mode: screen;
  display: inline-block;
  border-radius: 2px;
  background-color: white;
  padding: 0.2em 0.2em;
  text-transform: uppercase;
  --fluid-type-min-size: 2.1;
  --fluid-type-max-size: 4;

  h1 {
    margin: 0;
    font-weight: 800;
  }
`;

export const role = css`
  margin: 2em 0 1.5em;
  font-weight: 800;
  text-transform: uppercase;
  opacity: 0;
  animation: 1s ${opacityFade} forwards 1s;
  --fluid-type-min-size: 1.8;
  --fluid-type-max-size: 2.5;

  p:last-child {
    font-size: 1.5em;
  }
`;

export const nav = css`
  ul {
    display: grid;
    grid-gap: 0.2em 2em;
    grid-template-columns: repeat(auto-fit, minmax(100px, max-content));
    opacity: 0;
    animation: 1s ${opacityFade} forwards 1s;
    --fluid-type-min-size: 1.6;
    --fluid-type-max-size: 2;
  }
  a {
    color: #fff;
  }
  a:hover {
    color: #ddd;
    mix-blend-mode: overlay;
  }
`;
