import styles from './login-form.module.css';

import loginAction from '@/actions/login';

export default async function LoginForm() {
  return (
    <>
      <form className={styles.form} action={loginAction} >
        <input type="text" placeholder="Usuário" name='username' />
        <input type="password" placeholder="Senha" name='password' />

        <button>Entrar</button>

      </form>

    </>
  );
};