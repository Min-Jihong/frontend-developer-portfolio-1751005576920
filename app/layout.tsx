import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components/layout/Header";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { PageTransitionWrapper } from "@/components/layout/PageTransitionWrapper";

import { mockNavItems } from "@/lib/mock-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Developer Portfolio",
  description: "A dynamic and immersive portfolio website for a frontend developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <Header
          name="Your Name"
          jobTitle="Frontend Developer"
          navItems={mockNavItems}
        />
        <CustomCursor />
        <PageTransitionWrapper>
          {children}
        </PageTransitionWrapper>
      </body>
    </html>
  );
}