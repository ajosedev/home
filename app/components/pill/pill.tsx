import { PropsWithChildren } from 'react';
import styles from './pill.module.css';

export const Pill = (props: PropsWithChildren) => (
  <div className={styles.pill} {...props} />
);

export const PillContainer = (props: PropsWithChildren) => (
  <div className={styles.pillContainer} {...props} />
);
