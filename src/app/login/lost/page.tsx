import LoginLostForm from "@/components/LoginLostForm";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perdeu a senha | Dogs',
  description: 'Recupere a sua senha',
};

export default async function Lost() {
  return (
    <div className='animeLeft'>
      <h2 className="title">Perdeu a senha?</h2>
      <LoginLostForm />
    </div>

  );
};