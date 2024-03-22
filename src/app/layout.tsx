import type { Metadata } from "next";

import { type_second } from "@/functions/fonts";


import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social para cachorro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        <div className="App">
          <Header />
          <main className="AppBody">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
