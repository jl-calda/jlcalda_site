import Navbar from "./_components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-stone-50 h-full`}>
        <main className={`max-w-5xl mx-auto relative`}>
          <Navbar />
          <div className="h-[100vh] pt-32">{children}</div>
        </main>
      </body>
    </html>
  );
}
