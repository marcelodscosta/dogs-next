'use client'

import { useFormState, useFormStatus } from 'react-dom';
import styles from './login-form.module.css';

import loginAction from '@/actions/login';
import Link from 'next/link';
import { useEffect } from 'react';
import Button from '../Button';
import ErrorMesseger from '../Helper/ErrorMesseger';
import { Input } from '../Input';


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

  useEffect(() => {
    if (state.ok) window.location.href = "/account";
  }, [state.ok])

  return (
    <>
      <form className={styles.form} action={action} >
        <Input label="Nome" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
        <ErrorMesseger error={state.error} />
        <FormButton />
      </form>
      <Link className={styles.perdeu} href={'/login/lost'}>Esqueceu a senha</Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link className={'button'} href={'/login/create'}>Cadastro</Link>
      </div>

    </>
  );
};