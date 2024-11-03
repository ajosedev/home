import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => (
  <button className={styles.button} {...props} />
);
