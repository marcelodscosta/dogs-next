'use client'

import { useFormState, useFormStatus } from 'react-dom';
import styles from './login-form.module.css';

import loginAction from '@/actions/login';
import Button from '../Button';


function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? <Button disabled={pending}>Enviando</Button> : <Button disabled={pending}>Entrar</Button>}
    </>
  )
};

export default function LoginForm() {

  const [state, action] = useFormState(loginAction, {
    ok: false,
    error: '',
    data: null,
  });

  return (
    <>
      <form className={styles.form} action={action} >
        <input type="text" placeholder="Usuário" name='username' />
        <input type="password" placeholder="Senha" name='password' />

        <FormButton />
        <p>{`${state.error}`}</p>



      </form>

    </>
  );
};