import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "\u00D1UMA | Invitaciones interactivas",

  description:
    "Invitaciones digitales interactivas para eventos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );

}