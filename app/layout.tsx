import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multistep",
  description: "A multistep form for accepting user data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} flex justify-center content-center md:mt-[4%] font-["ubuntu"]`}>
        <main className="flex flex-col md:flex-row md:justify-center md:w-[60vw] md:h-full md:mx-[auto] md:mt-[4%] md:bg-white md:rounded-lg w-full">
        { children }
        </main>
      </body>
    </html>
  );
}
