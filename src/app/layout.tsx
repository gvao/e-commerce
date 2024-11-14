import type { Metadata } from "next";
import "./globals.css";
import { ChildrenProps } from "./types/ChildrenProps";

export const metadata: Metadata = {
  title: "E-commerce",
  description: "My store app",
};

export default function RootLayout({ children }: Readonly<ChildrenProps>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
