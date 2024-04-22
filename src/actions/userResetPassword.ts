'use server'

import { PASSWORD_RESET } from "@/functions/api";
import apiError from "@/functions/apiError";
import { redirect } from "next/navigation";

export default async function userResetPasswordAction(state: {}, formData: FormData){
  const login = formData.get("login") as String | null;
  const key = formData.get("keyToken") as String | null;
  const password = formData.get("password") as String | null;

  console.log(`Login: ${login} | key: ${key} | password: ${password}`);
  

  try {
    
    if(!login || !key || !password) throw new Error("Preencha os dados");

    const { url } = PASSWORD_RESET();

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        key,
        password,
      }),
    });

    console.log(response);
    
        
    if(!response.ok) throw new Error("Não autorizado.");
  } catch (error) {
    return apiError(error)
  }
  redirect("/login");
};