import { css, keyframes } from '@emotion/core';

const opacityFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const background = css`
  background-color: #fff;
  grid-column: 1 / -1;
  grid-row: 2;
  transform: skewY(-25deg);
  opacity: 0;
  animation: 0.2s ${opacityFade} forwards;
  margin-bottom: 2em;
  mix-blend-mode: overlay;
  max-height: 12.5rem;
`;

export const stripe = css`
  grid-column: 1 / -1;
  grid-row: 4;
  background-color: white;
  display: block;
  mix-blend-mode: overlay;
  transform: skewY(25deg);
  max-height: 12.5rem;
  animation: 0.2s ${opacityFade} forwards;
`;

export const main = css`
  display: grid;
  grid-template-columns: minmax(1em, 1fr) [content] max-content minmax(1em, 1fr);
  grid-template-rows: 0.5fr max-content max-content 1fr;

  min-height: 100vh;
  width: 100%;

  background-color: #29385c; /* fallback */
  background:
    linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    ),
    url('/bg.jpg');
  background-size: cover;
  background-position: center;

  font-family: 'News Cycle', sans-serif;
  color: #fff;

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
  grid-row: 2;

  border-radius: 2px;
  text-transform: uppercase;
  line-height: 1;
  --fluid-type-min-size: 2.1;
  --fluid-type-max-size: 4;

  grid-column: 2;
  align-self: center;

  opacity: 0;
  animation: 0.4s ${opacityFade} forwards 0.2s;

  h1 {
    margin: 0;
    font-weight: 800;
    position: relative;
    /* mix-blend-mode: difference; */
    /* text-shadow: 3px 3px rgba(0, 0, 0, 0.5); */
  }
  /* h1:after {
    content: attr(data-text);
    position: absolute;
    top: 5px;
    left: 5px;
    color: black;
    z-index: -1;
  } */
`;

export const role = css`
  grid-area: 3 / content;
  margin: 3em 0 1em;
  font-weight: 800;
  text-transform: uppercase;
  opacity: 0;
  animation: 0.4s ${opacityFade} forwards 0.6s;
  line-height: 1;
  --fluid-type-min-size: 1.8;
  --fluid-type-max-size: 2.5;

  p:last-child {
    font-size: 1.5em;
  }
`;

export const nav = css`
  grid-area: 4 / content;

  /* TODO - make this 2x2 and then 4x1 on mobile? */
  ul {
    display: grid;
    grid-gap: 0.2em 2em;
    grid-template-columns: repeat(auto-fit, minmax(100px, max-content));
    opacity: 0;
    animation: 0.4s ${opacityFade} forwards 0.6s;
    --fluid-type-min-size: 1.6;
    --fluid-type-max-size: 2;
  }
  a {
    color: #fff;
  }
`;
