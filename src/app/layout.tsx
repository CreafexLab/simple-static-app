import type { Metadata } from "next";
import { LingoProvider, loadDictionary } from "lingo.dev/react/rsc";
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
    <LingoProvider loadDictionary={(locale) => loadDictionary(locale)}>
      <html lang="en">
        <head></head>
        <body className={"antialiased"}>{children}</body>
      </html>
    </LingoProvider>
  );
}
