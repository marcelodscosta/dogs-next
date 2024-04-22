import LoginResetForm from "@/components/LoginResetForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Resetar a senha | Dogs',
  description: 'Recupere a sua senha',
};

type SearchParamsProps = {
  searchParams: {
    key: string,
    login: string
  }
};

export default function ResetLogin({ searchParams: { key, login } }: SearchParamsProps) {

  return (
    <div className='animeLeft'>
      <h2 className="title">Resetar a senha?</h2>
      <LoginResetForm keyToken={key} login={login} />
    </div>
  );
};