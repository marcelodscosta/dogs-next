'use server'

import { TOKEN_POST } from "@/functions/api";
import apiError from "@/functions/apiError";
import { cookies } from "next/headers";


export default async function loginAction(state: {},formData: FormData){
  const username = formData.get('username') as string | null;
  const password = formData.get('password') as string | null;
console.log(formData);

  try {

    const { url } = TOKEN_POST();
    
  if(!username || !password) throw new Error("Preencha os dados");
  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });
  
  if(!response.ok) throw new Error("Senha ou usuário inválido.");
  const data = await response.json();

  cookies().set('token', data.token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24,
  });

  return {
        ok: true,
        data: null,
        error: '',
  }
  
  } catch (error: unknown) {

  return apiError(error);
  }
  
};