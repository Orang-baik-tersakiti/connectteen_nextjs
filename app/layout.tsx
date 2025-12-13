import type { Metadata } from "next";
import "./globals.css";
import { Zen_Maru_Gothic } from "next/font/google";

const zenMaru = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ConnectTeen Community",
  description: "A vibrant platform for teens to connect, share, and grow together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={zenMaru.className}>
        {children}
      </body>
    </html>
  );
}
