import { PropsWithChildren } from 'react';
import styles from './link.module.css';

interface LinkProps extends PropsWithChildren {
  href: string;
}

export const Link = (props: LinkProps) => (
  <li className={styles.link}>
    <a href={props.href}>{props.children}</a>
  </li>
);
