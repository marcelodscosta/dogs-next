import { ComponentProps } from "react";

import styles from "./input.module.css";


type InputProps = {
  label?: string,
  error?: string
} & ComponentProps<'input'>;


export function Input({ label, name, error, ...rest }: InputProps) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>{label}</label>

      <input id={name} name={name} {...rest} className={styles.input} />

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};