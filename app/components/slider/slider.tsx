import { InputHTMLAttributes } from 'react';
import styles from './slider.module.css';

type SliderProps = InputHTMLAttributes<HTMLInputElement>;

export const Slider = (props: SliderProps) => {
  const { children, ...rest } = props;

  return (
    <div className={styles.slider}>
      <input type="range" {...rest} />
      <label htmlFor={rest.id}>{children}</label>
    </div>
  );
};
