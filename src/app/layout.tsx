
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "../../styles/App.css"
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio-LMG",
  description: "Creado por Mariano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
         <body className={`${inter.className}`}>
        <Navbar/>
        {children}


        <Footer/>
      </body>
      
    </html>
    
    
  );
}
