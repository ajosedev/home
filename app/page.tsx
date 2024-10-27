import {
  Theme,
  Color,
  BackgroundColor,
  CssColor,
} from '@adobe/leonardo-contrast-colors';
import styles from './page.module.css';

function createRandomHexColor() {
  return '#000000'.replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  });
}

export default function Home() {
  const black = new BackgroundColor({
    name: 'black',
    colorKeys: ['#000000'],
    colorspace: 'OKLCH',
    ratios: [1, 3, 4.5, 6.6],
  });

  const accent = new Color({
    name: 'accent',
    colorKeys: [
      createRandomHexColor() as CssColor,
      createRandomHexColor() as CssColor,
    ], // TODO - make this random
    colorspace: 'OKLCH',
    // TODO - Once over 4.5, should switch to white
    ratios: [1.05, 1.12, 1.33, 1.94, 3.0, 4.52, 6.6, 10.3, 15.0],
  });

  const theme = new Theme({
    colors: [accent],
    backgroundColor: black,
    lightness: 100,
  });

  // returns theme colors as JSON
  const colors = theme.contrastColors;

  const themeValues = theme?.contrastColors?.[1].values || [];

  const themeCss = themeValues.reduce((acc: any, colour: any) => {
    return {
      ...acc,
      [`--${colour.name}`]: colour.value,
    };
  }, {});

  return (
    <div className={styles.page} style={themeCss}>
      <main className={styles.main}>
        <h1 className={styles.title} aria-label="ajosedev">
          <span aria-hidden="true">a</span>
          <span aria-hidden="true">j</span>
          <span aria-hidden="true">o</span>
          <span aria-hidden="true">s</span>
          <span aria-hidden="true">e</span>
          <span aria-hidden="true">d</span>
          <span aria-hidden="true">e</span>
          <span aria-hidden="true">v</span>
        </h1>
        <div className="pill">Software Engineer</div>
        <div className="pill">Frontend</div>
        <div className="pill">Design Systems</div>
        <p>{JSON.stringify(colors)}</p>
        <a>LinkedIn</a>
        <a>Digital Garden</a>
        <a>GitHub</a>
      </main>
    </div>
  );
}
