import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/header/page";
import Footer from "@/layouts/footer/page";


export const metadata: Metadata = {
  title: "Boiler",
  description: "Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
