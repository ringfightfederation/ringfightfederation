import { Teko, Inter } from "next/font/google";
import "./globals.css";

const teko = Teko({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: "International Ring Fight Federation",
  description: "Official website of the International Ring Fight Federation. Preserving Tradition, Elevating Combat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${teko.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}

