import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Body, Header } from "./_components";

import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Afta",
  description: "Fullstack Web Developer",
};

const menuItemData = [
  { name: "ABOUT", url: "/" },
  { name: "PORTOFOLIO", url: "/portofolio" },
  { name: "CONTACT", url: "/contact" },
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
      <body className="relative bg-stone-800">
        <Header logo="Afta" item={menuItemData}></Header>
        <Body>{children}</Body>
      </body>
    </html>
  );
}
