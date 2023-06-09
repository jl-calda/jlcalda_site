import { Merriweather_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import clsx from "clsx";

import AuthContext from "./_context/AuthContext";
import getCurrentUser from "./_actions/getCurrentUser";

import Navbar from "./(home)/_components/navbar/Navbar";
import Section from "./_components/Section";

import "./globals.css";
const merriweatherSans = Merriweather_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "JLCalda Site",
  description: "Portfolio site for Joey Calda",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  console.log(currentUser);
  return (
    <html lang="en">
      <body
        className={clsx(
          merriweatherSans.className,
          "bg-stone-50",
          "text-gray-600 min-h-[100vh] relative max-w-5xl mx-auto flex flex-col"
        )}
      >
        <AuthContext>
          <Toaster />
          <Navbar />
          <Section>{children}</Section>
        </AuthContext>
      </body>
    </html>
  );
}
// linear-gradient(to right, #0f2027, #203a43, #2c5364);
