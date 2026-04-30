import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import localFont from "next/font/local";
import NextAuthProvider from "@/components/provider/NextAuthProvider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "600", "800"],
});

export const fontBangla = localFont({
  src: "../../src/fonts/mayaboti-normal.ttf",
});

export const metadata = {
  title: "Herokidz",
  description:
    "Discover a modern, fast, and intuitive platform designed to elevate your experience. Explore features, products, and seamless interactions.",

  metadataBase: new URL("https://hero-kidz-omega-seven.vercel.app"),

  openGraph: {
    title: "Hero kidz",
    description:
      "Explore a powerful and beautifully designed platform built for performance and simplicity.",
    url: "https://hero-kidz-omega-seven.vercel.app",
    siteName: "Your App",
    images: [
      {
        url: "https://i.ibb.co.com/WN7jqYMS/image.png", // homepage preview
        width: 1200,
        height: 630,
        alt: "Homepage Preview",
      },
      {
        url: "https://i.ibb.co.com/DDmzfyzL/image.png", // product page
        width: 1200,
        height: 630,
        alt: "Product Page Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Your App Name",
    description:
      "A modern platform with powerful features and a clean experience.",
    images: ["https://i.ibb.co.com/WN7jqYMS/image.png"],
  },

  icons: {
    icon: "https://i.ibb.co.com/mry3C4C7/image.png",
    apple: "https://i.ibb.co.com/mry3C4C7/image.png",
  },

  themeColor: "#0f172a",

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en" className={`${poppins.className}  antialiased`}>
        <body className="min-h-full flex flex-col">
          <header className="py-2 w-11/12 mx-auto">
            <Navbar />
          </header>
          <main className="py-2 w-11/12 mx-auto min-h-[calc(100vh-320px)]">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </NextAuthProvider>
  );
}
