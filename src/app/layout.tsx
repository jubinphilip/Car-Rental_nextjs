import type { Metadata } from "next";
import './globals.css'
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Mobfooter from "@/components/Footer/Mobfooter";


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
      
      <body>
      <Navbar/>
        {children}
        <Footer/>
        <Mobfooter/>
        </body>
        
    </html>
  );
}
