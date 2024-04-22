'use client'

import userResetPasswordAction from "@/actions/userResetPassword";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../Button";
import ErrorMesseger from "../Helper/ErrorMesseger";
import { Input } from "../Input";
import styles from "./login-form.module.css";

type LoginResetProps = {
  keyToken: string,
  login: string,
};


export default function LoginResetForm({ login, keyToken }: LoginResetProps) {

  const { pending } = useFormStatus();

  const ButtonForm = () => (
    <>
      {pending
        ? <Button disabled={pending}>Resetando...</Button>
        : <Button>Resetar</Button>}
    </>
  );

  const [state, action] = useFormState(userResetPasswordAction, {
    ok: false,
    error: '',
    data: null,
  });

  return (
    <form className={styles.form} action={action}>
      <Input label="Nova Senha" name="password" type="password" />
      <Input type="hidden" name="keyToken" value={keyToken} />
      <Input type="hidden" name="login" value={login} />
      <ErrorMesseger error={state.error} />
      <ButtonForm />
    </form>
  )
};