import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple Static App",
  authors: [{ name: "Vladimir Haltakov", url: "https://haltakov.net" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
