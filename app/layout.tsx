import type { Metadata } from "next";
import { Body, Header } from "./_components";
import localFont from "next/font/local";
import "./globals.css";

const victor = localFont({
  src: "_fonts/victor-mono-latin-wght-normal.woff2",
  style: "normal",
  preload: true,
  variable: "--font-victor",
});

const victorItalic = localFont({
  src: "_fonts/victor-mono-latin-wght-italic.woff2",
  style: "italic",
  preload: true,
  variable: "--font-victor-italic",
});

const playwrite = localFont({
  src: "_fonts/PlaywriteVN.woff2",
  style: "normal",
  preload: true,
  variable: "--font-playwrite",
});

export const metadata: Metadata = {
  title: "Afta",
  description: "Fullstack Web Developer",
};

const menuItemData = [
  { name: "About", url: "/about" },
  { name: "Portofolio", url: "/portofolio" },
  { name: "Contact", url: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${victor.variable} ${victorItalic.variable} ${playwrite.variable} relative bg-stone-800`}
      >
        <Header logo="Afta" item={menuItemData}></Header>
        <Body>{children}</Body>
      </body>
    </html>
  );
}
