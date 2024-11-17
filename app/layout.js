import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import "./css/card.css";
import "./css/globals.css";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jitender As a Founder of I Plus T Solution",
  description:
    "I Plus T Solution: Your Growth Partner for Start ups 🚀 Empowering fledgling businesses to thrive, we provide tailored solutions for sustainable growth. From strategic planning to cutting-edge technology implementation, we're dedicated to propelling your venture forward. Let's collaborate and transform your startup dreams into success stories together",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <base href="/"></base>
        <meta name="robots" content="index,follow"></meta>
        <meta name="googlebot" content="index,follow" />
        <meta name="google" content="sitelinkssearchbox" />
        <meta name="google" content="translate" />
        <link rel="canonical" href="/" />
        <link rel="icon" type="image/x-icon" href="https://www.blog.iplust.in/favicon.png" />
        <link href="https://www.blog.iplust.in/favicon.png" rel="shortcut icon"></link>
        <link href="https://www.blog.iplust.in/favicon.png" rel="apple-touch-icon-precomposed"></link>
        <link rel="icon" type="image/png" href="https://www.blog.iplust.in/favicon.png" sizes="32x32"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="https://www.blog.iplust.in/favicon.png" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen relative mx-auto px-3 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
      </body>
    </html>
  );
}
