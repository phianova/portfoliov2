import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Sophia Warren",
  description: "Developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navigation></Navigation>
      <body className={josefin.className}>{children}</body>
      <Footer></Footer>
    </html>
  );
}
