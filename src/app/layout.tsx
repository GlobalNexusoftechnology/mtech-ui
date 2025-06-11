"use client"
// import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/header/page";
import Footer from "@/layouts/footer/page";
import { Provider } from 'react-redux'
import store from "@/store";


// export const metadata: Metadata = {
//   title: "Boiler",
//   description: "Template",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <Header />
          <Provider store={store}>
            {children}
          </Provider>
        <Footer />
      </body>
    </html>
  );
}
