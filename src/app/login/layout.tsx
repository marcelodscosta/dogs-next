import { Metadata } from "next";
import styles from './login.module.css';

export const metadata: Metadata = {
  title: "Login",
  description: "Rede social para cachorro",
};

export default async function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.login}>
      <div className={styles.forms}>{children}</div>
    </div>
  );
};