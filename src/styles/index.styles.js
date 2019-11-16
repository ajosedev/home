import { css, keyframes } from '@emotion/core';

const opacityFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const stripe = css`
  grid-row: 2;
  grid-column: 1 / -1;
  max-height: 12.5rem;

  background-color: #fff;
  mix-blend-mode: overlay;

  animation: 0.5s ${opacityFade} forwards;
`;

export const topStripe = css`
  transform: skewY(calc(-1 * var(--skew)));
`;

export const bottomStripe = css`
  transform: skewY(var(--skew)) translateY(50vh);
`;

export const main = css`
  --skew: -25deg;

  display: grid;
  grid-template-columns: minmax(1em, 1fr) [content] max-content minmax(1em, 1fr);
  grid-template-rows: 0.5fr max-content max-content 1fr;

  min-height: 100vh;
  height: 100%;
  width: 100%;

  background-color: #29385c; /* fallback */
  background:
    linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.3)
    ),
    url('/bg.jpg');
  background-size: cover;
  background-position: center;

  font-family: 'News Cycle', sans-serif;
  color: #fff;

  position: relative;
  overflow: hidden;

  /* TODO - get a better quality bg-large */
  @media (min-width: 45em) {
    background:
      linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.4)
      ),
      url('/bg-large.jpg');
    background-size: cover;
    background-position: center;
  }
`;

export const header = css`
  grid-row: 2;
  padding: 0.2em 0.3em;

  text-transform: uppercase;
  line-height: 1;
  --fluid-type-min-size: 2.1;
  --fluid-type-max-size: 4;

  grid-column: 2;
  align-self: center;

  opacity: 0;
  animation: 0.4s ${opacityFade} forwards 0.2s;
  mix-blend-mode: lighten;

  background-color: white;
  color: #000;
  border-radius: 4px;

  h1 {
    margin: 0;
    font-weight: 800;
  }
`;

export const role = css`
  grid-area: 3 / content;
  margin: 3em 0 1em;

  opacity: 0;
  animation: 0.4s ${opacityFade} forwards 0.6s;

  font-weight: 800;
  text-transform: uppercase;
  line-height: 1;
  --fluid-type-min-size: 1.8;
  --fluid-type-max-size: 2.5;

  p:last-child {
    font-size: 1.5em;
  }
`;

export const nav = css`
  grid-area: 4 / content;

  ul {
    display: grid;
    grid-gap: 0.2em 2em;
    grid-template-columns: repeat(2, minmax(100px, max-content));

    opacity: 0;
    animation: 0.4s ${opacityFade} forwards 0.6s;

    --fluid-type-min-size: 1.6;
    --fluid-type-max-size: 2;
  }
  a {
    color: #fff;
  }
`;
