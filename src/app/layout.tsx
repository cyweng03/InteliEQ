"use client";

import NavContext from "./components/NavContext"; // create a simple context
import { Open_Sans, Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState } from "react";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [hideNav, setHideNav] = useState(false);

  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${raleway.variable} font-sans antialiased min-h-screen flex flex-col`}
        style={{ fontFamily: "var(--font-raleway)" }}
      >
        <NavBar />
        <NavContext.Provider value={{ hideNav, setHideNav }}>
          <main className="flex-grow">{children}</main>
        </NavContext.Provider>

        <Footer />
      </body>
    </html>
  );
}
