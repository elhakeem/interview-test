import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import { Readex_Pro } from 'next/font/google'
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

const readexPro = Readex_Pro({
  subsets: ["arabic", "latin"],
  variable: "--font-readex-pro",
});

export const metadata: Metadata = {
  title: "Breadfast Ecommerce App",
  description: "Breadfast test ecommerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(readexPro.className, "bg-background text-foreground")}>
        <div className="min-h-[calc(100vh-89px)]">
          <CartProvider>
            {children}
          </CartProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
