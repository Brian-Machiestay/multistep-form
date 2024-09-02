import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col md:flex-row md:justify-center md:w-[60vw] md:h-[80vh] md:mx-[auto] md:mt-[4%] md:bg-white md:rounded-lg lg:h-fit my-[auto]">
        { children }
        </main>
      </body>
    </html>
  );
}
