import type { Metadata } from "next";
import "./globals.css";

import { NextUiProvider, ThemeProvider, Nav, Footer } from "@/components";
import Inverset from "@/components/Inverst";

export const metadata: Metadata = {
  title: "AMD Drones",
  description:
    "At ADM Drones, we specialize in manufacturing cutting-edge drone frames designed for performance and durability. Our frames are crafted from premium carbon fiber, ensuring unmatched lightweight properties and robust strength—ideal for all your aerial needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextUiProvider>
            <Nav />
            <main className="flex px-4 py-2 flex-col gap-10 justify-center items-center bg-background">
              {children}
            </main>
            <Footer />
          </NextUiProvider>
        </ThemeProvider>
        <Inverset />
      </body>
    </html>
  );
}
