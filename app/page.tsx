'use client';

import {
  Theme,
  Color,
  BackgroundColor,
  CssColor,
} from '@adobe/leonardo-contrast-colors';
import { useState } from 'react';
import styles from './page.module.css';
import {
  Button,
  ColorSwatch,
  Link,
  Pill,
  PillContainer,
  Slider,
} from '@/app/components';

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
  const [contrast, setContrast] = useState<number>(1);
  const [saturation, setSaturation] = useState<number>(100);
  const [lightness, setLightness] = useState<number>(100);

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
    lightness,
    contrast,
    saturation,
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
        <ul className={styles.links}>
          <Link href="https://www.linkedin.com/in/ajosedev/">LinkedIn</Link>
          <Link href="https://garden.ajose.dev/">Digital Garden</Link>
          <Link href="https://github.com/ajosedev">GitHub</Link>
        </ul>
        <div className={styles.footer}>
          <div className={styles.colorSwatches}>
            <ColorSwatch color={accentColors[0]} />
            <ColorSwatch color={accentColors[1]} />
          </div>
          <Button onClick={randomiseColors}>Randomise colours</Button>
          <Slider
            id="contrast"
            min={0}
            max={2}
            onChange={(e) => setContrast(e.target.value as unknown as number)}
            value={contrast}
            step={0.2}
          >
            Contrast: {contrast}
          </Slider>
          <Slider
            id="saturation"
            min={0}
            max={100}
            onChange={(e) => setSaturation(e.target.value as unknown as number)}
            value={saturation}
            step={5}
          >
            Saturation: {saturation}
          </Slider>
          <Slider
            id="lightness"
            min={0}
            max={100}
            onChange={(e) => setLightness(e.target.value as unknown as number)}
            value={lightness}
            step={5}
          >
            Lightness: {lightness}
          </Slider>
        </div>
      </main>
    </div>
  );
}
