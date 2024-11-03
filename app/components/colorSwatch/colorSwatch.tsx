import styles from './colorSwatch.module.css';

interface ColorSwatchProps {
  color: string;
}

export const ColorSwatch = (props: ColorSwatchProps) => (
  <div className={styles.container}>
    <span className={styles.preview} style={{ backgroundColor: props.color }} />
    {props.color}
  </div>
);
