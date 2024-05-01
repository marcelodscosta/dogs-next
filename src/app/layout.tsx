
import type { Metadata } from "next";

import { type_second } from "@/functions/fonts";


import userGet from "@/actions/userGet";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { UserContextProvider } from "@/context/user-context";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social para cachorro",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { data } = await userGet();
  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        <UserContextProvider
          user={data}>
          <div className="App">
            <Header />
            <main className="AppBody">
              {children}
            </main>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
