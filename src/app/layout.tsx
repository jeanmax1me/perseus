import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={dmSans.variable} lang="en">
      <body className="bg-[#070815] text-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
