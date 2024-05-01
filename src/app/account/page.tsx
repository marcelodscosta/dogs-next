'use client'

import { useUserContext } from "@/hooks/useUserContext";


export default function Account() {

  const { user } = useUserContext()

  return (
    <h1>Conta: {user?.nome}</h1>
  );
}
