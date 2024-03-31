'use client'

import { useEffect } from "react";

import {
  useFormState,
  useFormStatus
} from "react-dom";

import { Input } from "../Input";

import userPostAction from "@/actions/userPost";
import Button from "../Button";
import ErrorMesseger from "../Helper/ErrorMesseger";
import styles from "./login-form.module.css";

const ButtonForm = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending
        ? <Button>Cadastrando</Button>
        : <Button>Cadastrar</Button>}
    </>
  );
};


export default function LoginCreateForm() {

  const [state, action] = useFormState(userPostAction, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    if (state.ok) window.location.href = '/account';
  }, [state.ok]);

  return (
    <form className={styles.form} action={action}>
      <Input label="Usuário" type="text" name="username" />
      <Input label="E-mail" type="email" name="email" />
      <Input label="Senha" type="password" name="password" />
      <ButtonForm />
      <ErrorMesseger error={state.error} />
    </form>
  );
};