import Navbar from "@/components/ui/navbar";
import "./globals.css";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Job Board",
  description: "Find your next opportunity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
