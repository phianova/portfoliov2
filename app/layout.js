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
    <html lang="en" className="scroll-smooth">
      <body className={`${josefin.className} text-colour-text`}>
        <Navigation></Navigation>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
