import styles from './colorSwatch.module.css';
import { ChangeEventHandler } from 'react';

interface ColorSwatchProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

export const ColorSwatch = (props: ColorSwatchProps) => (
  <div className={styles.container}>
    <input type="color" onChange={props.onChange} value={props.value} />
    {props.value}
  </div>
);
