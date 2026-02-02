import {
  Google_Sans_Flex,
  Inter,
  Roboto,
  Roboto_Slab,
  Source_Sans_3,
} from "next/font/google";
import "./globals.css";

const googleSansFlex = Google_Sans_Flex({
  style: "normal",
  subsets: ["latin"],
  variable: "--font-google-sans-flex",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const SourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sourcesans3",
});

const robotoslab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-robotoslab",
});
export const metadata = {
  title: "Yoga and Meditation App",
  description: "A Next.js app for yoga and meditation enthusiasts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${googleSansFlex.variable}
        ${robotoslab.variable}
         ${inter.variable} ${roboto.variable} ${SourceSans3.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
