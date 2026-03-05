import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Msaxter | Saxofonist Profesionist - Iași",
  description: "Cosmin 'Msaxter' - Cel mai bun saxofonist din România. Evenimente corporate, nunți și club.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
