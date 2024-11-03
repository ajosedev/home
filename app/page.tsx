'use client';

import {
  Theme,
  Color,
  BackgroundColor,
  CssColor,
} from '@adobe/leonardo-contrast-colors';
import { useState } from 'react';
import styles from './page.module.css';
import { Button, Link, Pill, PillContainer } from '@/app/components';

const createRandomHexColor = () => {
  return '#000000'.replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  }) as CssColor;
};

const black = new BackgroundColor({
  name: 'black',
  colorKeys: ['#000000'],
  colorspace: 'OKLCH',
  ratios: [1, 3, 4.5, 6.6],
});

// TODO - sort hydration issues
// TODO - validate that contrast ratio logic is correct
export default function Home() {
  const [accentColors, setAccentColors] = useState<CssColor[]>(() => [
    createRandomHexColor(),
    createRandomHexColor(),
  ]);

  const randomiseColors = () => {
    setAccentColors([createRandomHexColor(), createRandomHexColor()]);
  };

  const accent = new Color({
    name: 'accent',
    colorKeys: accentColors,
    colorspace: 'OKLCH',
    ratios: [1.2, 2, 3, 4.5, 6, 7.5, 10, 12],
  });

  const theme = new Theme({
    colors: [accent],
    backgroundColor: black,
    lightness: 100,
  });

  // const colors = theme.contrastColors;

  const themeValues = theme?.contrastColors?.[1].values || [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const themeCss = themeValues.reduce((acc: any, colour: any) => {
    return {
      ...acc,
      [`--${colour.name}`]: colour.value,
    };
  }, {});

  // TODO - add sliders for as many things as possible and use them to change tokens
  return (
    <div className={styles.page} style={themeCss}>
      <main className={styles.main}>
        <h1 className={styles.title}>ajosedev</h1>
        <PillContainer>
          <Pill>Frontend</Pill>
          <Pill>Design Systems</Pill>
          <Pill>Software Engineer</Pill>
        </PillContainer>
        {/*TODO - find a nice way of displaying these somewhere*/}
        {/*<p>{JSON.stringify(colors)}</p>*/}
        <ul className={styles.links}>
          <Link href="https://www.linkedin.com/in/ajosedev/">LinkedIn</Link>
          <Link href="https://garden.ajose.dev/">Digital Garden</Link>
          <Link href="https://github.com/ajosedev">GitHub</Link>
        </ul>
        <Button onClick={randomiseColors}>Randomise colours</Button>
      </main>
    </div>
  );
}
