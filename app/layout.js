import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppinsBlack = localFont({
  src: "./fonts/Poppins-Black.ttf", // use relative path from *page.js*
  variable: "--font-poppins-black",
  display: "swap",
});

export const metadata = {
  title: "Linkly - Your URL shortener",
  description: "Linkly helps you shorten your URLs easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-purple-900`}
      >
                <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
