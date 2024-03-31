'use server'

import { USER_POST } from "@/functions/api";
import apiError from "@/functions/apiError";
import loginAction from "./login";

export default async function userPostAction(state: {}, formData: FormData){

  const username = formData.get("username") as String || null;
  const email = formData.get("email") as String || null;
  const password = formData.get("password") as String || null;

 console.log(formData);
 

  try {
    if(!username || !email || !password) throw new Error("Preencha dos dados");

    if(password.length < 6) throw new Error("A Senha deve ter mais de 6 dígitos");

    const { url } = USER_POST();
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if(!response.ok) throw new Error("E-mail ou usuário já cadastrado.");

    const { ok } = await loginAction({ ok: true, error: '' }, formData);

    if (!ok) throw new Error('Error ao logar.');

    return { data: null, ok: true, error: ""};


  } catch (error) {

    return apiError(error)
  }
  
};