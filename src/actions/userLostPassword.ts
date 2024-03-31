'use server'

import { PASSWORD_LOST } from "@/functions/api";
import apiError from "@/functions/apiError";

export default async function userLostPasswordAction(state: {}, formData: FormData){
  
  const login = formData.get("login") as String | null;
  const urlLost = formData.get("url") as String | null;

  try {
    
    if(!login) throw new Error("Preencha os dados");

    const { url } = PASSWORD_LOST();

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        url: urlLost,
      }),
    });
    if(!response.ok) throw new Error("E-mail ou usuário não cadastrado");
    return { data: null, ok: true, error: ""}

  } catch (error) {
    return apiError(error);
  }
};