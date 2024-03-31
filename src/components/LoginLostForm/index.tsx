'use client'


import userLostPasswordAction from "@/actions/userLostPassword";
import { useEffect, useState } from "react";
import {
  useFormState,
  useFormStatus
} from "react-dom";

import { Input } from "../Input";

import Button from "../Button";
import ErrorMesseger from "../Helper/ErrorMesseger";
import styles from "./login-form.module.css";

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? <Button>Enviando</Button> : <Button>Enviar E-mail</Button>}
    </>
  )

};

export default function LoginLostForm() {

  const [url, setUrl] = useState("");

  const [state, action] = useFormState(userLostPasswordAction, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    setUrl(window.location.href.replace('lost', 'reset'));
  }, [])

  return (
    <form className={styles.form} action={action}>
      <Input label="E-mail / Usuário" name="login" />
      <Input type="hidden" name="url" value={url} />
      <ErrorMesseger error={state.error} />
      {state.ok ? (
        <p style={{ color: '#4c1' }}>Email enviado.</p>
      ) : (
        <FormButton />
      )}
    </form>
  );
};